"use client";

import { StageReveal } from "@/components/motion-primitives";
import { WHATSAPP_GROUP_URL } from "@/lib/constants";

/** Curva que costura a seção clara anterior com o bloco vermelho. */
const TRANSITION_PATH =
  "M0 0H1920V12C1750 8 1640 -6 1550 38C1510 58 1488 120 1400 120H520C432 120 410 58 370 38C280 -6 170 8 0 12Z";

export function CourseFinalPush({
  desktop,
  container,
}: {
  desktop: boolean;
  container: string;
}) {
  return (
    <section
      className={`course-final-push order-5 relative overflow-hidden bg-[#b00000] text-white ${
        desktop ? "w-[1920px] px-[210px] py-[135px]" : "px-5 py-24"
      }`}
    >
      <svg
        aria-hidden="true"
        className="course-final-top-transition"
        preserveAspectRatio="none"
        viewBox="0 0 1920 120"
      >
        <defs>
          <pattern
            id="final-top-transition-grid"
            height="120"
            patternUnits="userSpaceOnUse"
            width="112"
          >
            <path d="M0 0V120" stroke="rgba(20,20,20,0.038)" strokeWidth="1" />
          </pattern>
        </defs>
        <path d={TRANSITION_PATH} fill="#f1eeeb" />
        <path d={TRANSITION_PATH} fill="url(#final-top-transition-grid)" />
      </svg>

      <div
        aria-hidden="true"
        className="course-final-orbit absolute rounded-full border border-white/15"
      />

      <StageReveal className={`${container} relative z-10 text-center`}>
        <p className="text-[11px] uppercase tracking-[0.2em] text-white/58">
          Crie. Encontre. Venda.
        </p>
        <h2
          className={`mx-auto mt-7 max-w-[1200px] font-['Sora:Regular',sans-serif] leading-[0.94] tracking-[-0.065em] ${
            desktop ? "text-[104px]" : "text-[55px]"
          }`}
        >
          Seu próximo cliente não precisa aparecer por acaso. Encontre. Venda.
          Coloque dinheiro no bolso.
        </h2>
        <a
          className="mt-10 inline-flex min-h-15 items-center gap-6 rounded-full bg-black px-9 font-['Inter:Medium',sans-serif] text-[16px] font-medium text-white shadow-[0_20px_55px_rgba(0,0,0,0.28)]"
          href={WHATSAPP_GROUP_URL}
          target="_blank"
          rel="noreferrer"
        >
          Entrar no grupo oficial <span aria-hidden="true">↗</span>
        </a>
      </StageReveal>
    </section>
  );
}
