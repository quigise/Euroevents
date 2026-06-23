/**
 * Témoignages clients.
 *
 * ⚠️ EMPLACEMENTS À REMPLIR : ces témoignages sont des PLACEHOLDERS provisoires,
 * crédibles mais NON attribués à de vraies personnes/entreprises identifiables.
 * Remplacer par de vrais témoignages nominatifs validés par les clients avant mise en ligne.
 */

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  /** true = contenu réel validé ; false = placeholder à remplacer. */
  placeholder: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Un gain de temps considérable. Nous avons décrit notre besoin, et reçu sous deux jours une sélection de lieux parfaitement adaptés à notre budget. Une seule interlocutrice du début à la fin.",
    author: "Responsable événementiel",
    role: "Direction de la communication",
    company: "Grand groupe industriel",
    placeholder: true,
  },
  {
    quote:
      "Ce qui change tout, c'est l'expertise humaine : ce ne sont pas des résultats automatiques, mais des recommandations pensées pour nous. Et le service est réellement gratuit.",
    author: "Office Manager",
    role: "Services généraux",
    company: "Entreprise de services (250 salariés)",
    placeholder: true,
  },
  {
    quote:
      "Budget respecté à l'euro près, prestataires de qualité, et un accompagnement jusqu'au jour J. Nous faisons désormais appel à Euro Events pour tous nos événements.",
    author: "Assistante de direction",
    role: "Direction générale",
    company: "Société du secteur bancaire",
    placeholder: true,
  },
];
