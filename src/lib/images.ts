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
} as const;
