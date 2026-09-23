"use client";

import { CardReveal, GsapStagger } from "@/components/motion-primitives";
import { WHATSAPP_GROUP_URL } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

const ARROW_PATH =
  "M26.8833 15.8716L12.5383 30.2166L10.1816 27.86L24.525 13.515H11.8833V10.1816H30.2166V28.515H26.8833V15.8716Z";

/** Gradiente radial vermelho da hero, exportado do Figma como SVG inline.
 *  Por cima dele ficam as três camadas animadas (brilho, profundidade e sombra). */
const HERO_GRADIENT_SVG = `url("data:image/svg+xml;utf8,<svg viewBox='0 0 1920 938' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(295.57 0 0 84.39 970.24 8.0085)'><stop stop-color='rgba(255,255,255,1)' offset='0.22944'/><stop stop-color='rgba(252,232,232,1)' offset='0.28364'/><stop stop-color='rgba(243,199,199,1)' offset='0.3326'/><stop stop-color='rgba(223,119,119,1)' offset='0.40295'/><stop stop-color='rgba(199,59,59,1)' offset='0.46616'/><stop stop-color='rgba(176,0,0,1)' offset='0.52995'/><stop stop-color='rgba(143,23,23,1)' offset='0.56826'/><stop stop-color='rgba(100,13,13,1)' offset='0.60656'/><stop stop-color='rgba(56,7,7,1)' offset='0.66288'/><stop stop-color='rgba(43,5,5,1)' offset='0.69513'/><stop stop-color='rgba(21,3,3,1)' offset='0.72738'/><stop stop-color='rgba(14,2,2,1)' offset='0.81323'/><stop stop-color='rgba(8,1,1,1)' offset='0.85616'/><stop stop-color='rgba(0,0,0,1)' offset='0.89909'/></radialGradient></defs></svg>")`;

function HeroGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden" data-name="Gradient">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: HERO_GRADIENT_SVG }}
      />
      <div
        aria-hidden="true"
        className="hero-gradient-motion pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="hero-gradient-depth pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="hero-gradient-shadow-motion pointer-events-none absolute inset-0"
      />
    </div>
  );
}

