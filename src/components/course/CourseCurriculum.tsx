"use client";

import { SectionEyebrow } from "@/components/SectionEyebrow";
import { StageReveal } from "@/components/motion-primitives";
import { COURSE_MODULES } from "@/data/site";
import { IMAGES } from "@/lib/images";

/** Os quatro módulos, alternando imagem e texto em linhas cheias. */
export function CourseCurriculum({
  desktop,
  container,
}: {
  desktop: boolean;
  container: string;
}) {
  return (
    <section
      id="services"
      className={`course-curriculum order-2 text-[#171312] ${
        desktop ? "w-[1920px] px-[210px] py-[150px]" : "px-4 py-24"
      }`}
    >
      <div className={`${container} relative z-10`}>
        <StageReveal>
          <div
            className={`course-curriculum-header ${
              desktop ? "grid grid-cols-[1.08fr_0.52fr] items-end gap-[120px]" : ""
            }`}
          >
            <div className="text-center lg:text-left">
              <SectionEyebrow>Da ideia ao dinheiro</SectionEyebrow>
              <h2
                className={`mx-auto max-w-[980px] font-['Sora:Regular',sans-serif] leading-[0.95] tracking-[-0.06em] lg:mx-0 ${
                  desktop ? "text-[82px]" : "text-[49px]"
                }`}
              >
                4 entregas. Da primeira demo às empresas certas.
              </h2>
            </div>

            <div className={`course-route-summary ${desktop ? "mb-1" : "mt-9"}`}>
              <div className="course-route-summary-head flex items-center justify-between pb-5">
                <span className="course-route-kicker font-['Inter:Medium',sans-serif] text-[10px] uppercase tracking-[0.2em]">
                  Aprenda fazendo
                </span>
                <span className="course-route-count font-mono text-[13px]">
                  01 — 04
                </span>
              </div>
              <p className="course-route-text pt-5 font-['Inter:Regular',sans-serif] text-[16px] leading-7">
                Cada etapa termina com algo que você pode mostrar, oferecer e
                vender. Nada fica preso no tutorial.
              </p>
            </div>
          </div>
        </StageReveal>

        <div id="projects" className="course-module-roadmap mt-20">
          {COURSE_MODULES.map((module, index) => (
            <StageReveal
              key={module.phase}
              className="course-module-stage"
              delay={index * 0.045}
            >
              <article className="course-module-row group">
                <div className="course-module-visual">
                  <img
                    alt={`Ilustração da etapa ${module.phase.toLowerCase()}`}
                    className="course-module-artwork size-full object-cover"
                    src={module.image}
                  />
                  <div className="course-module-image-shade" />
                  <span className="course-module-image-label">
                    0{index + 1} / {module.phase}
                  </span>
                  <span className="course-module-brand" aria-hidden="true">
                    <img
                      alt=""
                      className="course-module-brand-symbol brightness-0 invert"
                      src={IMAGES.symbol}
                    />
                    <span>CODE MAKERS</span>
                  </span>
                </div>

                <div className="course-module-copy">
                  <div className="course-module-copy-body">
                    <div className="course-module-meta">
                      <span>MÓDULO 0{index + 1}</span>
                      <span>ETAPA {module.phase}</span>
                    </div>
                    <h3 className="course-module-title">{module.title}</h3>
                    <p className="course-module-description">{module.text}</p>
                  </div>

                  <div className="course-module-outcome">
                    <span className="course-module-outcome-label">
                      Entrega do módulo
                    </span>
                    <span className="course-module-outcome-text">
                      {module.outcome}
                    </span>
                    <span
                      aria-hidden="true"
                      className="course-module-outcome-arrow"
                    >
                      ↗
                    </span>
                  </div>
                </div>
              </article>
            </StageReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
