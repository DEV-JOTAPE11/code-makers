"use client";

import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";
import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";

import { BlurRevealText } from "@/components/BlurRevealText";
import { StageReveal } from "@/components/motion-primitives";
import { ACCESS_CTA, DEMO } from "@/data/site";
import { EASE, LESSON_PREVIEW_URL } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { navigateToSection } from "@/lib/navigateToSection";

/** Tempo de cada nicho no autoplay das tabs (ms). Casa com a barra de
 *  progresso em `.cf-demo-tab-progress`. */
const TAB_DURATION = 5000;
const TYPE_SPEED = 55;

type Screens = typeof IMAGES.placeholders.demo;

/** Palavra do nicho "digitada" letra a letra no console. */
function useTyped(word: string, instant: boolean) {
  const [typed, setTyped] = useState(word);

  useEffect(() => {
    if (instant) {
      setTyped(word);
      return;
    }
    let index = 0;
    setTyped("");
    const timer = window.setInterval(() => {
      index += 1;
      setTyped(word.slice(0, index));
      if (index >= word.length) window.clearInterval(timer);
    }, TYPE_SPEED);
    return () => window.clearInterval(timer);
  }, [word, instant]);

  return typed;
}

/** Notebook + celular desenhados em CSS. As telas são imagens trocáveis. */
function DeviceStage({
  screen,
  desktop,
  label,
}: {
  screen: keyof Screens;
  desktop: boolean;
  label: string;
}) {
  const shots = IMAGES.placeholders.demo[screen];
  // No mobile a troca é só opacidade e deslocamento (sem blur animado).
  const hidden = desktop
    ? { opacity: 0, y: 14, filter: "blur(8px)" }
    : { opacity: 0, y: 10 };
  const shown = desktop
    ? { opacity: 1, y: 0, filter: "blur(0px)" }
    : { opacity: 1, y: 0 };

  return (
    <div className="cf-demo-stage relative">
      <div aria-hidden="true" className="cf-demo-glow" />

      <div className="cf-demo-laptop absolute left-0 top-0 w-[86%]">
        <div className="cf-demo-laptop-lid">
          <span aria-hidden="true" className="cf-demo-laptop-cam" />
          <div className="cf-demo-screen relative aspect-[16/10] overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.img
                key={shots.desktop}
                alt={`Site de ${label} gerado com o prompt Code Flow, no computador`}
                className="absolute inset-0 size-full object-cover object-top"
                src={shots.desktop}
                width={1440}
                height={900}
                loading="lazy"
                decoding="async"
                initial={hidden}
                animate={shown}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
              />
            </AnimatePresence>
          </div>
        </div>
        <div aria-hidden="true" className="cf-demo-laptop-base" />
      </div>

      <div className="cf-demo-phone absolute bottom-0 right-[1%] w-[23%]">
        <div className="cf-demo-phone-body">
          <span aria-hidden="true" className="cf-demo-phone-island" />
          <div className="cf-demo-phone-screen relative aspect-[390/844] overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.img
                key={shots.mobile}
                alt={`Site de ${label} gerado com o prompt Code Flow, no celular`}
                className="absolute inset-0 size-full object-cover object-top"
                src={shots.mobile}
                width={390}
                height={844}
                loading="lazy"
                decoding="async"
                initial={hidden}
                animate={shown}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

function LessonPlayer() {
  const [playing, setPlaying] = useState(false);
  const url = LESSON_PREVIEW_URL;
  const isFile = /\.(mp4|webm|mov)(\?|$)/i.test(url);

  return (
    <div className="cf-demo-player relative aspect-video overflow-hidden rounded-[22px] border border-[#5895ff]/30 bg-black">
      {playing && url ? (
        isFile ? (
          <video
            className="absolute inset-0 size-full object-cover"
            src={url}
            controls
            autoPlay
            playsInline
            poster={IMAGES.placeholders.lessonPoster}
          />
        ) : (
          <iframe
            className="absolute inset-0 size-full"
            src={url}
            title={DEMO.lesson.title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        )
      ) : (
        <>
          <img
            alt="Editor de código com o prompt do método Code Flow aberto"
            className="absolute inset-0 size-full object-cover"
            src={IMAGES.placeholders.lessonPoster}
            width={1920}
            height={1080}
            loading="lazy"
            decoding="async"
          />
          <div aria-hidden="true" className="cf-demo-player-shade absolute inset-0" />
          {url ? (
            <button
              type="button"
              aria-label="Reproduzir trecho de aula"
              className="cf-demo-play absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full"
              onClick={() => setPlaying(true)}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="ml-1 size-[38%]">
                <path d="M7 4.5v15l13-7.5z" fill="currentColor" />
              </svg>
            </button>
          ) : (
            <span className="cf-demo-soon absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full px-5 py-2.5 font-['Inter:Medium',sans-serif] text-[13px] font-medium text-white">
              {DEMO.lesson.soon}
            </span>
          )}
        </>
      )}
    </div>
  );
}

/** Demonstração: o prompt virando site, por nicho, no computador e no
 *  celular, mais o trecho de aula. */
export function CourseDemo({
  desktop,
  container,
}: {
  desktop: boolean;
  container: string;
}) {
  const uid = useId();
  const sectionRef = useRef<HTMLElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const inView = useInView(sectionRef, { amount: 0.25 });
  const reduceMotion = useReducedMotion() ?? false;
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const niches = DEMO.niches;
  const niche = niches[active];
  const autoplay = !reduceMotion && inView;
  const paused = hovered || focused;
  const typed = useTyped(niche.label, reduceMotion || !inView);

  // Carrega as telas de todos os nichos assim que a seção aparece, para a
  // troca não piscar.
  useEffect(() => {
    if (!inView) return;
    Object.values(IMAGES.placeholders.demo).forEach(({ desktop: d, mobile: m }) => {
      [d, m].forEach((src) => {
        const image = new Image();
        image.src = src;
      });
    });
  }, [inView]);

  const select = (index: number, focus = false) => {
    const next = (index + niches.length) % niches.length;
    setActive(next);
    if (focus) tabRefs.current[next]?.focus();
  };

  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const keys: Record<string, number> = {
      ArrowRight: active + 1,
      ArrowDown: active + 1,
      ArrowLeft: active - 1,
      ArrowUp: active - 1,
      Home: 0,
      End: niches.length - 1,
    };
    if (!(event.key in keys)) return;
    event.preventDefault();
    select(keys[event.key], true);
  };

  const panelId = `${uid}-panel`;
  const title = (
    <BlurRevealText
      className={`font-['Sora:Regular',sans-serif] leading-[0.98] tracking-[-0.055em] text-white ${
        desktop ? "text-[72px]" : "text-[44px]"
      }`}
    >
      {DEMO.title[0]}
      <span className="mt-3 block text-[#4388ff]">{DEMO.title[1]}</span>
    </BlurRevealText>
  );

  const tabs = (
    <div
      role="tablist"
      aria-label="Escolha um nicho"
      className={`cf-demo-tabs flex gap-2 ${
        desktop ? "mt-9 flex-wrap" : "cf-demo-tabs-scroll -mx-5 mt-8 overflow-x-auto px-5 pb-2"
      } ${paused ? "is-paused" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setFocused(false);
        }
      }}
    >
      {niches.map((item, index) => {
        const selected = index === active;
        return (
          <button
            key={item.id}
            ref={(node) => {
              tabRefs.current[index] = node;
            }}
            id={`${uid}-tab-${item.id}`}
            role="tab"
            type="button"
            aria-selected={selected}
            aria-controls={panelId}
            tabIndex={selected ? 0 : -1}
            className={`cf-demo-tab relative shrink-0 overflow-hidden rounded-full border px-3.5 py-1.5 font-['Inter:Medium',sans-serif] text-[12px] font-medium whitespace-nowrap transition-colors duration-300 ${
              selected
                ? "border-[#0041b0] bg-[#0041b0] text-white"
                : "border-white/12 bg-white/[0.05] text-white/72 hover:border-white/30 hover:text-white"
            }`}
            onClick={() => select(index)}
            onKeyDown={onTabKeyDown}
          >
            {item.label}
            {selected && autoplay && (
              <span
                key={`${item.id}-${active}`}
                aria-hidden="true"
                className="cf-demo-tab-progress"
                style={{ animationDuration: `${TAB_DURATION}ms` }}
                onAnimationEnd={() => select(active + 1)}
              />
            )}
          </button>
        );
      })}
    </div>
  );

  const consoleBlock = (
    <div
      className={`flow-console cf-demo-console rounded-[20px] border border-[#5895ff]/30 bg-black/35 text-left ${
        desktop ? "mt-7 p-6" : "mt-8 p-5"
      }`}
    >
      <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
        <span className="flex items-center gap-2 font-['Inter:Medium',sans-serif] text-[11px] uppercase tracking-[0.18em] text-[#70a4ff]">
          <span className="flow-live-dot size-2 rounded-full bg-[#4388ff]" />
          {DEMO.console.title}
        </span>
        <span className="rounded-full border border-white/12 bg-white/[0.055] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-white/55">
          {DEMO.console.chip}
        </span>
      </div>
      <pre
        className={`cf-demo-code mt-4 whitespace-pre-wrap font-mono leading-[1.85] text-white/72 ${
          desktop ? "text-[15px]" : "text-[12.5px]"
        }`}
      >
        {DEMO.console.lines.map((line) => {
          const isNiche = line.value === "{nicho}";
          return (
            <span key={line.key} className="block">
              <span className="text-white/42">{`${line.key}:`.padEnd(10, " ")}</span>
              <span className="text-[#5a97ff]/70">{"{"}</span>
              {isNiche ? (
                <span className="cf-demo-var text-[#4388ff]">
                  <span className="sr-only">{niche.label}</span>
                  <span aria-hidden="true">{typed}</span>
                  <span aria-hidden="true" className="cf-demo-caret" />
                </span>
              ) : (
                <span className="text-white/85">{line.value}</span>
              )}
              <span className="text-[#5a97ff]/70">{"}"}</span>
            </span>
          );
        })}
        <span className="mt-1 block text-white/85">
          <span className="text-[#4388ff]">→ </span>
          {DEMO.console.command}
        </span>
      </pre>
    </div>
  );

  const steps = (
    <ol
      className={`flex flex-wrap items-center gap-x-5 gap-y-2 font-['Inter:Medium',sans-serif] text-[13px] font-medium text-white/72 ${
        desktop ? "mt-6" : "mt-6 justify-center"
      }`}
    >
      {DEMO.steps.map((step, index) => (
        <li key={step} className="flex items-center gap-2">
          <span className="font-mono text-[11px] text-[#70a4ff]">
            {String(index + 1).padStart(2, "0")}
          </span>
          {step}
        </li>
      ))}
    </ol>
  );

  const devices = (
    <div
      id={panelId}
      role="tabpanel"
      aria-labelledby={`${uid}-tab-${niche.id}`}
      aria-live="off"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <DeviceStage screen={niche.screen} desktop={desktop} label={niche.label} />
      <p
        className={`mt-6 font-['Inter:Regular',sans-serif] text-[13px] leading-5 text-white/55 ${
          desktop ? "pl-2" : "mx-auto max-w-[76%] text-center"
        }`}
      >
        {DEMO.devicesCaption}
      </p>
    </div>
  );

  const cta = (
    <button
      type="button"
      className="course-primary-cta inline-flex min-h-14 items-center gap-6 rounded-full bg-white px-8 cta-fit [--cta-fit-max:15px] [--cta-fit-reserve:104px] [--cta-fit-ratio:15] font-['Inter:Medium',sans-serif] text-[15px] font-medium text-[#171717] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      onClick={() => navigateToSection("pricing")}
    >
      {ACCESS_CTA} <span aria-hidden="true">↗</span>
    </button>
  );

  const lesson = (
    <div
      className={
        desktop
          ? "mt-[120px] grid grid-cols-[1fr_60%] items-center gap-[80px] border-t border-white/10 pt-[110px]"
          : "mt-16 border-t border-white/10 pt-14"
      }
    >
      <StageReveal className={desktop ? "" : "text-center"}>
        <p className="font-['Inter:Medium',sans-serif] text-[11px] font-medium uppercase tracking-[0.18em] text-[#70a4ff]">
          {DEMO.lesson.eyebrow}
        </p>
        <h3
          className={`mt-4 font-['Sora:Regular',sans-serif] leading-[1.02] tracking-[-0.045em] text-white ${
            desktop ? "text-[46px]" : "text-[32px]"
          }`}
        >
          {DEMO.lesson.title}
        </h3>
        <p
          className={`mt-5 font-['Inter:Regular',sans-serif] leading-8 text-white/72 ${
            desktop ? "max-w-[460px] text-[18px]" : "mx-auto max-w-[360px] text-[16px] leading-7"
          }`}
        >
          {DEMO.lesson.text}
        </p>
        {desktop && <div className="cta-fit-box mt-10">{cta}</div>}
      </StageReveal>
      <StageReveal delay={0.08} className={desktop ? "" : "mt-8"}>
        <LessonPlayer />
      </StageReveal>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      id="demo"
      aria-label="Demonstração do método Code Flow"
      className={`cf-demo order-2 relative overflow-hidden text-white ${
        desktop ? "w-[1920px] px-[210px] py-[150px]" : "px-5 py-24"
      }`}
    >
      <div className={`${container} relative z-10`}>
        {desktop ? (
          <div className="grid grid-cols-[0.85fr_1.15fr] items-center gap-[70px]">
            <div>
              <StageReveal>
                <p className="font-['Inter:Medium',sans-serif] text-[11px] font-medium uppercase tracking-[0.18em] text-[#70a4ff]">
                  {DEMO.eyebrow}
                </p>
              </StageReveal>
              <div className="mt-6">{title}</div>
              <StageReveal>
                <p className="mt-8 max-w-[600px] font-['Inter:Regular',sans-serif] text-[19px] leading-8 text-white/72">
                  {DEMO.text}
                </p>
                {tabs}
                {consoleBlock}
                {steps}
              </StageReveal>
            </div>
            <StageReveal delay={0.1} className="-mr-[120px]">
              {devices}
            </StageReveal>
          </div>
        ) : (
          <div className="text-center">
            <StageReveal>
              <p className="font-['Inter:Medium',sans-serif] text-[10px] font-medium uppercase tracking-[0.18em] text-[#70a4ff]">
                {DEMO.eyebrow}
              </p>
            </StageReveal>
            <div className="mt-5">{title}</div>
            <StageReveal>
              <p className="mx-auto mt-7 max-w-[400px] font-['Inter:Regular',sans-serif] text-[17px] leading-8 text-white/72">
                {DEMO.text}
              </p>
              {tabs}
            </StageReveal>
            <StageReveal delay={0.06} className="-mx-5 mt-10 overflow-hidden">
              <div className="relative left-1/2 w-[120%] -translate-x-1/2">
                {devices}
              </div>
            </StageReveal>
            <StageReveal>
              {consoleBlock}
              {steps}
            </StageReveal>
          </div>
        )}

        {lesson}

        {!desktop && (
          <StageReveal className="cta-fit-box mt-12 text-center">{cta}</StageReveal>
        )}
      </div>
    </section>
  );
}
