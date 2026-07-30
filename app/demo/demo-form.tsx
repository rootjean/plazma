"use client";

import { useState, type FormEvent } from "react";
import { buildMessage, whatsappLink } from "@/app/lib/whatsapp";

const inputClass =
  "w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand dark:border-zinc-700 dark:bg-zinc-900";

const SOLUCIONES: Record<string, string> = {
  "gestion-empresarial": "Gestión empresarial",
  automatizacion: "Automatización de procesos",
  analitica: "Analítica de datos",
  crm: "CRM y ventas",
  talento: "Gestión de talento",
  "a-medida": "Solución a medida",
  alia: "Alia",
  inschool: "INSCHOOL",
};

export default function DemoForm() {
  const [link, setLink] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const g = (k: string) => String(fd.get(k) ?? "").trim();

    const solucion = g("solucion");
    const message = buildMessage([
      "¡Hola Plazma Ideas! 👋 Quiero registrar una *demo*.",
      "",
      `*Nombre:* ${g("nombre")}`,
      `*Empresa:* ${g("empresa")}`,
      `*Correo:* ${g("email")}`,
      g("telefono") && `*Teléfono:* ${g("telefono")}`,
      `*Solución de interés:* ${SOLUCIONES[solucion] ?? solucion}`,
      g("mensaje") && `*Mensaje:* ${g("mensaje")}`,
    ]);

    const url = whatsappLink(message);
    setLink(url);
    // Se dispara dentro del gesto del usuario, así que el navegador lo permite.
    window.open(url, "_blank", "noopener,noreferrer");
  }

  if (link) {
    return (
      <div className="rounded-2xl border border-emerald-300 bg-emerald-50 p-8 text-center dark:border-emerald-800 dark:bg-emerald-950">
        <p className="text-lg font-semibold text-emerald-700 dark:text-emerald-300">
          ✅ Te llevamos a WhatsApp
        </p>
        <p className="mt-2 text-sm text-emerald-700 dark:text-emerald-300">
          Se abrió WhatsApp con tu solicitud lista para enviar. Si no se abrió
          automáticamente, usa el botón:
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block rounded-full bg-brand px-7 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-brand-light"
        >
          Abrir WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className="mb-1.5 block text-sm font-medium">
            Nombre completo *
          </label>
          <input id="nombre" name="nombre" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="empresa" className="mb-1.5 block text-sm font-medium">
            Empresa *
          </label>
          <input id="empresa" name="empresa" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Correo electrónico *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="telefono" className="mb-1.5 block text-sm font-medium">
            Teléfono
          </label>
          <input id="telefono" name="telefono" type="tel" className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="solucion" className="mb-1.5 block text-sm font-medium">
          Solución de interés *
        </label>
        <select id="solucion" name="solucion" required className={inputClass}>
          <option value="">Selecciona una opción</option>
          <option value="alia">Alia</option>
          <option value="inschool">INSCHOOL</option>
          <option value="gestion-empresarial">Gestión empresarial</option>
          <option value="automatizacion">Automatización de procesos</option>
          <option value="analitica">Analítica de datos</option>
          <option value="crm">CRM y ventas</option>
          <option value="talento">Gestión de talento</option>
          <option value="a-medida">Solución a medida</option>
        </select>
      </div>
      <div>
        <label htmlFor="mensaje" className="mb-1.5 block text-sm font-medium">
          Cuéntanos sobre tu necesidad
        </label>
        <textarea id="mensaje" name="mensaje" rows={4} className={inputClass} />
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-brand px-8 py-3 font-semibold text-zinc-950 transition-colors hover:bg-brand-light"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1-1.4-1-2.6 0-1.2.6-1.8.9-2.1.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .5l-.4.6c-.1.2-.3.3-.1.6.1.3.7 1.1 1.4 1.7.9.8 1.7 1 2 1.2.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.2.1.4.2.5.3.1.3.1.7-.1 1.1Z" />
        </svg>
        Enviar por WhatsApp
      </button>
      <p className="text-center text-xs text-zinc-500">
        Se abrirá WhatsApp con tu solicitud lista para enviar.
      </p>
    </form>
  );
}
