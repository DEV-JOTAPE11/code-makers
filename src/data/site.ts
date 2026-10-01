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
  { id: "about", label: "O método" },
  { id: "pricing", label: "Acesso" },
  { id: "faq", label: "Dúvidas" },
] as const;
