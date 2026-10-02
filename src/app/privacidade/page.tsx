import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Política de privacidade | Code Flow",
  description: "Como o Code Flow coleta, usa e protege os seus dados.",
  alternates: { canonical: "/privacidade" },
};

export default function Page() {
  return (
    <LegalPage
      title="Política de privacidade"
      description="Como o Code Flow coleta, usa e protege os seus dados, de acordo com a LGPD."
      sections={[
        "Quem é o controlador dos dados",
        "Quais dados coletamos",
        "Para que usamos os dados",
        "Com quem compartilhamos",
        "Cookies e ferramentas de análise",
        "Seus direitos como titular (LGPD)",
        "Por quanto tempo guardamos os dados",
        "Contato do encarregado",
      ]}
    />
  );
}
