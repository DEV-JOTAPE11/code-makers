import { IMAGES } from "@/lib/images";

/** Conteúdo editorial do site. Mantido fora dos componentes para que o
 *  texto possa ser revisado sem tocar em layout ou motion. */

export type ConversionStep = {
  number: string;
  label: string;
  title: string;
  text: string;
  outcome: string;
};

export const CONVERSION_STEPS: ConversionStep[] = [
  {
    number: "01",
    label: "CRIAR",
    title: "Crie sites e sistemas em minutos",
    text: "Use IA para transformar uma ideia em um site ou sistema pronto para apresentar.",
    outcome: "Seu primeiro projeto pronto",
  },
  {
    number: "02",
    label: "ENCONTRAR",
    title: "Encontre clientes com a Code Hunter",
    text: "Coloque empresas qualificadas no radar e chegue a cada conversa sabendo onde sua solução gera valor.",
    outcome: "Oportunidades certas no radar",
  },
  {
    number: "03",
    label: "VENDER",
    title: "Venda com a nossa metodologia",
    text: "Use oferta, abordagem, demonstração, proposta e fechamento para transformar oportunidades em clientes.",
    outcome: "Venda fechada. Dinheiro no bolso",
  },
];

export type CourseModule = {
  phase: string;
  title: string;
  text: string;
  image: string;
  outcome: string;
};

export const COURSE_MODULES: CourseModule[] = [
  {
    phase: "CRIAR",
    title: "Crie sites com IA em minutos.",
    text: "Você vai aprender a transformar um prompt em um site completo, responsivo e pronto para apresentar — mesmo começando do zero.",
    image: IMAGES.modules.createAi,
    outcome: "Seu primeiro site criado com IA e pronto para mostrar",
  },
  {
    phase: "VALORIZAR",
    title: "Faça o projeto parecer premium.",
    text: "Você vai aprender design, copy e apresentação para sair do site genérico, aumentar o valor percebido e conseguir cobrar mais.",
    image: IMAGES.modules.premiumSites,
    outcome: "Um projeto profissional que justifica um preço maior",
  },
  {
    phase: "RESOLVER",
    title: "Construa sistemas com IA que empresas precisam.",
    text: "Você vai aprender a encontrar problemas reais de um negócio e criar sistemas, automações e demos que mostram a solução funcionando.",
    image: IMAGES.modules.businessSystems,
    outcome: "Um sistema demonstrável criado para resolver e vender",
  },
  {
    phase: "VENDER",
    title: "Encontre clientes. Conduza a venda.",
    text: "Com a Code Hunter, você encontra empresas qualificadas. Com a metodologia Code Flow, você aborda, apresenta, propõe e conduz a conversa até o fechamento.",
    image: IMAGES.modules.b2bSales,
    outcome: "Clientes no radar e um processo claro para fechar vendas",
  },
];

export const FAQ: [question: string, answer: string][] = [
  [
    "Preciso saber programar?",
    "Não. O método parte de ferramentas com IA e ensina a pensar a solução, orientar a criação e revisar a entrega.",
  ],
  [
    "E se eu ainda não tiver portfólio?",
    "Você aprende a construir demonstrações direcionadas para problemas reais. Elas tornam sua capacidade visível antes do primeiro contrato.",
  ],
  [
    "Serve para sites e sistemas?",
    "Sim. O raciocínio comercial é o mesmo: identificar um problema, demonstrar uma solução e vender o resultado — com execução adaptada a cada formato.",
  ],
  [
    "O método também ensina a vender?",
    "Sim. Criação sem prospecção vira projeto parado. Por isso, abordagem, apresentação, proposta e próximo passo fazem parte da jornada.",
  ],
  [
    "O que é a Code Hunter?",
    "É a ferramenta da Code Flow criada para buscar clientes qualificados e colocar empresas com potencial real no seu radar de prospecção.",
  ],
  [
    "Como participo do lançamento?",
    "Entre no grupo oficial. É por lá que você recebe os avisos de abertura e todos os detalhes da Code Flow e da Code Hunter.",
  ],
];

export const NAV_SECTIONS = [
  { id: "about", label: "O método" },
  { id: "services", label: "Módulos" },
  { id: "pricing", label: "Lançamento" },
  { id: "faq", label: "Dúvidas" },
] as const;
