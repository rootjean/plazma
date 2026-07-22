import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce a Plazma Ideas, tu solucionadora de tecnología.",
};

export default function NosotrosPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 pb-20 pt-28 sm:px-6">
      <h1 className="text-4xl font-bold tracking-tight">Nosotros</h1>
      <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
        Plazma Ideas nació con una misión clara: ser una{" "}
        <strong className="text-zinc-900 dark:text-zinc-100">
          solucionadora de tecnología
        </strong>
        . No vendemos software genérico; entendemos los problemas de cada
        negocio y los resolvemos con aplicaciones SaaS diseñadas para generar
        resultados.
      </p>
      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
          <h2 className="text-xl font-semibold">Misión</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Impulsar la transformación digital de las empresas con soluciones
            tecnológicas accesibles, confiables y fáciles de usar.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
          <h2 className="text-xl font-semibold">Visión</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Ser la solucionadora de tecnología de referencia en la región,
            reconocida por la calidad de sus productos SaaS.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold">Nuestros valores</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            "Innovación constante",
            "Compromiso con el cliente",
            "Transparencia",
            "Calidad en cada entrega",
          ].map((v) => (
            <li
              key={v}
              className="rounded-xl bg-zinc-100 px-4 py-3 text-sm font-medium dark:bg-zinc-900"
            >
              {v}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
