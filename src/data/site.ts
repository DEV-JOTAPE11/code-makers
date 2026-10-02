/** Conteúdo editorial do site. Mantido fora dos componentes para que o
 *  texto possa ser revisado sem tocar em layout ou motion. */

export const FAQ: [question: string, answer: string][] = [
  [
    "Preciso saber programar?",
    "Não. O método inteiro parte de um único prompt. Você aprende o que pedir, como pedir e como revisar o resultado, sem escrever código.",
  ],
  [
    "É mesmo um prompt só?",
    "Sim. A estrutura do método concentra identidade, seções, copy e animações em um único comando. Ajustes finos são opcionais, não obrigatórios.",
  ],
  [
    "O site não vai ficar com cara de feito por IA?",
    "Esse é justamente o ponto. O método foi criado para fugir do layout genérico e entregar sites com direção de arte de verdade.",
  ],
  [
    "Serve para qualquer tipo de site?",
    "Sim. Landing pages, sites institucionais, portfólios e páginas de venda seguem a mesma lógica: referência, identidade e estrutura dentro do prompt.",
  ],
  [
    "Posso vender os sites que eu criar?",
    "Pode. Com o método você cria projetos prontos para portfólio e para oferecer a empresas e clientes.",
  ],
  [
    "Como participo?",
    "Entre no grupo do Code Flow. É por lá que você recebe os avisos de abertura e todos os detalhes do Método Code Flow: Site Fora da Curva.",
  ],
];

export const NAV_SECTIONS = [
  { id: "metodo", label: "O método" },
  { id: "pricing", label: "Acesso" },
  { id: "faq", label: "Dúvidas" },
] as const;

/** Texto do botão que leva para a oferta (#pricing). */
export const ACCESS_CTA = "QUERO ACESSO AO MÉTODO";

/* ------------------------------------------------------------------------ */
/* Demonstração (#demo)                                                      */
/* ------------------------------------------------------------------------ */

export type DemoNiche = {
  id: string;
  label: string;
  /** Chave do par de telas em IMAGES.placeholders.demo. */
  screen:
    | "barbearia"
    | "suplementos"
    | "gastronomia"
    | "eletronicos"
    | "provedor"
    | "hotelaria";
};

export const DEMO = {
  eyebrow: "DEMONSTRAÇÃO REAL",
  title: ["Troque o nicho. Cole o prompt.", "Veja o site nascer."],
  text: "É assim na prática: você pega o prompt pronto, troca o nicho pelo do seu cliente e cola junto com o template. A IA devolve o site com estrutura, copy e animações no lugar, no computador e no celular.",
  niches: [
    { id: "barbearia", label: "Barbearia", screen: "barbearia" },
    { id: "suplementos", label: "Suplementos", screen: "suplementos" },
    { id: "gastronomia", label: "Gastronomia", screen: "gastronomia" },
    { id: "eletronicos", label: "Eletrônicos", screen: "eletronicos" },
    { id: "provedor", label: "Provedor de internet", screen: "provedor" },
    { id: "hotelaria", label: "Hotelaria", screen: "hotelaria" },
  ] satisfies DemoNiche[],
  console: {
    title: "PROMPT CODE FLOW",
    chip: "trecho ilustrativo",
    // substituir por um trecho real do prompt do método
    // `{nicho}` é trocado pelo nicho da tab ativa.
    lines: [
      { key: "nicho", value: "{nicho}" },
      { key: "cidade", value: "[PREENCHER cidade]" },
      { key: "template", value: "[PREENCHER template]" },
      { key: "tom", value: "direto, premium" },
    ],
    command: "gerar o site completo com as seções e animações do template",
  },
  steps: ["Troque o nicho", "Cole com o template", "Publique"],
  devicesCaption:
    "Templates criados a partir de sites reais entregues pela JTP Services.",
  lesson: {
    eyebrow: "TRECHO DE AULA",
    title: "Assista um trecho do método.",
    text: "Um pedaço real da aula: o prompt sendo adaptado para um novo nicho e o site sendo gerado do zero.",
    soon: "Trecho liberado em breve no grupo",
  },
};

/* ------------------------------------------------------------------------ */
/* O método (#metodo)                                                        */
/* ------------------------------------------------------------------------ */

