export const site = {
  name: 'Parenthèse Répit',
  tagline: 'Accompagnement bienveillant à domicile',
  motto: 'Parce que chaque famille mérite de souffler un peu',
  closingTagline:
    'Prendre soin de vos enfants, pour que vous puissiez prendre soin de vous',
  credential: 'Accompagnante Éducative et Sociale diplômée',
  fullName: 'Audrey',
  phone: '06 20 97 97 45',
  phoneHref: 'tel:0620979745',
  email: 'audreydeom@hotmail.fr',
  emailHref: 'mailto:audreydeom@hotmail.fr',
  zone: 'Narbonne – Béziers et alentours',
  zoneMap: {
    embedUrl: 'https://maps.google.com/maps?q=43.2656,3.1096&hl=fr&z=10&output=embed',
    title: "Carte de la zone d'intervention — Narbonne, Béziers et alentours",
  },
  values: ['Écoute', 'Bienveillance', 'Patience', 'Respect'],
  presentation: [
    "Je m'appelle Audrey et je suis Accompagnante Éducative et Sociale diplômée. Depuis plusieurs années, j'accompagne des enfants, des adolescents et des adultes en situation de handicap dans leur quotidien.",
    "Grâce à mon expérience et à mes formations, notamment dans le domaine de l'autisme, j'ai pu développer une approche basée sur l'écoute, la patience et l'adaptation aux besoins de chaque personne.",
    "Avec Parenthèse Répit, j'ai souhaité créer un service permettant aux familles de bénéficier d'un temps pour elles, en confiant leur enfant à une professionnelle expérimentée et bienveillante.",
    "Parce que prendre soin d'un enfant en situation de handicap demande beaucoup d'énergie, chaque parent mérite aussi un temps pour souffler.",
  ],
  whyChoose: [
    {
      title: 'Besoin de souffler quelques heures',
      description: 'Retrouvez un moment pour vous, l’esprit tranquille.',
      icon: 'clock',
    },
    {
      title: 'Sortie en couple',
      description: 'Profitez d’un temps à deux, sans vous soucier de tout.',
      icon: 'heart',
    },
    {
      title: 'Rendez-vous médical',
      description: 'Allez à vos rendez-vous sereinement, je m’occupe de votre enfant.',
      icon: 'medical',
    },
    {
      title: 'Temps pour les frères et sœurs',
      description: 'Accordez une attention particulière aux autres enfants.',
      icon: 'users',
    },
    {
      title: 'Fatigue parentale',
      description: 'Rechargez vos batteries quand le quotidien devient lourd.',
      icon: 'moon',
    },
    {
      title: "Besoin d'un relais de confiance",
      description: 'Appuyez-vous sur une présence expérimentée et bienveillante.',
      icon: 'handshake',
    },
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
      name: 'Audrey',
      status: 'Particulière — Accompagnante Éducative et Sociale diplômée',
      activity: 'Intervenant à domicile via le dispositif CESU (particulier employeur)',
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
    publicationDirector: 'Audrey',
    host: {
      name: 'Vercel Inc.',
      address: '440 N Barranca Ave #4133, Covina, CA 91723, États-Unis',
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
      'Soutien dans les activités du quotidien : routines, sorties, autonomie.',
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
  {
    slug: 'autonomie-quotidien',
    icon: 'sunrise',
    title: "Accompagnement vers l'autonomie au quotidien",
    summary:
      'Un soutien patient pour gagner en autonomie dans les gestes et routines de la vie quotidienne.',
    details: [
      'Aide progressive dans les activités du quotidien : soins, repas, organisation.',
      "Développement des compétences à son rythme, dans le respect de l'enfant ou du jeune.",
      'Objectifs définis avec la famille, adaptés à chaque situation.',
    ],
  },
] as const;

export const contactForm = {
  needs: [
    'Répit parental',
    "Accompagnement vers l'autonomie au quotidien",
    'Accompagnement TSA / handicap',
    'Aide ponctuelle ou quotidienne',
    'Premier échange / renseignements',
    'Autre (à préciser ci-dessous)',
  ],
  frequencies: [
    'Ponctuel (quelques heures)',
    'Régulier (chaque semaine)',
    'À définir ensemble',
  ],
} as const;
