"use client";

import { BlurRevealText } from "@/components/BlurRevealText";
import { StageReveal } from "@/components/motion-primitives";
import { AUTHOR, isPlaceholder } from "@/data/site";
import { IMAGES } from "@/lib/images";

type Work = (typeof AUTHOR.works)[number];

function Arrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="cf-author-arrow size-3.5"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function WorkCard({ work, desktop }: { work: Work; desktop: boolean }) {
  const hasUrl = !isPlaceholder(work.url);

  return (
    <article
      className={`cf-author-work group ${desktop ? "" : "w-[78%] shrink-0 snap-start"}`}
    >
      <div className="overflow-hidden rounded-[18px] border border-black/10 bg-[#101010]">
        <img
          alt={work.imageAlt}
          className="cf-author-work-image aspect-[16/10] w-full object-cover"
          src={IMAGES.placeholders.authorWorks[work.image]}
          width={1440}
          height={900}
          loading="lazy"
          decoding="async"
        />
      </div>
      <h4
        className={`mt-5 font-['Sora:Regular',sans-serif] leading-tight tracking-[-0.03em] text-[#151515] ${
          desktop ? "text-[22px]" : "text-[19px]"
        }`}
      >
        {work.name}
      </h4>
      <p className="mt-1.5 font-['Inter:Regular',sans-serif] text-[14px] leading-5 text-[#68605b]">
        {work.niche} · {work.city}
      </p>
      {hasUrl ? (
        <a
          className="mt-3 inline-flex items-center gap-1.5 font-['Inter:Medium',sans-serif] text-[13px] font-medium text-[#0041b0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0041b0]"
          href={work.url}
          target="_blank"
          rel="noreferrer"
        >
          ver site <Arrow />
          <span className="sr-only"> de {work.name}</span>
        </a>
      ) : (
        <span className="mt-3 inline-flex items-center gap-1.5 font-['Inter:Medium',sans-serif] text-[13px] font-medium text-[#151515]/40">
          ver site <Arrow /> <span className="font-mono text-[11px]">{work.url}</span>
        </span>
      )}
    </article>
  );
}

function Seal({ desktop }: { desktop: boolean }) {
  return (
    <div
      className={`course-templates-seal cf-author-seal absolute z-20 ${
        desktop ? "bottom-[190px] right-[560px]" : "bottom-[18%] left-6 origin-bottom-left scale-[0.78]"
      }`}
    >
      <span className="block font-['Inter:Medium',sans-serif] text-[10px] uppercase tracking-[0.2em] text-white/70">
        {AUTHOR.seal.title}
      </span>
      <span className="mt-1 block font-['Sora:Regular',sans-serif] text-[22px] leading-[1.05] tracking-[-0.04em] text-white">
        {AUTHOR.seal.text}
      </span>
    </div>
  );
}

/** Quem está por trás: bio, números honestos, retrato e os sites reais que
 *  viraram template. Depoimentos só aparecem quando existirem. */
