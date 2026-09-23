"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

/** Faixa desfocada colada na base da janela, renderizada em portal para ficar
 *  fora do frame escalado do desktop. */
export function ViewportHaze() {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setContainer(document.body);
  }, []);

  if (!container) return null;

  return createPortal(
    <div
      aria-hidden="true"
      className="viewport-bottom-haze"
      style={{
        backdropFilter: "blur(26px) saturate(1.06)",
        WebkitBackdropFilter: "blur(26px) saturate(1.06)",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.34) 38%, black 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.34) 38%, black 100%)",
      }}
    />,
    container,
  );
}
