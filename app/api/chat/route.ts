import { COMPANY_SYSTEM_PROMPT } from "@/app/lib/company-context";
import { pruneExpired, rateLimit } from "@/app/lib/rate-limit";

/** Endpoint y modelo de Groq (compatible con la API de OpenAI). */
const GROQ_URL = "https://api.groq.com/openai/v1/responses";
const GROQ_MODEL = "openai/gpt-oss-20b";

/** Límite: 15 mensajes por minuto por IP. */
const RATE_LIMIT = 15;
const RATE_WINDOW_MS = 60_000;

type ChatMessage = { role: "user" | "assistant"; content: string };

function clientIp(request: Request): string {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

export async function POST(request: Request) {
  const apiKey = process.env.GROQ_API_KEY;

  // Protección contra abuso: límite por IP.
  const now = Date.now();
  pruneExpired(now);
  const limit = rateLimit(clientIp(request), RATE_LIMIT, RATE_WINDOW_MS, now);
  if (!limit.ok) {
    return Response.json(
      {
        reply:
          "Estás enviando mensajes muy rápido. Espera un momento y vuelve a intentarlo.",
      },
      {
        status: 429,
        headers: { "Retry-After": String(limit.retryAfter) },
      }
    );
  }

  // Sin API key configurada: respondemos de forma controlada (no rompemos la UI).
  if (!apiKey) {
    return Response.json(
      {
        reply:
          "El asistente aún no está activado. Configura la variable GROQ_API_KEY en el entorno para habilitarlo. Mientras tanto, escríbenos a contacto@plazmaideas.com.",
      },
      { status: 200 }
    );
  }

  let messages: ChatMessage[] = [];
  try {
    const body = await request.json();
    if (Array.isArray(body?.messages)) messages = body.messages;
  } catch {
    return Response.json({ error: "Cuerpo inválido." }, { status: 400 });
  }

  // Saneamos: solo roles válidos, texto acotado y las últimas 12 intervenciones.
  const cleaned = messages
    .filter(
      (m) =>
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0
    )
    .slice(-12)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }));

  if (cleaned.length === 0) {
    return Response.json({ error: "Sin mensajes." }, { status: 400 });
  }

  try {
    const res = await fetch(GROQ_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        instructions: COMPANY_SYSTEM_PROMPT,
        input: cleaned,
        temperature: 0.4,
        max_output_tokens: 600,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("Groq error:", res.status, detail);
      return Response.json(
        {
          reply:
            "Ahora mismo no puedo responder. Vuelve a intentarlo en un momento o escríbenos a contacto@plazmaideas.com.",
        },
        { status: 200 }
      );
    }

    const data = await res.json();
    const reply = extractText(data);

    return Response.json({
      reply:
        reply ||
        "No pude generar una respuesta. ¿Podrías reformular tu pregunta?",
    });
  } catch (err) {
    console.error("Chat route error:", err);
    return Response.json(
      {
        reply:
          "Ocurrió un problema de conexión. Inténtalo de nuevo en unos segundos.",
      },
      { status: 200 }
    );
  }
}

/** Extrae el texto de la respuesta de la API de Responses de forma robusta. */
function extractText(data: unknown): string {
  if (!data || typeof data !== "object") return "";
  const d = data as Record<string, unknown>;

  // 1) Campo de conveniencia output_text.
  if (typeof d.output_text === "string" && d.output_text.trim()) {
    return d.output_text.trim();
  }

  // 2) Recorremos output[].content[] tomando solo los fragmentos de texto.
  const output = d.output;
  if (Array.isArray(output)) {
    const parts: string[] = [];
    for (const item of output) {
      const content = (item as Record<string, unknown>)?.content;
      if (Array.isArray(content)) {
        for (const c of content) {
          const cc = c as Record<string, unknown>;
          if (
            (cc.type === "output_text" || cc.type === "text") &&
            typeof cc.text === "string"
          ) {
            parts.push(cc.text);
          }
        }
      }
    }
    if (parts.length) return parts.join("\n").trim();
  }

  return "";
}
