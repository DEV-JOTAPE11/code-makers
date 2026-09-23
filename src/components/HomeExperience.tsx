"use client";

import { useEffect, useState } from "react";

import { SiteHeader } from "@/components/SiteHeader";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ViewportHaze } from "@/components/ViewportHaze";
import { DesktopFrame } from "@/components/desktop/DesktopFrame";
import { DesktopHome } from "@/components/desktop/DesktopHome";
import { MobileHome } from "@/components/mobile/MobileHome";

const MOBILE_QUERY = "(max-width: 1023px)";

/** Escolhe entre a home mobile e a prancheta desktop. Este componente só é
 *  montado no cliente (ver HomeClient), então pode medir a janela já na
 *  primeira renderização e evitar troca de layout depois da pintura. */
export function HomeExperience() {
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia(MOBILE_QUERY).matches,
  );

  useEffect(() => {
    const query = window.matchMedia(MOBILE_QUERY);
    const sync = () => setIsMobile(query.matches);

    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return (
    <SmoothScroll>
      <div className="w-full">
        <SiteHeader />
        {isMobile ? (
          <MobileHome />
        ) : (
          <DesktopFrame>
            <DesktopHome />
          </DesktopFrame>
        )}
      </div>
      <ViewportHaze />
    </SmoothScroll>
  );
}
