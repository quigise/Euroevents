# Euro Events — Site web

Site multi-pages de l'**Agence Euro Events** : agence événementielle parisienne qui
recherche **gratuitement** pour les entreprises tous les prestataires de leurs événements
professionnels (séminaires, conventions, soirées, team building, réunions).

Orienté **conversion + SEO**, en **français**, construit avec **Astro** (sortie statique) et
déployé sur **Vercel**.

---

## 🚀 Démarrage

```bash
npm install        # installer les dépendances
npm run dev        # serveur de développement (http://localhost:4321)
npm run build      # build de production -> dist/
npm run preview    # prévisualiser le build
```

Node 18+ recommandé.

---

## 🗂️ Structure

```
src/
  components/      # Header, Footer, CTA flottant, formulaires, galerie, sections réutilisables
  data/            # Contenu centralisé : site, événements, témoignages, études de cas
  layouts/         # BaseLayout (SEO, Open Graph, JSON-LD, polices)
  pages/           # Une page = une intention de recherche (multi-pages SEO)
  scripts/         # Soumission AJAX des formulaires Web3Forms
  styles/          # global.css (charte = variables CSS)
public/
  images/          # Visuels (⚠️ placeholders SVG à remplacer par les vraies photos)
  favicon.svg, robots.txt
```

### Pages

- `/` Accueil
- `/notre-concept/` Notre concept / Comment ça marche
- `/nos-evenements/` Page pilier + 5 sous-pages (`[slug].astro`) :
  séminaires, conventions, soirées, team building, réunions & journées d'étude
- `/references/` Références & études de cas
- `/a-propos/` À propos
- `/galerie/` Galerie photos (lightbox)
- `/contact/` Contact (formulaire + carte)
- `/devis/` Configurateur multi-étapes
- `/mentions-legales/`, `/politique-confidentialite/`, `/merci/`

---

## 🎨 Charte graphique

Définie en variables CSS dans `src/styles/global.css` :

- **Base claire** ivoire/crème, **bleu profond** (confiance grands comptes),
  **accent chaleureux** ambre/terracotta.
- **Titres** : Fraunces (serif). **Corps** : Outfit (sans-serif). Via Google Fonts.

---

## 📨 Formulaires (Web3Forms)

Les formulaires de **contact** et de **devis** utilisent [Web3Forms](https://web3forms.com).

- Clé d'accès : variable `PUBLIC_WEB3FORMS_KEY` (voir `.env.example`), sinon valeur par
  défaut dans `src/data/site.ts`.
- Adresse de réception : configurée côté tableau de bord Web3Forms
  (actuellement **laurence.houri@euro-events.fr**).
- Après envoi, redirection vers `/merci/`.

---

## 🔍 SEO

- `title` + `meta description` uniques par page, structure Hn propre (un seul H1).
- Données structurées Schema.org : `ProfessionalService`/`Organization`, `Service`
  (pages événements), `AggregateRating` (avis), `BreadcrumbList`.
- `sitemap-index.xml` généré via `@astrojs/sitemap`, `robots.txt`, Open Graph.
- Images en lazy-loading, HTML sémantique, `prefers-reduced-motion` respecté.

> Mettre à jour l'URL de production dans `astro.config.mjs` (`SITE_URL`) lors de la
> migration vers `euro-events.fr`.

---

## 🌐 Bilingue (FR/EN)

V1 en français uniquement. Le code est prêt pour l'ajout d'une version EN :
contenu centralisé dans `src/data/`, i18n activé dans `astro.config.mjs`
(ajouter la locale `en` et un dossier `src/pages/en/`).

---

## ✅ À compléter avant mise en production

Les emplacements provisoires sont balisés `⚠️ PLACEHOLDER` / `À CONFIRMER` / `À REMPLIR` :

- [ ] **Visuels réels** (`public/images/`) en remplacement des SVG placeholders
- [ ] **Logo officiel** (`src/components/Logo.astro`)
- [ ] **Numéro de téléphone**, réseaux sociaux (`src/data/site.ts`)
- [ ] **Logos clients** réels (`LogoCloud`)
- [ ] **Témoignages nominatifs** validés (`src/data/testimonials.ts`)
- [ ] **Études de cas** réelles (`src/data/caseStudies.ts`)
- [ ] **Texte « À propos »** + photo de l'experte
- [ ] **Widget d'avis Google** (`src/components/GoogleReviews.astro`)
- [ ] **Mentions légales / RGPD** (SIRET, capital, DPO…)
- [ ] **Chiffres clés** exacts (`stats` dans `src/data/site.ts`)

---

## ☁️ Déploiement Vercel

Framework auto-détecté (Astro). Build `astro build`, sortie `dist/`.
Configurer la variable `PUBLIC_WEB3FORMS_KEY` dans les réglages du projet Vercel,
puis brancher le domaine `euro-events.fr`.
