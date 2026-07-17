/**
 * Questions fréquentes — réponses réelles, fondées sur le fonctionnement établi
 * de l'agence (gratuité, rémunération par les prestataires, délais, périmètre…).
 * Sert la page /faq/ (avec balisage FAQPage) et un aperçu sur d'autres pages.
 *
 * Pour enrichir : ajouter une entrée { q, a } ci-dessous. Le balisage structuré
 * et l'affichage se mettent à jour automatiquement.
 */

export interface FaqItem {
  q: string;
  /** Réponse en texte simple (une ou deux phrases). */
  a: string;
}

export const faq: FaqItem[] = [
  {
    q: "Combien coûte votre service ?",
    a: "Il est 100 % gratuit pour votre entreprise : aucun honoraire, aucune commission à votre charge. Vous ne payez que les prestataires que vous choisissez, aux tarifs que nous avons négociés pour vous.",
  },
  {
    q: "Pourquoi est-ce gratuit ? Comment êtes-vous rémunérés ?",
    a: "Notre rémunération vient des prestataires que nous référençons, jamais de l'entreprise cliente. Grâce à la négociation et à l'absence de frais d'agence, vous réalisez des économies par rapport à une recherche en direct.",
  },
  {
    q: "Sous combien de temps ai-je une réponse ?",
    a: "Vous recevez une sélection argumentée de lieux et prestataires, avec des devis, sous 24 à 48 heures après votre demande.",
  },
  {
    q: "Ai-je un interlocuteur unique ?",
    a: "Oui. La même experte vous accompagne du premier échange jusqu'au jour J. Une relation suivie, pas un standard anonyme ni un ticket qui passe de main en main.",
  },
  {
    q: "Travaillez-vous partout en France, et à l'étranger ?",
    a: "Oui. Depuis 2006, notre réseau couvre toute la France et de nombreuses destinations à l'étranger — des grandes chaînes hôtelières aux lieux indépendants et atypiques.",
  },
  {
    q: "Quels types d'événements organisez-vous ?",
    a: "Séminaires, conventions et plénières, soirées de gala et de fin d'année, team building, réunions et journées d'étude — de la réunion de comité de direction à la convention de plusieurs centaines de participants.",
  },
  {
    q: "Cherchez-vous aussi les à-côtés (traiteur, animations, transferts, hôtesses) ?",
    a: "Oui. Au-delà du lieu, nous recherchons l'ensemble des prestataires : hébergement, restauration, animations, scénographie, transferts, accueil et hôtes/hôtesses. Un seul interlocuteur pour tout coordonner.",
  },
  {
    q: "Pouvez-vous gérer une demande en urgence ou de dernière minute ?",
    a: "Nous avons l'habitude des délais serrés. Confiez-nous votre besoin : nous mobilisons notre réseau immédiatement et vous disons très vite ce qui est réalisable selon les disponibilités.",
  },
  {
    q: "Travaillez-vous avec les grandes chaînes hôtelières ?",
    a: "Oui, comme avec les hôteliers indépendants. Notre carnet d'adresses réunit aussi bien les grands groupes que les lieux d'exception et atypiques — nous sélectionnons ce qui sert le mieux votre projet, sans a priori.",
  },
  {
    q: "Suis-je engagé si je vous confie ma recherche ?",
    a: "Non. La demande est sans engagement et sans frais. Vous choisissez librement parmi notre sélection, et nous vous accompagnons ensuite aussi loin que vous le souhaitez.",
  },
  {
    q: "Comment démarrer ?",
    a: "En quelques minutes : décrivez votre projet par téléphone ou via le formulaire en ligne (type d'événement, nombre de participants, dates, lieu, budget). Notre experte s'occupe du reste.",
  },
];
