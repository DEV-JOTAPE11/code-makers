import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>;

/** Botão do mobile com borda e superfície animadas (ver `.shiny-cta` no CSS).
 *  Vira `<a>` quando recebe href, caso contrário é um `<button>`. */
export function ShinyCta({ children, className = "", ...rest }: Props) {
  const content = (
    <>
      <span aria-hidden="true" className="shiny-cta-surface" />
      <span className="shiny-cta-label">{children}</span>
      <span aria-hidden="true" className="shiny-cta-arrow">
        ↗
      </span>
    </>
  );

  if (rest.href) {
    return (
      <a className={`shiny-cta ${className}`.trim()} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button className={`shiny-cta ${className}`.trim()} type="button" {...rest}>
      {content}
    </button>
  );
}
