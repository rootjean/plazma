"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./intro.module.css";

const WORDMARK = "PLAZMA IDEAS";
const CAPTION = "Tecnología sin complicaciones";

/* Tiempos (en segundos), coordinados con el CSS. */
const SWEEP = 1.3; // el goteo cruza de izquierda a derecha
const FALL = 1.2; // caída de cada gota (duración de sweep en CSS)
const AFTER = SWEEP + FALL - 0.7; // el título arranca cuando el goteo ya termina
const STAGGER = 0.04; // separación entre letras

/* Ponderación de tonos: el marfil manda, el verde de marca aparece poco. */
const TONES: { rgb: string; weight: number }[] = [
  { rgb: "var(--tone-1)", weight: 68 },
  { rgb: "var(--tone-2)", weight: 24 },
  { rgb: "var(--tone-3)", weight: 8 },
];

/* Bandera a nivel de módulo: se reinicia con cada recarga completa, pero
   evita que el intro se repita al navegar entre páginas dentro del sitio. */
let hasPlayed = false;

export default function Intro() {
  const stageRef = useRef<HTMLDivElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const stage = stageRef.current;
    const field = fieldRef.current;
    const title = titleRef.current;
    if (!stage || !field || !title) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Ya se reprodujo en esta carga (navegación interna) o el usuario prefiere
    // menos movimiento: no reproducir.
    if (hasPlayed || reduced) {
      setGone(true);
      return;
    }
    hasPlayed = true;

    const rand = (a: number, b: number) => a + Math.random() * (b - a);
    const pickTone = () => {
      let r = Math.random() * 100;
      for (const t of TONES) if ((r -= t.weight) <= 0) return t.rgb;
      return TONES[0].rgb;
    };

    // Partir el título en letras respetando las palabras.
    title.textContent = "";
    const letters: HTMLSpanElement[] = [];
    WORDMARK.trim()
      .split(/\s+/)
      .forEach((word, i, arr) => {
        const w = document.createElement("span");
        w.className = styles.word;
        [...word].forEach((ch) => {
          const s = document.createElement("span");
          s.className = styles.ltr;
          s.textContent = ch;
          w.appendChild(s);
          letters.push(s);
        });
        title.appendChild(w);
        if (i < arr.length - 1) title.appendChild(document.createTextNode(" "));
      });

    // Goteo: una pasada de izquierda a derecha.
    const count = Math.max(
      10,
      Math.min(28, Math.round(window.innerWidth / 70))
    );
    const step = SWEEP / Math.max(1, count - 1);
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const line = document.createElement("div");
      line.className = styles.line;
      const trace = document.createElement("div");
      trace.className = styles.trace;
      trace.style.setProperty("--tone", pickTone());
      trace.style.setProperty("--len", rand(14, 34).toFixed(1) + "vh");
      trace.style.setProperty("--w", Math.random() < 0.18 ? "2px" : "1px");
      trace.style.setProperty("--d", (i * step).toFixed(3) + "s");
      trace.style.opacity = rand(0.45, 1).toFixed(2);
      line.appendChild(trace);
      frag.appendChild(line);
    }
    field.replaceChildren(frag);

    // El título entra letra por letra cuando el goteo terminó.
    letters.forEach((s, i) => {
      s.style.setProperty("--ld", (AFTER + i * STAGGER).toFixed(2) + "s");
    });
    const tail = AFTER + letters.length * STAGGER;
    stage.style.setProperty("--rule-delay", (tail + 0.15).toFixed(2) + "s");
    stage.style.setProperty("--caption-delay", (tail + 0.45).toFixed(2) + "s");

    document.body.style.overflow = "hidden";
    // Disparo de la animación: doble rAF (timing correcto) + respaldo por
    // temporizador (por si rAF viene limitado en algún navegador).
    const play = () => stage.classList.add(styles.go);
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(play);
    });
    const playFallback = window.setTimeout(play, 90);

    // Fin natural: poco después de que aparezca el descriptor.
    const totalMs = (tail + 0.45 + 0.8) * 1000;
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      // La salida se dispara por DOM (sin re-render) para no borrar las letras
      // del título, que se construyen manipulando el DOM directamente.
      stage.classList.add(styles.fade);
      window.setTimeout(() => {
        document.body.style.overflow = "";
        setGone(true);
      }, 950);
    };

    const timer = window.setTimeout(finish, totalMs);
    // El "saltar" se arma tras un breve margen para no dispararse por accidente.
    let armed = false;
    const arm = window.setTimeout(() => (armed = true), 700);
    const skip = () => armed && finish();
    window.addEventListener("keydown", skip);
    window.addEventListener("touchstart", skip, { passive: true });
    stage.addEventListener("click", skip);

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      window.clearTimeout(playFallback);
      window.clearTimeout(timer);
      window.clearTimeout(arm);
      window.removeEventListener("keydown", skip);
      window.removeEventListener("touchstart", skip);
      stage.removeEventListener("click", skip);
      document.body.style.overflow = "";
      // Si se desmonta antes de terminar (p. ej. StrictMode en dev), permitir
      // que vuelva a reproducirse.
      if (!done) hasPlayed = false;
    };
  }, []);

  if (gone) return null;

  return (
    <div
      ref={stageRef}
      className={styles.overlay}
      role="presentation"
      aria-hidden="true"
    >
      <div ref={fieldRef} className={styles.lines} />
      <div className={styles.content}>
        <h1 ref={titleRef} className={styles.wordmark}>
          {WORDMARK}
        </h1>
        <div className={styles.rule} />
        <p className={styles.caption}>{CAPTION}</p>
      </div>
      <span className={styles.skip}>Clic para saltar</span>
      <div className={styles.vignette} />
      <div className={styles.grain} />
    </div>
  );
}
