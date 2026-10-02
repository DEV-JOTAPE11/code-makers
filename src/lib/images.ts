/** Caminhos dos assets estáticos, centralizados para evitar strings soltas. */
export const IMAGES = {
  heroBackground: "/assets/fundo-flow.png",
  heroRobot: "/assets/hero-robot-blue.png",
  hands: "/assets/mãos.png",
  leonardoDicaprio: "/assets/leonardo-dicaprio.png",
  templates: "/assets/templates-showcase.webp",
  redTexture: "/assets/textura-vermelha.png",
  integratedStack: "/assets/stack-solar-integrado.png",
  symbol: "/code-flow-symbol.png",

  services: {
    sites: "/assets/service-sites.png",
    agents: "/assets/service-agents.png",
    systems: "/assets/service-systems.png",
    automation: "/assets/service-automation.png",
  },

  projects: {
    siteComIa: "/assets/project-site-com-ia.png",
    sistemaSobDemanda: "/assets/project-sistema-sob-demanda.png",
    propostaB2b: "/assets/project-proposta-b2b.png",
  },

  blog: {
    leads: "/assets/blog-leads-syrion.png",
    automacao: "/assets/blog-automacao-syrion.png",
    atendimento: "/assets/blog-atendimento-ia-syrion.png",
  },

  // PLACEHOLDER: substituir pela imagem final (ver briefing/PLACEHOLDERS.md).
  // Imagens do Pinterest só para desenvolvimento local: não vão para produção.
  placeholders: {
    demo: {
      barbearia: {
        desktop: "/assets/placeholders/demo-barbearia-desktop.webp",
        mobile: "/assets/placeholders/demo-barbearia-mobile.webp",
      },
      suplementos: {
        desktop: "/assets/placeholders/demo-suplementos-desktop.webp",
        mobile: "/assets/placeholders/demo-suplementos-mobile.webp",
      },
      gastronomia: {
        desktop: "/assets/placeholders/demo-gastronomia-desktop.webp",
        mobile: "/assets/placeholders/demo-gastronomia-mobile.webp",
      },
      eletronicos: {
        desktop: "/assets/placeholders/demo-eletronicos-desktop.webp",
        mobile: "/assets/placeholders/demo-eletronicos-mobile.webp",
      },
      provedor: {
        desktop: "/assets/placeholders/demo-provedor-desktop.webp",
        mobile: "/assets/placeholders/demo-provedor-mobile.webp",
      },
      hotelaria: {
        desktop: "/assets/placeholders/demo-hotelaria-desktop.webp",
        mobile: "/assets/placeholders/demo-hotelaria-mobile.webp",
      },
    },
    lessonPoster: "/assets/placeholders/demo-aula-poster.webp",
    method: {
      step01: "/assets/placeholders/metodo-01.webp",
      step02: "/assets/placeholders/metodo-02.webp",
      step03: "/assets/placeholders/metodo-03.webp",
      step04: "/assets/placeholders/metodo-04.webp",
    },
    authorPortrait: "/assets/placeholders/autor-retrato.webp",
    authorWorks: {
      almeida: "/assets/placeholders/autor-case-almeida-imports.webp",
      globoSat: "/assets/placeholders/autor-case-globo-sat.webp",
      boiNaBrasa: "/assets/placeholders/autor-case-boi-na-brasa.webp",
      lacerda: "/assets/placeholders/autor-case-lacerda-suplementos.webp",
    },
    offerObject: "/assets/placeholders/oferta-objeto.webp",
  },
} as const;