export function CourseAuthor({
  desktop,
  container,
}: {
  desktop: boolean;
  container: string;
}) {
  const portraitAlt =
    "Silhueta provisória no lugar do retrato do João Pedro, fundador da JTP Services";

  const stats = (
    <dl
      className={`mt-10 grid border-y border-black/10 text-left ${
        desktop ? "max-w-[760px] grid-cols-4" : "grid-cols-2"
      }`}
    >
      {AUTHOR.stats.map((stat, index) => (
        <div
          key={stat.value}
          className={`flex flex-col py-5 ${
            desktop
              ? index > 0
                ? "border-l border-black/10 pl-6 pr-3"
                : "pr-3"
              : `${index % 2 ? "border-l border-black/10 pl-4" : "pr-3"} ${
                  index > 1 ? "border-t border-black/10" : ""
                }`
          }`}
        >
          <dt className="order-2 mt-2 font-['Inter:Regular',sans-serif] text-[12px] leading-[1.35] text-[#7a736e]">
            {stat.label}
          </dt>
          <dd
            className={`font-['Sora:Regular',sans-serif] leading-none tracking-[-0.045em] whitespace-nowrap text-[#151515] ${
              desktop ? "text-[34px]" : "text-[26px]"
            }`}
          >
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );

  const text = (
    <>
      <StageReveal>
        <p
          className={`font-['Inter:Medium',sans-serif] font-medium uppercase tracking-[0.18em] text-[#0041b0] ${
            desktop ? "text-[11px]" : "text-[10px]"
          }`}
        >
          {AUTHOR.eyebrow}
        </p>
      </StageReveal>
      <BlurRevealText
        className={`mt-6 font-['Sora:Regular',sans-serif] leading-[0.98] tracking-[-0.055em] text-[#151515] ${
          desktop ? "text-[72px]" : "text-[44px]"
        }`}
      >
        {AUTHOR.title[0]}
        <span className="mt-3 block text-[#0041b0]">{AUTHOR.title[1]}</span>
      </BlurRevealText>
      <StageReveal>
        <p
          className={`mt-8 font-['Inter:Regular',sans-serif] leading-8 text-[#5c5652] ${
            desktop ? "max-w-[640px] text-[19px]" : "mx-auto max-w-[400px] text-[17px]"
          }`}
        >
          {AUTHOR.bio}
        </p>
        <div
          className={`mt-7 flex items-center gap-4 ${desktop ? "" : "justify-center text-left"}`}
        >
          <span aria-hidden="true" className="h-px w-10 bg-[#0041b0]" />
          <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-5 text-[#151515]">
            <span className="block font-['Inter:Medium',sans-serif] font-medium">
              {AUTHOR.signature}
            </span>
            <span className="text-[#68605b]">{AUTHOR.instagram}</span>
          </p>
        </div>
        {stats}
      </StageReveal>
    </>
  );

  const works = (
    <div className={desktop ? "px-[210px] pb-[150px]" : "px-5 pb-24"}>
      <div className={container}>
        <div className="border-t border-black/10 pt-[72px] lg:pt-[96px]">
          <StageReveal>
            <h3
              className={`font-['Sora:Regular',sans-serif] leading-none tracking-[-0.04em] text-[#151515] ${
                desktop ? "text-[40px]" : "text-center text-[28px]"
              }`}
            >
              {AUTHOR.worksTitle}
            </h3>
          </StageReveal>
          <StageReveal delay={0.06}>
            <div
              className={
                desktop
                  ? "mt-12 grid grid-cols-4 gap-7"
                  : "cf-author-carousel -mx-5 mt-9 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-3"
              }
            >
              {AUTHOR.works.map((work) => (
                <WorkCard key={work.name} work={work} desktop={desktop} />
              ))}
            </div>
          </StageReveal>

          {AUTHOR.testimonials.length > 0 && (
            <div className="mt-20">
              <StageReveal>
                <h3
                  className={`font-['Sora:Regular',sans-serif] leading-none tracking-[-0.04em] text-[#151515] ${
                    desktop ? "text-[40px]" : "text-center text-[28px]"
                  }`}
                >
                  {AUTHOR.testimonialsTitle}
                </h3>
              </StageReveal>
              <div
                className={`mt-10 grid gap-6 ${desktop ? "grid-cols-3" : "grid-cols-1"}`}
              >
                {AUTHOR.testimonials.map((item) => (
                  <StageReveal key={item.nome}>
                    <figure className="h-full rounded-[22px] border border-black/10 bg-white/70 p-7">
                      <img
                        alt={`Print do site criado por ${item.nome}`}
                        className="aspect-[16/10] w-full rounded-[14px] object-cover"
                        src={item.print}
                        loading="lazy"
                        decoding="async"
                      />
                      <blockquote className="mt-6 font-['Inter:Regular',sans-serif] text-[16px] leading-7 text-[#151515]">
                        {item.texto}
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-3">
                        <img
                          alt=""
                          className="size-11 rounded-full object-cover"
                          src={item.foto}
                          loading="lazy"
                          decoding="async"
                        />
                        <span className="font-['Inter:Regular',sans-serif] text-[14px] leading-5">
                          <strong className="block font-['Inter:Medium',sans-serif] font-medium text-[#151515]">
                            {item.nome}
                          </strong>
                          <span className="text-[#68605b]">{item.cidade}</span>
                          {item.siteUrl && (
                            <a
                              className="ml-2 text-[#0041b0]"
                              href={item.siteUrl}
                              target="_blank"
                              rel="noreferrer"
                            >
                              ver site ↗
                            </a>
                          )}
                        </span>
                      </figcaption>
                    </figure>
                  </StageReveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="autor"
      aria-label="Quem está por trás do Code Flow"
      className={`cf-author order-4 relative overflow-hidden ${desktop ? "w-[1920px]" : ""}`}
    >
      {desktop ? (
        <div className="relative min-h-[940px] px-[210px] pb-[120px] pt-[150px]">
          <div aria-hidden="true" className="cf-author-glow" />
          <StageReveal className="pointer-events-none absolute bottom-0 right-[-40px] h-[92%]">
            <img
              alt={portraitAlt}
              className="cf-author-portrait h-full w-auto max-w-none"
              src={IMAGES.placeholders.authorPortrait}
              width={1200}
              height={1500}
              loading="lazy"
              decoding="async"
            />
          </StageReveal>
          <StageReveal delay={0.2}>
            <Seal desktop />
          </StageReveal>
          <div className={`${container} relative z-10`}>
            <div className="max-w-[780px]">{text}</div>
          </div>
        </div>
      ) : (
        <div className="relative px-5 pt-24">
          <div className={`${container} text-center`}>{text}</div>
          <StageReveal delay={0.08} className="relative -mx-5 mt-12 overflow-hidden">
            <div aria-hidden="true" className="cf-author-glow" />
            <img
              alt={portraitAlt}
              className="cf-author-portrait relative left-1/2 block w-[118%] max-w-none -translate-x-1/2"
              src={IMAGES.placeholders.authorPortrait}
              width={1200}
              height={1500}
              loading="lazy"
              decoding="async"
            />
            <Seal desktop={false} />
          </StageReveal>
        </div>
      )}
      {works}
    </section>
  );
}
