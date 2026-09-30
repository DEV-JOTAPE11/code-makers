import type { AnchorHTMLAttributes } from "react";

import { WHATSAPP_GROUP_URL } from "@/lib/constants";

type Props = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "target" | "rel"
>;

/** Botão de entrar no grupo do WhatsApp, usado na hero mobile e no cartão do
 *  método. Um link simples, igual ao botão da hero da Globosat (ver
 *  `.btn-glow` no globals.css). */
export function GroupCta({ children, className = "", ...rest }: Props) {
  return (
    <a
      {...rest}
      className={`btn-glow ${className}`.trim()}
      href={WHATSAPP_GROUP_URL}
      target="_blank"
      rel="noreferrer"
    >
      <span className="btn-glow-inner">
        {children}
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </span>
    </a>
  );
}
