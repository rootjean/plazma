import Image from "next/image";
import Link from "next/link";
import portada from "@/public/portada.png";
import ProductCards from "./components/product-cards";

const soluciones = [
  {
    title: "Gestión empresarial",
    desc: "Plataformas SaaS para administrar ventas, inventario y facturación desde un solo lugar.",
  },
  {
    title: "Automatización de procesos",
    desc: "Digitaliza flujos de trabajo repetitivos y reduce costos operativos de tu empresa.",
  },
  {
    title: "Analítica de datos",
    desc: "Dashboards e indicadores en tiempo real para tomar decisiones con información confiable.",
  },
];

export default function Home() {
  return (
    <>
      {/* Portada a pantalla completa */}
      <section className="relative flex min-h-screen w-full">
        <Image
          src={portada}
          alt="Equipo de Plazma Ideas trabajando"
          fill
          priority
          placeholder="blur"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-zinc-950/50" />
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center gap-5 px-6 pb-16 pt-28 text-white lg:flex-row lg:items-end lg:justify-between lg:pb-24">
          {/* Texto principal, apegado a la izquierda */}
          <div className="max-w-xl text-left lg:self-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-7xl">
              Soluciones tecnológicas para hacer crecer tu negocio
            </h1>
            <p className="mt-6 text-lg text-zinc-200 sm:text-xl">
              En Plazma Ideas creamos aplicaciones que
              resuelven los retos reales de tu empresa.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/demo"
                className="rounded-full bg-brand px-8 py-3 text-center font-semibold text-zinc-950 transition-colors hover:bg-brand-light"
              >
                Registrar una demo
              </Link>
              <Link
                href="/soluciones"
                className="rounded-full border border-white/40 px-8 py-3 text-center font-semibold text-white transition-colors hover:bg-white/10"
              >
                Ver soluciones
              </Link>
            </div>
          </div>

          {/* Slider de productos, abajo a la derecha */}
          <div className="w-full lg:w-[52%]">
            <ProductCards />
          </div>
        </div>
      </section>

      {/* Soluciones destacadas */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          Nuestras soluciones
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-zinc-600 dark:text-zinc-400">
          Software como servicio, listo para usar y adaptado a tu operación.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {soluciones.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-zinc-200 p-6 transition-shadow hover:shadow-lg dark:border-zinc-800"
            >
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/soluciones"
            className="font-medium text-brand hover:text-brand-light"
          >
            Ver todas las soluciones →
          </Link>
        </div>
      </section>

      {/* CTA demo */}
      <section className="bg-zinc-950 py-20 text-center text-white">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-3xl font-bold tracking-tight">
            ¿Quieres verlo en acción?
          </h2>
          <p className="mt-4 text-zinc-300">
            Agenda una demo personalizada y descubre cómo nuestras aplicaciones
            SaaS se adaptan a tu empresa.
          </p>
          <Link
            href="/demo"
            className="mt-8 inline-block rounded-full bg-brand px-8 py-3 font-semibold text-zinc-950 transition-colors hover:bg-brand-light"
          >
            Registrar una demo
          </Link>
        </div>
      </section>
    </>
  );
}
