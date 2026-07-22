import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold">
            Plazma<span className="text-brand"> Ideas</span>
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
            <li><Link className="hover:text-brand" href="/soluciones">Soluciones</Link></li>
            <li><Link className="hover:text-brand" href="/nosotros">Nosotros</Link></li>
            <li><Link className="hover:text-brand" href="/contacto">Contacto</Link></li>
            <li><Link className="hover:text-brand" href="/demo">Solicitar demo</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Contacto
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>contacto@plazmaideas.com</li>
            <li>Huancayo, Perú</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-200 py-4 text-center text-xs text-zinc-500 dark:border-zinc-800">
        © {new Date().getFullYear()} Plazma Ideas. Todos los derechos reservados.
      </div>
    </footer>
  );
}
