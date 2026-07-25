import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/reveal";
import FaqAccordion from "./faq-accordion";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description:
    "Resolvemos las dudas más comunes sobre Plazma Ideas, Alia e INSCHOOL.",
};

const faqs = [
  {
    q: "¿Qué es Plazma Ideas?",
    a: "Somos una solucionadora de tecnología que desarrolla y vende aplicaciones SaaS. Ayudamos a empresas, profesionales e instituciones a automatizar y ordenar su operación con software listo para usar.",
  },
  {
    q: "¿Qué es Alia?",
    a: "Alia le da a cualquier negocio su propio agente de inteligencia artificial que responde por él cuando está ocupado. Configuras el contexto de tu negocio, conectas WhatsApp Business API y el agente atiende a tus leads las 24 horas, con flujos automáticos, ficha de cliente y agenda de citas.",
  },
  {
    q: "¿Puedo controlar cuándo responde el agente de Alia?",
    a: "Sí. Puedes activar el agente para todos tus leads o desactivarlo en conversaciones puntuales cuando prefieras responder tú mismo. Tú tienes el control en todo momento.",
  },
  {
    q: "¿Necesito saber programar para usar Alia?",
    a: "No. Los flujos de respuesta se arman de forma visual arrastrando nodos y botones, al estilo de herramientas como n8n. No necesitas escribir código.",
  },
  {
    q: "¿Qué es INSCHOOL?",
    a: "INSCHOOL es una plataforma para colegios. Registra a cada estudiante, genera su carnet con código QR, controla el ingreso y salida escaneando ese QR y avisa automáticamente a los padres por WhatsApp. Además, los docentes gestionan notas y comunicados desde un portal propio.",
  },
  {
    q: "¿Cómo se avisa a los padres en INSCHOOL?",
    a: "Cuando el portero escanea el carnet QR del estudiante al ingresar o salir, el sistema registra la hora exacta y envía una notificación automática al apoderado por WhatsApp.",
  },
  {
    q: "¿Cómo solicito una demostración?",
    a: "Ingresa a la sección de demo, completa el formulario con tus datos y nuestro equipo te contactará para coordinar una demostración personalizada de la solución que te interese.",
  },
  {
    q: "¿Van a lanzar más productos?",
    a: "Sí. Nuestro catálogo está en constante crecimiento. Si tu necesidad no encaja en los productos actuales, también desarrollamos soluciones a la medida.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-24 pt-32 sm:px-6">
      <Reveal className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Preguntas frecuentes
        </h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Reunimos las dudas más comunes sobre nosotros y nuestros productos. Si
          te queda alguna, escríbenos y con gusto te ayudamos.
        </p>
      </Reveal>

      <Reveal delay={120}>
        <FaqAccordion items={faqs} />
      </Reveal>

      <Reveal className="mt-14">
        <div className="rounded-2xl border border-zinc-200 p-7 text-center dark:border-zinc-800">
          <p className="font-semibold">¿No encuentras tu respuesta?</p>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Nuestro equipo está listo para ayudarte.
          </p>
          <Link
            href="/contacto"
            className="mt-5 inline-block rounded-full bg-brand px-7 py-2.5 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-light"
          >
            Contactar al equipo
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
