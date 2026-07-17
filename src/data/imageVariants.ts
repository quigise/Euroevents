/**
 * Variantes responsive (srcset) des grandes photos du site.
 * Les fichiers -800/-1280 sont générés à partir des originaux (voir le
 * commit « variantes srcset ») ; ce registre associe chaque original à son
 * attribut srcset. Les petites images (< 800 px) n'ont pas de variante.
 *
 * Usage : srcsetFor("/images/hero/1.jpg") -> "…" | undefined
 */

const variants: Record<string, string> = {
  "/images/hero/1.jpg":
    "/images/hero/1-800.jpg 800w, /images/hero/1-1280.jpg 1280w, /images/hero/1.jpg 1920w",
  "/images/hero/2.jpg":
    "/images/hero/2-800.jpg 800w, /images/hero/2-1280.jpg 1280w, /images/hero/2.jpg 1920w",
  "/images/hero/3.jpg":
    "/images/hero/3-800.jpg 800w, /images/hero/3-1280.jpg 1280w, /images/hero/3.jpg 1920w",
  "/images/hero/4.jpg":
    "/images/hero/4-800.jpg 800w, /images/hero/4-1280.jpg 1280w, /images/hero/4.jpg 1920w",
  "/images/events/convention.jpg":
    "/images/events/convention-800.jpg 800w, /images/events/convention.jpg 1600w",
  "/images/events/teambuilding.jpg":
    "/images/events/teambuilding-800.jpg 800w, /images/events/teambuilding.jpg 1600w",
  "/images/events/reunion.jpg":
    "/images/events/reunion-800.jpg 800w, /images/events/reunion.jpg 1600w",
  "/images/gallery/sommet.jpg":
    "/images/gallery/sommet-800.jpg 800w, /images/gallery/sommet.jpg 1600w",
  "/images/gallery/table-gala.jpg":
    "/images/gallery/table-gala-800.jpg 800w, /images/gallery/table-gala.jpg 1600w",
  "/images/gallery/chateau-etang.jpg":
    "/images/gallery/chateau-etang-800.jpg 800w, /images/gallery/chateau-etang.jpg 1080w",
  "/images/gallery/amphitheatre.jpg":
    "/images/gallery/amphitheatre-800.jpg 800w, /images/gallery/amphitheatre.jpg 1208w",
  "/images/gallery/lounge-domaine.jpg":
    "/images/gallery/lounge-domaine-800.jpg 800w, /images/gallery/lounge-domaine.jpg 1208w",
};

/** Retourne le srcset d'une image, ou undefined si elle n'a pas de variante. */
export function srcsetFor(src: string): string | undefined {
  return variants[src];
}

/** Valeurs `sizes` usuelles, centralisées pour rester cohérent. */
export const SIZES = {
  /** Image plein écran (hero). */
  full: "100vw",
  /** Moitié d'écran sur desktop, pleine largeur en mobile (univers, pages événements). */
  half: "(max-width: 860px) 100vw, 50vw",
  /** Tiers d'écran sur desktop (grilles galerie / cartes). */
  third: "(max-width: 480px) 100vw, (max-width: 820px) 50vw, 33vw",
} as const;
