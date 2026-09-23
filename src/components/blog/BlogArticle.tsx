import Link from "next/link";

import type { BlogPost } from "@/data/blog";
import { WHATSAPP_GROUP_URL } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

/** Página de artigo: capa, corpo em duas colunas e sumário fixo à direita. */
export function BlogArticle({ post }: { post: BlogPost }) {
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
              <span>Code Makers</span>
            </span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#171717] px-5 py-3 font-['Inter:Medium',sans-serif] text-sm font-medium text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b00000]"
          >
            <span aria-hidden="true">←</span>
            Voltar ao site
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-[1320px] px-5 pb-24 pt-14 sm:px-8 lg:px-12 lg:pt-20">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div>
            <div className="mb-6 flex items-center gap-3 font-['Inter:Medium',sans-serif] text-xs font-medium uppercase tracking-[0.14em] text-[#7e0000] sm:text-sm">
              <span className="size-2 rounded-full bg-[#ff6666]" />
              {post.category}
            </div>
            <h1 className="max-w-[940px] font-['Sora:Regular',sans-serif] text-[clamp(2.55rem,5vw,5rem)] font-normal leading-[1.02] tracking-[-0.045em]">
              {post.title}
            </h1>
            <p className="mt-7 max-w-[820px] font-['Inter:Regular',sans-serif] text-lg leading-8 text-[#46525a] sm:text-xl">
              {post.description}
            </p>
          </div>

          <div className="border-l border-black/15 pl-6 font-['Inter:Regular',sans-serif]">
            <p className="text-base font-medium text-[#171717]">{post.author}</p>
            <p className="mt-1 text-sm text-[#66727a]">{post.date}</p>
            <p className="mt-1 text-sm text-[#66727a]">{post.readingTime}</p>
          </div>
        </div>

        <div className="mt-14 overflow-hidden rounded-[18px] bg-[#2c0303] shadow-[0_24px_80px_rgba(43,3,3,0.18)] lg:mt-18">
          <img
            src={post.image}
            alt={post.imageAlt}
            className="aspect-[16/8.4] size-full object-cover"
          />
        </div>

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-[minmax(0,820px)_340px] lg:gap-20">
          <div>
            <p className="font-['Inter:Regular',sans-serif] text-xl leading-9 text-[#2d363c] sm:text-[22px]">
              {post.introduction}
            </p>
            <blockquote className="my-14 border-l-4 border-[#b00000] bg-white px-7 py-7 font-['Sora:Regular',sans-serif] text-[25px] leading-[1.4] shadow-[0_14px_45px_rgba(43,3,3,0.07)] sm:px-9 sm:text-[30px]">
              {post.highlight}
            </blockquote>

            <div className="space-y-14">
              {post.sections.map((section, index) => (
                <section
                  key={section.title}
                  id={`article-section-${index + 1}`}
                  className="scroll-mt-10"
                >
                  <div className="mb-5 flex items-start gap-4">
                    <span className="mt-1 font-['Inter:Medium',sans-serif] text-sm font-medium text-[#b00000]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-['Sora:Regular',sans-serif] text-[30px] leading-[1.18] tracking-[-0.025em] sm:text-[38px]">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-5 pl-0 font-['Inter:Regular',sans-serif] text-[17px] leading-8 text-[#46525a] sm:pl-10 sm:text-lg">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {section.bullets && (
                      <ul className="mt-7 space-y-3">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span className="mt-[11px] size-1.5 shrink-0 rounded-full bg-[#b00000]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-8">
            <div className="overflow-hidden rounded-[18px] bg-[#2c0303] p-7 text-white sm:p-9">
              <div className="mb-8 h-1 w-16 rounded-full bg-[#ff6666]" />
              <p className="font-['Sora:Regular',sans-serif] text-[29px] leading-[1.16] tracking-[-0.025em]">
                {post.ctaTitle}
              </p>
              <p className="mt-5 font-['Inter:Regular',sans-serif] text-base leading-7 text-white/75">
                {post.ctaText}
              </p>
              <a
                href={WHATSAPP_GROUP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-8 flex w-full items-center justify-center rounded-full bg-white px-5 py-4 text-center font-['Inter:Medium',sans-serif] text-sm font-medium text-[#240303] transition-colors hover:bg-[#ffd0d0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff6666]"
              >
                Entrar no grupo oficial
              </a>
            </div>

            <nav
              aria-label="Neste artigo"
              className="mt-5 rounded-[18px] border border-black/10 bg-white p-7"
            >
              <p className="font-['Inter:Medium',sans-serif] text-sm font-medium uppercase tracking-[0.12em] text-[#7e0000]">
                Neste artigo
              </p>
              <ol className="mt-5 space-y-3 font-['Inter:Regular',sans-serif] text-sm leading-5 text-[#46525a]">
                {post.sections.map((section, index) => (
                  <li key={section.title}>
                    <a
                      href={`#article-section-${index + 1}`}
                      className="transition-colors hover:text-[#b00000]"
                    >
                      {String(index + 1).padStart(2, "0")} · {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-black/15 pt-8 sm:flex-row sm:items-center">
          <p className="font-['Inter:Regular',sans-serif] text-sm text-[#66727a]">
            Conteúdo prático para criar com IA e vender para empresas.
          </p>
          <Link
            href="/"
            className="font-['Inter:Medium',sans-serif] text-sm font-medium text-[#171717] underline decoration-[#b00000] decoration-2 underline-offset-4"
          >
            Voltar para a home
          </Link>
        </div>
      </article>
    </main>
  );
}
