"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/soluciones", label: "Soluciones" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-zinc-950/40 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center transition-transform duration-300 hover:scale-105"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo-plazma.png"
            alt="Plazma Ideas"
            width={140}
            height={47}
            priority
          />
        </Link>

        {/* Menú pill centrado (escritorio) */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-full px-5 py-2 text-sm transition-all duration-300 ease-out ${
                    active
                      ? "bg-white font-semibold text-zinc-900 shadow-lg shadow-black/20"
                      : "text-zinc-200 hover:-translate-y-0.5 hover:bg-white/15 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA (escritorio) */}
        <Link
          href="/demo"
          className="hidden rounded-full bg-brand px-5 py-2 text-sm font-semibold text-zinc-950 shadow-lg shadow-brand/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-light hover:shadow-brand/40 md:block"
        >
          Solicitar demo
        </Link>

        {/* Botón menú móvil */}
        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Menú móvil */}
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-out md:hidden ${
          open ? "grid-rows-[1fr] border-t border-white/10" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 bg-zinc-950/90 px-4 backdrop-blur-md">
          <ul className="space-y-1 py-3">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-full px-5 py-2.5 text-sm transition-colors ${
                      active
                        ? "bg-white font-semibold text-zinc-900"
                        : "text-zinc-200 hover:bg-white/10"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/demo"
            className="mb-4 block rounded-full bg-brand px-5 py-2.5 text-center text-sm font-semibold text-zinc-950"
            onClick={() => setOpen(false)}
          >
            Solicitar demo
          </Link>
        </div>
      </div>
    </header>
  );
}
