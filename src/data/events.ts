/**
 * Données des 5 types d'événements (page pilier + sous-pages dédiées).
 * Chaque entrée pilote à la fois la carte sur l'accueil/la page pilier
 * et le contenu SEO de la sous-page correspondante.
 */

export interface EventType {
  slug: string;
  /** Titre court (cartes, navigation). */
  title: string;
  /** H1 / titre de la sous-page. */
  heading: string;
  /** Balise <title> SEO. */
  seoTitle: string;
  /** Meta description SEO. */
  seoDescription: string;
  /** Accroche affichée sur la carte. */
  cardTeaser: string;
  /** Mots-clés cibles (indicatif, pour la rédaction). */
  keywords: string[];
  /** Paragraphe d'introduction optimisé. */
  intro: string;
  /** Ce qu'Euro Events recherche pour ce type d'événement. */
  prestations: { title: string; description: string }[];
  /** Mini-exemple / cas illustratif (placeholder crédible, à remplacer). */
  example: {
    title: string;
    context: string;
    solution: string;
    result: string;
  };
  /** Emoji/pictogramme provisoire pour la carte (en attendant les visuels). */
  icon: string;
  /** Image d'illustration (placeholder, à remplacer par une vraie photo). */
  image: string;
  imageAlt: string;
}

