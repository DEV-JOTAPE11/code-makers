"use client";

import { motion } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";

import { EASE } from "@/lib/constants";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
};

/** Entrada discreta usada nos blocos de seção (desktop). */
export function SectionReveal({ children, className, delay = 0, id }: RevealProps) {
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0.9, y: 18, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.06, margin: "0px 0px -4% 0px" }}
      transition={{ duration: 0.82, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Entrada mais pronunciada, para cards. */
export function CardReveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 42, scale: 0.988, filter: "blur(9px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -5% 0px" }}
      transition={{ duration: 0.86, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Entrada da jornada do curso — sobe com leve desfoque. */
export function StageReveal({
  children,
  className = "",
  delay = 0,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.78, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Entrada do conteúdo mobile. */
export function FadeUp({
  children,
  className = "",
  blur = false,
  delay = 0,
}: RevealProps & { blur?: boolean }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28, filter: blur ? "blur(12px)" : "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.78, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Segue o cursor com um leve deslocamento e volta com elástica ao sair. */
export function MagneticHover({
  children,
  className,
  strength = 0.35,
}: RevealProps & { strength?: number }) {
  const element = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={element}
      className={className}
      onMouseMove={(event) => {
        const node = element.current;
        if (!node) return;
        const bounds = node.getBoundingClientRect();
        const x = event.clientX - bounds.left - bounds.width / 2;
        const y = event.clientY - bounds.top - bounds.height / 2;
        gsap.to(node, {
          x: x * strength,
          y: y * strength,
          duration: 0.4,
          ease: "power3.out",
        });
      }}
      onMouseLeave={() => {
        const node = element.current;
        if (!node) return;
        gsap.to(node, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.4)",
        });
      }}
      style={{ willChange: "transform" }}
    >
      {children}
    </div>
  );
}

/** Stagger em GSAP aplicado aos filhos diretos — usado na hero. */
export function GsapStagger({ children, className }: RevealProps) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = container.current;
    if (!element) return;

    const targets = Array.from(element.children);
    const context = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y: 32, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.15,
        },
      );
    }, element);

    return () => context.revert();
  }, []);

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
}