/** Textura de fundo em 20% de opacidade, atrás do gradiente. */
function HeroBackdrop() {
  return (
    <div className="absolute inset-[0_0_-0.02%_0] flex flex-col content-stretch items-start opacity-20">
      <div className="relative flex min-h-px w-[1920px] flex-[1_0_0] flex-col content-stretch items-start justify-center overflow-clip">
        <div className="relative min-h-px w-full flex-[1_0_0]">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute inset-0 size-full object-cover"
              src={IMAGES.heroBackground}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroCta() {
  return (
    <a
      href={WHATSAPP_GROUP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Entrar no grupo oficial do lançamento"
      className="group block w-full cursor-pointer rounded-[12px] text-left outline-none focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
    >
      <CardReveal className="desktop-hero-cta-card relative flex w-full shrink-0 flex-col content-stretch items-center justify-center gap-[42px] overflow-clip rounded-[16px] border border-white/15 bg-[linear-gradient(145deg,rgba(8,8,8,0.96),rgba(42,0,0,0.94))] p-[26px] shadow-[0_22px_58px_rgba(32,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-[5px] transition-[transform,border-color,box-shadow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-hover:border-[#ff5a52]/45 group-hover:shadow-[0_28px_68px_rgba(32,0,0,0.46),0_0_34px_rgba(176,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.12)]">
        <div className="relative flex w-full shrink-0 flex-col content-stretch items-start">
          <span className="mb-3 font-['Inter:Medium',sans-serif] text-[11px] font-medium uppercase tracking-[0.18em] text-[#ff7770]">
            Code Makers + Code Hunter
          </span>
          <div className="relative flex w-full shrink-0 flex-col justify-center font-['Sora:Regular',sans-serif] text-[22px] font-normal leading-[0] text-white [word-break:break-word]">
            <p className="leading-[29px]">Da ideia ao cliente.</p>
            <p className="leading-[29px] text-white/72">
              Do cliente ao dinheiro no bolso.
            </p>
          </div>
        </div>

        <div className="relative flex w-full shrink-0 items-center justify-between overflow-clip content-stretch">
          <div className="relative flex shrink-0 flex-col content-stretch items-start">
            <div className="relative flex shrink-0 flex-col justify-center whitespace-nowrap font-['Inter:Bold',sans-serif] text-[19px] font-bold leading-[0] text-white [word-break:break-word]">
              <p className="leading-[28px]">ENTRAR NO GRUPO OFICIAL</p>
            </div>
          </div>
          <div className="relative flex size-[44px] shrink-0 origin-center flex-col content-stretch items-start justify-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-45 group-focus-visible:rotate-45">
            <div className="relative min-h-px w-full flex-[1_0_0] overflow-clip">
              <svg
                className="absolute inset-0 block size-full"
                fill="none"
                height="40"
                preserveAspectRatio="none"
                viewBox="0 0 40 40"
                width="40"
              >
                <path d={ARROW_PATH} fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </CardReveal>
    </a>
  );
}

export function DesktopHero() {
  return (
    <div
      id="home"
      className="desktop-hero-section relative flex w-[1920px] shrink-0 flex-col content-stretch items-center justify-end overflow-clip px-[236px] pb-[124px] pt-[370px]"
      data-name="Hero Section"
    >
      <HeroGradient />
      <HeroBackdrop />

      <div className="relative flex w-full max-w-[1430px] shrink-0 -translate-x-[9px] flex-col content-stretch items-center justify-center">
        <GsapStagger className="relative flex w-full shrink-0 flex-col content-stretch items-center justify-center gap-[130px]">
          <div className="relative flex w-full shrink-0 items-center justify-between overflow-clip content-stretch">
            <div className="relative h-[152px] min-w-px max-w-[420px] flex-[1_0_0]">
              <div className="absolute left-0 right-0 top-[-1.03px] flex flex-col content-stretch items-start">
                <h1 className="relative flex shrink-0 flex-col justify-center whitespace-nowrap font-['Sora:Regular',sans-serif] text-[30px] font-normal leading-[0] text-white [word-break:break-word]">
                  <span className="mb-0 whitespace-pre leading-[38px]">
                    Crie com IA.
                  </span>
                  <span className="mb-0 whitespace-pre leading-[38px]">
                    Encontre com a Code Hunter.
                  </span>
                  <span className="mb-0 whitespace-pre leading-[38px]">
                    Venda com a nossa
                  </span>
                  <span className="whitespace-pre leading-[38px]">
                    metodologia.
                  </span>
                </h1>
              </div>
            </div>

            <div className="relative flex w-[385px] max-w-[385px] shrink-0 flex-col content-stretch items-start">
              <HeroCta />
            </div>
          </div>

          <div className="relative flex shrink-0 flex-col content-stretch items-start">
            <div className="relative flex w-full shrink-0 flex-col content-stretch items-center">
              <div className="relative flex shrink-0 flex-col justify-center whitespace-nowrap text-center font-['Sora:Regular',sans-serif] text-[248px] font-normal uppercase leading-[0] text-white [word-break:break-word]">
                <p className="leading-[223.2px]">Code Makers</p>
              </div>
            </div>
          </div>
        </GsapStagger>
      </div>

      <div
        className="hero-robot-entry absolute bottom-0 left-[473px] flex h-[945px] w-[974px] flex-col content-stretch items-start justify-center overflow-clip"
        data-name="Container"
      >
        <div className="relative min-h-px w-full flex-[1_0_0]">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute left-[-0.01%] top-0 h-full w-[100.02%] max-w-none"
              src={IMAGES.heroRobot}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
