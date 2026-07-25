import type { Metadata } from "next";
import LibroForm from "./libro-form";

export const metadata: Metadata = {
  title: "Libro de Reclamaciones",
  description:
    "Registra tu reclamo o queja en el Libro de Reclamaciones virtual de Plazma Ideas.",
};

export default function LibroReclamacionesPage() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand-dark dark:text-brand">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 5a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5Z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 3v6h6" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Libro de Reclamaciones
        </h1>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        Conforme al Código de Protección y Defensa del Consumidor (Ley N.º
        29571), Plazma Ideas pone a tu disposición este Libro de Reclamaciones
        virtual. Completa el formulario y recibirás un código de seguimiento. Te
        responderemos dentro del plazo máximo de 15 días hábiles.
      </p>

      <div className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-xs leading-relaxed text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900">
        <strong className="text-zinc-700 dark:text-zinc-300">Reclamo:</strong>{" "}
        disconformidad relacionada con el producto o servicio.{" "}
        <strong className="text-zinc-700 dark:text-zinc-300">Queja:</strong>{" "}
        malestar respecto a la atención al cliente. La presentación de un reclamo
        no impide acudir a otras vías de solución de controversias.
      </div>

      <div className="mt-8 rounded-2xl border border-zinc-200 p-6 sm:p-8 dark:border-zinc-800">
        <LibroForm />
      </div>
    </div>
  );
}
