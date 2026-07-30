import Image from "next/image";
import Link from "next/link";
import portada from "@/public/portada.png";
import portadaClara from "@/public/portada-clara.png";
import ProductCards from "./components/product-cards";
import Reveal from "./components/reveal";
import Intro from "./components/intro";
import { products } from "./lib/products";

const stats = [
  { value: "24/7", label: "Atención automática sin descanso" },
  { value: "100%", label: "En la nube, listo para usar" },
  { value: "WhatsApp", label: "Business API oficial integrada" },
  { value: "0", label: "Líneas de código para configurarlo" },
];

const diferenciadores = [
  {
    title: "Software que resuelve",
    desc: "No vendemos plantillas genéricas. Cada plataforma nace de un problema real de tu operación y lo resuelve de raíz.",
  },
  {
    title: "Automatización con IA",
    desc: "Ponemos inteligencia artificial a trabajar por ti: responde, ordena y da seguimiento mientras te enfocas en crecer.",
  },
  {
    title: "Implementación acompañada",
    desc: "Te llevamos de la mano desde el primer día: configuración, capacitación y soporte continuo cuando lo necesites.",
  },
];

const proceso = [
  {
    step: "01",
    title: "Diagnóstico",
    desc: "Analizamos tu operación actual y detectamos los puntos de mejora.",
  },
  {
    step: "02",
    title: "Configuración",
    desc: "Adaptamos la plataforma a tus procesos, usuarios y flujos reales.",
  },
  {
    step: "03",
    title: "Capacitación",
    desc: "Entrenamos a tu equipo para que aproveche la herramienta desde el día uno.",
  },
  {
    step: "04",
    title: "Acompañamiento",
    desc: "Soporte continuo y mejoras conforme crece tu negocio.",
  },
];

