"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  /** Dirección de entrada. */
  from?: "up" | "left" | "right" | "zoom";
  /** Retraso en ms para escalonar animaciones. */
  delay?: number;
  /** Etiqueta HTML a renderizar (div por defecto). */
  as?: ElementType;
  className?: string;
};

/**
 * Envuelve contenido y lo anima cuando entra en el viewport.
 * Usa IntersectionObserver + las clases definidas en globals.css.
 */
export default function Reveal({
  children,
  from = "up",
  delay = 0,
  as: Tag = "div",
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal={from}
      className={`${visible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
