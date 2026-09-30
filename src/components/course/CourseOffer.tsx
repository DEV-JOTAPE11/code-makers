"use client";

import { BlurRevealText } from "@/components/BlurRevealText";
import { StageReveal } from "@/components/motion-primitives";
import { WHATSAPP_GROUP_URL } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

const ARSENAL = [
  "Método Code Flow: Site Fora da Curva",
  "Prompt mestre pronto para copiar e adaptar",
  "Biblioteca de referências e estilos premium",
  "Passo a passo para publicar com domínio próprio",
];

/** Oferta do método: painel azul + console do prompt Code Flow. */
export function CourseOffer({
  desktop,
  container,
}: {
  desktop: boolean;
  container: string;
}) {
  return (
    <section
      id="pricing"
      className={`course-master-offer order-3 bg-[#080808] text-white ${
        desktop ? "w-[1920px] px-[210px] py-[150px]" : "px-4 py-24"
      }`}
    >
      <div className={container}>
        <StageReveal>
          <div
            className={`course-offer-frame relative overflow-hidden rounded-[26px] border border-[#5895ff]/30 ${
              desktop ? "grid min-h-[680px] grid-cols-[0.9fr_1.1fr]" : ""
            }`}
          >
            <div
              className={`relative z-10 flex flex-col bg-[#0041b0] ${
                desktop ? "p-14" : "p-7 pb-12"
              }`}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  alt=""
                  className="size-full object-cover opacity-28 mix-blend-screen"
                  src={IMAGES.redTexture}
                />
              </div>

              <div className="relative z-10 flex h-full flex-col text-center lg:text-left">
                <BlurRevealText
                  className={`font-['Sora:Regular',sans-serif] leading-[0.95] tracking-[-0.06em] ${
                    desktop ? "text-[76px]" : "text-[52px]"
                  }`}
                >
                  Um prompt.
                  <br />
                  Um site fora da curva.
                </BlurRevealText>
                <p className="mx-auto mt-7 max-w-[520px] text-[17px] leading-7 text-white/72 lg:mx-0">
                  Estrutura, direção de arte e publicação. Tudo o que você
                  precisa para gerar sites que ninguém acredita que foram feitos
                  com IA.
                </p>

                <div className="mt-auto pt-16">
                  <p
                    className={`font-['Sora:Regular',sans-serif] tracking-[-0.045em] ${
                      desktop
                        ? "text-[52px]"
                        : "mx-auto max-w-[310px] text-[26px] leading-[1.12]"
                    }`}
                  >
                    SITE FORA DA CURVA.
                  </p>
                </div>
              </div>
            </div>

            <div className={`cta-fit-box relative z-10 bg-[#101010] ${desktop ? "p-14" : "p-7"}`}>
              <div className="text-center">
                <div className="flow-console rounded-[20px] border border-[#5895ff]/30 bg-black/35 p-5 text-left">
                  <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                    <span className="flex items-center gap-2 font-['Inter:Medium',sans-serif] text-[11px] uppercase tracking-[0.18em] text-[#70a4ff]">
                      <span className="flow-live-dot size-2 rounded-full bg-[#4388ff]" />
                      Prompt Code Flow
                    </span>
                    <span className="rounded-full border border-white/12 bg-white/[0.055] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-white/55">
                      1 comando
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-[92px_1fr] items-center gap-5 sm:grid-cols-[112px_1fr]">
                    <div aria-hidden="true" className="flow-radar">
                      <span className="flow-radar-sweep" />
                      <span className="flow-radar-target flow-radar-target-a" />
                      <span className="flow-radar-target flow-radar-target-b" />
                    </div>
                    <div>
                      <p className="font-['Sora:Regular',sans-serif] text-[22px] leading-[1.05] tracking-[-0.04em] text-white">
                        Um prompt. Site completo.
                      </p>
                      <p className="mt-3 text-[13px] leading-5 text-white/52">
                        Cole, gere e publique. A IA faz o trabalho pesado, o
                        método garante o resultado.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mx-auto mt-4 max-w-[520px] text-[16px] leading-7 text-white/58">
                  Você não entra só para assistir. Entra para sair com um site
                  fora da curva no ar.
                </p>
              </div>

              <div className="mt-9 grid gap-3">
                {ARSENAL.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-[13px] border border-white/10 bg-white/[0.035] px-5 py-4"
                  >
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#0041b0] text-[15px]">
                      ✓
                    </span>
                    <span className="text-[16px] text-white/82">{item}</span>
                  </div>
                ))}
              </div>

              <a
                className="course-enroll-button mt-7 flex min-h-16 w-full items-center justify-center gap-5 rounded-full bg-white px-7 text-center cta-fit [--cta-fit-max:16px] [--cta-fit-reserve:92px] font-['Inter:Medium',sans-serif] text-[16px] font-semibold text-[#171717] shadow-[0_16px_45px_rgba(255,255,255,0.1)]"
                href={WHATSAPP_GROUP_URL}
                target="_blank"
                rel="noreferrer"
              >
                APRENDA A CRIAR SITES FORA DA CURVA! <span aria-hidden="true">↗</span>
              </a>
              <p className="mt-5 text-center text-[12px] leading-5 text-white/38">
                Você será direcionado para o grupo do Code Flow no WhatsApp.
              </p>
            </div>
          </div>
        </StageReveal>
      </div>
    </section>
  );
}
