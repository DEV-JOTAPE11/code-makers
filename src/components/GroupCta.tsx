"use client";

import type { AnchorHTMLAttributes } from "react";

import { WHATSAPP_GROUP_URL } from "@/lib/constants";

type Props = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "target" | "rel"
>;

/** Botão de entrar no grupo do WhatsApp: o mesmo da seção "A IA não é o
 *  problema", usado também na hero mobile e no cartão do método.
 *  O toque longo não abre menu nem arrasta o link: no mobile isso congelava
 *  a página em cima do fundo animado da hero. */
export function GroupCta({ children, className = "", ...rest }: Props) {
  return (
    <a
      {...rest}
      className={`course-primary-cta inline-flex min-h-14 items-center gap-6 rounded-full bg-[#171717] px-8 font-['Inter:Medium',sans-serif] text-[15px] font-medium text-white ${className}`.trim()}
      href={WHATSAPP_GROUP_URL}
      target="_blank"
      rel="noreferrer"
      draggable={false}
      onContextMenu={(event) => event.preventDefault()}
    >
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}
