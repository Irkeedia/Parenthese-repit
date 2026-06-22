export const images = {
  hero: {
    src: '/images/imagehero.png',
    alt: "Main d'adulte tenant délicatement la main d'un enfant, moment de confiance et de douceur",
  },
  family: {
    src: '/images/family.jpg',
    alt: 'Parents et enfants réunis dans une lumière dorée, en toute sérénité',
    credit: { name: 'Nathan Dumlao', url: 'https://unsplash.com/@nate_dumlao' },
  },
  services: {
    src: '/images/imageservice.png',
    alt: 'Enfant souriante peignant dans un cadre ludique et bienveillant',
  },
  homeCare: {
    src: '/images/home-care.jpg',
    alt: 'Accompagnement bienveillant d’un enfant à domicile',
    credit: { name: 'J W', url: 'https://unsplash.com/@jwwphoto' },
  },
  contact: {
    src: '/images/contact.jpg',
    alt: 'Téléphone et carnet sur un bureau accueillant',
    credit: { name: 'rawpixel', url: 'https://unsplash.com/@rawpixel' },
  },
} as const;

export const imageCredits = Object.values(images);
