import { ConversionRail } from "@/components/ConversionRail";
import { CourseSalesJourney } from "@/components/course/CourseSalesJourney";

import { DesktopFooter } from "./DesktopFooter";
import { DesktopHero } from "./DesktopHero";

/** Home desktop, desenhada na prancheta de 1920px. */
export function DesktopHome() {
  return (
    <div
      className="relative flex size-full flex-col content-stretch items-start"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(245, 245, 245) 0%, rgb(245, 245, 245) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
      }}
      data-name="1920w light"
    >
      <div className="relative flex min-h-[1200px] w-full shrink-0 flex-col content-stretch items-center overflow-clip bg-[#f5f5f5]">
        <DesktopHero />
        <ConversionRail desktop />
        <CourseSalesJourney desktop />
        <DesktopFooter />
      </div>
    </div>
  );
}
