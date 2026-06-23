/**
 * Configuration centrale du site Euro Events.
 * Toutes les informations transverses (coordonnées, navigation, réseaux, SEO par défaut)
 * sont centralisées ici pour faciliter la maintenance et une future version EN.
 */

export const site = {
  name: "Euro Events",
  legalName: "Agence Euro Events",
  // Phrase de positionnement, réutilisée dans plusieurs métas.
  tagline:
    "Depuis plus de 20 ans, nous recherchons gratuitement pour vous tous les prestataires de vos événements professionnels.",
  description:
    "Agence événementielle à Paris. Euro Events recherche gratuitement pour les entreprises les meilleurs prestataires (lieux, traiteurs, animations, transferts…) pour leurs séminaires, conventions, soirées et team building. Service 100 % gratuit, interlocuteur unique, réponse sous 24-48 h.",
  // Domaine de production (à confirmer lors de la migration).
  url: "https://www.euro-events.fr",
  locale: "fr_FR",
  foundedYear: 2006,
} as const;

export const contact = {
  // Coordonnées de l'agence.
  addressStreet: "10 rue du Colonel Rozanoff",
  addressZip: "75012",
  addressCity: "Paris",
  addressCountry: "France",
  phoneDisplay: "01 43 43 00 00", // À CONFIRMER — numéro affiché
  phoneHref: "+33143430000", // À CONFIRMER — format international cliquable
  email: "laurence.houri@euro-events.fr",
  // Horaires d'ouverture.
  hours: "Du lundi au vendredi, de 8h à 20h",
  // Coordonnées géographiques approximatives (10 rue du Colonel Rozanoff, Paris 12e)
  // pour la carte et les données structurées. À affiner si besoin.
  geo: { lat: 48.8456, lng: 2.3933 },
  // Lien Google Maps pour l'intégration carte (embed).
  mapsEmbed:
    "https://www.google.com/maps?q=10+rue+du+Colonel+Rozanoff+75012+Paris&output=embed",
} as const;

export const social = {
  facebook: "https://www.facebook.com/", // À CONFIRMER
  linkedin: "https://www.linkedin.com/", // À CONFIRMER
  instagram: "https://www.instagram.com/", // À CONFIRMER
} as const;

/**
 * Clé d'accès Web3Forms.
 * Cette clé est conçue pour être publique (elle vit dans le HTML du formulaire).
 * Surchargeable au build via la variable d'environnement PUBLIC_WEB3FORMS_KEY (Vercel).
 */
export const WEB3FORMS_KEY =
  import.meta.env.PUBLIC_WEB3FORMS_KEY ||
  "0415797d-d357-4b0c-9b24-f201053f9078";

/** Navigation principale (header + footer). */
export const mainNav: { label: string; href: string }[] = [
  { label: "Accueil", href: "/" },
  { label: "Notre concept", href: "/notre-concept/" },
  { label: "Nos événements", href: "/nos-evenements/" },
  { label: "Références", href: "/references/" },
  { label: "À propos", href: "/a-propos/" },
  { label: "Galerie", href: "/galerie/" },
  { label: "Contact", href: "/contact/" },
];

/**
 * Logos clients pour la preuve sociale (clients réels fournis par l'agence).
 * Pour en ajouter : déposer le fichier dans `public/images/logos/` et l'ajouter ici.
 */
export const clientLogos: { name: string; logo?: string }[] = [
  { name: "SNCF", logo: "/images/logos/sncf.jpg" },
  { name: "La Banque Postale", logo: "/images/logos/la-banque-postale.jpg" },
  { name: "Groupe Rocher", logo: "/images/logos/groupe-rocher.jpg" },
];

/** Chiffres clés (à ajuster avec les données réelles de l'agence). */
export const stats: { value: string; label: string }[] = [
  { value: "20+", label: "ans d'expérience" },
  { value: "2 000+", label: "événements organisés" }, // À CONFIRMER
  { value: "24-48 h", label: "pour recevoir vos propositions" },
  { value: "0 €", label: "de frais pour votre entreprise" },
];
