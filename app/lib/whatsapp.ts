/** Número de WhatsApp de contacto de Plazma Ideas (formato internacional, sin +). */
export const WHATSAPP_NUMBER = "51929549895";

/** Construye un enlace wa.me con un mensaje predeterminado. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Une líneas descartando las vacías/nulas. */
export function buildMessage(lines: (string | false | null | undefined)[]): string {
  return lines.filter(Boolean).join("\n");
}
