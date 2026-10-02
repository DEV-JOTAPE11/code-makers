import Link from "next/link";

import { LEGAL } from "@/data/site";
import { IMAGES } from "@/lib/images";

/** Página de texto legal (termos, privacidade) no mesmo estilo do artigo do
 *  blog: cabeçalho com a marca, título grande e seções numeradas. */
export function LegalPage({
  title,
  description,
  sections,
}: {
  title: string;
  description: string;
  sections: string[];
}) {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-[#171717]">
      <header className="border-b border-black/10 bg-[#f5f5f5]/95 px-5 py-5 backdrop-blur-md sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="Voltar ao início">
            <span className="inline-flex items-center gap-2.5 font-['Sora:Regular',sans-serif] text-[22px] tracking-[-0.8px] text-[#171717] sm:text-[24px]">
              <img
                aria-hidden="true"
                alt=""
                className="h-8 w-auto object-contain brightness-0"
                src={IMAGES.symbol}
              />
              <span>Code Flow</span>
            </span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#171717] px-5 py-3 font-['Inter:Medium',sans-serif] text-sm font-medium text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0041b0]"
          >
            <span aria-hidden="true">←</span>
            Voltar ao site
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-[920px] px-5 pb-24 pt-14 sm:px-8 lg:pt-20">
        <h1 className="anim-entrada font-['Sora:Regular',sans-serif] text-[clamp(2.55rem,5vw,4.5rem)] font-normal leading-[1.02] tracking-[-0.045em]">
          {title}
        </h1>
        <p className="mt-6 font-['Inter:Regular',sans-serif] text-lg leading-8 text-[#46525a]">
          {description}
        </p>
        <p className="mt-4 font-['Inter:Regular',sans-serif] text-sm text-[#66727a]">
          Última atualização: [PREENCHER data]
        </p>

        <div className="mt-14 space-y-12">
          {sections.map((section, index) => (
            <section key={section}>
              <div className="mb-4 flex items-start gap-4">
                <span className="mt-1 font-['Inter:Medium',sans-serif] text-sm font-medium text-[#0041b0]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="font-['Sora:Regular',sans-serif] text-[28px] leading-tight tracking-[-0.03em]">
                  {section}
                </h2>
              </div>
              <p className="pl-9 font-['Inter:Regular',sans-serif] text-[17px] leading-8 text-[#2d363c]">
                [PREENCHER]
              </p>
            </section>
          ))}
        </div>

        <p className="mt-16 border-t border-black/10 pt-6 font-['Inter:Regular',sans-serif] text-sm leading-6 text-[#66727a]">
          {LEGAL.entity} · {LEGAL.cnpj} · {LEGAL.email}
        </p>
      </article>
    </main>
  );
}
