export const images = {
  hero: {
    src: '/images/hero.jpg',
    alt: 'Famille dans un intérieur lumineux, moment de calme et de douceur',
    credit: { name: 'Becca Tapert', url: 'https://unsplash.com/@tapert' },
  },
  about: {
    src: '/images/about.jpg',
    alt: 'Professionnelle souriante dans un cadre chaleureux',
    credit: { name: 'Christina @ wocintechchat.com', url: 'https://unsplash.com/@wocintechchat' },
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
