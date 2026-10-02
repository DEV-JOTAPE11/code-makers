"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef } from "react";

import { BlurRevealText } from "@/components/BlurRevealText";
import { GroupCta } from "@/components/GroupCta";
import { LiquidMetalBorder } from "@/components/LiquidMetalBorder";
import { CardReveal, StageReveal } from "@/components/motion-primitives";
import { OFFER, OFFER_COPY } from "@/data/offer";
import { EASE, WHATSAPP_GROUP_URL } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

/** Item que ainda é só o marcador (ex.: "[PREENCHER bônus, se houver]"). */
const ONLY_MARKER = /^\[(PREENCHER|CONFIRMAR)[^\]]*\]$/;

const isOpen = OFFER.status === "open";
/** Carrinho aberto sem checkout configurado: o botão cai no grupo. */
const checkoutHref = OFFER.checkoutUrl || WHATSAPP_GROUP_URL;

function Check() {
  return (
    <span
      aria-hidden="true"
      className="grid size-7 shrink-0 place-items-center rounded-full bg-[#0041b0] shadow-[0_6px_18px_#0041b066,inset_0_1px_#ffffff40]"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={3} className="size-3.5">
        <path d="m5 12.5 4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function IncludedPart({ desktop }: { desktop: boolean }) {
  const included = OFFER.included.filter((item) => !ONLY_MARKER.test(item));

  return (
    <div className={`relative ${desktop ? "p-[64px] pr-[72px]" : "px-6 pb-12 pt-10"}`}>
      <p
        className={`font-['Inter:Medium',sans-serif] font-medium uppercase tracking-[0.18em] text-[#70a4ff] ${
          desktop ? "text-[11px]" : "text-[10px]"
        }`}
      >
        {OFFER_COPY.eyebrow}
      </p>
      <BlurRevealText
        className={`mt-5 font-['Sora:Regular',sans-serif] leading-[0.98] tracking-[-0.055em] text-white ${
          desktop ? "text-[64px]" : "text-[38px]"
        }`}
      >
        {OFFER_COPY.title[0]}
        <span className="mt-3 block text-[#bcd3ff]">{OFFER_COPY.title[1]}</span>
      </BlurRevealText>

      <h3
        className={`font-['Inter:Medium',sans-serif] font-medium uppercase tracking-[0.16em] text-white/55 ${
          desktop ? "mt-12 text-[12px]" : "mt-10 text-[11px]"
        }`}
      >
        {OFFER_COPY.includedTitle}
      </h3>
      <ul className={`mt-5 grid ${desktop ? "gap-4" : "gap-3.5"}`}>
        {included.map((item) => (
          <li
            key={item}
            className={`flex items-start gap-4 font-['Inter:Regular',sans-serif] text-white/88 ${
              desktop ? "text-[17px] leading-7" : "text-[15px] leading-6"
            }`}
          >
            <Check />
            <span className="pt-0.5">{item}</span>
          </li>
        ))}
      </ul>

      <p
        className={`mt-10 border-t border-white/10 pt-6 font-['Inter:Regular',sans-serif] text-[13px] leading-5 text-white/55`}
      >
        <span className="block text-[11px] uppercase tracking-[0.16em]">
          {OFFER_COPY.anchor.label}
        </span>
        <span className="mt-1 block">
          <s className="text-[15px] text-white/50 decoration-[#4388ff]/80">
            {OFFER_COPY.anchor.value}
          </s>{" "}
          <strong className="font-['Inter:Semi_Bold',sans-serif] text-[15px] font-semibold text-[#bcd3ff]">
            {OFFER_COPY.anchor.note}
          </strong>
        </span>
      </p>
    </div>
  );
}

function PricePart({ desktop }: { desktop: boolean }) {
  const { price } = OFFER;

  return (
    <div
      className={`cta-fit-box relative flex flex-col text-[#151515] ${
        desktop ? "p-[56px] pl-[64px]" : "px-6 pb-9 pt-14 text-center"
      }`}
    >
      <span
        className={`inline-flex w-fit items-center gap-2 rounded-full bg-[#0041b0]/10 px-3.5 py-1.5 font-['Inter:Medium',sans-serif] text-[11px] font-medium uppercase tracking-[0.16em] text-[#0041b0] ${
          desktop ? "" : "mx-auto"
        }`}
      >
        <span aria-hidden="true" className="size-1.5 rounded-full bg-[#0041b0]" />
        {isOpen ? OFFER_COPY.open.tag : OFFER_COPY.prelaunch.tag}
      </span>

      {isOpen ? (
        <>
          <p className="mt-7 font-['Sora:Regular',sans-serif] leading-none tracking-[-0.05em]">
            <span className={`block text-[#68605b] ${desktop ? "text-[22px]" : "text-[18px]"}`}>
              {price.installments}x de
            </span>
            <span className={`mt-2 block ${desktop ? "text-[64px]" : "text-[46px]"}`}>
              R$ {price.installmentValue}
            </span>
          </p>
          <p className="mt-4 font-['Inter:Regular',sans-serif] text-[17px] text-[#151515]">
            ou <strong className="font-['Inter:Semi_Bold',sans-serif] font-semibold">R$ {price.cash}</strong> à vista
          </p>
          <p className="mt-1.5 font-['Inter:Regular',sans-serif] text-[13px] text-[#7a736e]">
            Total no parcelado: R$ {price.installmentTotal}
          </p>
          <a
            className="course-primary-cta mt-8 flex min-h-16 w-full items-center justify-center gap-5 rounded-full bg-[#171717] px-7 cta-fit [--cta-fit-max:16px] [--cta-fit-reserve:92px] [--cta-fit-ratio:15.5] font-['Inter:Medium',sans-serif] text-[16px] font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0041b0]"
            href={checkoutHref}
            target="_blank"
            rel="noreferrer"
          >
            {OFFER_COPY.open.cta} <span aria-hidden="true">↗</span>
          </a>
          <p className="mt-4 font-['Inter:Regular',sans-serif] text-[12px] leading-5 text-[#7a736e]">
            {OFFER_COPY.payment(OFFER.platform, price.installments)}
          </p>
        </>
      ) : (
        <>
          <p
            className={`mt-7 font-['Sora:Regular',sans-serif] leading-[1.06] tracking-[-0.045em] ${
              desktop ? "text-[38px]" : "text-[29px]"
            }`}
          >
            {OFFER_COPY.prelaunch.highlight}
          </p>
          <p className="mt-4 font-['Inter:Regular',sans-serif] text-[16px] leading-7 text-[#5c5652]">
            {OFFER_COPY.prelaunch.text}
          </p>
          <GroupCta
            aria-label="Aprenda a criar sites fora da curva: entrar no grupo do Code Flow"
            className="cf-offer-group-cta mt-8"
            lazyBorder
          >
            {OFFER_COPY.prelaunch.cta}
          </GroupCta>
          <p className="mt-4 font-['Inter:Regular',sans-serif] text-[12px] leading-5 text-[#7a736e]">
            {OFFER_COPY.prelaunch.note}
          </p>
        </>
      )}

      <div className={`border-t border-black/10 pt-6 ${desktop ? "mt-auto" : "mt-9 text-left"}`}>
        <h4 className="font-['Inter:Medium',sans-serif] text-[11px] font-medium uppercase tracking-[0.16em] text-[#0041b0]">
          {OFFER_COPY.accessTitle}
        </h4>
        <p className="mt-2.5 font-['Inter:Regular',sans-serif] text-[14px] leading-6 text-[#5c5652]">
          {OFFER.access}
        </p>
      </div>
    </div>
  );
}

function GuaranteeSeal({ desktop }: { desktop: boolean }) {
  return (
    <div
      className={`cf-offer-seal flex items-center gap-5 text-left text-white ${
        desktop ? "w-[430px] px-6 py-5" : "mx-auto w-[88%] px-5 py-4"
      }`}
    >
      <p className="shrink-0 text-center leading-none">
        <span
          className={`block font-['Sora:Regular',sans-serif] tracking-[-0.05em] ${
            desktop ? "text-[40px]" : "text-[32px]"
          }`}
        >
          {OFFER.guaranteeDays}
        </span>
        <span className="mt-1 block font-['Inter:Medium',sans-serif] text-[10px] font-medium uppercase tracking-[0.2em] text-[#bcd3ff]">
          DIAS
        </span>
      </p>
      <p className="border-l border-white/20 pl-5">
        <span className="block font-['Inter:Medium',sans-serif] text-[11px] font-medium uppercase tracking-[0.2em] text-white/80">
          {OFFER_COPY.guarantee.label}
        </span>
        <span
          className={`mt-1 block font-['Inter:Regular',sans-serif] text-white/88 ${
            desktop ? "text-[13px] leading-[1.45]" : "text-[12px] leading-[1.4]"
          }`}
        >
          {OFFER_COPY.guarantee.text(OFFER.guaranteeDays)}
        </span>
      </p>
    </div>
  );
}

function OfferObject({ desktop }: { desktop: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute z-30 ${
        desktop ? "right-[-110px] top-[-150px] w-[470px]" : "left-1/2 top-[-118px] w-[86%] -translate-x-1/2"
      }`}
    >
      <div className="cf-offer-object-glow" />
      <img
        alt=""
        className="cf-offer-object relative block h-auto w-full"
        src={IMAGES.placeholders.offerObject}
        width={1672}
        height={941}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

/** Linha picotada que "rasga" depois que o ingresso aparece. O gatilho é o
 *  ingresso inteiro: a linha começa com escala 0 e não teria área visível
 *  para disparar um whileInView próprio. */
function Perforation({ desktop, show }: { desktop: boolean; show: boolean }) {
  return (
    <motion.span
      aria-hidden="true"
      className={`cf-offer-perf ${desktop ? "cf-offer-perf-v" : "cf-offer-perf-h"}`}
      initial={desktop ? { scaleY: 0 } : { scaleX: 0 }}
      animate={show ? (desktop ? { scaleY: 1 } : { scaleX: 1 }) : undefined}
      transition={{ duration: 0.9, delay: 0.75, ease: EASE }}
    />
  );
}

/** Oferta (#pricing) em formato de ingresso: o que está incluso de um lado,
 *  preço e botão do outro, garantia e acesso. Os dados vêm de data/offer. */
export function CourseAccessOffer({
  desktop,
  container,
}: {
  desktop: boolean;
  container: string;
}) {
  const ticketRef = useRef<HTMLDivElement>(null);
  const ticketInView = useInView(ticketRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (process.env.NODE_ENV !== "production" && isOpen && !OFFER.checkoutUrl) {
      console.warn(
        "[Code Flow] OFFER.status é \"open\" mas OFFER.checkoutUrl está vazio: o botão de compra está indo para o grupo do WhatsApp.",
      );
    }
  }, []);

  return (
    <section
      id="pricing"
      aria-label="Acesso ao método Code Flow"
      className={`cf-offer cf-offer-bg order-5 text-white ${
        desktop ? "w-[1920px] px-[210px] pt-[190px]" : "px-4 pt-[150px]"
      }`}
    >
      <div className={container}>
        {desktop ? (
          <CardReveal className="relative mx-auto w-[1380px]">
            <div ref={ticketRef} className="cf-offer-ticket relative">
              <OfferObject desktop />
              <div className="cf-offer-ticket-body cf-offer-notch-v relative grid grid-cols-[60%_40%] rounded-[28px]">
                <LiquidMetalBorder lazy />
                <div className="cf-offer-dark relative">
                  <IncludedPart desktop />
                </div>
                <div className="relative bg-white">
                  <PricePart desktop />
                </div>
                <Perforation desktop show={ticketInView} />
              </div>
              <StageReveal
                delay={0.5}
                className="absolute bottom-[-64px] left-[calc(60%-215px)] z-30"
              >
                <GuaranteeSeal desktop />
              </StageReveal>
            </div>
          </CardReveal>
        ) : (
          <CardReveal className="relative">
            <div ref={ticketRef} className="cf-offer-ticket relative">
              <OfferObject desktop={false} />
              <div className="cf-offer-part cf-offer-dark cf-offer-notch-bottom relative rounded-t-[24px]">
                <IncludedPart desktop={false} />
              </div>
              <div className="relative z-20 -my-7">
                <Perforation desktop={false} show={ticketInView} />
                <StageReveal delay={0.3}>
                  <GuaranteeSeal desktop={false} />
                </StageReveal>
              </div>
              <div className="cf-offer-part cf-offer-notch-top relative rounded-b-[24px] bg-white">
                <PricePart desktop={false} />
              </div>
            </div>
          </CardReveal>
        )}
      </div>
    </section>
  );
}
