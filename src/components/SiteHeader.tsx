"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import { NAV_SECTIONS } from "@/data/site";
import { IMAGES } from "@/lib/images";
import { navigateToSection } from "@/lib/navigateToSection";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const goTo = (id: string) => {
    setOpen(false);
    navigateToSection(id);
  };

  return (
    <header className="site-header site-header-entry absolute inset-x-0 top-0 z-50 px-4 py-4 lg:px-16 lg:py-[22px]">
      <div className="site-header-shell relative mx-auto w-full overflow-visible rounded-[22px] border border-white/30 bg-[rgba(7,41,99,0.28)] px-4 py-3 shadow-[0_16px_40px_rgba(0,14,38,0.22),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-[18px] lg:max-w-[1430px] lg:px-5">
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => goTo("home")}
            className="flex items-center"
            aria-label="Code Flow — ir ao topo"
          >
            <span className="site-header-logo inline-flex h-10 items-center gap-2.5 font-['Sora:Regular',sans-serif] text-[21px] tracking-[-0.8px] text-white lg:h-11 lg:gap-3 lg:text-[23px]">
              <img
                aria-hidden="true"
                alt=""
                className="site-header-symbol h-7 w-auto object-contain brightness-0 invert lg:h-8"
                src={IMAGES.symbol}
              />
              <span>Code Flow</span>
            </span>
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.nav
                id="site-navigation"
                initial={{ opacity: 0, x: 22, filter: "blur(4px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: 16, filter: "blur(3px)" }}
                transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex"
                aria-label="Seções do site"
              >
                {NAV_SECTIONS.map((section, index) => (
                  <motion.button
                    key={section.id}
                    type="button"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{
                      duration: 0.32,
                      delay: index * 0.045,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onClick={() => goTo(section.id)}
                    className="rounded-full px-3 py-2 font-['Inter:Medium',sans-serif] text-[15px] font-medium text-white transition-colors duration-300 hover:bg-white/15 xl:px-4"
                  >
                    {section.label}
                  </motion.button>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>

          <div className="relative flex items-center gap-2">
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="site-header-toggle flex size-12 items-center justify-center rounded-full border border-white/65 bg-white/95 text-[#051126] shadow-[0_8px_20px_rgba(0,14,38,0.16)] backdrop-blur-md transition-colors duration-300 hover:bg-white"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              aria-controls="site-navigation"
            >
              <span className="relative block size-[23px]" aria-hidden="true">
                <span
                  className={`absolute left-0 top-[7px] h-[2.2px] w-full rounded-full bg-current transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    open ? "translate-y-[3px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-[2.2px] w-full rounded-full bg-current transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    open ? "-translate-y-[4px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-navigation-mobile"
            initial={{ opacity: 0, y: -18, scaleY: 0.72, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, scaleY: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -14, scaleY: 0.82, filter: "blur(5px)" }}
            transition={{ duration: 0.46, ease: [0.16, 1, 0.3, 1] }}
            className="mobile-nav-panel absolute left-1/2 top-[calc(100%+12px)] z-[60] flex max-h-[calc(100svh-118px)] w-[calc(100vw-32px)] max-w-[430px] origin-top -translate-x-1/2 flex-col gap-1 overflow-x-hidden overflow-y-auto overscroll-contain rounded-[22px] border border-white/25 p-3 lg:hidden"
          >
            <p className="mobile-nav-eyebrow px-3 pb-2 pt-1 font-['Inter:Medium',sans-serif] text-[11px] font-medium uppercase tracking-[0.18em]">
              Navegação
            </p>
            {NAV_SECTIONS.map((section, index) => (
              <motion.button
                key={section.id}
                type="button"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{
                  duration: 0.28,
                  delay: 0.1 + index * 0.045,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => goTo(section.id)}
                className="mobile-nav-link group flex items-center justify-between rounded-[14px] px-4 py-3 text-left font-['Inter:Medium',sans-serif] text-[16px] font-medium"
              >
                <span>{section.label}</span>
                <span
                  aria-hidden="true"
                  className="mobile-nav-link-arrow text-[18px] leading-none"
                >
                  ↗
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
