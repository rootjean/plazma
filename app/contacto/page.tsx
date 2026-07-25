import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/reveal";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Ponte en contacto con el equipo de Plazma Ideas.",
};

export default function ContactoPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 pb-24 pt-32 sm:px-6">
      <Reveal className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Contacto
        </h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          ¿Tienes una consulta o un proyecto en mente? Escríbenos y te
          responderemos a la brevedad.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        <Reveal from="up">
          <div className="card-lift h-full rounded-2xl border border-zinc-200 p-7 dark:border-zinc-800">
            <h2 className="font-semibold">Correo</h2>
            <a
              href="mailto:contacto@plazmaideas.com"
              className="mt-1 block text-sm text-zinc-600 transition-colors hover:text-brand-dark dark:hover:text-brand dark:text-zinc-400"
            >
              contacto@plazmaideas.com
            </a>
          </div>
        </Reveal>
        <Reveal from="up" delay={100}>
          <div className="card-lift h-full rounded-2xl border border-zinc-200 p-7 dark:border-zinc-800">
            <h2 className="font-semibold">WhatsApp</h2>
            <a
              href="https://wa.me/51929549895"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-1.5 text-sm text-zinc-600 transition-colors hover:text-brand-dark dark:hover:text-brand dark:text-zinc-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1-1.4-1-2.6 0-1.2.6-1.8.9-2.1.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .5l-.4.6c-.1.2-.3.3-.1.6.1.3.7 1.1 1.4 1.7.9.8 1.7 1 2 1.2.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.2.1.4.2.5.3.1.3.1.7-.1 1.1Z" />
              </svg>
              +51 929 549 895
            </a>
          </div>
        </Reveal>
        <Reveal from="up" delay={200}>
          <div className="card-lift h-full rounded-2xl border border-zinc-200 p-7 dark:border-zinc-800">
            <h2 className="font-semibold">Ubicación</h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Huancayo, Perú
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-12">
        <div className="relative overflow-hidden rounded-3xl bg-zinc-950 p-9 text-center text-white">
          <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-brand/20 blur-3xl animate-float-slow" />
          <h2 className="relative text-2xl font-bold">
            ¿Prefieres ver el producto?
          </h2>
          <p className="relative mt-2 text-zinc-300">
            Registra una demo y te mostramos nuestras soluciones en vivo.
          </p>
          <Link
            href="/demo"
            className="relative mt-7 inline-block rounded-full bg-brand px-8 py-3 font-semibold text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-light hover:shadow-lg hover:shadow-brand/30"
          >
            Registrar una demo
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