export const events: EventType[] = [
  {
    slug: "seminaires-entreprise",
    title: "Séminaires d'entreprise",
    heading: "Organisation de séminaires d'entreprise",
    seoTitle:
      "Organisation de séminaire d'entreprise | Recherche gratuite de prestataires — Euro Events",
    seoDescription:
      "Euro Events recherche gratuitement le lieu, l'hébergement, les animations et la logistique de votre séminaire d'entreprise. Réponse sous 24-48 h, service 100 % gratuit.",
    cardTeaser:
      "Lieux d'exception, hébergement, animations et logistique : tout votre séminaire pris en charge.",
    keywords: [
      "organisation séminaire entreprise",
      "agence séminaire",
      "lieu séminaire",
      "séminaire résidentiel",
    ],
    intro:
      "Un séminaire d'entreprise réussi repose sur un lieu inspirant, une logistique sans faille et des moments fédérateurs. Euro Events recherche gratuitement pour vous l'ensemble des prestataires nécessaires — du château en bord de Loire au rooftop parisien — en fonction de vos objectifs, de votre budget et du nombre de participants. Vous gardez un interlocuteur unique du premier échange jusqu'au jour J.",
    prestations: [
      {
        title: "Lieux & domaines",
        description:
          "Châteaux, domaines viticoles, hôtels 4-5 étoiles, espaces atypiques en France comme à l'étranger.",
      },
      {
        title: "Hébergement & restauration",
        description:
          "Chambres, pauses gourmandes, déjeuners de travail et dîners de gala avec des traiteurs sélectionnés.",
      },
      {
        title: "Salles & matériel",
        description:
          "Salles plénières, sous-commissions, sonorisation, vidéo et équipements techniques.",
      },
      {
        title: "Animations & contenus",
        description:
          "Conférenciers, ateliers, activités de cohésion et soirées thématiques.",
      },
      {
        title: "Transferts & transport",
        description:
          "Train, avion, autocars, navettes privées et coordination des arrivées.",
      },
      {
        title: "Accueil & hôtesses",
        description:
          "Hôtes et hôtesses, signalétique, gestion des badges et accueil personnalisé.",
      },
    ],
    example: {
      title: "Séminaire de rentrée — 120 collaborateurs",
      context:
        "Une direction commerciale souhaitait un séminaire résidentiel de 2 jours à moins de 2 h de Paris, mêlant travail et cohésion.",
      solution:
        "Euro Events a proposé trois domaines avec devis comparatifs, organisé l'hébergement, les salles de sous-commission, un atelier de cohésion et un dîner régional.",
      result:
        "Budget respecté, une seule interlocutrice, et un taux de satisfaction de 96 % auprès des participants.",
    },
    icon: "🏛️",
    image: "/images/events/seminaire.jpg",
    imageAlt:
      "Séminaire d'entreprise en salle à boiseries, longue table et lustre en cristal",
  },
  {
    slug: "conventions",
    title: "Conventions",
    heading: "Organisation de conventions d'entreprise",
    seoTitle:
      "Organisation de convention d'entreprise | Agence événementielle — Euro Events",
    seoDescription:
      "Convention, lancement produit, grand-messe annuelle : Euro Events trouve gratuitement le lieu, la scénographie et la technique pour réunir vos équipes. Réponse sous 24-48 h.",
    cardTeaser:
      "Réunissez des centaines de collaborateurs : lieu, scène, technique et scénographie clés en main.",
    keywords: [
      "organisation convention entreprise",
      "agence convention",
      "lancement produit",
      "plénière entreprise",
    ],
    intro:
      "La convention est un moment fort de la vie de l'entreprise : elle rassemble, donne du sens et marque les esprits. Euro Events recherche gratuitement pour vous les espaces capables d'accueillir vos collaborateurs, ainsi que tous les prestataires techniques et créatifs qui feront de votre plénière un événement à la hauteur de vos ambitions.",
    prestations: [
      {
        title: "Lieux grande capacité",
        description:
          "Palais des congrès, salles plénières, espaces modulables de 100 à plusieurs milliers de personnes.",
      },
      {
        title: "Scénographie & décoration",
        description:
          "Conception scénique, mise en lumière, mobilier et habillage aux couleurs de votre marque.",
      },
      {
        title: "Technique & audiovisuel",
        description:
          "Son, écrans LED, captation vidéo, régie, traduction simultanée et streaming.",
      },
      {
        title: "Restauration",
        description:
          "Cocktails, buffets et déjeuners assis pour des effectifs importants.",
      },
      {
        title: "Animation de scène",
        description:
          "Maîtres de cérémonie, intervenants, artistes et productions vidéo.",
      },
      {
        title: "Logistique participants",
        description:
          "Inscriptions, transferts, hébergement et accueil sur site.",
      },
    ],
    example: {
      title: "Convention annuelle — 600 collaborateurs",
      context:
        "Un groupe souhaitait réunir ses équipes nationales pour présenter sa feuille de route, avec une exigence forte sur l'image de marque.",
      solution:
        "Euro Events a sélectionné un lieu central, coordonné la scénographie, la technique audiovisuelle et un cocktail dînatoire pour 600 personnes.",
      result:
        "Un événement à la hauteur de l'enjeu, livré dans le budget négocié, avec un prestataire unique pour piloter l'ensemble.",
    },
    icon: "🎤",
    image: "/images/events/convention.jpg",
    imageAlt:
      "Auditorium contemporain à boiseries chaudes pour une convention",
  },
  {
    slug: "soirees-entreprise",
    title: "Soirées d'entreprise",
    heading: "Organisation de soirées d'entreprise",
    seoTitle:
      "Organisation de soirée d'entreprise | Lieux, traiteurs, animations — Euro Events",
    seoDescription:
      "Soirée de gala, fête de fin d'année, anniversaire d'entreprise : Euro Events recherche gratuitement lieux, traiteurs et animations pour une soirée mémorable. Devis sous 24-48 h.",
    cardTeaser:
      "Gala, fête de fin d'année ou lancement : un lieu unique, un traiteur d'exception et le bon spectacle.",
    keywords: [
      "organisation soirée entreprise",
      "soirée de gala",
      "fête de fin d'année entreprise",
      "lieu soirée privée",
    ],
    intro:
      "Une soirée d'entreprise réussie récompense, fédère et crée des souvenirs partagés. Qu'il s'agisse d'un dîner de gala, d'une fête de fin d'année ou d'un événement de prestige, Euro Events recherche gratuitement pour vous le lieu, le traiteur et les animations qui correspondent à l'image que vous souhaitez transmettre.",
    prestations: [
      {
        title: "Lieux de réception",
        description:
          "Péniches, hôtels particuliers, rooftops, lieux atypiques et salons privatisés.",
      },
      {
        title: "Traiteurs & cocktails",
        description:
          "Cocktails dînatoires, dîners assis, bars à thème et créations sur mesure.",
      },
      {
        title: "Animations & spectacles",
        description:
          "DJ, groupes live, artistes, photobooth, casino, animations digitales.",
      },
      {
        title: "Décoration & ambiance",
        description:
          "Scénographie thématique, mise en lumière, fleurs et mobilier.",
      },
      {
        title: "Accueil & hôtesses",
        description:
          "Vestiaire, accueil personnalisé, gestion des invités.",
      },
      {
        title: "Transport retour",
        description:
          "Navettes et solutions de transport pour le confort et la sécurité des invités.",
      },
    ],
    example: {
      title: "Soirée de fin d'année — 300 invités",
      context:
        "Une entreprise voulait remercier ses équipes avec une soirée élégante sur un lieu emblématique parisien.",
      solution:
        "Euro Events a privatisé un lieu avec vue, sélectionné un traiteur, un DJ et un photobooth, et géré toute la décoration.",
      result:
        "Une soirée saluée par les collaborateurs, organisée sans frais d'agence et dans le budget fixé.",
    },
    icon: "✨",
    image: "/images/events/soiree.jpg",
    imageAlt: "Dîner d'entreprise élégant avec tables rondes dressées et éclairage chaleureux",
  },
  {
    slug: "team-building",
    title: "Team building",
    heading: "Organisation de team building",
    seoTitle:
      "Agence team building | Activités de cohésion d'équipe — Euro Events",
    seoDescription:
      "Euro Events recherche gratuitement les meilleures activités de team building pour renforcer la cohésion de vos équipes : ateliers, défis, activités outdoor. Devis sous 24-48 h.",
    cardTeaser:
      "Renforcez la cohésion : activités outdoor, ateliers créatifs, défis sportifs ou solidaires.",
    keywords: [
      "agence team building",
      "activité cohésion équipe",
      "team building paris",
      "animation entreprise",
    ],
    intro:
      "Le team building renforce la cohésion, libère la créativité et donne de l'énergie aux équipes. Euro Events recherche gratuitement pour vous l'activité la plus adaptée à vos objectifs, à la taille de votre groupe et à votre budget — d'un atelier créatif en intérieur à un grand défi outdoor.",
    prestations: [
      {
        title: "Activités outdoor",
        description:
          "Rallyes, courses d'orientation, olympiades, sports nautiques et défis nature.",
      },
      {
        title: "Ateliers créatifs",
        description:
          "Cuisine, mixologie, fresque collaborative, ateliers artistiques.",
      },
      {
        title: "Défis & jeux",
        description:
          "Escape games, murder parties, jeux de piste connectés, quiz géants.",
      },
      {
        title: "Team building solidaire",
        description:
          "Actions à impact : rénovation, collecte, ateliers au profit d'associations.",
      },
      {
        title: "Bien-être",
        description:
          "Séances de sport, yoga, sophrologie et activités de déconnexion.",
      },
      {
        title: "Lieux & logistique",
        description:
          "Espaces adaptés, matériel, encadrement et restauration associée.",
      },
    ],
    example: {
      title: "Journée cohésion — 80 collaborateurs",
      context:
        "Après une réorganisation, une équipe souhaitait recréer du lien dans un cadre convivial.",
      solution:
        "Euro Events a proposé une olympiade outdoor le matin et un atelier culinaire l'après-midi, avec déjeuner inclus.",
      result:
        "Des équipes ressoudées, une logistique fluide et un coût maîtrisé grâce aux tarifs négociés.",
    },
    icon: "🤝",
    image: "/images/events/teambuilding.jpg",
    imageAlt: "Groupe réuni pour un team building et un banquet en cave voûtée en pierre",
  },
  {
    slug: "reunions-journees-etude",
    title: "Réunions & journées d'étude",
    heading: "Organisation de réunions et journées d'étude",
    seoTitle:
      "Réunion & journée d'étude | Salles et logistique clés en main — Euro Events",
    seoDescription:
      "Euro Events trouve gratuitement la salle, la restauration et l'équipement de vos réunions et journées d'étude à Paris et en région. Réponse sous 24-48 h, sans frais.",
    cardTeaser:
      "Salle équipée, pauses gourmandes et logistique fluide pour des réunions efficaces.",
    keywords: [
      "salle de réunion entreprise",
      "journée d'étude",
      "location salle séminaire",
      "réunion professionnelle paris",
    ],
    intro:
      "Une réunion ou une journée d'étude productive demande un cadre adapté, des équipements fiables et une organisation sans accroc. Euro Events recherche gratuitement pour vous la salle idéale, la restauration et toute la logistique, à Paris comme en région, pour que vous puissiez vous concentrer sur l'essentiel : le contenu.",
    prestations: [
      {
        title: "Salles de réunion",
        description:
          "Salles à la journée ou demi-journée, configurations modulables, lieux centraux et accessibles.",
      },
      {
        title: "Équipement",
        description:
          "Vidéoprojecteur, écrans, visioconférence, paperboard et connexion fiable.",
      },
      {
        title: "Pauses & restauration",
        description:
          "Pauses café, viennoiseries, déjeuners de travail et plateaux-repas.",
      },
      {
        title: "Hébergement",
        description:
          "Solutions d'hébergement à proximité pour les participants venant de loin.",
      },
      {
        title: "Transferts",
        description:
          "Coordination des arrivées, navettes et accès facilités.",
      },
      {
        title: "Accueil",
        description:
          "Signalétique, accueil et assistance sur place selon vos besoins.",
      },
    ],
    example: {
      title: "Journée d'étude — 40 participants",
      context:
        "Un comité de direction recherchait un lieu calme et bien équipé pour une journée de travail au vert.",
      solution:
        "Euro Events a sélectionné un domaine à 45 minutes de Paris avec salle équipée, déjeuner et pauses incluses.",
      result:
        "Une journée productive, une réservation simplifiée et un devis sans frais d'intermédiaire.",
    },
    icon: "📊",
    image: "/images/events/reunion.jpg",
    imageAlt: "Salle de réunion moderne et lumineuse disposée en rangées pour une journée d'étude",
  },
];

export function getEvent(slug: string): EventType | undefined {
  return events.find((e) => e.slug === slug);
}
