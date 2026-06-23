// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// URL canonique de production (sert au sitemap, aux balises canoniques et Open Graph).
// À mettre à jour avec le domaine final lors de la migration : https://www.euro-events.fr
const SITE_URL = "https://www.euro-events.fr";

export default defineConfig({
  site: SITE_URL,
  // Sortie statique : idéal multi-pages + SEO + performances.
  output: "static",
  // Astro gère le i18n nativement : la V1 est en FR, mais la structure est prête
  // pour ajouter une version EN (créer src/pages/en/... et basculer locales).
  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // Exclure du sitemap les pages non indexées (utilitaires / légales).
      filter: (page) =>
        !["/merci/", "/mentions-legales/", "/politique-confidentialite/"].some((p) =>
          page.endsWith(p)
        ),
      i18n: {
        defaultLocale: "fr",
        locales: { fr: "fr-FR" },
      },
    }),
  ],
  // Préfixe propre pour les images générées + compression du HTML en production.
  compressHTML: true,
});