function Check() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-dark dark:text-brand"
    >
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.3 3.3 6.8-6.8a1 1 0 0 1 1.4 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Intro />

      {/* ---------- Portada a pantalla completa ---------- */}
      <section className="relative flex min-h-screen w-full overflow-hidden">
        {/* Portada oscura (modo oscuro) */}
        <Image
          src={portada}
          alt="Equipo de Plazma Ideas trabajando"
          fill
          priority
          placeholder="blur"
          className="hidden object-cover dark:block"
        />
        {/* Portada clara (modo claro) */}
        <Image
          src={portadaClara}
          alt="Equipo de Plazma Ideas trabajando"
          fill
          priority
          placeholder="blur"
          className="block object-cover dark:hidden"
        />
        {/* Scrim: claro sobre la izquierda en modo claro; oscuro en modo oscuro */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/45 to-white/5 dark:hidden" />
        <div className="absolute inset-0 hidden bg-gradient-to-b from-zinc-950/70 via-zinc-950/50 to-zinc-950/80 dark:block" />
        {/* halos animados de fondo */}
        <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl animate-float-slow" />
        <div className="pointer-events-none absolute bottom-10 right-10 h-64 w-64 rounded-full bg-brand/10 blur-3xl animate-float" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center gap-5 px-6 pb-16 pt-28 text-zinc-900 dark:text-white lg:flex-row lg:items-end lg:justify-between lg:pb-24">
          <div className="max-w-xl text-left lg:self-center">
            <h1
              className="text-4xl font-bold tracking-tight sm:text-7xl animate-fade-up"
              style={{ animationDelay: "80ms" }}
            >
              Soluciones tecnológicas para hacer{" "}
              <span className="text-gradient-brand">crecer tu negocio</span>
            </h1>
            <p
              className="mt-6 text-lg text-zinc-700 sm:text-xl animate-fade-up dark:text-zinc-200"
              style={{ animationDelay: "240ms" }}
            >
              En Plazma Ideas creamos aplicaciones SaaS que resuelven los retos
              reales de tu empresa, con inteligencia artificial trabajando de tu
              lado.
            </p>
            <div
              className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-up"
              style={{ animationDelay: "400ms" }}
            >
              <Link
                href="/demo"
                className="rounded-full bg-brand px-8 py-3 text-center font-semibold text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-light hover:shadow-lg hover:shadow-brand/30"
              >
                Registrar una demo
              </Link>
              <Link
                href="/soluciones"
                className="rounded-full border border-zinc-400 px-8 py-3 text-center font-semibold text-zinc-800 transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-900/5 dark:border-white/40 dark:text-white dark:hover:bg-white/10"
              >
                Ver soluciones
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-[52%]">
            <ProductCards />
          </div>
        </div>
      </section>

      {/* ---------- Franja de estadísticas ---------- */}
      <section className="border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              from="up"
              delay={i * 90}
              className="text-center"
            >
              <p className="text-3xl font-extrabold tracking-tight text-brand-dark dark:text-brand sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Productos en detalle ---------- */}
      <section className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Nuestros productos
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Plataformas SaaS listas para trabajar por ti desde el primer día.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-24">
          {products.map((p, i) => (
            <div
              key={p.id}
              className="grid items-center gap-10 lg:grid-cols-2"
            >
              {/* Texto */}
              <Reveal
                from={i % 2 === 0 ? "left" : "right"}
                className={i % 2 === 0 ? "lg:order-1" : "lg:order-2"}
              >
                <p className="text-sm font-semibold text-brand-dark dark:text-brand">
                  {p.audience}
                </p>
                <h3 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-5xl">
                  {p.title}
                </h3>
                <p className="mt-2 text-xl font-semibold text-zinc-700 dark:text-zinc-300">
                  {p.tagline}
                </p>
                <p className="mt-5 text-zinc-600 dark:text-zinc-400">
                  {p.landing}
                </p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {p.features.map((f) => (
                    <span
                      key={f}
                      className="inline-flex items-center gap-1.5 rounded-full border border-brand/40 bg-brand/10 px-3.5 py-1.5 text-sm text-zinc-700 dark:text-zinc-200"
                    >
                      <Check />
                      {f}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/demo"
                    className="inline-block rounded-full bg-brand px-7 py-3 font-semibold text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-light hover:shadow-lg hover:shadow-brand/30"
                  >
                    Ver {p.title} en acción
                  </Link>
                  {p.loginUrl && (
                    <a
                      href={p.loginUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-zinc-400 px-7 py-3 font-semibold text-zinc-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white dark:border-zinc-600 dark:text-zinc-200 dark:hover:border-white dark:hover:bg-white dark:hover:text-zinc-900"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"
                        />
                      </svg>
                      Ingresar a {p.title}
                    </a>
                  )}
                </div>
              </Reveal>

              {/* Grilla de características */}
              <Reveal
                from={i % 2 === 0 ? "right" : "left"}
                delay={120}
                className={i % 2 === 0 ? "lg:order-2" : "lg:order-1"}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  {p.highlights.map((h, j) => (
                    <div
                      key={h.title}
                      className="card-lift rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/50"
                      style={{ animationDelay: `${j * 60}ms` }}
                    >
                      <p className="font-semibold">{h.title}</p>
                      <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400">
                        {h.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Por qué Plazma ---------- */}
      <section className="bg-zinc-50 py-24 dark:bg-zinc-900/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Por qué elegir Plazma Ideas
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              Somos una solucionadora de tecnología, no una fábrica de software
              genérico.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {diferenciadores.map((d, i) => (
              <Reveal key={d.title} from="up" delay={i * 110}>
                <div className="card-lift h-full rounded-2xl border border-zinc-200 bg-white p-7 dark:border-zinc-800 dark:bg-zinc-950">
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{d.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {d.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Proceso ---------- */}
      <section className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Cómo trabajamos contigo
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Un camino claro para llevar tu operación al siguiente nivel.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {proceso.map((p, i) => (
            <Reveal key={p.step} from="up" delay={i * 100}>
              <div className="card-lift relative h-full overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
                <span className="text-5xl font-black text-brand/25">
                  {p.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- CTA final ---------- */}
      <section className="relative overflow-hidden bg-zinc-950 py-24 text-center text-white">
        <div className="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full bg-brand/20 blur-3xl animate-float-slow" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-brand/10 blur-3xl animate-float" />
        <Reveal className="relative mx-auto max-w-2xl px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            ¿Quieres verlo funcionando?
          </h2>
          <p className="mt-4 text-zinc-300">
            Agenda una demo personalizada y descubre cómo nuestras aplicaciones
            SaaS se adaptan a tu empresa.
          </p>
          <Link
            href="/demo"
            className="mt-9 inline-block rounded-full bg-brand px-9 py-3.5 font-semibold text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-light hover:shadow-xl hover:shadow-brand/30 animate-glow"
          >
            Registrar una demo
          </Link>
        </Reveal>
      </section>
    </>
  );
}
