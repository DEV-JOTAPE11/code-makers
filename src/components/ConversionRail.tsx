"use client";

import { motion } from "motion/react";

import { BlurRevealText } from "@/components/BlurRevealText";
import { GroupCta } from "@/components/GroupCta";
import { LiquidMetalBorder } from "@/components/LiquidMetalBorder";
import { EASE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

/** "O método Code Flow": manchete + cartão de decisão + mãos. */
export function ConversionRail({ desktop = false }: { desktop?: boolean }) {
  return (
    <section
      aria-label="O método Code Flow"
      className={`conversion-rail relative overflow-hidden bg-[#080808] text-white ${
        desktop
          ? "conversion-rail-desktop flex w-[1920px] flex-col px-[210px] pt-[88px] pb-[52px]"
          : "px-4 py-24"
      }`}
    >
      {/* Fundo da hero espelhado na vertical: o rodapé escuro da hero encosta
          no topo escuro daqui, e as duas seções parecem uma só. No mobile
          entram também as camadas animadas que a hero mobile usa. */}
      <div
        aria-hidden="true"
        className={`conversion-rail-mirror pointer-events-none absolute inset-0 -z-10 ${
          desktop ? "" : "bg-[#041025]"
        }`}
      >
        <img
          alt=""
          className={`absolute inset-0 size-full object-cover ${desktop ? "" : "opacity-90"}`}
          src={IMAGES.heroBackground}
        />
        {!desktop && (
          <>
            <div className="hero-gradient-motion absolute inset-0" />
            <div className="hero-gradient-shadow-motion absolute inset-0" />
          </>
        )}
      </div>

      <div
        aria-hidden="true"
        className="conversion-rail-signal absolute inset-y-0 w-[34%]"
      />

      <div
        className={`relative z-10 mx-auto ${
          desktop ? "flex min-h-0 w-[1500px] flex-1 flex-col" : "max-w-[430px]"
        }`}
      >
        <div
          className={`conversion-rail-hero text-center lg:text-left ${
            desktop ? "grid grid-cols-[1.15fr_0.85fr] items-center gap-24" : ""
          }`}
        >
          <div>
            <BlurRevealText
              className={`font-['Sora:Regular',sans-serif] font-normal leading-[0.98] tracking-[-0.055em] ${
                desktop ? "max-w-[920px] text-[78px]" : "text-[46px]"
              }`}
            >
              Um prompt. Um site que ninguém acredita que saiu da IA.
              <span className="mt-3 block text-[#4388ff]">
                Esse é o método Code Flow.
              </span>
            </BlurRevealText>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.72, ease: EASE }}
            className={`relative isolate ${desktop ? "" : "mt-9"}`}
          >
            <div aria-hidden="true" className="conversion-decision-glow" />
            <div className="conversion-decision-card liquid-glass">
              <LiquidMetalBorder />
              <span className="font-['Inter:Medium',sans-serif] text-[10px] uppercase tracking-[0.2em] text-[#70a4ff]">
                SITE FORA DA CURVA
              </span>
              <p className="mt-5 font-['Sora:Regular',sans-serif] text-[24px] leading-[1.25] tracking-[-0.035em] text-white">
                Do prompt ao site no ar, sem escrever uma linha de código.
              </p>
              <p className="mt-4 font-['Inter:Regular',sans-serif] text-[15px] leading-6 text-white/55">
                Você aprende a estrutura exata de prompt que gera sites com
                design, copy e animações de nível agência logo de primeira.
              </p>
              <GroupCta className="mt-7">
                APRENDA A CRIAR SITES FORA DA CURVA!
              </GroupCta>
              <p className="mt-4 text-center font-['Inter:Medium',sans-serif] text-[10px] uppercase tracking-[0.16em] text-white/35">
                Estruturar • gerar • publicar
              </p>
            </div>
          </motion.div>
        </div>

        {/* No desktop a seção tem a altura da janela e as mãos ocupam o que
            sobra dela, sem distorcer; os braços cortados somem num fade
            lateral. No mobile a imagem fica maior que a tela para as mãos não
            ficarem minúsculas, e o fade vai nas bordas da tela. */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE }}
          className={`conversion-hands relative left-1/2 -translate-x-1/2 ${
            desktop
              ? "mt-8 flex min-h-0 w-[1920px] flex-1 justify-center"
              : "conversion-hands-fade mt-16 w-screen"
          }`}
        >
          <div aria-hidden="true" className="conversion-hands-glow" />
          <img
            alt="Duas mãos metálicas azuis quase se tocando"
            className={
              desktop
                ? "conversion-hands-fade relative block h-full w-auto max-w-full object-contain"
                : "relative left-1/2 block h-auto w-[130%] max-w-none -translate-x-1/2"
            }
            src={IMAGES.hands}
          />
        </motion.div>

        {desktop && (
          <div className="mt-4 flex justify-end font-['Inter:Medium',sans-serif] text-[11px] uppercase tracking-[0.16em] text-white/38">
            Um prompt. Um site fora da curva. Método Code Flow.
          </div>
        )}
      </div>
    </section>
  );
}
