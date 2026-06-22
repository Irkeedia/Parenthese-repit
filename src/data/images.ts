export const images = {
  hero: {
    src: '/images/imagehero.png',
    alt: "Main d'adulte tenant délicatement la main d'un enfant, moment de confiance et de douceur",
  },
  heroBanner: {
    src: '/images/imageplagehero.png',
    alt: 'Famille réunie face à la mer, un moment de sérénité partagé',
  },
  family: {
    src: '/images/family.jpg',
    alt: 'Parents et enfants réunis dans une lumière dorée, en toute sérénité',
    credit: { name: 'Nathan Dumlao', url: 'https://unsplash.com/@nate_dumlao' },
  },
  services: {
    src: '/images/services.jpg',
    alt: 'Enfant peignant dans un cadre ludique et bienveillant',
    credit: { name: 'Ben White', url: 'https://unsplash.com/@benwhitephotography' },
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
