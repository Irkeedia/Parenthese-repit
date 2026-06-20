export const site = {
  name: 'Parenthèse Répit',
  tagline: 'Accompagnement bienveillant à domicile',
  motto: 'Parce que chaque famille mérite de souffler un peu',
  closingTagline:
    'Prendre soin de vos enfants, pour que vous puissiez prendre soin de vous',
  credential: 'Accompagnante Éducative et Sociale diplômée',
  phone: '06 20 97 97 45',
  phoneHref: 'tel:0620979745',
  email: 'audreydeom@hotmail.fr',
  emailHref: 'mailto:audreydeom@hotmail.fr',
  zone: 'De Narbonne à Béziers (et alentours)',
  values: ['Écoute', 'Bienveillance', 'Patience', 'Respect'],
  legal: {
    domain: 'irkeedia.com',
    domainUrl: 'https://irkeedia.com',
    editor: {
      name: 'Irkeedia Labs',
      manager: 'Mathieu Toffolon',
      email: 'contact@irkeedia.com',
      emailHref: 'mailto:contact@irkeedia.com',
      website: 'https://irkeedia.com',
    },
    professional: {
      name: 'Audrey',
      businessName: 'Parenthèse Répit',
      status: 'Travailleuse indépendante — Accompagnante Éducative et Sociale',
      address: '[Adresse postale à compléter]',
      siret: '[Numéro SIRET à compléter]',
    },
    publicationDirector: 'Mathieu Toffolon',
    host: {
      name: 'Irkeedia Labs',
      address: 'Hébergement via irkeedia.com',
      website: 'https://irkeedia.com',
    },
  },
} as const;

export const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/services', label: 'Services' },
  { href: '/tarifs', label: 'Tarifs & CESU' },
  { href: '/contact', label: 'Contact' },
] as const;

export const services = [
  {
    slug: 'enfants-jeunes',
    icon: 'users',
    title: 'Enfants, adolescents et jeunes adultes',
    summary: 'Accompagnement adapté à chaque âge et à chaque besoin.',
    details: [
      'Soutien dans les activités du quotidien : routines, devoirs, sorties, autonomie.',
      'Accompagnement émotionnel et relationnel, dans le respect du rythme de l’enfant ou du jeune.',
      'Travail en lien avec la famille pour des objectifs clairs et partagés.',
    ],
  },
  {
    slug: 'repit-parental',
    icon: 'heart-hand',
    title: 'Répit parental',
    summary: 'Offrez-vous un temps pour vous, je prends le relais avec bienveillance.',
    details: [
      'Permet aux parents de souffler, de vaquer à leurs occupations ou de se ressourcer.',
      'Intervention ponctuelle ou régulière, selon vos besoins et votre rythme familial.',
      'Un cadre rassurant pour l’enfant, avec une présence stable et bienveillante.',
    ],
  },
  {
    slug: 'tsa-handicap',
    icon: 'puzzle',
    title: 'Accompagnement TSA, handicap',
    summary:
      'Approche individualisée, respectueuse du rythme et des particularités de chacun.',
    details: [
      'Adaptation aux besoins sensoriels, communicationnels et comportementaux.',
      'Respect des routines et des outils déjà en place dans la famille.',
      'Collaboration avec les parents et, si besoin, les professionnels déjà impliqués.',
    ],
  },
  {
    slug: 'aide-domicile',
    icon: 'home-heart',
    title: 'Aide ponctuelle ou quotidienne',
    summary: 'Selon vos besoins, à domicile : en journée, en soirée ou le week-end.',
    details: [
      'Interventions flexibles : quelques heures par semaine ou accompagnement plus soutenu.',
      'Créneaux possibles en journée, en soirée ou le week-end.',
      'Tout se passe chez vous, dans un environnement connu et sécurisant.',
    ],
  },
] as const;
