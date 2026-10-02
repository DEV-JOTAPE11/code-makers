"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

import { BlurRevealText } from "@/components/BlurRevealText";
import { StageReveal } from "@/components/motion-primitives";
import { ACCESS_CTA, METHOD } from "@/data/site";
import { IMAGES } from "@/lib/images";
import { navigateToSection } from "@/lib/navigateToSection";

gsap.registerPlugin(ScrollTrigger);

type Step = (typeof METHOD.steps)[number];

function StepCard({
  step,
  active,
  desktop,
}: {
  step: Step;
  active: boolean;
  desktop: boolean;
}) {
  const image = (
    <div
      className={
        desktop
          ? "pointer-events-none absolute right-[-70px] top-[-86px] z-0 w-[270px]"
          : "pointer-events-none relative -mx-[44px] -mt-20 mb-1"
      }
    >
      <div aria-hidden="true" className="cf-method-glow" />
      <img
        alt={step.imageAlt}
        className={`cf-method-object relative block h-auto ${
          desktop ? "w-full" : "mx-auto w-[min(290px,78%)]"
        }`}
        src={IMAGES.placeholders.method[step.image]}
        width={1200}
        height={1200}
        loading="lazy"
        decoding="async"
      />
    </div>
  );

  return (
    <article
      data-active={active || undefined}
      className={`cf-method-card relative rounded-[24px] border bg-white/60 transition-[border-color,box-shadow] duration-500 ${
        active ? "border-[#0041b0]/40" : "border-black/10"
      } ${desktop ? "p-12 pr-[230px]" : "mt-20 px-6 pb-7 pt-0"}`}
    >
      {desktop && image}
      <span
        aria-hidden="true"
        className={`cf-method-ghost pointer-events-none absolute font-['Sora:Regular',sans-serif] leading-none tracking-[-0.08em] select-none ${
          desktop ? "left-8 top-2 text-[210px]" : "right-3 top-3 text-[120px]"
        }`}
      >
        {step.number}
      </span>

      {!desktop && image}

      <div className="relative z-10">
        <p className="font-['Inter:Medium',sans-serif] text-[11px] font-medium uppercase tracking-[0.18em] text-[#0041b0]">
          <span className="mr-2 font-mono text-[#151515]/45">{step.number}</span>
          {step.verb}
        </p>
        <h3
          className={`mt-4 font-['Sora:Regular',sans-serif] leading-[1.08] tracking-[-0.04em] text-[#151515] ${
            desktop ? "text-[34px]" : "text-[26px]"
          }`}
        >
          {step.title}
        </h3>
        <p
          className={`mt-4 font-['Inter:Regular',sans-serif] text-[#5c5652] ${
            desktop ? "text-[17px] leading-7" : "text-[16px] leading-7"
          }`}
        >
          {step.description}
        </p>
        <p className="cf-method-deliverable mt-6 inline-flex items-start gap-2.5 rounded-[14px] bg-[#0041b0]/[0.08] px-4 py-2.5 text-left font-['Inter:Regular',sans-serif] text-[14px] leading-5 text-[#151515]">
          <span aria-hidden="true" className="mt-[6px] size-2 shrink-0 rounded-full bg-[#0041b0]" />
          <span>
            <strong className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0041b0]">
              {METHOD.deliverableLabel}
            </strong>{" "}
            {step.deliverable}
          </span>
        </p>
      </div>
    </article>
  );
}

/** O método: as 4 etapas (com trilho de progresso no desktop) e como
 *  funciona o acesso. */
