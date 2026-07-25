"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const GREETING: Msg = {
  role: "assistant",
  content:
    "¡Hola! Soy el asistente de Plazma Ideas 👋 Puedo contarte sobre Alia, INSCHOOL o ayudarte a agendar una demo. ¿En qué te ayudo?",
};

const SUGGESTIONS = [
  "¿Qué es Alia?",
  "¿Qué hace INSCHOOL?",
  "Quiero una demo",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || loading) return;

    const next = [...messages, { role: "user" as const, content }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // No mandamos el saludo inicial (es de UI, no del modelo).
          messages: next.filter((m) => m !== GREETING),
        }),
      });
      const data = await res.json();
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            data?.reply ??
            "No pude responder ahora mismo. Intenta de nuevo, por favor.",
        },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "Hubo un problema de conexión. Vuelve a intentarlo en unos segundos.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Panel del chat */}
      <div
        className={`fixed bottom-24 right-4 z-[60] w-[calc(100vw-2rem)] max-w-sm origin-bottom-right transition-all duration-300 ease-out sm:right-6 ${
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none translate-y-3 scale-95 opacity-0"
        }`}
        role="dialog"
        aria-label="Asistente de Plazma Ideas"
        aria-hidden={!open}
      >
        <div className="flex h-[32rem] max-h-[75vh] flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl shadow-black/20 dark:border-zinc-800 dark:bg-zinc-950">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-zinc-200 bg-zinc-950 px-5 py-4 text-white dark:border-zinc-800">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold leading-tight">
                Asistente Plazma
              </p>
              <p className="text-xs text-zinc-400">Normalmente responde al instante</p>
            </div>
            <button
              type="button"
              aria-label="Cerrar chat"
              onClick={() => setOpen(false)}
              className="rounded-full p-1.5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mensajes */}
          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "rounded-br-sm bg-brand text-zinc-950"
                      : "rounded-bl-sm bg-zinc-100 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="flex gap-1 rounded-2xl rounded-bl-sm bg-zinc-100 px-4 py-3 dark:bg-zinc-900">
                  <Dot />
                  <Dot delay={150} />
                  <Dot delay={300} />
                </div>
              </div>
            )}

            {messages.length === 1 && !loading && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="rounded-full border border-zinc-300 px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:border-brand hover:text-brand-dark dark:hover:text-brand dark:border-zinc-700 dark:text-zinc-300"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-zinc-200 p-3 dark:border-zinc-800"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu pregunta..."
              className="flex-1 rounded-full border border-zinc-300 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand dark:border-zinc-700 dark:bg-zinc-900"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Enviar mensaje"
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand text-zinc-950 transition-all duration-300 hover:bg-brand-light disabled:opacity-50"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M3.4 20.4 21 12 3.4 3.6 3 10l12 2-12 2 .4 6.4Z" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Botón flotante */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Cerrar asistente" : "Abrir asistente"}
        aria-expanded={open}
        className="fixed bottom-6 right-4 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-brand text-zinc-950 shadow-xl shadow-brand/30 transition-all duration-300 hover:scale-105 hover:bg-brand-light sm:right-6 animate-glow"
      >
        <span
          className={`absolute transition-all duration-300 ${
            open ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
            <path d="M12 3c5 0 9 3.6 9 8s-4 8-9 8c-1 0-2-.15-2.9-.42L4 20l1.2-3.2C4.14 15.5 3 13.85 3 11 3 6.6 7 3 12 3Z" />
          </svg>
        </span>
        <span
          className={`absolute transition-all duration-300 ${
            open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            className="h-7 w-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </span>
      </button>
    </>
  );
}

function Dot({ delay = 0 }: { delay?: number }) {
  return (
    <span
      className="h-2 w-2 animate-bob rounded-full bg-zinc-400 dark:bg-zinc-500"
      style={{ animationDelay: `${delay}ms` }}
    />
  );
}
