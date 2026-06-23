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
  phoneDisplay: "07 68 01 01 94",
  phoneHref: "+33768010194", // format international cliquable
  // Email public affiché sur le site (la réception des formulaires Web3Forms
  // est configurée séparément dans le tableau de bord Web3Forms via la clé).
  email: "contact@euro-events.fr",
  // Horaires d'ouverture.
  hours: "Du lundi au vendredi, de 8h à 20h sans interruption",
  // Coordonnées géographiques approximatives (10 rue du Colonel Rozanoff, Paris 12e)
  // pour la carte et les données structurées. À affiner si besoin.
  geo: { lat: 48.8456, lng: 2.3933 },
  // Lien Google Maps pour l'intégration carte (embed).
  mapsEmbed:
    "https://www.google.com/maps?q=10+rue+du+Colonel+Rozanoff+75012+Paris&output=embed",
} as const;

export const social = {
  facebook: "https://www.facebook.com/agence.euro.events/",
  linkedin: "https://www.linkedin.com/company/agence-euro-events/",
  instagram: "https://www.instagram.com/agence_euro_events/",
} as const;

/** Lien vers la fiche d'avis Google de l'agence. */
export const googleReviewsUrl = "https://g.co/kgs/bh7x8mp";

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
  { label: "Partenaires", href: "/partenaires/" },
  { label: "À propos", href: "/a-propos/" },
  { label: "Galerie", href: "/galerie/" },
  { label: "Contact", href: "/contact/" },
];

/**
 * Réseau de partenaires (page /partenaires/) — liste réelle issue du site actuel.
 * À enrichir au fil du temps.
 */
export const partnersIntro =
  "Depuis 2006, Euro Events a tissé un réseau de partenaires à travers l'Europe et au-delà : chaînes hôtelières et hôteliers indépendants, lieux classiques ou atypiques, traiteurs, transferts, animations et décorateurs. Un carnet d'adresses vivant, enrichi en permanence et sélectionné pour sa qualité.";

export const partners: string[] = [
  "Atelier des Chefs", "Atelier Guy Martin", "Augeval (Deauville)", "Autocars Suzanne",
  "Banke", "Bateaux Parisiens", "Belambra", "Best Western", "Cap Seguin", "Cazaudehore",
  "Château de Montvillargenne", "Château de Villiers", "Château de Villiers-le-Mahieu",
  "Châteaux & Hôtels Collection", "Château Hôtel Mont Royal", "Club Med", "Crowne Plaza",
  "Derby Hôtels Collection", "Dolce Hotels and Resorts", "Domaine de Vaugouard",
  "Dream Castle", "Duprat Concept", "Garden Beach Hotel", "Grandes Étapes Françaises",
  "Grand'Maisons", "Groupe Savry", "Holiday Inn (Paris Opéra)", "Hôtel Barrière",
  "Hôtel Carlton", "Artemus", "Cirette", "Renaissance Hotels", "Hyatt", "Marriott",
  "Mercure", "MGallery", "New Cap", "Novotel", "Potel & Chabot", "Prestige Sodexo",
  "Pullman", "Radisson", "Vienna International", "Yachts de Paris", "Shana Graphics",
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