export function CourseMethod({
  desktop,
  container,
}: {
  desktop: boolean;
  container: string;
}) {
  const cardsRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!desktop) return;
    const cards = cardsRef.current;
    const fill = fillRef.current;
    if (!cards || !fill) return;

    // Sem pin: a coluna da esquerda é `position: sticky` e o trilho só
    // acompanha a rolagem da lista de cards.
    const ctx = gsap.context(() => {
      gsap.fromTo(
        fill,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: cards,
            start: "top 55%",
            end: "bottom 65%",
            scrub: 0.6,
          },
        },
      );

      Array.from(cards.children).forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 60%",
          end: "bottom 60%",
          onToggle: (self) => {
            if (self.isActive) setActive(index);
          },
        });
      });
    });

    return () => ctx.revert();
  }, [desktop]);

  const cta = (
    <button
      type="button"
      className="course-primary-cta inline-flex min-h-14 items-center gap-6 rounded-full bg-[#171717] px-8 cta-fit [--cta-fit-max:15px] [--cta-fit-reserve:104px] [--cta-fit-ratio:15] font-['Inter:Medium',sans-serif] text-[15px] font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0041b0]"
      onClick={() => navigateToSection("pricing")}
    >
      {ACCESS_CTA} <span aria-hidden="true">↗</span>
    </button>
  );

  const intro = (
    <>
      <StageReveal>
        <p
          className={`font-['Inter:Medium',sans-serif] font-medium uppercase tracking-[0.18em] text-[#0041b0] ${
            desktop ? "text-[11px]" : "text-[10px]"
          }`}
        >
          {METHOD.eyebrow}
        </p>
      </StageReveal>
      <BlurRevealText
        className={`mt-6 font-['Sora:Regular',sans-serif] leading-[0.98] tracking-[-0.055em] text-[#151515] ${
          desktop ? "text-[72px]" : "text-[44px]"
        }`}
      >
        {METHOD.title[0]}
        <span className="mt-3 block text-[#0041b0]">{METHOD.title[1]}</span>
      </BlurRevealText>
      <StageReveal>
        <p
          className={`mt-8 font-['Inter:Regular',sans-serif] leading-8 text-[#5c5652] ${
            desktop ? "max-w-[500px] text-[19px]" : "mx-auto max-w-[400px] text-[17px]"
          }`}
        >
          {METHOD.text}
        </p>
      </StageReveal>
    </>
  );

  const rail = (
    <ol aria-label="Etapas do método" className="cf-method-rail relative mt-12 grid gap-7 pl-9">
      <span aria-hidden="true" className="cf-method-rail-track" />
      <span ref={fillRef} aria-hidden="true" className="cf-method-rail-fill" />
      {METHOD.steps.map((step, index) => {
        const lit = index <= active;
        return (
          <li
            key={step.number}
            aria-current={index === active ? "step" : undefined}
            className="relative flex items-baseline gap-3"
          >
            <span
              aria-hidden="true"
              className={`cf-method-rail-dot ${lit ? "is-lit" : ""}`}
            />
            <span className="font-mono text-[12px] text-[#151515]/45">{step.number}</span>
            <span
              className={`font-['Inter:Medium',sans-serif] text-[13px] font-medium uppercase tracking-[0.16em] transition-colors duration-500 ${
                index === active ? "text-[#0041b0]" : "text-[#151515]/55"
              }`}
            >
              {step.verb}
            </span>
          </li>
        );
      })}
    </ol>
  );

  const access = (
    <div className={desktop ? "mt-[140px]" : "mt-16"}>
      <StageReveal>
        <h3
          className={`font-['Sora:Regular',sans-serif] leading-none tracking-[-0.04em] text-[#151515] ${
            desktop ? "text-[40px]" : "text-center text-[28px]"
          }`}
        >
          {METHOD.accessTitle}
        </h3>
        <dl
          className={`cf-method-access mt-10 grid border-y border-black/10 text-left ${
            desktop ? "grid-cols-3" : "grid-cols-2"
          }`}
        >
          {METHOD.access.map((item) => (
            <div key={item.label} className="cf-method-access-item flex flex-col">
              <dt className="font-['Inter:Medium',sans-serif] text-[11px] font-medium uppercase tracking-[0.16em] text-[#0041b0]">
                {item.label}
              </dt>
              <dd
                className={`mt-3 font-['Inter:Regular',sans-serif] text-[#151515] ${
                  desktop ? "text-[18px] leading-7" : "text-[14px] leading-[1.45]"
                }`}
              >
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </StageReveal>
    </div>
  );

  return (
    <section
      id="metodo"
      aria-label="O que você aprende no método Code Flow"
      className={`cf-method order-3 relative ${
        desktop ? "w-[1920px] px-[210px] py-[150px]" : "px-5 py-24"
      }`}
    >
      <div className={`${container} relative z-10`}>
        {desktop ? (
          <div className="grid grid-cols-[540px_1fr] items-start gap-[120px]">
            <div className="cf-method-sticky sticky top-[130px]">
              {intro}
              {rail}
              <StageReveal className="mt-12">{cta}</StageReveal>
            </div>
            <div ref={cardsRef} className="grid gap-[72px] pt-[90px]">
              {METHOD.steps.map((step, index) => (
                <StageReveal key={step.number}>
                  <StepCard step={step} active={index === active} desktop />
                </StageReveal>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="text-center">{intro}</div>
            <div className="mt-6">
              {METHOD.steps.map((step) => (
                <StageReveal key={step.number}>
                  <StepCard step={step} active={false} desktop={false} />
                </StageReveal>
              ))}
            </div>
          </>
        )}

        {access}

        {!desktop && (
          <StageReveal className="cta-fit-box mt-12 text-center">{cta}</StageReveal>
        )}
      </div>
    </section>
  );
}
