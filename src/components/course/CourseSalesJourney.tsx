"use client";

import { CourseAccessOffer } from "./CourseAccessOffer";
import { CourseAuthor } from "./CourseAuthor";
import { CourseDemo } from "./CourseDemo";
import { CourseManifesto } from "./CourseManifesto";
import { CourseMethod } from "./CourseMethod";
import { CourseObjections } from "./CourseObjections";
import { CourseTemplates } from "./CourseTemplates";

/** Jornada de venda: templates → manifesto → demonstração → método → autor
 *  → oferta → dúvidas. O DOM segue a ordem visual; as classes `order-*`
 *  (0 a 6) de cada seção só confirmam essa ordem no flex. */
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
      <CourseDemo desktop={desktop} container={container} />
      <CourseMethod desktop={desktop} container={container} />
      <CourseAuthor desktop={desktop} container={container} />
      <CourseAccessOffer desktop={desktop} container={container} />
      <CourseObjections desktop={desktop} container={container} />
    </div>
  );
}
