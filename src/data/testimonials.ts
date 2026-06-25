/**
 * Témoignages clients — avis Google réels (fiche « Agence Euro Events », 5,0/5 · 33 avis).
 * Repris verbatim depuis la fiche Google publique de l'agence.
 * Pour en ajouter : copier un avis depuis la fiche Google et compléter ci-dessous.
 */

export interface Testimonial {
  quote: string;
  /** Nom de l'auteur tel qu'affiché publiquement sur Google. */
  author: string;
  /** Source de l'avis (ex. « Avis Google »). */
  source: string;
  /** Repère temporel affiché sur Google (ex. « il y a 2 mois »). */
  when: string;
  /** Note sur 5 (les avis fournis sont tous 5★). */
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Grande professionnelle de l'événementiel ! Je recommande Laurence à 100 %. Elle comprend les demandes, connaît parfaitement les offres disponibles et fait du sur-mesure — qu'il s'agisse de 15 ou de 100 personnes, dans des conditions pas toujours faciles. Très satisfaite de ses conseils et de son service. Rare.",
    author: "Emmanuelle Vilret",
    source: "Avis Google",
    when: "il y a 2 mois",
    rating: 5,
  },
  {
    quote:
      "Nous avons sollicité Laurence à plusieurs reprises pour nos évènements et à chaque fois, nous avons été merveilleusement bien accompagnés. Laurence est très professionnelle, efficace et disponible pour ses clients. À contacter d'urgence pour l'organisation de vos évènements !",
    author: "Nathalie Gaziano",
    source: "Avis Google",
    when: "il y a 5 mois",
    rating: 5,
  },
  {
    quote:
      "Je connais Laurence depuis quelques années maintenant et je n'ai jamais été déçue. Mes événements se sont toujours bien passés et dans des lieux supers. Laurence est professionnelle, réactive, présente et de très bons conseils. J'ai totalement confiance en elle. Je la recommande vivement !",
    author: "Noémie C.",
    source: "Avis Google · Local Guide",
    when: "il y a 8 mois",
    rating: 5,
  },
  {
    quote:
      "Je remercie infiniment Laurence, très professionnelle : elle a su parfaitement comprendre nos besoins et organiser un événement à la hauteur de nos attentes. Tout était pensé dans les moindres détails — timing, ambiance, prestataires.",
    author: "Helin Rona",
    source: "Avis Google · Local Guide",
    when: "il y a 11 mois",
    rating: 5,
  },
  {
    quote:
      "Bravo Laurence ! Encore une mission menée d'une main de maître. Euro Events est vraiment top, je recommande sans hésitation.",
    author: "Elisabeth Delaleu",
    source: "Avis Google",
    when: "il y a 4 mois",
    rating: 5,
  },
  {
    quote:
      "Dormy House à Étretat : Laurence est vraiment super professionnelle et efficace, elle nous a trouvé ce sublime hôtel avec vue. L'activité team building — une chasse au trésor pour visiter la ville de façon ludique — a été adorée par toute l'équipe. Les repas étaient très bons également. Rien à redire, c'est un sans faute.",
    author: "Julie Michon",
    source: "Avis Google",
    when: "il y a 2 ans",
    rating: 5,
  },
];
