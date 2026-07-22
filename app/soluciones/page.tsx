import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Soluciones",
  description:
    "Aplicaciones SaaS de Plazma Ideas: gestión empresarial, automatización, analítica y más.",
};

const soluciones = [
  {
    title: "Gestión empresarial",
    desc: "ERP en la nube para administrar ventas, compras, inventario y facturación electrónica desde un solo panel.",
  },
  {
    title: "Automatización de procesos",
    desc: "Flujos de trabajo digitales que eliminan tareas manuales y reducen errores operativos.",
  },
  {
    title: "Analítica de datos",
    desc: "Dashboards e indicadores en tiempo real para decisiones basadas en datos.",
  },
  {
    title: "CRM y ventas",
    desc: "Seguimiento de clientes, embudos de venta y campañas en una sola plataforma.",
  },
  {
    title: "Gestión de talento",
    desc: "Control de asistencia, planillas y evaluación de desempeño para tu equipo.",
  },
  {
    title: "Soluciones a medida",
    desc: "¿Tu reto no encaja en una categoría? Diseñamos la aplicación SaaS que tu negocio necesita.",
  },
];

export default function SolucionesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-20 pt-28 sm:px-6">
      <h1 className="text-4xl font-bold tracking-tight">Soluciones</h1>
      <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
        Somos una solucionadora de tecnología: cada producto es una aplicación
        SaaS lista para integrarse a tu operación.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {soluciones.map((s) => (
          <div
            key={s.title}
            className="flex flex-col rounded-2xl border border-zinc-200 p-6 transition-shadow hover:shadow-lg dark:border-zinc-800"
          >
            <h2 className="text-lg font-semibold">{s.title}</h2>
            <p className="mt-2 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
              {s.desc}
            </p>
            <Link
              href="/demo"
              className="mt-4 text-sm font-medium text-brand hover:text-brand-light"
            >
              Solicitar demo →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
