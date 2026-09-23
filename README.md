# Code Makers

Reconstrução em **Next.js 15 + TypeScript** do site publicado em
[codemakers.com.br](https://www.codemakers.com.br/) — mesmo layout, mesma
tipografia, mesmas cores e o mesmo motion do que está no ar.

## Rodando

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de produção
npm start          # serve o build
npm run typecheck  # tsc --noEmit
```

## Stack

| Peça | Ferramenta |
| --- | --- |
| Framework | Next.js 15 (App Router) + React 19 |
| Estilos | Tailwind CSS v4 + CSS próprio em `src/app/globals.css` |
| Motion de entrada | `motion` (Framer Motion) — `whileInView` |
| Motion da hero | GSAP (stagger + efeito magnético) |
| Rolagem | Lenis, sincronizado com o `ScrollTrigger` do GSAP |
| Fontes | Sora + Inter self-hosted (`public/fonts`) |

## Como a página é montada

`src/app/page.tsx` → `HomeClient` → `HomeExperience`.

`HomeExperience` só monta no cliente (`dynamic` com `ssr: false`), porque
precisa medir a janela antes de escolher entre duas montagens diferentes:

- **Desktop** (`≥ 1024px`): `DesktopFrame` desenha tudo numa prancheta fixa de
  **1920px** e aplica `zoom` para caber na viewport. É assim que o layout
  exportado do Figma se mantém exato em qualquer largura — as medidas nos
  componentes são sempre px de design, nunca px de tela.
- **Mobile** (`< 1024px`): `MobileHome`, coluna única com `max-w-[430px]`.

As duas montagens compartilham `ConversionRail` e `CourseSalesJourney`, que
recebem a prop `desktop` para trocar as medidas.

O `<head>` (title, OG, JSON-LD, ícones) continua vindo do servidor, em
`src/app/layout.tsx`.

## Estrutura

```
src/
  app/
    layout.tsx              metadata, viewport, JSON-LD
    page.tsx                home
    globals.css             Tailwind + design system + keyframes
    blog/[slug]/page.tsx    artigos (SSG)
  components/
    HomeExperience.tsx      escolhe mobile ou desktop
    SmoothScroll.tsx        Lenis + ponte com o ScrollTrigger
    SiteHeader.tsx          header fixo e menu
    ConversionRail.tsx      "A fórmula Code Makers" (01/02/03)
    ShinyCta.tsx            botão com borda animada
    SectionEyebrow.tsx      rótulo com ponto luminoso
    ViewportHaze.tsx        faixa desfocada no rodapé da janela
    motion-primitives.tsx   reveals, stagger GSAP, hover magnético
    course/                 jornada: manifesto → módulos → oferta → dúvidas
    desktop/                hero, rodapé, prancheta de 1920px
    mobile/                 home mobile
    blog/                   artigo
  data/
    site.ts                 copy das seções, módulos e FAQ
    blog.ts                 posts
  lib/
    constants.ts            link do grupo, largura de design, easing
    images.ts               caminhos dos assets
    navigateToSection.ts    rolagem entre seções com a cortina de transição
```

## Navegação entre seções

`navigateToSection(id)` mostra a cortina (`#section-navigation-transition`),
dispara o evento `codemakers:navigate-section` e deixa o Lenis assumir a
rolagem. Se o Lenis não estiver ativo, cai no `window.scrollTo` suave. O
`pricing` recebe um deslocamento (56px no mobile, 100px no desktop) para não
ficar colado no topo.

## Fontes

O design system usa os nomes exportados do Figma
(`font-['Sora:Regular',sans-serif]`, `font-['Inter:Medium',sans-serif]`), então
`globals.css` declara um `@font-face` para cada um deles apontando para os
arquivos em `public/fonts`.

Algumas regras do CSS pedem as famílias genéricas `Sora, sans-serif` e
`Inter, sans-serif` — títulos e textos dos cards de módulo, o rótulo do CTA
mobile e os números-fantasma do trilho. O site em produção **não** declara
essas famílias, então elas caem na fonte do sistema; mantivemos o mesmo
comportamento para o layout bater linha a linha (a página fecha com os mesmos
11031px de altura). Os `@font-face` correspondentes estão comentados no topo do
`globals.css`: descomentar passa esses blocos a usar Sora/Inter de verdade, ao
custo de um título quebrar em uma linha a mais.

## Blog

Três artigos em `src/data/blog.ts`, gerados estaticamente em `/blog/[slug]`.
No site antigo eles viviam atrás de um hash (`#blog/slug`) sem nenhum link
apontando para lá; aqui viraram rotas de verdade.
