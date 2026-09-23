"use client";

import { ConversionRail } from "@/components/ConversionRail";
import { CourseSalesJourney } from "@/components/course/CourseSalesJourney";
import { FadeUp } from "@/components/motion-primitives";
import { ShinyCta } from "@/components/ShinyCta";
import { WHATSAPP_GROUP_URL } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

/** Versão mobile da home: hero de tela cheia, a mesma fórmula e jornada do
 *  desktop em coluna única, e o rodapé em gradiente. */
export function MobileHome() {
  return (
    <main className="overflow-x-hidden bg-[#f5f5f5] text-[#171717]">
      <section
        id="home"
        className="mobile-hero relative h-[100svh] min-h-[100svh] overflow-hidden bg-[#250404] px-4 pb-0 pt-[116px] text-white"
      >
        <img
          alt=""
          className="absolute inset-0 size-full object-cover opacity-90"
          src={IMAGES.heroBackground}
        />
        <div aria-hidden="true" className="hero-gradient-motion absolute inset-0" />
        <div
          aria-hidden="true"
          className="hero-gradient-shadow-motion absolute inset-0"
        />

        <div className="mobile-hero-content relative z-10 mx-auto flex max-w-[430px] flex-col items-center text-center">
          <p className="mobile-hero-wordmark font-['Sora:Regular',sans-serif] text-[44px] leading-none tracking-[-2px]">
            CODE MAKERS
          </p>
          <h1 className="mobile-hero-heading mx-auto mt-5 max-w-[390px] font-['Sora:Regular',sans-serif] text-[24px] leading-[1.28] tracking-[-0.6px]">
            Crie com IA. Encontre com a Code Hunter. Venda com a nossa
            metodologia — e coloque dinheiro no bolso.
          </h1>
          <ShinyCta
            aria-label="Entrar no grupo oficial do lançamento"
            className="mobile-hero-card"
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noreferrer"
          >
            ENTRAR NO GRUPO OFICIAL
          </ShinyCta>
        </div>

        <div className="mobile-hero-robot absolute bottom-[-18px] left-1/2 z-[5] aspect-[974/945] h-[clamp(360px,45svh,430px)] max-w-none -translate-x-1/2">
          <div className="hero-robot-entry size-full">
            <img
              alt="Robô abstrato da Code Makers"
              className="size-full max-w-none object-contain"
              src={IMAGES.heroRobot}
            />
          </div>
        </div>
      </section>

      <ConversionRail />
      <CourseSalesJourney />

      <section
        id="contact"
        className="mobile-footer-gradient px-5 pb-10 pt-20 text-center"
      >
        <FadeUp>
          <h2 className="font-['Sora:Regular',sans-serif] text-[42px] leading-[1.08] tracking-[-1.8px]">
            Seu próximo projeto precisa virar venda
          </h2>
          <p className="mx-auto mt-5 max-w-[330px] text-[15px] leading-6">
            Entre no grupo para acessar a jornada completa: criar com IA,
            encontrar clientes com a Code Hunter e vender com o nosso método.
          </p>
          <a
            className="mt-8 inline-flex min-h-12 items-center rounded-full bg-black px-6 font-medium text-white"
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noreferrer"
          >
            Entrar no grupo oficial
          </a>
        </FadeUp>

        <FadeUp
          blur
          delay={0.08}
          className="mt-24 border-t border-white/20 pt-8 text-left text-white"
        >
          <p className="inline-flex items-center gap-3 font-['Sora:Regular',sans-serif] text-[28px]">
            <img
              aria-hidden="true"
              alt=""
              className="h-10 w-auto object-contain brightness-0 invert"
              src={IMAGES.symbol}
            />
            <span>Code Makers</span>
          </p>
          <p className="mt-5 max-w-[300px] text-sm leading-6 text-white/72">
            Crie com IA. Encontre com a Code Hunter. Venda com método.
          </p>
          <p className="mt-12 border-t border-white/15 pt-6 text-center text-xs text-white/55">
            © 2026 Code Makers. Todos os direitos reservados.
          </p>
        </FadeUp>
      </section>
    </main>
  );
}
