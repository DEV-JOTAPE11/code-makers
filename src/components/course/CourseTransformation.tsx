"use client";

import { BlurRevealText } from "@/components/BlurRevealText";
import { StageReveal } from "@/components/motion-primitives";
import { IMAGES } from "@/lib/images";

const BEFORE = [
  "Prompt vago, resultado genérico",
  "Site com cara de template de IA",
  "Horas corrigindo detalhe por detalhe",
  "Vergonha de mostrar o resultado",
];

const AFTER = [
  "Prompt estruturado do início ao fim",
  "Design e animações de nível agência",
  "Site completo gerado de primeira",
  "Projeto pronto para mostrar ou vender",
];

/** Comparação antes/depois: o cartão escuro e o cartão vermelho. */
export function CourseTransformation({
  desktop,
  container,
}: {
  desktop: boolean;
  container: string;
}) {
  return (
    <section
      className={`course-transformation order-4 ${
        desktop ? "w-[1920px] px-[210px] py-[150px]" : "px-4 py-24"
      }`}
    >
      <div className={container}>
        <div className="text-center">
          <BlurRevealText
            className={`mx-auto max-w-[1320px] font-['Sora:Regular',sans-serif] leading-[0.98] tracking-[-0.05em] text-[#171717] ${
              desktop ? "text-[68px]" : "text-[42px]"
            }`}
          >
            Pare de aceitar o site genérico que a IA te entrega.
          </BlurRevealText>
        </div>

        <div
          className={`mt-16 grid overflow-hidden rounded-[24px] border border-black/10 ${
            desktop ? "grid-cols-2" : "grid-cols-1"
          }`}
        >
          <StageReveal className="h-full">
            <article
              className={`h-full bg-[#111] text-white ${
                desktop ? "min-h-[650px] p-14" : "min-h-[520px] p-7"
              }`}
            >
              <BlurRevealText
                as="h3"
                className={`font-['Sora:Regular',sans-serif] leading-none tracking-[-0.045em] text-white/42 ${
                  desktop ? "text-[66px]" : "text-[43px]"
                }`}
              >
                Mais um prompt.
                <br />
                Mais um template.
                <br />
                Mesmo resultado.
              </BlurRevealText>
              <ul className="mt-16 space-y-4 text-[15px] text-white/50">
                {BEFORE.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border-t border-white/10 pt-4"
                  >
                    <span>×</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </StageReveal>

          <StageReveal className="h-full" delay={0.08}>
            <article
              className={`course-after-card relative h-full overflow-hidden bg-[#0041b0] text-white ${
                desktop ? "min-h-[650px] p-14" : "min-h-[560px] p-7"
              }`}
            >
              <img
                alt=""
                className="absolute inset-0 size-full object-cover opacity-25 mix-blend-screen"
                src={IMAGES.redTexture}
              />
              <div className="relative z-10">
                <BlurRevealText
                  as="h3"
                  className={`font-['Sora:Regular',sans-serif] leading-none tracking-[-0.045em] ${
                    desktop ? "text-[66px]" : "text-[43px]"
                  }`}
                >
                  Um prompt.
                  <br />
                  Um site.
                  <br />
                  Fora da curva.
                </BlurRevealText>
                <ul className="mt-16 space-y-4 text-[15px] text-white/82">
                  {AFTER.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 border-t border-white/20 pt-4"
                    >
                      <span>+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </StageReveal>
        </div>
      </div>
    </section>
  );
}
