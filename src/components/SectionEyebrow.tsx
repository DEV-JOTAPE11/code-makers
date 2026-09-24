import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  light?: boolean;
  centered?: boolean;
};

/** Rótulo com ponto luminoso que abre cada seção. */
export function SectionEyebrow({
  children,
  light = false,
  centered = false,
}: Props) {
  return (
    <div
      className={`mb-5 flex items-center gap-3 font-['Inter:Medium',sans-serif] text-[12px] font-medium uppercase tracking-[0.18em] ${
        centered ? "justify-center" : "justify-center lg:justify-start"
      } ${light ? "text-[#83b0ff]" : "text-[#0b3b8d]"}`}
    >
      <span
        className={`size-2 rounded-full ${
          light
            ? "bg-[#307cff] shadow-[0_0_16px_rgba(48,124,255,0.8)]"
            : "bg-[#0041b0]"
        }`}
      />
      {children}
    </div>
  );
}
