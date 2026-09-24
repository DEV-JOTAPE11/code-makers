"use client";

import { motion } from "motion/react";

import { CONVERSION_STEPS } from "@/data/site";
import { EASE, WHATSAPP_GROUP_URL } from "@/lib/constants";

/** "A fórmula Code Flow": manchete + cartão de decisão + trilho 01/02/03. */
export function ConversionRail({ desktop = false }: { desktop?: boolean }) {
  return (
    <section
      aria-label="A fórmula Code Flow"
      className={`conversion-rail relative overflow-hidden bg-[#080808] text-white ${
        desktop ? "w-[1920px] px-[210px] py-[210px]" : "px-4 py-24"
      }`}
    >
      <div
        aria-hidden="true"
        className="conversion-rail-signal absolute inset-y-0 w-[34%]"
      />

      <div
        className={`relative z-10 mx-auto ${desktop ? "w-[1500px]" : "max-w-[430px]"}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.72, ease: EASE }}
          className={`conversion-rail-hero text-center lg:text-left ${
            desktop ? "grid grid-cols-[1.15fr_0.85fr] items-center gap-24" : ""
          }`}
        >
          <div>
            <div className="mb-5 flex items-center justify-center gap-3 font-['Inter:Medium',sans-serif] text-[12px] font-medium uppercase tracking-[0.18em] text-[#83b0ff] lg:justify-start">
              <span className="size-2 rounded-full bg-[#307cff] shadow-[0_0_18px_rgba(48,124,255,0.85)]" />
              CODE FLOW + CODE HUNTER
            </div>
            <h2
              className={`font-['Sora:Regular',sans-serif] font-normal leading-[0.98] tracking-[-0.055em] ${
                desktop ? "max-w-[920px] text-[78px]" : "text-[46px]"
              }`}
            >
              Crie com IA. Encontre com a Code Hunter.
              <span className="mt-3 block text-[#4388ff]">
                Venda com a nossa metodologia.
              </span>
            </h2>
          </div>

          <div className={`conversion-decision-card ${desktop ? "" : "mt-9"}`}>
            <span className="font-['Inter:Medium',sans-serif] text-[10px] uppercase tracking-[0.2em] text-[#70a4ff]">
              DA IDEIA AO DINHEIRO NO BOLSO
            </span>
            <p className="mt-5 font-['Sora:Regular',sans-serif] text-[24px] leading-[1.25] tracking-[-0.035em] text-white">
              Uma rota completa para sair do prompt e chegar ao pagamento.
            </p>
            <p className="mt-4 font-['Inter:Regular',sans-serif] text-[15px] leading-6 text-white/55">
              Você cria a solução, encontra as empresas certas e aprende a
              conduzir a conversa até fechar a venda.
            </p>
            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noreferrer"
              className="conversion-rail-cta mt-7 inline-flex min-h-14 w-full items-center justify-between gap-5 rounded-full bg-[#004ac9] px-7 font-['Inter:Medium',sans-serif] text-[14px] font-medium text-white transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#609aff]"
            >
              Entrar no grupo oficial
              <span aria-hidden="true" className="text-xl">
                ↗
              </span>
            </a>
            <p className="mt-4 text-center font-['Inter:Medium',sans-serif] text-[10px] uppercase tracking-[0.16em] text-white/35">
              Criar • encontrar • vender
            </p>
          </div>
        </motion.div>

        <div
          className={`conversion-steps relative mt-20 grid ${
            desktop ? "grid-cols-3" : "grid-cols-1"
          }`}
        >
          {CONVERSION_STEPS.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.66, delay: index * 0.09, ease: EASE }}
              className="conversion-step group relative overflow-hidden"
            >
              <span aria-hidden="true" className="conversion-step-ghost">
                {step.number}
              </span>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="conversion-step-node grid size-11 place-items-center rounded-full font-['Inter:Medium',sans-serif] text-[11px]">
                    {step.number}
                  </span>
                  <span className="font-['Inter:Medium',sans-serif] text-[11px] tracking-[0.2em] text-[#70a4ff]">
                    {step.label}
                  </span>
                </div>
                <span className="conversion-step-arrow grid size-10 place-items-center rounded-full border border-white/20 text-lg transition-all duration-500 group-hover:border-[#4388ff] group-hover:bg-[#0041b0]">
                  ↗
                </span>
              </div>

              <h3
                className={`relative z-10 mt-14 max-w-[360px] font-['Sora:Regular',sans-serif] leading-[1.02] tracking-[-0.04em] ${
                  desktop ? "text-[38px]" : "text-[31px]"
                }`}
              >
                {step.title}
              </h3>
              <p className="relative z-10 mt-5 max-w-[370px] font-['Inter:Regular',sans-serif] text-[15px] leading-6 text-white/58">
                {step.text}
              </p>

              <div className="conversion-step-outcome relative z-10 mt-auto pt-8">
                <span className="text-[#498cff]">✓</span>
                <span>{step.outcome}</span>
              </div>
            </motion.article>
          ))}
        </div>

        {desktop && (
          <div className="mt-8 flex justify-end font-['Inter:Medium',sans-serif] text-[11px] uppercase tracking-[0.16em] text-white/38">
            Crie com IA. Encontre com a Code Hunter. Venda com método.
          </div>
        )}
      </div>
    </section>
  );
}
