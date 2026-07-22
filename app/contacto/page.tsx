import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Ponte en contacto con el equipo de Plazma Ideas.",
};

export default function ContactoPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 pb-20 pt-28 sm:px-6">
      <h1 className="text-4xl font-bold tracking-tight">Contacto</h1>
      <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
        ¿Tienes una consulta o un proyecto en mente? Escríbenos y te
        responderemos a la brevedad.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
          <h2 className="font-semibold">Correo</h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            contacto@plazmaideas.com
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
          <h2 className="font-semibold">Ubicación</h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Huancayo, Perú
          </p>
        </div>
      </div>
      <div className="mt-12 rounded-2xl bg-zinc-950 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">¿Prefieres ver el producto?</h2>
        <p className="mt-2 text-zinc-300">
          Registra una demo y te mostramos nuestras soluciones en vivo.
        </p>
        <Link
          href="/demo"
          className="mt-6 inline-block rounded-full bg-brand px-8 py-3 font-semibold text-zinc-950 transition-colors hover:bg-brand-light"
        >
          Registrar una demo
        </Link>
      </div>
    </div>
  );
}
