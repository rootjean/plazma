"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { products, type Product } from "@/app/lib/products";
import styles from "./product-cards.module.css";

/** Pasos de implementación mostrados en cada landing. */
const steps = [
  {
    title: "Diagnóstico",
    desc: "Analizamos tu operación actual y detectamos los puntos de mejora.",
  },
  {
    title: "Configuración",
    desc: "Adaptamos la plataforma a tus procesos, usuarios y sucursales.",
  },
  {
    title: "Capacitación",
    desc: "Entrenamos a tu equipo para que aproveche la herramienta desde el día uno.",
  },
  {
    title: "Acompañamiento",
    desc: "Soporte continuo y mejoras conforme crece tu negocio.",
  },
];

/** Duración de la animación de apertura/cierre (ver CSS). */
const FLIP_MS = 1100;

/** Separación entre cards (ver gap de .track en el CSS). */
const GAP = 14;

export default function ProductCards() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const originRef = useRef<HTMLButtonElement | null>(null);
  const viewerRef = useRef<HTMLDivElement>(null);

  /* Slider por pasos: solo se muestran cards completas. */
  const [index, setIndex] = useState(0);
  const [slider, setSlider] = useState({ step: 244, visible: 2, width: 0 });

  useEffect(() => {
    const measure = () => {
      const wrap = wrapRef.current;
      const card = trackRef.current?.children[0] as HTMLElement | undefined;
      if (!wrap || !card) return;
      const step = card.offsetWidth + GAP;
      const visible = Math.max(1, Math.floor((wrap.clientWidth + GAP) / step));
      setSlider({ step, visible, width: visible * step - GAP });
      setIndex((i) => Math.min(i, Math.max(products.length - visible, 0)));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const maxIndex = Math.max(products.length - slider.visible, 0);
  const slide = (dir: number) =>
    setIndex((i) => Math.min(Math.max(i + dir, 0), maxIndex));

  const [active, setActive] = useState<Product | null>(null);
  const [open, setOpen] = useState(false);
  const [viewerStyle, setViewerStyle] = useState<CSSProperties>({});
  // El portal solo puede renderizarse en el cliente (document no existe en SSR).
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  /* Abre la landing: el visor se coloca sobre la card y luego crece girando. */
  const openCard = (product: Product, el: HTMLButtonElement) => {
    if (active) return;
    originRef.current = el;
    const r = el.getBoundingClientRect();
    setActive(product);
    setViewerStyle({ top: r.top, left: r.left, width: r.width, height: r.height });
    document.body.style.overflow = "hidden";
  };

  /* Cuando el visor ya está pintado sobre la card, anima a pantalla completa. */
  useEffect(() => {
    if (!active) return;
    // Forzar layout para que la posición inicial se aplique antes de animar.
    viewerRef.current?.getBoundingClientRect();
    const id = window.setTimeout(() => {
      setOpen(true);
      setViewerStyle({ top: 0, left: 0, width: "100vw", height: "100dvh" });
    }, 30);
    return () => window.clearTimeout(id);
  }, [active]);

  /* Cierra: vuelve girando hasta la card de origen. */
  const closeCard = useCallback(() => {
    const el = originRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setOpen(false);
    setViewerStyle({ top: r.top, left: r.left, width: r.width, height: r.height });
    document.body.style.overflow = "";
    originRef.current = null;

    window.setTimeout(() => {
      setActive(null);
      el.focus({ preventScroll: true });
    }, FLIP_MS);
  }, []);

  /* Cerrar con Escape. */
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeCard();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, closeCard]);

  return (
    <div ref={wrapRef}>
      {/* Slider: la ventana solo muestra cards completas */}
      <div
        className={styles.viewport}
        style={slider.width ? { width: slider.width } : undefined}
      >
        <div
          className={styles.track}
          ref={trackRef}
          style={{ transform: `translateX(-${index * slider.step}px)` }}
        >
          {products.map((p, i) => (
          <button
            key={p.id}
            type="button"
            className={`${styles.card} ${
              active?.id === p.id ? styles.cardHidden : ""
            }`}
            onClick={(e) => openCard(p, e.currentTarget)}
          >
            <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
            <span className={styles.cardTitle}>{p.title}</span>
            <p className={styles.cardDesc}>{p.desc}</p>
            <span className={styles.cardCta}>Ver más →</span>
          </button>
          ))}
        </div>
      </div>

      {/* Controles */}
      <div className={styles.controls}>
        <button
          type="button"
          className={styles.arrow}
          aria-label="Ver productos anteriores"
          disabled={index === 0}
          onClick={() => slide(-1)}
        >
          ←
        </button>
        <button
          type="button"
          className={styles.arrow}
          aria-label="Ver productos siguientes"
          disabled={index >= maxIndex}
          onClick={() => slide(1)}
        >
          →
        </button>
        <span className={styles.hint}>Toca una card para abrirla</span>
      </div>

      {/* Fondo oscuro + visor: en un portal al <body> para quedar por
          encima del header de la página (fuera del stacking context del hero) */}
      {mounted &&
        createPortal(
          <>
            <div
              className={`${styles.backdrop} ${
                active ? styles.backdropVisible : ""
              }`}
              onClick={closeCard}
            />
            {/* Visor: frente = card, espalda = landing */}
            <div
              className={`${styles.viewer} ${
                active ? styles.viewerActive : ""
              } ${open ? styles.viewerOpen : ""}`}
        style={viewerStyle}
        ref={viewerRef}
        role="dialog"
        aria-modal="true"
        aria-label={active?.title}
      >
        <div className={styles.flip}>
          <div className={`${styles.face} ${styles.faceFront}`}>
            <span className={styles.cardTitle}>{active?.title}</span>
            <p className={styles.cardDesc}>{active?.desc}</p>
          </div>

          <div className={`${styles.face} ${styles.faceBack}`}>
            {active && (
              <div className={styles.landing}>
                {/* Header propio de la landing */}
                <div className={styles.landingHeader}>
                  <div className={styles.landingBrand}>
                    <Image
                      src="/logo-plazma.png"
                      alt="Plazma Ideas"
                      width={110}
                      height={37}
                    />
                    <span className={styles.landingBrandName}>
                      {active.title}
                    </span>
                  </div>
                  <div className={styles.landingBrand}>
                    {active.loginUrl && (
                      <a
                        href={active.loginUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.landingLogin}
                      >
                        Ingresar
                      </a>
                    )}
                    <Link href="/demo" className={styles.landingHeaderCta}>
                      Solicitar demo
                    </Link>
                    <button
                      type="button"
                      className={styles.close}
                      aria-label="Cerrar"
                      onClick={closeCard}
                    >
                      ✕
                    </button>
                  </div>
                </div>

                {/* Cuerpo */}
                <div className={styles.landingBody}>
                  <h2 className={styles.landingTitle}>{active.title}</h2>
                  <p className={styles.landingSub}>{active.tagline}</p>
                  <p className={styles.landingText}>{active.landing}</p>

                  <div className={styles.chips}>
                    {active.features.map((f) => (
                      <span key={f} className={styles.chip}>
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.3 3.3 6.8-6.8a1 1 0 0 1 1.4 0Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Qué incluye */}
                  <h3 className={styles.sectionTitle}>
                    Qué <span>incluye</span>
                  </h3>
                  <div className={styles.highlightGrid}>
                    {active.highlights.map((h) => (
                      <div key={h.title} className={styles.highlightCard}>
                        <p className={styles.highlightTitle}>{h.title}</p>
                        <p className={styles.highlightDesc}>{h.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Cómo lo implementamos */}
                  <h3 className={styles.sectionTitle}>
                    ¿Cómo lo <span>implementamos</span>?
                  </h3>
                  <div className={styles.steps}>
                    {steps.map((s, i) => (
                      <div key={s.title} className={styles.step}>
                        <span className={styles.stepNum}>
                          PASO {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className={styles.stepTitle}>{s.title}</p>
                        <p className={styles.stepDesc}>{s.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Banda CTA final */}
                  <div className={styles.landingCtaBand}>
                    <h3>¿Listo para probar {active.title}?</h3>
                    <p>
                      Agenda una demo gratuita y te lo mostramos funcionando
                      con datos de tu negocio.
                    </p>
                    <Link href="/demo" className={styles.landingCta}>
                      Registrar una demo
                    </Link>
                    {active.loginUrl && (
                      <a
                        href={active.loginUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.landingLoginGhost}
                      >
                        Ingresar a {active.title} →
                      </a>
                    )}
                  </div>
                </div>

                {/* Pie de la landing */}
                <div className={styles.landingFooter}>
                  <span>
                    © {new Date().getFullYear()} Plazma Ideas · Solucionadora
                    de tecnología
                  </span>
                  <span>contacto@plazmaideas.com</span>
                </div>
              </div>
            )}
          </div>
              </div>
            </div>
          </>,
          document.body
        )}
    </div>
  );
}
