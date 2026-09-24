"use client";

import { SectionEyebrow } from "@/components/SectionEyebrow";
import { StageReveal } from "@/components/motion-primitives";
import { IMAGES } from "@/lib/images";

const BEFORE = [
  "Salva tutorial e não executa",
  "Projeto com cara de template barato",
  "Trava na hora de cobrar",
  "Prospecção aleatória e sem contexto",
];

const AFTER = [
  "Rota rápida da ideia à demo",
  "Site ou sistema que prova valor",
  "Clientes qualificados na mira",
  "Proposta pronta para negociar",
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
        <StageReveal className="text-center">
          <SectionEyebrow centered>A virada</SectionEyebrow>
          <h2
            className={`mx-auto max-w-[1320px] font-['Sora:Regular',sans-serif] leading-[0.98] tracking-[-0.05em] text-[#171717] ${
              desktop ? "text-[68px]" : "text-[42px]"
            }`}
          >
            Pare de criar sem destino e prospectar sem critério.
          </h2>
        </StageReveal>

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
              <span className="font-['Inter:Medium',sans-serif] text-[11px] uppercase tracking-[0.18em] text-white/35">
                Preso no tutorial
              </span>
              <h3
                className={`mt-14 font-['Sora:Regular',sans-serif] leading-none tracking-[-0.045em] text-white/42 ${
                  desktop ? "text-[66px]" : "text-[43px]"
                }`}
              >
                Mais uma aula.
                <br />
                Mais uma ferramenta.
                <br />
                Zero pipeline.
              </h3>
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
                <span className="font-['Inter:Medium',sans-serif] text-[11px] uppercase tracking-[0.18em] text-white/60">
                  Em modo Code Maker
                </span>
                <h3
                  className={`mt-14 font-['Sora:Regular',sans-serif] leading-none tracking-[-0.045em] ${
                    desktop ? "text-[66px]" : "text-[43px]"
                  }`}
                >
                  Solução pronta.
                  <br />
                  Oferta afiada.
                  <br />
                  Code Hunter ativa.
                </h3>
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
