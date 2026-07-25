"use client";

import { useActionState } from "react";
import { registrarReclamo, type ReclamoState } from "./actions";

const initialState: ReclamoState = { success: false, message: "" };

const inputClass =
  "w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand dark:border-zinc-700 dark:bg-zinc-900";
const labelClass = "mb-1.5 block text-sm font-medium";

export default function LibroForm() {
  const [state, formAction, pending] = useActionState(
    registrarReclamo,
    initialState
  );

  if (state.success) {
    return (
      <div className="rounded-2xl border border-emerald-300 bg-emerald-50 p-8 text-center dark:border-emerald-800 dark:bg-emerald-950">
        <p className="text-lg font-semibold text-emerald-700 dark:text-emerald-300">
          ✅ Registro recibido
        </p>
        {state.codigo && (
          <p className="mt-2 text-sm text-emerald-700 dark:text-emerald-300">
            Código de seguimiento:{" "}
            <span className="font-mono font-semibold">{state.codigo}</span>
          </p>
        )}
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
          <label htmlFor="nombre" className={labelClass}>
            Nombre completo *
          </label>
          <input id="nombre" name="nombre" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="documento" className={labelClass}>
            DNI / documento *
          </label>
          <input
            id="documento"
            name="documento"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
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
          <label htmlFor="telefono" className={labelClass}>
            Teléfono
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="tipo" className={labelClass}>
            Tipo de solicitud *
          </label>
          <select id="tipo" name="tipo" required className={inputClass}>
            <option value="">Selecciona una opción</option>
            <option value="reclamo">
              Reclamo (disconformidad con el producto o servicio)
            </option>
            <option value="queja">
              Queja (malestar por la atención recibida)
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="producto" className={labelClass}>
            Producto o servicio
          </label>
          <select id="producto" name="producto" className={inputClass}>
            <option value="">Selecciona una opción</option>
            <option value="alia">Alia</option>
            <option value="inschool">INSCHOOL</option>
            <option value="otro">Otro</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="detalle" className={labelClass}>
          Detalle de la reclamación *
        </label>
        <textarea
          id="detalle"
          name="detalle"
          rows={4}
          required
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="pedido" className={labelClass}>
          ¿Qué solución esperas?
        </label>
        <textarea id="pedido" name="pedido" rows={3} className={inputClass} />
      </div>

      {state.message && !state.success && (
        <p className="text-sm font-medium text-red-500">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-brand px-8 py-3 font-semibold text-zinc-950 transition-colors hover:bg-brand-light disabled:opacity-60"
      >
        {pending ? "Enviando..." : "Enviar registro"}
      </button>
    </form>
  );
}
