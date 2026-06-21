export const site = {
  name: 'Parenthèse Répit',
  tagline: 'Accompagnement bienveillant à domicile',
  motto: 'Parce que chaque famille mérite de souffler un peu',
  closingTagline:
    'Prendre soin de vos enfants, pour que vous puissiez prendre soin de vous',
  credential: 'Accompagnante Éducative et Sociale diplômée',
  fullName: 'Audrey Mas',
  phone: '06 20 97 97 45',
  phoneHref: 'tel:0620979745',
  email: 'audreydeom@hotmail.fr',
  emailHref: 'mailto:audreydeom@hotmail.fr',
  zone: 'De Narbonne à Béziers (et alentours)',
  values: ['Écoute', 'Bienveillance', 'Patience', 'Respect'],
  presentation: [
    "Je m'appelle Audrey et je suis Accompagnante Éducative et Sociale diplômée. Depuis plusieurs années, j'accompagne des enfants, des adolescents et des adultes en situation de handicap dans leur quotidien.",
    "Grâce à mon expérience et à mes formations, notamment dans le domaine de l'autisme, j'ai pu développer une approche basée sur l'écoute, la patience et l'adaptation aux besoins de chaque personne.",
    "Avec Parenthèse Répit, j'ai souhaité créer un service permettant aux familles de bénéficier d'un temps pour elles, en confiant leur enfant à une professionnelle expérimentée et bienveillante.",
    "Parce que prendre soin d'un enfant en situation de handicap demande beaucoup d'énergie, chaque parent mérite aussi un temps pour souffler.",
  ],
  whyChoose: [
    'Besoin de souffler quelques heures',
    'Sortie en couple',
    'Rendez-vous médical',
    'Temps pour les frères et sœurs',
    'Fatigue parentale',
    "Besoin d'un relais de confiance",
  ],
  profiles: [
    'Enfants TSA',
    'Adolescents TSA',
    'Déficience intellectuelle',
    'TDAH',
    'Troubles du neurodéveloppement',
    'Handicaps visibles ou invisibles',
  ],
  processSteps: [
    'Premier échange téléphonique',
    'Rencontre avec la famille',
    "Présentation de l'enfant",
    'Mise en place des interventions',
    'Accompagnement régulier ou ponctuel',
  ],
  availabilities: [
    'Journée',
    'Soirée',
    'Week-end',
    'Vacances scolaires',
    'Nuit (sur demande)',
  ],
  legal: {
    siteUrl: 'https://parenthese-repit.vercel.app',
    editor: {
      name: 'Audrey Mas',
      status: 'Particulier',
      activity: 'Intervenant à domicile via le dispositif CESU',
    },
    developer: {
      name: 'Irkeedia Labs',
      manager: 'Mathieu Toffolon',
      email: 'contact@irkeedia.com',
      emailHref: 'mailto:contact@irkeedia.com',
      website: 'https://irkeedia.com',
    },
    brandName: 'Parenthèse Répit',
    employment:
      'Salariée en emploi direct via le dispositif CESU (particulier employeur)',
    publicationDirector: 'Audrey Mas',
    host: {
      name: 'Vercel Inc.',
      address: '340 Pine Street, Suite 701, San Francisco, CA 94104',
      website: 'https://vercel.com',
    },
  },
} as const;

export const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/services', label: 'Services' },
  { href: '/modalites', label: 'Modalités' },
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
      "Accompagnement émotionnel et relationnel, dans le respect du rythme de l'enfant ou du jeune.",
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
      "Un cadre rassurant pour l'enfant, avec une présence stable et bienveillante.",
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
