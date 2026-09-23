"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import { SectionEyebrow } from "@/components/SectionEyebrow";
import { StageReveal } from "@/components/motion-primitives";
import { FAQ } from "@/data/site";
import { EASE } from "@/lib/constants";

/** Curva que devolve o fundo claro depois do bloco vermelho. */
const TRANSITION_PATH =
  "M0 120V108C170 112 280 126 370 82C410 62 432 0 520 0H1400C1488 0 1510 62 1550 82C1640 126 1750 112 1920 108V120Z";

export function CourseObjections({
  desktop,
  container,
}: {
  desktop: boolean;
  container: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.section
      id="faq"
      className={`course-objections order-6 ${
        desktop ? "w-[1920px] px-[210px] py-[150px]" : "px-5 py-24"
      }`}
      layout
      transition={{ layout: { duration: 0.5, ease: EASE } }}
    >
      <svg
        aria-hidden="true"
        className="course-objections-transition"
        preserveAspectRatio="none"
        viewBox="0 0 1920 120"
      >
        <defs>
          <pattern
            id="faq-transition-grid"
            height="120"
            patternUnits="userSpaceOnUse"
            width="112"
          >
            <path d="M0 0V120" stroke="rgba(20,20,20,0.032)" strokeWidth="1" />
          </pattern>
        </defs>
        <path d={TRANSITION_PATH} fill="#f5f5f5" />
        <path d={TRANSITION_PATH} fill="url(#faq-transition-grid)" />
      </svg>

      <motion.div
        className={`course-objections-content ${container} ${
          desktop ? "grid grid-cols-[0.72fr_1.28fr] gap-[120px]" : ""
        }`}
        layout
      >
        <StageReveal className="text-center lg:text-left">
          <SectionEyebrow>Antes de decidir</SectionEyebrow>
          <h2
            className={`font-['Sora:Regular',sans-serif] leading-[0.98] tracking-[-0.055em] text-[#171717] ${
              desktop ? "text-[72px]" : "text-[46px]"
            }`}
          >
            As dúvidas que travam quase todo iniciante.
          </h2>
          <p className="mx-auto mt-7 max-w-[500px] text-[17px] leading-7 text-[#68605b] lg:mx-0">
            O método existe justamente para remover a distância entre aprender
            uma ferramenta e conseguir entregar algo comercial.
          </p>
        </StageReveal>

        <StageReveal className={desktop ? "" : "mt-12"} delay={0.08}>
          <motion.div
            className="divide-y divide-black/12 border-y border-black/12"
            layout
          >
            {FAQ.map(([question, answer], index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div key={question} className="course-faq" layout="position">
                  <button
                    aria-controls={`faq-answer-${index}`}
                    aria-expanded={isOpen}
                    className={`group flex w-full cursor-pointer items-center justify-between gap-6 py-7 text-left font-['Sora:Regular',sans-serif] text-[22px] tracking-[-0.02em] transition-colors duration-300 ${
                      isOpen
                        ? "text-[#970000]"
                        : "text-[#171717] hover:text-[#b00000]"
                    }`}
                    onClick={() =>
                      setOpenIndex((current) =>
                        current === index ? null : index,
                      )
                    }
                    type="button"
                  >
                    <span>{question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      className={`relative grid size-10 shrink-0 place-items-center rounded-full border transition-colors duration-300 ${
                        isOpen
                          ? "border-[#b00000] bg-[#b00000] text-white"
                          : "border-black/15 text-[#171717] group-hover:border-[#b00000]"
                      }`}
                      transition={{ duration: 0.45, ease: EASE }}
                    >
                      <span className="absolute h-px w-3.5 bg-current" />
                      <motion.span
                        animate={{
                          opacity: isOpen ? 0 : 1,
                          rotate: isOpen ? 90 : 0,
                          scaleY: isOpen ? 0 : 1,
                        }}
                        className="absolute h-3.5 w-px bg-current"
                        transition={{ duration: 0.32, ease: EASE }}
                      />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        animate={{ height: "auto", opacity: 1, y: 0 }}
                        className="overflow-hidden"
                        exit={{ height: 0, opacity: 0, y: -8 }}
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0, y: -10 }}
                        transition={{
                          height: { duration: 0.48, ease: EASE },
                          opacity: { duration: 0.3, delay: 0.08 },
                          y: { duration: 0.4, ease: EASE },
                        }}
                      >
                        <p className="max-w-[760px] pb-8 pr-12 text-[16px] leading-7 text-[#68605b]">
                          {answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </StageReveal>
      </motion.div>
    </motion.section>
  );
}
