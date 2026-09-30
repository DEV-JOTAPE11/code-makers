"use client";

import { BlurRevealText } from "@/components/BlurRevealText";
import { StageReveal } from "@/components/motion-primitives";
import { WHATSAPP_GROUP_URL } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export function CourseManifesto({
  desktop,
  container,
}: {
  desktop: boolean;
  container: string;
}) {
  return (
    <section
      id="about"
      className={`course-manifesto order-1 relative overflow-hidden ${
        desktop ? "w-[1920px] px-[210px] py-[150px]" : "px-5 py-24"
      }`}
    >
      {desktop && (
        <StageReveal className="pointer-events-none absolute bottom-0 right-[-40px] h-[94%]">
          <img
            alt="Leonardo DiCaprio segurando uma nota de um dólar"
            className="h-full w-auto max-w-none"
            src={IMAGES.leonardoDicaprio}
          />
        </StageReveal>
      )}

      <div className={`${container} relative z-10`}>
        <div
          className={`text-center lg:text-left ${desktop ? "max-w-[760px]" : ""}`}
        >
          <BlurRevealText
            className={`font-['Sora:Regular',sans-serif] leading-[0.98] tracking-[-0.055em] text-[#151515] ${
              desktop ? "text-[82px]" : "text-[47px]"
            }`}
          >
            A IA não é o problema.
            <span className="mt-3 block text-[#0041b0]">
              O prompt é.
            </span>
          </BlurRevealText>
          <StageReveal>
            <p
              className={`mx-auto mt-8 max-w-[720px] font-['Inter:Regular',sans-serif] leading-8 text-[#5c5652] lg:mx-0 ${
                desktop ? "text-[19px]" : "text-[17px]"
              }`}
            >
              Quase todo mundo pede um site para a IA e recebe o mesmo layout
              genérico. O método Code Flow mostra como escrever um único prompt
              que entrega um site com direção de arte, copy e animações de
              agência.
            </p>
            <a
              className="course-primary-cta mt-9 inline-flex min-h-14 items-center gap-6 rounded-full bg-[#171717] px-8 font-['Inter:Medium',sans-serif] text-[15px] font-medium text-white"
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noreferrer"
            >
              Entrar no grupo do Code Flow{" "}
              <span aria-hidden="true">↗</span>
            </a>
          </StageReveal>
        </div>

        {!desktop && (
          <StageReveal className="-mx-5 -mb-24 mt-10 overflow-hidden" delay={0.08}>
            <img
              alt="Leonardo DiCaprio segurando uma nota de um dólar"
              className="relative left-1/2 w-[128%] max-w-none -translate-x-1/2"
              src={IMAGES.leonardoDicaprio}
            />
          </StageReveal>
        )}
      </div>
    </section>
  );
}
