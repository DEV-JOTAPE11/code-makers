import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { LiquidMetalBorder } from "@/components/LiquidMetalBorder";

type Props = {
  children: ReactNode;
  className?: string;
  /** Troca o brilho de borda pelo anel de metal líquido. */
  metalBorder?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>;

/** Botão do mobile com borda e superfície animadas (ver `.shiny-cta` no CSS).
 *  Vira `<a>` quando recebe href, caso contrário é um `<button>`. */
export function ShinyCta({
  children,
  className = "",
  metalBorder = false,
  ...rest
}: Props) {
  const classes = `shiny-cta ${metalBorder ? "shiny-cta--metal " : ""}${className}`.trim();

  const content = (
    <>
      {metalBorder && <LiquidMetalBorder />}
      <span aria-hidden="true" className="shiny-cta-surface" />
      <span className="shiny-cta-label">{children}</span>
      <span aria-hidden="true" className="shiny-cta-arrow">
        ↗
      </span>
    </>
  );

  if (rest.href) {
    // Sem arraste nem menu de contexto: o toque longo no link travava o mobile.
    return (
      <a
        className={classes}
        draggable={false}
        onContextMenu={(event) => event.preventDefault()}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...rest}>
      {content}
    </button>
  );
}
