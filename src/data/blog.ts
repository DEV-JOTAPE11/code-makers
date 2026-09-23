import { IMAGES } from "@/lib/images";

export type BlogSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  introduction: string;
  highlight: string;
  sections: BlogSection[];
  ctaTitle: string;
  ctaText: string;
};

export const BLOG_POSTS: Record<string, BlogPost> = {
  "gerar-leads": {
    category: "Sites com IA",
    title: "Como vender seu primeiro site criado com IA",
    description:
      "Um caminho direto para transformar um protótipo rápido em uma oferta que uma empresa entende e pode comprar.",
    author: "Code Makers",
    date: "10 abr. 2026",
    readingTime: "8 min de leitura",
    image: IMAGES.blog.leads,
    imageAlt: "Fluxo visual de criação e venda de sites com IA",
    introduction:
      "Você não precisa passar meses estudando código antes de criar algo que resolva um problema real. Com IA, é possível sair de um briefing para um protótipo convincente em minutos. O que transforma esse protótipo em receita é saber escolher o negócio certo, demonstrar valor e apresentar uma oferta simples.",
    highlight:
      "A empresa não compra páginas. Ela compra mais credibilidade, mais contatos e uma presença digital que ajuda o negócio a vender.",
    sections: [
      {
        title: "Escolha um problema fácil de enxergar",
        paragraphs: [
          "Procure empresas com site antigo, presença digital confusa ou nenhuma forma clara de receber pedidos. Quanto mais visível for o problema, mais fácil será mostrar a diferença entre o antes e o depois.",
        ],
      },
      {
        title: "Crie antes de complicar",
        paragraphs: [
          "Use a IA para montar rapidamente uma primeira versão com mensagem, prova, serviços e chamada para ação. O objetivo é tornar a ideia concreta e abrir uma conversa comercial, não construir tudo sem validação.",
        ],
        bullets: [
          "Escolha um nicho e uma empresa específica.",
          "Crie uma demonstração visual com IA.",
          "Mostre três melhorias ligadas ao negócio.",
          "Convide o decisor para uma conversa curta.",
        ],
      },
      {
        title: "Venda o resultado, não a ferramenta",
        paragraphs: [
          "Na proposta, não destaque quantos prompts ou plataformas você usou. Explique o que será entregue, como isso melhora a presença da empresa, qual é o prazo e qual próximo passo inicia o projeto.",
        ],
      },
    ],
    ctaTitle: "Quer criar e vender seu primeiro site?",
    ctaText:
      "O método Code Makers mostra a sequência da criação com IA até a proposta comercial.",
  },

  "automacao-operacional": {
    category: "Sistemas com IA",
    title: "Sistemas com IA: da ideia à oferta",
    description:
      "Como transformar um problema repetitivo de uma empresa em um sistema demonstrável e comercialmente valioso.",
    author: "Code Makers",
    date: "12 mai. 2026",
    readingTime: "9 min de leitura",
    image: IMAGES.blog.automacao,
    imageAlt: "Módulos de um sistema construído com IA",
    introduction:
      "Empresas convivem com planilhas improvisadas, tarefas repetidas e informações espalhadas. Esses problemas são oportunidades para quem sabe observar o processo, desenhar uma solução simples e usar IA para construir rapidamente uma demonstração.",
    highlight:
      "Um sistema vendável começa com um problema específico, não com uma lista enorme de funcionalidades.",
    sections: [
      {
        title: "Encontre o gargalo caro",
        paragraphs: [
          "Converse com o dono ou gestor e pergunte onde a equipe perde tempo, repete dados ou depende demais de uma pessoa. Um bom primeiro sistema resolve um fluxo frequente e fácil de medir.",
        ],
      },
      {
        title: "Construa a menor versão que prova valor",
        paragraphs: [
          "Mapeie entrada, decisão e saída. Depois use IA para criar uma interface e um fluxo funcional que o cliente consiga testar. A demonstração deve provar a transformação principal antes de ganhar recursos extras.",
        ],
        bullets: [
          "Defina o usuário e a tarefa principal.",
          "Desenhe o fluxo em poucas telas.",
          "Use dados fictícios para demonstrar.",
          "Valide antes de ampliar o escopo.",
        ],
      },
      {
        title: "Apresente retorno e próximo passo",
        paragraphs: [
          "Mostre o sistema funcionando no cenário da empresa e conecte cada tela ao tempo, controle ou oportunidade que ela ganha. Feche a apresentação com escopo, prazo e um próximo passo objetivo.",
        ],
      },
    ],
    ctaTitle: "Quer transformar problemas em sistemas vendáveis?",
    ctaText:
      "Aprenda a validar, construir e apresentar sistemas com IA pelo método Code Makers.",
  },

  "atendimento-ia": {
    category: "Vendas B2B",
    title: "Como prospectar empresas sem complicação",
    description:
      "Uma abordagem prática para iniciar conversas, demonstrar valor e transformar um projeto com IA em proposta comercial.",
    author: "Code Makers",
    date: "14 jun. 2026",
    readingTime: "8 min de leitura",
    image: IMAGES.blog.atendimento,
    imageAlt: "Conexões de prospecção e vendas apoiadas por IA",
    introduction:
      "Prospecção não precisa começar com uma mensagem genérica enviada para centenas de pessoas. Uma abordagem forte nasce de pesquisa rápida, observação específica e uma demonstração que faz sentido para aquele negócio.",
    highlight:
      "A melhor primeira mensagem não tenta fechar a venda. Ela conquista atenção suficiente para abrir a próxima conversa.",
    sections: [
      {
        title: "Escolha empresas com um sinal claro",
        paragraphs: [
          "Procure um problema observável: site desatualizado, atendimento confuso, processo manual ou ausência de uma ferramenta simples. Isso permite abordar com contexto e evitar promessas vagas.",
        ],
      },
      {
        title: "Envie uma mensagem curta e específica",
        paragraphs: [
          "Mostre que você observou o negócio, aponte a oportunidade sem atacar o trabalho atual e ofereça uma demonstração simples. Personalização verdadeira vale mais do que um texto longo.",
        ],
        bullets: [
          "Uma observação real sobre a empresa.",
          "Uma melhoria ligada a resultado.",
          "Uma demonstração ou ideia concreta.",
          "Um convite fácil de responder.",
        ],
      },
      {
        title: "Conduza a conversa para uma proposta",
        paragraphs: [
          "Na reunião, investigue impacto, urgência e decisão antes de apresentar preço. Mostre a demonstração, alinhe o escopo e encerre com um próximo passo claro. Venda consultiva é clareza, não pressão vazia.",
        ],
      },
    ],
    ctaTitle: "Quer uma fórmula para criar e vender?",
    ctaText:
      "O Code Makers conecta construção com IA, oferta, prospecção e fechamento em um método prático.",
  },
};

export const BLOG_SLUGS = Object.keys(BLOG_POSTS);
