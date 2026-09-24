"use client";

import { MagneticHover } from "@/components/motion-primitives";
import { WHATSAPP_GROUP_URL } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { navigateToSection } from "@/lib/navigateToSection";

/** Gradiente radial claro→preto que abre o rodapé. */
const FOOTER_GRADIENT = `url("data:image/svg+xml;utf8,<svg viewBox='0 0 1920 905.41' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(390.34 0 0 81.941 970.24 0)'><stop stop-color='rgba(245,245,245,1)' offset='0.22944'/><stop stop-color='rgba(238,244,255,1)' offset='0.28364'/><stop stop-color='rgba(216,230,255,1)' offset='0.3326'/><stop stop-color='rgba(155,191,252,1)' offset='0.40295'/><stop stop-color='rgba(85,141,239,1)' offset='0.46616'/><stop stop-color='rgba(0,65,176,1)' offset='0.52995'/><stop stop-color='rgba(26,74,158,1)' offset='0.56826'/><stop stop-color='rgba(13,53,121,1)' offset='0.60656'/><stop stop-color='rgba(7,34,80,1)' offset='0.66288'/><stop stop-color='rgba(5,25,60,1)' offset='0.69513'/><stop stop-color='rgba(3,18,43,1)' offset='0.72738'/><stop stop-color='rgba(2,10,24,1)' offset='0.81323'/><stop stop-color='rgba(1,5,13,1)' offset='0.85616'/><stop stop-color='rgba(0,0,0,1)' offset='0.89909'/></radialGradient></defs></svg>")`;

const PRIMARY_LINKS = [
  { id: "home", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "services", label: "Serviços" },
  { id: "projects", label: "Projetos" },
];

const SECONDARY_LINKS = [{ id: "pricing", label: "Lançamento" }];

function FooterLink({ id, label }: { id: string; label: string }) {
  return (
    <button
      type="button"
      onClick={() => navigateToSection(id)}
      className="relative flex shrink-0 flex-col content-stretch items-start overflow-clip text-left"
    >
      <div className="relative flex shrink-0 flex-col justify-center whitespace-nowrap font-['Inter:Regular',sans-serif] text-[16px] font-normal not-italic leading-[0] text-white transition-colors hover:text-[rgba(255,255,255,0.7)] [word-break:break-word]">
        <p className="leading-[24px]">{label}</p>
      </div>
    </button>
  );
}

export function DesktopFooter() {
  return (
    <div
      className="relative flex w-full shrink-0 flex-col content-stretch items-center justify-center overflow-clip px-[30px] pb-[45px] pt-[65px]"
      data-name="Footer - Desktop"
    >
      <div
        className="absolute inset-0"
        style={{ backgroundImage: FOOTER_GRADIENT }}
        data-name="Gradient"
      />

      <div className="relative flex w-[1300px] shrink-0 flex-col content-stretch items-center justify-center gap-[150px]">
        {/* Chamada final sobre o gradiente claro */}
        <div className="relative flex w-[640px] max-w-[640px] shrink-0 flex-col content-stretch items-center gap-[34px] text-center">
          <div className="relative flex w-full shrink-0 flex-col content-stretch items-center gap-[22px]">
            <div className="relative w-full shrink-0">
              <div className="whitespace-nowrap text-center font-['Sora:Regular',sans-serif] text-[60px] leading-[1.12] tracking-[-1.2px] text-black">
                <p>Seu próximo projeto</p>
                <p>precisa virar venda</p>
              </div>
            </div>
            <div className="relative flex w-full shrink-0 flex-col items-center text-center font-['Inter:Regular',sans-serif] text-[16px] font-normal not-italic leading-[24px] text-[#171717] [word-break:break-word]">
              <p>Entre no grupo para aprender a criar com IA, encontrar clientes</p>
              <p>com a Code Hunter e vender com o método Code Flow.</p>
            </div>
          </div>

          <div className="relative flex shrink-0 flex-col content-stretch items-start">
            <MagneticHover className="relative flex shrink-0 cursor-pointer items-center justify-center overflow-clip rounded-[51px] bg-black p-px content-stretch">
              <a
                className="contents"
                href={WHATSAPP_GROUP_URL}
                target="_blank"
                rel="noreferrer"
              >
                <div className="relative flex min-h-[54px] shrink-0 items-center justify-center rounded-[51px] bg-black px-[26px] py-[13px] content-stretch">
                  <div className="relative flex shrink-0 flex-col content-stretch items-center">
                    <div className="relative flex w-full shrink-0 flex-col content-stretch items-center">
                      <div className="relative flex shrink-0 flex-col justify-center whitespace-nowrap font-['Inter:Medium',sans-serif] text-[16px] font-medium not-italic leading-[0] text-white [word-break:break-word]">
                        <p className="leading-[24px]">Entrar no grupo oficial</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </MagneticHover>
          </div>
        </div>

        {/* Bloco institucional sobre o fundo preto */}
        <div className="relative flex w-full shrink-0 flex-col content-stretch items-center justify-center gap-[50px] overflow-clip">
          <div className="relative flex w-full shrink-0 items-start justify-between overflow-clip content-stretch">
            <div className="relative flex w-[329px] max-w-[329px] shrink-0 flex-col content-stretch items-start justify-center overflow-clip">
              <div className="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[25px]">
                <div className="relative flex shrink-0 flex-col content-stretch items-start justify-center overflow-clip">
                  <p className="inline-flex items-center gap-3 whitespace-nowrap font-['Sora:Regular',sans-serif] text-[26px] font-normal text-white">
                    <img
                      aria-hidden="true"
                      alt=""
                      className="h-10 w-auto object-contain brightness-0 invert"
                      src={IMAGES.symbol}
                    />
                    <span>Code Flow</span>
                  </p>
                </div>
                <div className="relative flex w-full shrink-0 flex-col content-stretch items-start">
                  <div className="relative flex w-full shrink-0 flex-col justify-center whitespace-pre-wrap font-['Inter:Regular',sans-serif] text-[16px] font-normal not-italic leading-[0] text-white [word-break:break-word]">
                    <p className="mb-0 leading-[24px]">
                      Crie com IA, encontre clientes
                    </p>
                    <p className="mb-0 leading-[24px]">
                      qualificados e venda soluções
                    </p>
                    <p className="leading-[24px]">para empresas.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex w-[280px] max-w-[280px] shrink-0 items-start gap-[30px] content-stretch">
              <div className="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start gap-[10px]">
                {PRIMARY_LINKS.map((link) => (
                  <FooterLink key={link.id} {...link} />
                ))}
              </div>
              <div className="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start gap-[10px]">
                {SECONDARY_LINKS.map((link) => (
                  <FooterLink key={link.id} {...link} />
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex w-full shrink-0 items-center justify-center overflow-clip pt-[30px] content-stretch">
            <div className="relative flex min-w-px flex-[1_0_0] flex-col content-stretch items-start">
              <div className="relative flex w-full shrink-0 flex-col content-stretch items-center">
                <div className="relative flex shrink-0 flex-col justify-center whitespace-nowrap text-center font-['Inter:Regular',sans-serif] text-[16px] font-normal not-italic leading-[0] text-[rgba(255,255,255,0.7)] [word-break:break-word]">
                  <p>
                    <span className="leading-[24px]">
                      Copyright © 2026 Code Flow. Todos os direitos
                      reservados.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="absolute inset-0 border-t border-solid border-[rgba(255,255,255,0.2)]"
              data-name="HorizontalBorder"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
