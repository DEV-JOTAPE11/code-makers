"use client";

import dynamic from "next/dynamic";

/** A home mede a janela para escolher entre mobile e a prancheta de 1920px,
 *  por isso é montada apenas no cliente. O <head> continua vindo do servidor. */
const HomeExperience = dynamic(
  () => import("@/components/HomeExperience").then((m) => m.HomeExperience),
  { ssr: false },
);

export function HomeClient() {
  return <HomeExperience />;
}
