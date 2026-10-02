"use client";

import type { AnchorHTMLAttributes } from "react";

import { LiquidMetalBorder } from "@/components/LiquidMetalBorder";
import { WHATSAPP_GROUP_URL } from "@/lib/constants";

type Props = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "target" | "rel"
> & {
  /** Adia o shader da borda até o botão chegar perto da tela. */
  lazyBorder?: boolean;
};

/** Botão de entrar no grupo do WhatsApp, usado na hero mobile e no cartão do
 *  método. Borda de metal líquido igual à do cartão da hero desktop; o resto
 *  é CSS (ver `.group-cta`). O toque longo não abre o menu do link nem começa
 *  a arrastá-lo. */
export function GroupCta({
  children,
  className = "",
  lazyBorder = false,
  ...rest
}: Props) {
  return (
    <a
      {...rest}
      className={`group-cta ${className}`.trim()}
      href={WHATSAPP_GROUP_URL}
      target="_blank"
      rel="noreferrer"
      draggable={false}
      onContextMenu={(event) => event.preventDefault()}
    >
      <LiquidMetalBorder lazy={lazyBorder} />
      <span className="group-cta-label">{children}</span>
      <span aria-hidden="true" className="group-cta-arrow">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17 17 7M8 7h9v9" />
        </svg>
      </span>
    </a>
  );
}
