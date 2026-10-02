import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Termos de uso | Code Flow",
  description: "Termos de uso do Método Code Flow: Site Fora da Curva.",
  alternates: { canonical: "/termos" },
};

export default function Page() {
  return (
    <LegalPage
      title="Termos de uso"
      description="Regras de uso do site e do Método Code Flow: Site Fora da Curva."
      sections={[
        "Aceite dos termos",
        "O que é o Método Code Flow",
        "Compra, pagamento e liberação do acesso",
        "Garantia e reembolso",
        "Uso dos prompts, templates e materiais",
        "Responsabilidades",
        "Alterações destes termos",
        "Contato",
      ]}
    />
  );
}
