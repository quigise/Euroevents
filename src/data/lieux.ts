/**
 * Carnet d'adresses — 25 lieux événementiels emblématiques en France
 * (catalogue fourni par l'agence ; capacités indicatives selon configuration).
 * `domain` sert à afficher le logo officiel du lieu (service favicon Google,
 * avec repli monogramme si indisponible).
 */

export interface Lieu {
  name: string;
  city: string;
  region: string;
  /** Clé de filtre régional. */
  group: "idf" | "sud" | "aura" | "ouest" | "nordest";
  /** Capacité mise en avant (courte). */
  capacite: string;
  /** Types d'événements accueillis. */
  events: string;
  /** Atout signature du lieu. */
  highlight: string;
  url: string;
  /** Domaine pour le logo. */
  domain: string;
}

export const lieuxGroups: { key: string; label: string }[] = [
  { key: "idf", label: "Île-de-France" },
  { key: "sud", label: "Sud & Méditerranée" },
  { key: "aura", label: "Auvergne-Rhône-Alpes" },
  { key: "ouest", label: "Ouest & Atlantique" },
  { key: "nordest", label: "Nord & Est" },
];

export const lieux: Lieu[] = [
  {
    name: "Paris Convention Centre",
    city: "Paris", region: "Île-de-France", group: "idf",
    capacite: "Plénière jusqu'à 5 200 personnes",
    events: "Congrès, conventions, conférences, salons, événements corporate",
    highlight: "70 163 m² modulables et jusqu'à 30 salles",
    url: "https://www.viparis.com/nos-lieux/paris-convention-centre",
    domain: "https://www.viparis.com",
  },
  {
    name: "Palais des Congrès de Paris",
    city: "Paris", region: "Île-de-France", group: "idf",
    capacite: "Grand Amphithéâtre de 3 723 places",
    events: "Congrès, conventions, spectacles, conférences, expositions",
    highlight: "Nombreux espaces interconnectés au cœur de la Porte Maillot",
    url: "https://www.viparis.com/nos-lieux/palais-des-congres-de-paris",
    domain: "https://www.viparis.com",
  },
  {
    name: "Les Salles du Carrousel",
    city: "Paris", region: "Île-de-France", group: "idf",
    capacite: "De 500 à 4 000 personnes",
    events: "Défilés, galas, assemblées générales, lancements, salons",
    highlight: "6 635 m² modulables sous le Carrousel du Louvre",
    url: "https://www.viparis.com/nos-lieux/les-salles-du-carrousel",
    domain: "https://www.viparis.com",
  },
  {
    name: "La Seine Musicale",
    city: "Boulogne-Billancourt", region: "Île-de-France", group: "idf",
    capacite: "Jusqu'à 10 000 personnes selon configuration",
    events: "Conventions, congrès, lancements, soirées, concerts",
    highlight: "Grande Seine jusqu'à 4 000 en plénière et 7 300 en assis-debout",
    url: "https://www.laseinemusicale.com/seminaires-et-conventions-2/",
    domain: "https://www.laseinemusicale.com",
  },
  {
    name: "Stade de France",
    city: "Saint-Denis", region: "Île-de-France", group: "idf",
    capacite: "De 10 à 80 000 personnes sur mesure",
    events: "Séminaires, conventions, expositions, team building, grands événements",
    highlight: "Salons corporate, loges VIP, auditorium et enceinte complète",
    url: "https://www.stadefrance.com/fr/entreprises/seminaires-conventions",
    domain: "https://www.stadefrance.com",
  },
  {
    name: "Business Solutions by Disneyland Paris",
    city: "Chessy", region: "Île-de-France", group: "idf",
    capacite: "De 60 à 1 500 personnes en centre de convention",
    events: "Conventions, réunions, incentives, team building, soirées de gala",
    highlight: "Hébergement, restauration, parcs et production événementielle intégrés",
    url: "https://disneylandparis-business.com/",
    domain: "https://disneylandparis-business.com",
  },
  {
    name: "Marseille Chanot",
    city: "Marseille", region: "Provence-Alpes-Côte d'Azur", group: "sud",
    capacite: "Plénière modulable de 1 600 à 3 200 places",
    events: "Congrès, salons, conventions, événements corporate, galas",
    highlight: "Plus de 40 000 m² couverts mobilisables",
    url: "https://www.marseille-chanot.com/",
    domain: "https://www.marseille-chanot.com",
  },
  {
    name: "Palais du Pharo",
    city: "Marseille", region: "Provence-Alpes-Côte d'Azur", group: "sud",
    capacite: "Jusqu'à 1 000 personnes en restauration assise",
    events: "Congrès, conférences, réceptions, galas, événements institutionnels",
    highlight: "10 000 m² face au Vieux-Port dans un cadre patrimonial",
    url: "https://palaisdupharo.marseille.fr/",
    domain: "https://palaisdupharo.marseille.fr",
  },
  {
    name: "Palais des Festivals de Cannes",
    city: "Cannes", region: "Provence-Alpes-Côte d'Azur", group: "sud",
    capacite: "Auditorium Louis Lumière de 2 309 places",
    events: "Congrès, festivals, salons, conventions, lancements, galas",
    highlight: "Espaces d'exposition et de réception face à la Croisette",
    url: "https://www.palaisdesfestivals.com/",
    domain: "https://www.palaisdesfestivals.com",
  },
  {
    name: "Le Corum",
    city: "Montpellier", region: "Occitanie", group: "sud",
    capacite: "Auditorium principal de 2 000 places",
    events: "Congrès, conventions, colloques, salons, concerts",
    highlight: "6 000 m² d'exposition et plus de 24 salles",
    url: "https://www.montpellier-events.com/le-corum",
    domain: "https://www.montpellier-events.com",
  },
  {
    name: "MEETT Toulouse",
    city: "Toulouse", region: "Occitanie", group: "sud",
    capacite: "De 100 à 10 000 personnes, plénière jusqu'à 3 500",
    events: "Congrès, salons, conventions, séminaires, grands rassemblements",
    highlight: "Parc des expositions et centre de conventions sur un même site",
    url: "https://meett.fr/",
    domain: "https://meett.fr",
  },
  {
    name: "Centre de Congrès Pierre Baudis",
    city: "Toulouse", region: "Occitanie", group: "sud",
    capacite: "Jusqu'à 1 200 personnes en plénière",
    events: "Congrès, conventions, salons, lancements, concours",
    highlight: "18 salles et 6 000 m² modulables en centre-ville",
    url: "https://centrepierrebaudis.toulousecongres.com/",
    domain: "https://centrepierrebaudis.toulousecongres.com",
  },
  {
    name: "Centre de Congrès de Lyon",
    city: "Lyon", region: "Auvergne-Rhône-Alpes", group: "aura",
    capacite: "Amphithéâtre principal de 3 000 places",
    events: "Congrès, conférences, conventions, salons, soirées",
    highlight: "24 000 m² modulables et 35 salles de réunion",
    url: "https://www.ccc-lyon.com/",
    domain: "https://www.ccc-lyon.com",
  },
  {
    name: "Eurexpo Lyon",
    city: "Chassieu", region: "Auvergne-Rhône-Alpes", group: "aura",
    capacite: "Auditorium jusqu'à 4 200 personnes",
    events: "Salons, expositions, conventions, grands événements",
    highlight: "150 000 m², 7 halls modulables et 26 salles de réunion",
    url: "https://www.eurexpo.com/",
    domain: "https://www.eurexpo.com",
  },
  {
    name: "Polydome",
    city: "Clermont-Ferrand", region: "Auvergne-Rhône-Alpes", group: "aura",
    capacite: "Amphithéâtre de 650 places",
    events: "Congrès, conventions, salons, séminaires, dîners de gala",
    highlight: "16 salles de réunion et espaces d'exposition jusqu'à 3 713 m²",
    url: "https://www.clermontauvergne-events.com/le-centre-des-congres-polydome",
    domain: "https://www.clermontauvergne-events.com",
  },
  {
    name: "La Cité des Congrès de Nantes",
    city: "Nantes", region: "Pays de la Loire", group: "ouest",
    capacite: "De 200 à 4 000 participants",
    events: "Congrès, colloques, événements d'entreprise, salons, galas",
    highlight: "Auditoriums et espaces polyvalents en centre-ville",
    url: "https://lacite-nantes.fr/",
    domain: "https://lacite-nantes.fr",
  },
  {
    name: "Couvent des Jacobins",
    city: "Rennes", region: "Bretagne", group: "ouest",
    capacite: "Grand Auditorium de 1 000 places",
    events: "Congrès, conventions, colloques, soirées, expositions",
    highlight: "Centre de congrès aménagé dans un monument historique",
    url: "https://www.centre-congres-rennes.fr/",
    domain: "https://www.centre-congres-rennes.fr",
  },
  {
    name: "CID Deauville",
    city: "Deauville", region: "Normandie", group: "ouest",
    capacite: "De 60 à 7 000 personnes",
    events: "Congrès, conventions, festivals, salons, soirées",
    highlight: "18 000 m² et deux auditoriums, à proximité immédiate de la plage",
    url: "https://www.congres-deauville.com/",
    domain: "https://www.congres-deauville.com",
  },
  {
    name: "Palais des Congrès de Tours",
    city: "Tours", region: "Centre-Val de Loire", group: "ouest",
    capacite: "De 30 à 3 000 personnes",
    events: "Congrès, conventions, salons, séminaires, réunions",
    highlight: "Trois auditoriums et nombreuses salles interconnectées",
    url: "https://www.tours-evenements.com/palais-des-congres-de-tours",
    domain: "https://www.tours-evenements.com",
  },
  {
    name: "Palais des Congrès de Bordeaux",
    city: "Bordeaux", region: "Nouvelle-Aquitaine", group: "ouest",
    capacite: "Amphithéâtre principal d'environ 1 277 places",
    events: "Congrès, conventions, salons, séminaires, remises de prix",
    highlight: "Hall modulable d'environ 3 000 m²",
    url: "https://www.bordeaux-events.com/Notre-offre/Nos-lieux/Palais-des-congres",
    domain: "https://www.bordeaux-events.com",
  },
  {
    name: "Hangar 14",
    city: "Bordeaux", region: "Nouvelle-Aquitaine", group: "ouest",
    capacite: "Jusqu'à 2 500 personnes en cocktail",
    events: "Salons, conventions, lancements, roadshows, galas",
    highlight: "5 400 m² sur deux niveaux avec terrasse sur la Garonne",
    url: "https://www.beam.fr/en/our-venues/hangar-14",
    domain: "https://www.beam.fr",
  },
  {
    name: "Palais Beaumont",
    city: "Pau", region: "Nouvelle-Aquitaine", group: "ouest",
    capacite: "De 5 à 800 personnes",
    events: "Congrès, conférences, assemblées générales, séminaires, spectacles",
    highlight: "Centre de congrès historique au cœur d'un parc",
    url: "https://www.pau-congres.com/",
    domain: "https://www.pau-congres.com",
  },
  {
    name: "Lille Grand Palais",
    city: "Lille", region: "Hauts-de-France", group: "nordest",
    capacite: "De 80 à 20 000 personnes",
    events: "Congrès, salons, conventions, séminaires, spectacles, galas",
    highlight: "Palais des congrès, halls d'exposition et Zénith sur un même site",
    url: "https://www.lillegrandpalais.com/",
    domain: "https://www.lillegrandpalais.com",
  },
  {
    name: "Palais de la Musique et des Congrès",
    city: "Strasbourg", region: "Grand Est", group: "nordest",
    capacite: "Auditoriums de 500, 1 200 et 1 800 places",
    events: "Congrès, conférences, spectacles, salons, banquets",
    highlight: "Espace de restauration jusqu'à 1 400 convives assis",
    url: "https://www.strasbourg-events.com/fr/le-palais-des-congres",
    domain: "https://www.strasbourg-events.com",
  },
  {
    name: "Reims Congrès",
    city: "Reims", region: "Grand Est", group: "nordest",
    capacite: "Amphithéâtres de 350 et 700 places",
    events: "Congrès, conventions, réunions, séminaires, salons",
    highlight: "2 500 m² d'exposition et espaces de restauration",
    url: "https://www.reimsevents.com/fr/reims-congres",
    domain: "https://www.reimsevents.com",
  },
];

/** URL du logo d'un lieu (favicon officiel via le service Google). */
export function lieuLogo(l: Lieu): string {
  return `https://www.google.com/s2/favicons?sz=128&domain_url=${encodeURIComponent(l.domain)}`;
}

/** Initiales pour le monogramme de repli. */
export function lieuInitials(l: Lieu): string {
  const words = l.name.replace(/[^\p{L}\s]/gu, "").split(/\s+/).filter((w) => w.length > 2 || /^[A-Z]/.test(w));
  return (words[0]?.[0] ?? "") + (words[1]?.[0] ?? "");
}
