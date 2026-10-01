"use client";

import { CourseFinalPush } from "./CourseFinalPush";
import { CourseManifesto } from "./CourseManifesto";
import { CourseObjections } from "./CourseObjections";
import { CourseOffer } from "./CourseOffer";
import { CourseTemplates } from "./CourseTemplates";
import { CourseTransformation } from "./CourseTransformation";

/** Jornada de venda: templates → manifesto → oferta → virada → CTA → dúvidas.
 *  A ordem visual é dada pelas classes `order-*` de cada seção, para que o
 *  DOM continue na ordem semântica. */
export function CourseSalesJourney({ desktop = false }: { desktop?: boolean }) {
  const container = desktop ? "mx-auto w-[1500px]" : "mx-auto max-w-[430px]";

  return (
    <div
      className={`course-sales-journey flex w-full flex-col ${
        desktop ? "w-[1920px]" : ""
      }`}
    >
      <CourseTemplates desktop={desktop} container={container} />
      <CourseManifesto desktop={desktop} container={container} />
      <CourseTransformation desktop={desktop} container={container} />
      <CourseOffer desktop={desktop} container={container} />
      <CourseFinalPush desktop={desktop} container={container} />
      <CourseObjections desktop={desktop} container={container} />
    </div>
  );
}
