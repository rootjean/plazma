import Link from "next/link";

const navegacion = [
  { href: "/soluciones", label: "Soluciones" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
  { href: "/demo", label: "Solicitar demo" },
];

const legales = [
  { href: "/legal/privacidad", label: "Política de privacidad" },
  { href: "/legal/terminos", label: "Términos y condiciones" },
  { href: "/faq", label: "Preguntas frecuentes" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="text-lg font-bold">
            Plazma<span className="text-brand-dark dark:text-brand"> Ideas</span>
          </p>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Solucionadora de tecnología. Aplicaciones SaaS que impulsan tu
            negocio.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Navegación
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {navegacion.map((l) => (
              <li key={l.href}>
                <Link
                  className="text-zinc-600 transition-colors hover:text-brand-dark dark:hover:text-brand dark:text-zinc-400"
                  href={l.href}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Legal
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {legales.map((l) => (
              <li key={l.href}>
                <Link
                  className="text-zinc-600 transition-colors hover:text-brand-dark dark:hover:text-brand dark:text-zinc-400"
                  href={l.href}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Libro de Reclamaciones (Perú) */}
          <Link
            href="/legal/libro-de-reclamaciones"
            className="mt-4 inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 text-xs font-semibold transition-colors hover:border-brand hover:text-brand-dark dark:hover:text-brand dark:border-zinc-700"
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
                d="M4 5a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5Z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 3v6h6" />
            </svg>
            Libro de Reclamaciones
          </Link>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Contacto
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>
              <a
                className="transition-colors hover:text-brand-dark dark:hover:text-brand"
                href="mailto:contacto@plazmaideas.com"
              >
                contacto@plazmaideas.com
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-dark dark:hover:text-brand"
                href="https://wa.me/51929549895"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1-1.4-1-2.6 0-1.2.6-1.8.9-2.1.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .5l-.4.6c-.1.2-.3.3-.1.6.1.3.7 1.1 1.4 1.7.9.8 1.7 1 2 1.2.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.2.1.4.2.5.3.1.3.1.7-.1 1.1Z" />
                </svg>
                +51 929 549 895
              </a>
            </li>
            <li>Huancayo, Perú</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-200 py-4 text-center text-xs text-zinc-500 dark:border-zinc-800">
        © {new Date().getFullYear()} Plazma Ideas. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
