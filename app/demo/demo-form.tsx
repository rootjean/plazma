"use client";

import { useActionState } from "react";
import { registrarDemo, type DemoFormState } from "./actions";

const initialState: DemoFormState = { success: false, message: "" };

const inputClass =
  "w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand dark:border-zinc-700 dark:bg-zinc-900";

export default function DemoForm() {
  const [state, formAction, pending] = useActionState(
    registrarDemo,
    initialState
  );

  if (state.success) {
    return (
      <div className="rounded-2xl border border-emerald-300 bg-emerald-50 p-8 text-center dark:border-emerald-800 dark:bg-emerald-950">
        <p className="text-lg font-semibold text-emerald-700 dark:text-emerald-300">
          ✅ Solicitud registrada
        </p>
        <p className="mt-2 text-sm text-emerald-700 dark:text-emerald-300">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
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

      {state.message && !state.success && (
        <p className="text-sm font-medium text-red-500">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-brand px-8 py-3 font-semibold text-zinc-950 transition-colors hover:bg-brand-light disabled:opacity-60"
      >
        {pending ? "Enviando..." : "Registrar demo"}
      </button>
    </form>
  );
}
