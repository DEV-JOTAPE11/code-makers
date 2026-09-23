"use client";

import { SectionEyebrow } from "@/components/SectionEyebrow";
import { StageReveal } from "@/components/motion-primitives";
import { WHATSAPP_GROUP_URL } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

/** Linhas do "editor" que resume o método em pseudo-código. */
const CODE_LINES: { keyword: string; assignment: string; call: string; rest: string }[] = [
  { keyword: "const", assignment: " ideia = ", call: "problemaReal", rest: ";" },
  { keyword: "const", assignment: " entrega = ", call: "criarComIA", rest: "(ideia);" },
  { keyword: "const", assignment: " oferta = ", call: "empacotarValor", rest: "(entrega);" },
  {
    keyword: "const",
    assignment: " oportunidades = ",
    call: "codeHunter.buscar",
    rest: "(oferta);",
  },
];

const STEPS = ["CRIAR", "ENCONTRAR", "VENDER"];

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
      <div
        className={`${container} relative z-10 ${
          desktop ? "grid grid-cols-[1.08fr_0.92fr] items-center gap-[110px]" : ""
        }`}
      >
        <StageReveal className="text-center lg:text-left">
          <SectionEyebrow>O ciclo que gera receita</SectionEyebrow>
          <h2
            className={`font-['Sora:Regular',sans-serif] leading-[0.98] tracking-[-0.055em] text-[#151515] ${
              desktop ? "text-[82px]" : "text-[47px]"
            }`}
          >
            Criar é só o começo.
            <span className="mt-3 block text-[#b00000]">
              O dinheiro entra quando você encontra e vende.
            </span>
          </h2>
          <p
            className={`mx-auto mt-8 max-w-[720px] font-['Inter:Regular',sans-serif] leading-8 text-[#5c5652] lg:mx-0 ${
              desktop ? "text-[19px]" : "text-[17px]"
            }`}
          >
            A Code Makers ensina você a construir a solução com IA. A Code Hunter
            encontra empresas qualificadas. Nossa metodologia mostra como
            abordar, apresentar, fechar e transformar o projeto em dinheiro no
            bolso.
          </p>
          <a
            className="course-primary-cta mt-9 inline-flex min-h-14 items-center gap-6 rounded-full bg-[#171717] px-8 font-['Inter:Medium',sans-serif] text-[15px] font-medium text-white"
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noreferrer"
          >
            Entrar no grupo oficial{" "}
            <span aria-hidden="true">↗</span>
          </a>
        </StageReveal>

        <StageReveal className={desktop ? "" : "mt-14"} delay={0.08}>
          <div className="course-code-window overflow-hidden rounded-[22px] border border-black/10 bg-[#111] text-white shadow-[0_35px_100px_rgba(49,0,0,0.24)]">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex gap-2">
                <span className="size-2.5 rounded-full bg-[#ff4b43]" />
                <span className="size-2.5 rounded-full bg-white/20" />
                <span className="size-2.5 rounded-full bg-white/20" />
              </div>
              <span className="font-['Inter:Medium',sans-serif] text-[10px] uppercase tracking-[0.18em] text-white/40">
                code_to_cash.flow
              </span>
            </div>

            <div className="relative p-6 sm:p-8">
              <img
                alt="Fluxo visual do método Code Makers"
                className="absolute inset-0 size-full object-cover opacity-20 mix-blend-screen"
                src={IMAGES.codeToCashFlow}
              />

              <div className="relative z-10 space-y-3 font-mono text-[13px] leading-6 sm:text-[14px]">
                {CODE_LINES.map((line) => (
                  <p key={line.call}>
                    <span className="text-[#ff6b64]">{line.keyword}</span>
                    {line.assignment}
                    <span className="text-white/55">{line.call}</span>
                    {line.rest}
                  </p>
                ))}
                <p>
                  <span className="text-[#ff6b64]">return</span>{" "}
                  <span className="text-white">venderParaEmpresa</span>
                  (oportunidades);
                </p>
              </div>

              <div className="relative z-10 mt-10 grid grid-cols-3 gap-2 border-t border-white/10 pt-5 text-center">
                {STEPS.map((step, index) => (
                  <div
                    key={step}
                    className="rounded-[10px] bg-white/[0.055] px-2 py-4"
                  >
                    <span className="block text-[10px] text-[#ff7770]">
                      0{index + 1}
                    </span>
                    <span className="mt-1 block text-[11px] font-medium tracking-[0.08em]">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </StageReveal>
      </div>
    </section>
  );
}
