import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/reveal";
import { products } from "../lib/products";

export const metadata: Metadata = {
  title: "Soluciones",
  description:
    "Aplicaciones SaaS de Plazma Ideas: Alia (agentes de IA por WhatsApp) e INSCHOOL (gestión escolar con QR).",
};

export default function SolucionesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-24 pt-32 sm:px-6">
      <Reveal className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Soluciones
        </h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Somos una solucionadora de tecnología: cada producto es una aplicación
          SaaS lista para integrarse a tu operación y crecer contigo.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {products.map((p, i) => (
          <Reveal key={p.id} from="up" delay={i * 110}>
            <div className="card-lift flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
              <p className="text-sm font-semibold text-brand-dark dark:text-brand">
                {p.audience}
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
                {p.title}
              </h2>
              <p className="mt-1 text-lg font-semibold text-zinc-700 dark:text-zinc-300">
                {p.tagline}
              </p>
              <p className="mt-4 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
                {p.landing}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.features.map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
                  >
                    {f}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-2.5">
                <Link
                  href="/demo"
                  className="inline-block w-fit rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-light"
                >
                  Solicitar demo →
                </Link>
                {p.loginUrl && (
                  <a
                    href={p.loginUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-fit rounded-full border border-zinc-400 px-6 py-2.5 text-sm font-semibold text-zinc-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white dark:border-zinc-600 dark:text-zinc-200 dark:hover:border-white dark:hover:bg-white dark:hover:text-zinc-900"
                  >
                    Ingresar →
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}

        {/* Solución a medida — placeholder para el crecimiento del catálogo */}
        <Reveal from="up" delay={products.length * 110} className="md:col-span-2">
          <div className="card-lift flex flex-col items-start gap-4 rounded-3xl border border-dashed border-brand/50 bg-brand/5 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                ¿Tu reto no encaja en una categoría?
              </h2>
              <p className="mt-2 max-w-xl text-sm text-zinc-600 dark:text-zinc-400">
                Nuestro catálogo sigue creciendo. Diseñamos la aplicación SaaS a
                la medida de lo que tu negocio necesita.
              </p>
            </div>
            <Link
              href="/contacto"
              className="inline-block flex-shrink-0 rounded-full border border-zinc-900 px-6 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-900 hover:text-white dark:border-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-zinc-900"
            >
              Conversemos
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
