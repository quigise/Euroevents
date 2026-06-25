/**
 * Études de cas (références).
 *
 * ⚠️ EMPLACEMENTS À REMPLIR : structure prête, contenu provisoire crédible.
 * Remplacer par de vraies études de cas validées (jamais de faux résultat attribué
 * à une entreprise réellement identifiable sans accord).
 */

export interface CaseStudy {
  slug: string;
  title: string;
  sector: string;
  eventType: string;
  participants: string;
  year?: string;
  /** Contexte / besoin exprimé par le client. */
  context: string;
  /** Solution apportée par Euro Events. */
  solution: string;
  /** Résultat obtenu. */
  result: string;
  image: string;
  imageAlt: string;
  placeholder: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "seminaire-direction-commerciale",
    title: "Séminaire de cohésion pour une direction commerciale",
    sector: "Industrie",
    eventType: "Séminaire résidentiel",
    participants: "120 participants",
    year: "2024",
    context:
      "Réunir l'ensemble d'une direction commerciale sur deux jours, à moins de deux heures de Paris, pour aligner la stratégie annuelle et renforcer la cohésion.",
    solution:
      "Sélection de trois domaines avec devis comparatifs, organisation de l'hébergement, des salles de sous-commission, d'un atelier de cohésion et d'un dîner régional. Interlocutrice unique du brief au jour J.",
    result:
      "Budget respecté, logistique sans accroc et 96 % de satisfaction auprès des participants.",
    image: "/images/gallery/seminaire-qa.jpg",
    imageAlt: "Séminaire d'entreprise en salle à boiseries et lustre en cristal",
    placeholder: true,
  },
  {
    slug: "convention-annuelle-groupe",
    title: "Convention annuelle d'un groupe national",
    sector: "Services",
    eventType: "Convention plénière",
    participants: "600 participants",
    year: "2023",
    context:
      "Rassembler les équipes nationales pour présenter la feuille de route, avec une forte exigence sur l'image de marque et la qualité technique.",
    solution:
      "Recherche d'un lieu central grande capacité, coordination de la scénographie, de la technique audiovisuelle et d'un cocktail dînatoire pour 600 personnes.",
    result:
      "Événement à la hauteur de l'enjeu, livré dans le budget négocié, avec un pilotage unique de tous les prestataires.",
    image: "/images/gallery/sommet.jpg",
    imageAlt: "Plénière de convention, scène éclairée en bleu devant une audience nombreuse",
    placeholder: true,
  },
  {
    slug: "soiree-fin-annee",
    title: "Soirée de fin d'année sur un lieu emblématique",
    sector: "Banque & assurance",
    eventType: "Soirée de gala",
    participants: "300 invités",
    year: "2024",
    context:
      "Remercier les équipes avec une soirée élégante sur un lieu parisien emblématique, dans un budget défini.",
    solution:
      "Privatisation d'un lieu avec vue, sélection d'un traiteur, d'un DJ et d'un photobooth, et gestion complète de la décoration.",
    result:
      "Soirée saluée par les collaborateurs, organisée sans frais d'agence et dans le budget fixé.",
    image: "/images/gallery/reception.jpg",
    imageAlt: "Réception de gala d'entreprise dans un lieu d'exception",
    placeholder: true,
  },
];
