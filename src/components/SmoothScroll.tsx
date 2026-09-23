"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useMemo, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import type { SectionNavigationDetail } from "@/lib/navigateToSection";

gsap.registerPlugin(ScrollTrigger);

/** Mantém o ScrollTrigger em sincronia com o Lenis e faz o Lenis assumir
 *  a rolagem disparada pelo menu. */
function LenisBridge() {
  const lenis = useLenis(() => {
    ScrollTrigger.update();
  }, []);

  useEffect(() => {
    const onNavigate = (event: Event) => {
      if (!lenis) return;
      const detail = (event as CustomEvent<SectionNavigationDetail>).detail;
      detail.handled = true;
      lenis.scrollTo(detail.target, {
        offset: detail.offset,
        duration: 0.68,
        easing: (t: number) => 1 - (1 - t) ** 4,
        force: true,
        onComplete: detail.onComplete,
      });
    };

    window.addEventListener("codemakers:navigate-section", onNavigate);
    return () =>
      window.removeEventListener("codemakers:navigate-section", onNavigate);
  }, [lenis]);

  return null;
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const options = useMemo(
    () => ({
      smoothWheel: true,
      lerp: 0.055,
      wheelMultiplier: 0.86,
      touchMultiplier: 1.15,
      syncTouch: false,
      overscroll: true,
      respectReducedMotion: false,
      autoRaf: true,
    }),
    [],
  );

  return (
    <ReactLenis root options={options}>
      <LenisBridge />
      {children}
    </ReactLenis>
  );
}
