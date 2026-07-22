import type { Metadata } from "next";
import DemoForm from "./demo-form";

export const metadata: Metadata = {
  title: "Registrar una demo",
  description:
    "Solicita una demo personalizada de las soluciones SaaS de Plazma Ideas.",
};

export default function DemoPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-20 pt-28 sm:px-6">
      <h1 className="text-4xl font-bold tracking-tight">Registrar una demo</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Completa el formulario y nuestro equipo se pondrá en contacto contigo
        para coordinar una demostración personalizada.
      </p>
      <div className="mt-10 rounded-2xl border border-zinc-200 p-6 sm:p-8 dark:border-zinc-800">
        <DemoForm />
      </div>
    </div>
  );
}
