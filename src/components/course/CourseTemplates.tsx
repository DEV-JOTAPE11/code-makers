"use client";

import { BlurRevealText } from "@/components/BlurRevealText";
import { StageReveal } from "@/components/motion-primitives";
import { WHATSAPP_GROUP_URL } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

const STATS = [
  { value: "+20", label: "templates nível awards" },
  { value: "R$ 5 mil+", label: "valor de mercado de cada um" },
  { value: "1 prompt", label: "para adaptar ao seu cliente" },
];

const NICHES = [
  "Hotelaria",
  "Suplementos",
  "Barbearia",
  "Eletrônicos",
  "Gastronomia",
  "Provedor de internet",
];

/** Bônus dos templates: copy de valor à esquerda, vitrine de telas à direita.
 *  Mesmo fundo claro do manifesto, que vem logo depois. */
export function CourseTemplates({
  desktop,
  container,
}: {
  desktop: boolean;
  container: string;
}) {
  return (
    <section
      id="templates"
      aria-label="Templates inclusos no método Code Flow"
      className={`course-templates order-0 relative overflow-hidden ${
        desktop ? "w-[1920px] px-[210px] pt-[150px] pb-[120px]" : "px-5 pt-24 pb-16"
      }`}
    >
      <div className={`${container} relative z-10`}>
        <div
          className={
            desktop ? "grid grid-cols-[760px_1fr] items-center gap-6" : ""
          }
        >
          <div className="text-center lg:text-left">
            <StageReveal>
              <span className="course-templates-eyebrow inline-flex items-center gap-2.5 rounded-full border border-[#0041b0]/20 bg-white/70 px-4 py-2 font-['Inter:Medium',sans-serif] text-[11px] uppercase tracking-[0.18em] text-[#0041b0]">
                <span aria-hidden="true" className="course-templates-dot" />
                Bônus incluso no método
              </span>
            </StageReveal>

            <BlurRevealText
              className={`mt-7 font-['Sora:Regular',sans-serif] leading-[0.98] tracking-[-0.055em] text-[#151515] ${
                desktop ? "text-[72px]" : "text-[44px]"
              }`}
            >
              +20 sites nível awards.
              <span className="mt-3 block text-[#0041b0]">
                Prontos para vender.
              </span>
            </BlurRevealText>

            <StageReveal className="cta-fit-box">
              <p
                className={`mx-auto mt-8 max-w-[600px] font-['Inter:Regular',sans-serif] leading-8 text-[#5c5652] lg:mx-0 ${
                  desktop ? "text-[19px]" : "text-[17px]"
                }`}
              >
                Templates com direção de arte, copy e animação de agência, do
                tipo que se cobra{" "}
                <mark className="course-templates-mark">
                  mais de R$ 5 mil
                </mark>{" "}
                para entregar. Você escolhe o nicho, adapta com um prompt e
                publica no mesmo dia.
              </p>

              <ul
                className={`mx-auto mt-7 flex max-w-[600px] flex-wrap gap-2 lg:mx-0 ${
                  desktop ? "" : "justify-center"
                }`}
              >
                {NICHES.map((niche) => (
                  <li
                    key={niche}
                    className="rounded-full border border-black/10 bg-white/60 px-3.5 py-1.5 font-['Inter:Medium',sans-serif] text-[12px] text-[#3d3835]"
                  >
                    {niche}
                  </li>
                ))}
                <li className="rounded-full bg-[#0041b0] px-3.5 py-1.5 font-['Inter:Medium',sans-serif] text-[12px] text-white">
                  + outros nichos
                </li>
              </ul>

              <dl
                className={`mt-10 grid grid-cols-3 border-y border-black/10 text-left ${
                  desktop ? "max-w-[600px]" : ""
                }`}
              >
                {STATS.map((stat, index) => (
                  <div
                    key={stat.value}
                    className={`flex flex-col py-5 ${
                      index > 0 ? "border-l border-black/10 pl-3 lg:pl-6" : "pr-3"
                    }`}
                  >
                    <dt className="order-2 mt-2 font-['Inter:Regular',sans-serif] text-[12px] leading-[1.35] text-[#7a736e]">
                      {stat.label}
                    </dt>
                    <dd
                      className={`font-['Sora:Regular',sans-serif] leading-none tracking-[-0.045em] whitespace-nowrap text-[#151515] ${
                        desktop ? "text-[34px]" : "text-[clamp(17px,5.2vw,22px)]"
                      }`}
                    >
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div
                className={`mt-9 flex flex-col gap-4 ${
                  desktop ? "flex-row items-center gap-7" : "items-center"
                }`}
              >
                <a
                  className="course-primary-cta inline-flex min-h-14 items-center gap-6 rounded-full bg-[#171717] px-8 cta-fit [--cta-fit-max:15px] [--cta-fit-reserve:104px] [--cta-fit-ratio:13.6] font-['Inter:Medium',sans-serif] text-[15px] font-medium text-white"
                  href={WHATSAPP_GROUP_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  QUERO OS +20 TEMPLATES <span aria-hidden="true">↗</span>
                </a>
                <p
                  className={`font-['Inter:Regular',sans-serif] text-[13px] leading-5 text-[#7a736e] ${
                    desktop ? "border-l border-black/10 pl-7" : "text-center"
                  }`}
                >
                  <span className="block text-[11px] uppercase tracking-[0.16em]">
                    Valor somado dos templates
                  </span>
                  <span className="mt-1 block">
                    <s className="text-[15px] text-[#151515]/55 decoration-[#0041b0]/70">
                      R$ 100 mil+
                    </s>{" "}
                    <strong className="font-['Inter:Semi_Bold',sans-serif] text-[15px] font-semibold text-[#0041b0]">
                      Incluso no método.
                    </strong>
                  </span>
                </p>
              </div>
            </StageReveal>
          </div>

          <StageReveal
            delay={0.1}
            className={`relative ${
              desktop ? "-mr-[150px]" : "-mx-5 mt-14"
            }`}
          >
            <div aria-hidden="true" className="course-templates-glow" />
            <img
              alt="Templates de sites Code Flow em notebook, tablets e celulares: hotel, suplementos, barbearia, loja de iPhone, churrascaria e provedor de internet"
              className={`course-templates-showcase relative block h-auto max-w-none ${
                desktop ? "w-[860px]" : "mx-auto w-full"
              }`}
              loading="lazy"
              decoding="async"
              src={IMAGES.templates}
            />
            <div
              className={`course-templates-seal absolute z-10 ${
                desktop ? "left-[40px] top-[96px]" : "left-6 top-0 scale-[0.78] origin-top-left"
              }`}
            >
              <span className="block font-['Inter:Medium',sans-serif] text-[10px] uppercase tracking-[0.2em] text-white/70">
                Cada template
              </span>
              <span className="mt-1 block font-['Sora:Regular',sans-serif] text-[30px] leading-none tracking-[-0.05em] text-white">
                R$ 5.000+
              </span>
              <span className="mt-1.5 block font-['Inter:Medium',sans-serif] text-[11px] text-[#bcd3ff]">
                no preço de agência
              </span>
            </div>
          </StageReveal>
        </div>
      </div>
    </section>
  );
}
