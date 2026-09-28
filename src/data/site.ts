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
    label: "ESTRUTURAR",
    title: "Monte o prompt certo",
    text: "Aprenda a estrutura do prompt Code Flow: referência, identidade, seções, copy e movimento em um único comando.",
    outcome: "Um prompt pronto para usar",
  },
  {
    number: "02",
    label: "GERAR",
    title: "Gere o site com um comando",
    text: "Cole o prompt e veja a IA entregar um site completo, responsivo e animado, sem corrigir linha por linha.",
    outcome: "Site completo em minutos",
  },
  {
    number: "03",
    label: "PUBLICAR",
    title: "Coloque no ar fora da curva",
    text: "Publique com domínio próprio um site que não parece mais um template genérico feito por IA.",
    outcome: "Site no ar, pronto para mostrar",
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
    phase: "FUNDAMENTO",
    title: "Entenda por que a IA entrega sites genéricos.",
    text: "Você vai entender o que faz a IA repetir sempre o mesmo layout e como virar esse jogo com direção, referência e contexto, mesmo começando do zero.",
    image: IMAGES.modules.createAi,
    outcome: "Clareza do que separa um site comum de um fora da curva",
  },
  {
    phase: "PROMPT",
    title: "Escreva o prompt único do método.",
    text: "Você vai aprender a estrutura completa do prompt Code Flow: identidade visual, tipografia, seções, copy e animações em um só comando.",
    image: IMAGES.modules.premiumSites,
    outcome: "Seu prompt mestre pronto para reutilizar",
  },
  {
    phase: "DESIGN",
    title: "Deixe o site com cara de agência.",
    text: "Você vai aprender a pedir animações, microinterações e detalhes visuais que fazem o site parecer caro, sem mexer em código.",
    image: IMAGES.modules.businessSystems,
    outcome: "Um site com acabamento premium de verdade",
  },
  {
    phase: "PUBLICAR",
    title: "Coloque no ar e mostre para o mundo.",
    text: "Você vai publicar o site com domínio próprio, deixar tudo rápido no celular e sair com um projeto pronto para portfólio ou para vender.",
    image: IMAGES.modules.b2bSales,
    outcome: "Site publicado e pronto para apresentar",
  },
];

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
  { id: "about", label: "O método" },
  { id: "services", label: "Módulos" },
  { id: "pricing", label: "Acesso" },
  { id: "faq", label: "Dúvidas" },
] as const;
