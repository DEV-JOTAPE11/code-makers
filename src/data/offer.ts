/** Oferta do Método Code Flow (#pricing). Tudo que muda na abertura do
 *  carrinho fica aqui: status, checkout, preço, garantia e acesso. */

export type OfferStatus = "prelaunch" | "open";

export const OFFER = {
  status: "prelaunch" as OfferStatus, // trocar para "open" na abertura
  checkoutUrl: "", // [PREENCHER] link do checkout
  platform: "[PREENCHER plataforma]",
  price: {
    installments: 12, // [CONFIRMAR]
    installmentValue: "[PREENCHER]",
    cash: "[PREENCHER]",
    installmentTotal: "[PREENCHER]",
  },
  guaranteeDays: 7, // [CONFIRMAR] mínimo legal: 7
  // [CONFIRMAR] prazos de liberação conforme a plataforma escolhida
  access:
    "Assim que o pagamento é aprovado, o acesso à área de membros chega no seu e-mail. Pix e cartão liberam na hora; boleto em até [CONFIRMAR 3] dias úteis.",
  included: [
    "Método Code Flow: Site Fora da Curva, as 4 etapas em aulas gravadas",
    "Prompts prontos para adaptar a qualquer nicho",
    "+20 templates com animação nível awards",
    "Aula de imagens: recorte, geração e otimização",
    "Passo a passo de publicação: Git, GitHub, Vercel e domínio próprio",
    "Comunidade Code Flow [PREENCHER suporte]",
    // Não renderiza enquanto continuar com o marcador (ver CourseAccessOffer).
    "[PREENCHER bônus, se houver]",
  ],
};

/** Textos fixos da seção de oferta. */
export const OFFER_COPY = {
  eyebrow: "ACESSO COMPLETO",
  title: ["Tudo para colocar", "um site fora da curva no ar."],
  includedTitle: "O que está incluso",
  // Mesmo claim do CourseTemplates.
  anchor: {
    label: "Valor somado dos templates",
    value: "R$ 100 mil+",
    note: "Incluso no método.",
  },
  open: {
    tag: "PREÇO DE LANÇAMENTO",
    cta: "QUERO ACESSO AO CODE FLOW",
  },
  prelaunch: {
    tag: "PRÉ-LANÇAMENTO",
    highlight: "Preço de lançamento só para quem está no grupo.",
    text: "A abertura das vagas e o valor especial são anunciados primeiro no grupo do Code Flow.",
    cta: "APRENDA A CRIAR SITES FORA DA CURVA!",
    note: "Você será direcionado para o grupo do Code Flow no WhatsApp.",
  },
  accessTitle: "Como você recebe o acesso",
  guarantee: {
    label: "GARANTIA",
    text: (days: number) =>
      `Se nos primeiros ${days} dias você achar que o método não é para você, peça o reembolso pela própria plataforma e receba 100% do valor de volta.`,
  },
  payment: (platform: string, installments: number) =>
    `Pix, cartão em até ${installments}x ou boleto · pagamento seguro via ${platform}`,
};
