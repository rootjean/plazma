import type { Metadata } from "next";
import Reveal from "../components/reveal";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce a Plazma Ideas, tu solucionadora de tecnología.",
};

const valores = [
  {
    title: "Innovación constante",
    desc: "Exploramos y adoptamos tecnología de punta para que tu negocio siempre vaya un paso adelante.",
  },
  {
    title: "Compromiso con el cliente",
    desc: "Tu resultado es nuestra meta. Acompañamos cada implementación hasta que funcione de verdad.",
  },
  {
    title: "Transparencia",
    desc: "Hablamos claro: sin letra pequeña ni promesas que no podamos cumplir.",
  },
  {
    title: "Calidad en cada entrega",
    desc: "Cuidamos cada detalle de nuestros productos, porque de ellos depende tu operación diaria.",
  },
];

export default function NosotrosPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 pb-24 pt-32 sm:px-6">
      <Reveal>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Nosotros
        </h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
          Plazma Ideas nació con una misión clara: ser una{" "}
          <strong className="text-zinc-900 dark:text-zinc-100">
            solucionadora de tecnología
          </strong>
          . No vendemos software genérico; entendemos los problemas de cada
          negocio y los resolvemos con aplicaciones SaaS diseñadas para generar
          resultados.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        <Reveal from="left">
          <div className="card-lift h-full rounded-2xl border border-zinc-200 p-7 dark:border-zinc-800">
            <h2 className="text-xl font-semibold">Misión</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Impulsar la transformación digital de las empresas con soluciones
              tecnológicas accesibles, confiables y fáciles de usar.
            </p>
          </div>
        </Reveal>
        <Reveal from="right" delay={100}>
          <div className="card-lift h-full rounded-2xl border border-zinc-200 p-7 dark:border-zinc-800">
            <h2 className="text-xl font-semibold">Visión</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Ser la solucionadora de tecnología de referencia en la región,
              reconocida por la calidad de sus productos SaaS.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight">Nuestros valores</h2>
      </Reveal>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {valores.map((v, i) => (
          <Reveal key={v.title} from="up" delay={i * 90}>
            <div className="card-lift h-full rounded-2xl bg-zinc-100 p-6 dark:bg-zinc-900">
              <h3 className="font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {v.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
