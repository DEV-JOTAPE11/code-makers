"use client";

import { useEffect, useRef, type ReactNode, type Ref } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CHAR_CLASS = "blur-reveal-char";

/** Troca cada caractere visível por um <span>, preservando os elementos
 *  internos do título (quebras de linha e trechos coloridos). */
function splitChars(node: Node) {
  if (node.nodeType === Node.TEXT_NODE) {
    const fragment = document.createDocumentFragment();
    for (const char of node.textContent ?? "") {
      if (char === " " || char === "\n" || char === "\r") {
        fragment.appendChild(document.createTextNode(char));
      } else {
        const span = document.createElement("span");
        span.className = CHAR_CLASS;
        span.textContent = char;
        fragment.appendChild(span);
      }
    }
    node.parentNode?.replaceChild(fragment, node);
  } else {
    Array.from(node.childNodes).forEach(splitChars);
  }
}

/**
 * Entrada dos títulos: revelação caractere a caractere atrelada ao scroll,
 * trazida do lp-jtp-wp (`BlurRevealText`). Cada caractere parte de
 * `opacity: 0 / blur(10px)` e chega a `opacity: 1 / blur(0)` com
 * `duration: 0.5`, `ease: power3.out`, `stagger: 0.035` e `scrub: 1` entre
 * `top 85%` e `top 40%`.
 */
export function BlurRevealText({
  as: Tag = "h2",
  className,
  children,
}: {
  as?: "h1" | "h2" | "h3" | "div";
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // No StrictMode o efeito roda duas vezes: reaproveita a divisão já feita.
    if (!host.querySelector(`.${CHAR_CLASS}`)) {
      // Leitores de tela leem o título inteiro, não letra por letra.
      host.setAttribute(
        "aria-label",
        host.innerText.replace(/\s+/g, " ").trim(),
      );
      splitChars(host);
    }
    const chars = host.querySelectorAll(`.${CHAR_CLASS}`);

    const tween = gsap.fromTo(
      chars,
      { opacity: 0, filter: "blur(10px)" },
      {
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.035,
        scrollTrigger: {
          trigger: host,
          start: "top 85%",
          // clamp: títulos no fim da página terminam de aparecer mesmo que a
          // rolagem acabe antes de o topo deles chegar a 40% da tela.
          end: "clamp(top 40%)",
          scrub: 1,
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      gsap.set(chars, { clearProps: "opacity,filter" });
    };
  }, []);

  return (
    <Tag ref={ref as Ref<never>} className={className}>
      {children}
    </Tag>
  );
}
