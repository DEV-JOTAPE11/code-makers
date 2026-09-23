const TRANSITION_ID = "section-navigation-transition";

let navigationToken = 0;
let showTimeout: number | undefined;
let fallbackTimeout: number | undefined;
let hideTimeout: number | undefined;
let cleanupScrollEnd: (() => void) | undefined;

export type SectionNavigationDetail = {
  target: HTMLElement;
  offset: number;
  handled: boolean;
  onComplete: () => void;
};

function getTransitionLayer() {
  let layer = document.getElementById(TRANSITION_ID);
  if (!layer) {
    layer = document.createElement("div");
    layer.id = TRANSITION_ID;
    layer.setAttribute("aria-hidden", "true");
    document.body.appendChild(layer);
  }
  return layer;
}

function clearPending() {
  window.clearTimeout(showTimeout);
  window.clearTimeout(fallbackTimeout);
  window.clearTimeout(hideTimeout);
  cleanupScrollEnd?.();
  cleanupScrollEnd = undefined;
}

function finish(layer: HTMLElement, token: number) {
  if (token !== navigationToken) return;
  window.clearTimeout(fallbackTimeout);
  cleanupScrollEnd?.();
  cleanupScrollEnd = undefined;
  layer.classList.remove("is-visible");
  layer.classList.add("is-leaving");
  hideTimeout = window.setTimeout(() => {
    if (token !== navigationToken) return;
    layer.classList.remove("is-leaving");
    document.documentElement.classList.remove("is-section-navigating");
  }, 340);
}

/** Rola até uma seção com a cortina de transição e, quando o Lenis está
 *  ativo, delega o scroll para ele através do evento customizado. */
export function navigateToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  const layer = getTransitionLayer();
  const offset = id === "pricing" ? (window.innerWidth < 1024 ? 56 : 100) : 0;
  const token = ++navigationToken;

  clearPending();
  layer.classList.remove("is-visible", "is-leaving");
  document.documentElement.classList.add("is-section-navigating");

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (token !== navigationToken) return;
      layer.classList.add("is-visible");

      showTimeout = window.setTimeout(() => {
        if (token !== navigationToken) return;
        const onComplete = () => finish(layer, token);
        const detail: SectionNavigationDetail = {
          target,
          offset,
          handled: false,
          onComplete,
        };

        window.dispatchEvent(
          new CustomEvent("codemakers:navigate-section", { detail }),
        );

        if (!detail.handled) {
          const top =
            window.scrollY + target.getBoundingClientRect().top + offset;
          const onScrollEnd = () => onComplete();
          window.addEventListener("scrollend", onScrollEnd, { once: true });
          cleanupScrollEnd = () =>
            window.removeEventListener("scrollend", onScrollEnd);
          window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
        }

        fallbackTimeout = window.setTimeout(onComplete, 1300);
      }, 120);
    });
  });
}
