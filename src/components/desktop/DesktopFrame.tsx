"use client";

import { useLayoutEffect, useState, type ReactNode } from "react";

import { DESIGN_WIDTH } from "@/lib/constants";

type Frame = { scale: number; heroHeight: number; viewportHeight: number };

/** O desktop é desenhado numa prancheta fixa de 1920px e reduzido com `zoom`
 *  para caber na viewport. É assim que o layout do Figma se mantém exato em
 *  qualquer largura. A altura da hero (e da seção do método) acompanha a viewport já
 *  desescalada. */
function measure(): Frame {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return { scale: 1, heroHeight: 1080, viewportHeight: 1080 };
  }

  const scale =
    Math.round((document.documentElement.clientWidth / DESIGN_WIDTH) * 1e6) /
    1e6;
  const viewportHeight =
    window.visualViewport?.height ?? document.documentElement.clientHeight;

  return {
    scale,
    heroHeight: Math.max(1080, Math.ceil(viewportHeight / scale)),
    viewportHeight: Math.floor(viewportHeight / scale),
  };
}

export function DesktopFrame({ children }: { children: ReactNode }) {
  const [frame, setFrame] = useState<Frame>({
    scale: 1,
    heroHeight: 1080,
    viewportHeight: 1080,
  });

  useLayoutEffect(() => {
    let raf = 0;

    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const next = measure();
        setFrame((current) =>
          Math.abs(current.scale - next.scale) > 1e-6 ||
          current.heroHeight !== next.heroHeight ||
          current.viewportHeight !== next.viewportHeight
            ? next
            : current,
        );
      });
    };

    update();
    window.addEventListener("resize", update, { passive: true });
    window.addEventListener("orientationchange", update, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  return (
    <div className="w-full overflow-x-clip">
      <div
        style={{
          width: DESIGN_WIDTH,
          zoom: frame.scale,
          marginInline: "auto",
          ["--frame-hero-height" as string]: `${frame.heroHeight}px`,
          ["--frame-viewport-height" as string]: `${frame.viewportHeight}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
