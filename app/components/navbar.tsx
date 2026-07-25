"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "./theme-toggle";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/soluciones", label: "Soluciones" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  // En modo oscuro el navbar es transparente solo en la portada del inicio sin
  // scroll; en cualquier otro caso (y siempre en modo claro) es sólido.
  const atHomeTop = isHome && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-all duration-300 ${
        atHomeTop
          ? "border-b border-zinc-200/60 bg-white/80 shadow-sm dark:border-transparent dark:bg-transparent dark:shadow-none dark:backdrop-blur-none"
          : "border-b border-zinc-200 bg-white/90 shadow-sm dark:border-white/10 dark:bg-zinc-950/85"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo (negro en claro, blanco en oscuro) */}
        <Link
          href="/"
          className="flex items-center transition-transform duration-300 hover:scale-105"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo-modo-claro.png"
            alt="Plazma Ideas"
            width={140}
            height={47}
            priority
            className="block h-9 w-auto sm:h-11 dark:hidden"
          />
          <Image
            src="/logo-plazma.png"
            alt="Plazma Ideas"
            width={140}
            height={47}
            priority
            className="hidden h-9 w-auto sm:h-11 dark:block"
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
                      ? "bg-zinc-900 font-semibold text-white shadow-lg shadow-black/20 dark:bg-white dark:text-zinc-900"
                      : "text-zinc-700 hover:-translate-y-0.5 hover:bg-zinc-900/10 hover:text-zinc-900 dark:text-zinc-200 dark:hover:bg-white/15 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Acciones (escritorio) */}
        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Link
            href="/demo"
            className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-zinc-950 shadow-lg shadow-brand/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-light hover:shadow-brand/40"
          >
            Solicitar demo
          </Link>
        </div>

        {/* Acciones (móvil) */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-800 transition-colors hover:bg-zinc-900/10 dark:text-white dark:hover:bg-white/10"
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
          open
            ? "max-h-96 border-t border-zinc-200 opacity-100 dark:border-white/10"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 px-4 backdrop-blur-md dark:bg-zinc-950/95">
          <ul className="space-y-1 py-3">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-full px-5 py-2.5 text-sm transition-colors ${
                      active
                        ? "bg-zinc-900 font-semibold text-white dark:bg-white dark:text-zinc-900"
                        : "text-zinc-700 hover:bg-zinc-900/10 dark:text-zinc-200 dark:hover:bg-white/10"
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