export const METHOD = {
  eyebrow: "O QUE VOCÊ APRENDE",
  title: ["4 etapas. Do zero", "ao site no ar."],
  text: "Você não precisa saber programar. Precisa seguir a ordem certa. Cada etapa termina com algo funcionando na sua tela.",
  steps: [
    {
      number: "01",
      verb: "RODAR",
      title: "Seu primeiro site rodando no seu computador.",
      description:
        "Você prepara o ambiente do zero (editor, Node e a IA que gera o código) e roda um template Code Flow na sua máquina, mesmo que nunca tenha aberto um terminal.",
      deliverable: "Um template rodando no seu computador.",
      image: "step01",
      imageAlt: "Notebook cromado em 3D com a tela acesa em azul",
    },
    {
      number: "02",
      verb: "GERAR",
      title: "O prompt certo, no nicho certo.",
      description:
        "Você recebe os prompts prontos, troca o nicho pelo do seu cliente e cola junto com o template. A IA devolve o site com estrutura, copy e animações no lugar.",
      deliverable: "Um site completo adaptado ao nicho que você escolheu.",
      image: "step02",
      imageAlt: "Cursor de mouse cromado em 3D com reflexos azuis",
    },
    {
      number: "03",
      verb: "LAPIDAR",
      title: "As imagens que fazem parecer site de agência.",
      description:
        "Como escolher, recortar, gerar e otimizar imagens (PNG sem fundo, WebP leve) e posicionar cada uma para o site parecer feito por agência e carregar rápido.",
      deliverable: "Um site com a cara do cliente, leve e pronto para o celular.",
      image: "step03",
      imageAlt: "Câmera fotográfica azul e cromada em 3D",
    },
    {
      number: "04",
      verb: "PUBLICAR",
      title: "Do seu computador para a internet.",
      description:
        "Git e GitHub sem mistério, deploy na Vercel e domínio próprio. Você coloca o site no ar e atualiza sempre que precisar.",
      deliverable: "Seu site publicado, com link para mostrar ou vender.",
      image: "step04",
      imageAlt: "Foguete cromado em 3D com reflexos azuis e violeta",
    },
  ] as const,
  deliverableLabel: "Ao final da etapa:",
  accessTitle: "Como funciona o acesso",
  access: [
    { label: "Formato", value: "Aulas gravadas, direto ao ponto · [PREENCHER nº de aulas]" },
    { label: "Duração", value: "[PREENCHER horas no total]" },
    { label: "Acesso", value: "[PREENCHER prazo de acesso]" },
    { label: "Materiais", value: "Prompts prontos + 20 templates com animação [PREENCHER outros]" },
    { label: "Suporte", value: "[PREENCHER como funciona o suporte]" },
    { label: "Plataforma", value: "[PREENCHER área de membros]" },
  ],
};

/* ------------------------------------------------------------------------ */
/* Quem está por trás (#autor)                                               */
/* ------------------------------------------------------------------------ */

export type AuthorTestimonial = {
  nome: string;
  cidade: string;
  foto: string;
  texto: string;
  siteUrl: string;
  print: string;
};

export const AUTHOR = {
  eyebrow: "QUEM ESTÁ POR TRÁS",
  title: ["Não é teoria.", "É o que eu entrego todo dia."],
  bio: "Eu sou o João Pedro, fundador da JTP Services. Crio sites para negócios reais, de loja de iPhone a provedor de internet e churrascaria. O Code Flow é o meu processo de trabalho, transformado em prompt para você usar.",
  signature: "João Pedro · Fundador da JTP Services e do Code Flow",
  instagram: "@[PREENCHER instagram]",
  seal: { title: "JTP SERVICES", text: "Sites para negócios reais" },
  stats: [
    { value: "~10", label: "negócios atendidos [CONFIRMAR]" },
    { value: "~2 anos", label: "criando sites [CONFIRMAR]" },
    { value: "+20", label: "templates no método" },
    { value: "10 mil+", label: "views no vídeo que originou o método [CONFIRMAR]" },
  ],
  worksTitle: "Sites reais que viraram template.",
  works: [
    {
      name: "Almeida Imports",
      niche: "Eletrônicos importados",
      city: "Buritis e Arinos (MG)",
      url: "[PREENCHER url]",
      image: "almeida",
      imageAlt: "Site da Almeida Imports no celular, com iPhone 17 Pro e AirPods",
    },
    {
      name: "Globo Sat Antenas",
      niche: "Antenas, internet rural e Starlink",
      city: "Arinos (MG)",
      url: "[PREENCHER url]",
      image: "globoSat",
      imageAlt: "Site da Globo Sat Antenas em vermelho, com antena Starlink",
    },
    {
      name: "Churrascaria Boi na Brasa",
      niche: "Gastronomia",
      city: "[PREENCHER cidade]",
      url: "[PREENCHER url]",
      image: "boiNaBrasa",
      imageAlt: "Site da Churrascaria Boi na Brasa no celular, com costela na brasa",
    },
    {
      name: "Lacerda Suplementos [CONFIRMAR]",
      niche: "Suplementos",
      city: "[PREENCHER cidade]",
      url: "[PREENCHER url]",
      image: "lacerda",
      imageAlt: "Site da Lacerda Suplementos no notebook, com pote de whey em verde neon",
    },
  ] as const,
  testimonialsTitle: "Quem já está criando.",
  // Começa vazio de propósito: só entram depoimentos reais. A sub-seção
  // só aparece com pelo menos 1 item.
  testimonials: [] as AuthorTestimonial[],
};

/* ------------------------------------------------------------------------ */
/* Rodapé: linha legal                                                       */
/* ------------------------------------------------------------------------ */

export const LEGAL = {
  entity: "[PREENCHER nome ou razão social]",
  cnpj: "CNPJ [PREENCHER]",
  email: "[PREENCHER e-mail de contato]",
  links: [
    { href: "/termos", label: "Termos de uso" },
    { href: "/privacidade", label: "Política de privacidade" },
  ],
};

/** Um valor ainda é marcador quando contém [PREENCHER] ou [CONFIRMAR]. */
export function isPlaceholder(value: string) {
  return /\[(PREENCHER|CONFIRMAR)[^\]]*\]/.test(value);
}
