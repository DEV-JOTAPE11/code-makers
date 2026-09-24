"use client";

import { SectionEyebrow } from "@/components/SectionEyebrow";
import { StageReveal } from "@/components/motion-primitives";
import { WHATSAPP_GROUP_URL } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

const ARSENAL = [
  "Método Code Flow para criar soluções com IA",
  "Code Hunter para encontrar clientes qualificados",
  "Playbook de venda com oferta, abordagem e fechamento",
  "Kit de execução com prompts, scripts e proposta",
];

/** Oferta do lançamento: painel vermelho + console da Code Hunter. */
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
                <SectionEyebrow light>O ecossistema completo</SectionEyebrow>
                <h2
                  className={`font-['Sora:Regular',sans-serif] leading-[0.95] tracking-[-0.06em] ${
                    desktop ? "text-[76px]" : "text-[52px]"
                  }`}
                >
                  Crie.
                  <br />
                  Encontre. Venda.
                </h2>
                <p className="mx-auto mt-7 max-w-[520px] text-[17px] leading-7 text-white/72 lg:mx-0">
                  IA para construir. Code Hunter para encontrar. Metodologia
                  para fechar. Um único caminho para transformar habilidade em
                  dinheiro no bolso.
                </p>

                <div className="mt-auto pt-16">
                  <p className="text-[11px] uppercase tracking-[0.17em] text-white/55">
                    Da ideia ao dinheiro no bolso.
                  </p>
                  <p
                    className={`mt-2 font-['Sora:Regular',sans-serif] tracking-[-0.045em] ${
                      desktop
                        ? "text-[52px]"
                        : "mx-auto max-w-[310px] text-[26px] leading-[1.12]"
                    }`}
                  >
                    VOCÊ CRIA. VOCÊ ENCONTRA. VOCÊ VENDE.
                  </p>
                </div>
              </div>
            </div>

            <div className={`relative z-10 bg-[#101010] ${desktop ? "p-14" : "p-7"}`}>
              <div className="text-center">
                <p className="font-['Inter:Medium',sans-serif] text-[11px] font-medium uppercase tracking-[0.19em] text-[#70a4ff]">
                  Tudo o que entra no seu arsenal
                </p>

                <div className="code-hunter-console mt-6 rounded-[20px] border border-[#5895ff]/30 bg-black/35 p-5 text-left">
                  <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                    <span className="flex items-center gap-2 font-['Inter:Medium',sans-serif] text-[11px] uppercase tracking-[0.18em] text-[#70a4ff]">
                      <span className="code-hunter-live-dot size-2 rounded-full bg-[#4388ff]" />
                      Code Hunter
                    </span>
                    <span className="rounded-full border border-white/12 bg-white/[0.055] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-white/55">
                      Nova ferramenta
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-[92px_1fr] items-center gap-5 sm:grid-cols-[112px_1fr]">
                    <div aria-hidden="true" className="code-hunter-radar">
                      <span className="code-hunter-radar-sweep" />
                      <span className="code-hunter-radar-target code-hunter-radar-target-a" />
                      <span className="code-hunter-radar-target code-hunter-radar-target-b" />
                    </div>
                    <div>
                      <p className="font-['Sora:Regular',sans-serif] text-[22px] leading-[1.05] tracking-[-0.04em] text-white">
                        Clientes qualificados na mira.
                      </p>
                      <p className="mt-3 text-[13px] leading-5 text-white/52">
                        Busque empresas qualificadas e coloque oportunidades
                        reais no seu radar.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mx-auto mt-4 max-w-[520px] text-[16px] leading-7 text-white/58">
                  Você não entra apenas para aprender. Entra para executar o
                  ciclo completo e chegar à venda.
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
                className="course-enroll-button mt-7 flex min-h-16 w-full items-center justify-center gap-5 rounded-full bg-white px-7 text-center font-['Inter:Medium',sans-serif] text-[16px] font-semibold text-[#171717] shadow-[0_16px_45px_rgba(255,255,255,0.1)]"
                href={WHATSAPP_GROUP_URL}
                target="_blank"
                rel="noreferrer"
              >
                ENTRAR NO GRUPO OFICIAL <span aria-hidden="true">↗</span>
              </a>
              <p className="mt-5 text-center text-[12px] leading-5 text-white/38">
                Você será direcionado para o grupo do lançamento no WhatsApp.
              </p>
            </div>
          </div>
        </StageReveal>
      </div>
    </section>
  );
}
