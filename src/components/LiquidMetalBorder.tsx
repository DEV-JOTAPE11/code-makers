"use client";

import { liquidMetalFragmentShader, ShaderMount } from "@paper-design/shaders";
import { useEffect, useRef } from "react";

/* Mesma moldura de metal líquido da badge "Pare de perder tempo"
   (lp-jtp-wp, LiquidMetalButton), esticada para um card.

   Na badge (142×46) o shader desenha um círculo de 46 × 8 = 368px e listras
   de 368 / 4 = 92px. Aqui o círculo cresce na mesma proporção da diagonal do
   card — sobra o mesmo tanto além das bordas — e a repetição cresce junto,
   então cada listra continua com os mesmos 92px da badge. */
const BADGE_OBJECT_PX = 46 * 8;
const BADGE_DIAGONAL = Math.hypot(142, 46);

function uniformsFor(width: number, height: number) {
  const spread = Math.max(Math.hypot(width, height) / BADGE_DIAGONAL, 1);
  return {
    u_repetition: 4 * spread,
    u_softness: 0.5,
    u_shiftRed: 0.3,
    u_shiftBlue: 0.3,
    u_distortion: 0,
    u_contour: 0,
    u_angle: 45,
    u_scale: (BADGE_OBJECT_PX * spread) / Math.max(Math.min(width, height), 1),
    u_shape: 1,
    u_offsetX: 0.1,
    u_offsetY: -0.1,
  };
}

/** Anel de 2px de metal líquido. Deve ficar dentro de um pai `position: relative`
    com `border-radius`; o CSS `.liquid-metal-border` recorta o canvas no anel.
    `lazy`: só cria o shader quando o anel chega perto da tela (para anéis
    longe do topo não pesarem no carregamento). Até lá fica o gradiente
    estático do CSS. */
export function LiquidMetalBorder({ lazy = false }: { lazy?: boolean }) {
  const ringRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let mount: ShaderMount | undefined;
    let resize: ResizeObserver | undefined;

    const start = () => {
      try {
        mount = new ShaderMount(
          ring,
          liquidMetalFragmentShader,
          uniformsFor(ring.offsetWidth, ring.offsetHeight),
          undefined,
          reduceMotion ? 0 : 0.6,
        );
      } catch {
        // Sem WebGL: fica o gradiente metálico estático do CSS.
        return;
      }
      const shader = mount;
      resize = new ResizeObserver(() => {
        shader.setUniforms(uniformsFor(ring.offsetWidth, ring.offsetHeight));
      });
      resize.observe(ring);
    };

    let near: IntersectionObserver | undefined;
    if (lazy) {
      near = new IntersectionObserver(
        (entries) => {
          if (!entries.some((entry) => entry.isIntersecting)) return;
          near?.disconnect();
          start();
        },
        { rootMargin: "600px 0px" },
      );
      near.observe(ring);
    } else {
      start();
    }

    return () => {
      near?.disconnect();
      resize?.disconnect();
      mount?.dispose();
    };
  }, [lazy]);

  // <span> e não <div>: o anel também entra em <button>, que só aceita
  // conteúdo inline.
  return (
    <span ref={ringRef} aria-hidden="true" className="liquid-metal-border" />
  );
}
