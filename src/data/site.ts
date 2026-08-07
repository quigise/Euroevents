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
    "La sélection sur mesure de vos lieux et prestataires — expertise, négociation et accompagnement depuis 2006.",
  description:
    "Agence événementielle à Paris. Euro Events recherche, compare et négocie pour les entreprises les lieux et prestataires adaptés à leurs séminaires, conventions, soirées et team building. Une experte dédiée, des conditions préférentielles et une réponse sous 24-48 h.",
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
  phoneDisplay: "01 40 02 00 04",
  phoneHref: "+33140020004", // format international cliquable
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
 * Note Google réelle de la fiche « Agence Euro Events » (source unique,
 * partagée par la bande d'avis et le balisage structuré AggregateRating).
 * À mettre à jour quand la note ou le nombre d'avis évolue.
 */
export const googleRating = { value: 5, count: 33, best: 5 } as const;

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
  { label: "Gestion centralisée", href: "/gestion-centralisee/" },
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
 * Clients pour la preuve sociale (liste réelle fournie par l'agence).
 * Logos monochromes dans `public/images/logos/` (version grise du kit fourni).
 * `tall` : logos carrés affichés plus hauts pour l'équilibre optique.
 */
export const clientLogos: { name: string; logo?: string; tall?: boolean }[] = [
  { name: "SNCF", logo: "/images/logos/sncf-mono.png" },
  { name: "La Banque Postale", logo: "/images/logos/la-banque-postale-mono.png", tall: true },
  { name: "Groupe Rocher", logo: "/images/logos/groupe-rocher-mono.png" },
  { name: "Orange", logo: "/images/logos/orange-mono.png", tall: true },
  { name: "Groupe La Poste", logo: "/images/logos/groupe-la-poste-mono.png" },
  { name: "Europ Assistance", logo: "/images/logos/europ-assistance-mono.png", tall: true },
  { name: "Redion", logo: "/images/logos/redion-mono.png" },
  { name: "Groupe Generali Assurances", logo: "/images/logos/generali-mono.png" },
  { name: "RTE", logo: "/images/logos/rte-mono.png", tall: true },
  { name: "EDF", logo: "/images/logos/edf-mono.png" },
  { name: "Maileva", logo: "/images/logos/maileva-mono.png" },
  { name: "MEDIAPOST", logo: "/images/logos/mediaposte-mono.png" },
  { name: "Docaposte", logo: "/images/logos/docaposte-mono.png" },
  { name: "Colissimo", logo: "/images/logos/colissimo-mono.png" },
  { name: "LCL", logo: "/images/logos/lcl-mono.png", tall: true },
  { name: "Sephora", logo: "/images/logos/sephora-mono.png" },
  { name: "Groupe LVMH", logo: "/images/logos/lvmh-mono.png" },
  { name: "TotalEnergies", logo: "/images/logos/totalenergies-mono.png" },
  { name: "Groupe Carrefour", logo: "/images/logos/groupe-carrefour-mono.png", tall: true },
  { name: "Office Depot", logo: "/images/logos/office-depot-mono.png" },
  { name: "Ermewa", logo: "/images/logos/ermewa-mono.png", tall: true },
  { name: "Curtiss-Wright", logo: "/images/logos/curtiss-wright-mono.png" },
];

/** Chiffres clés (à ajuster avec les données réelles de l'agence). */
export const stats: { value: string; label: string }[] = [
  { value: "20+", label: "ans d'expérience" },
  { value: "5 000+", label: "événements organisés" }, // chiffre confirmé par l'agence
  { value: "24-48 h", label: "pour recevoir vos propositions" },
  { value: "0 €", label: "de frais pour votre entreprise" },
];
