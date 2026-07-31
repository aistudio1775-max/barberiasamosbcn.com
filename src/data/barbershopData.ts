import { HaircutService, Barber, Review } from '../types';

export const SAMOS_PHOTOS = [
  '/gallery/whatsapp_1.jpeg',
  '/gallery/whatsapp_2.jpeg',
  '/gallery/whatsapp_3.jpeg',
  '/gallery/whatsapp_4.jpeg',
  '/gallery/whatsapp_5.jpeg',
  '/gallery/whatsapp_6.jpeg',
  '/gallery/whatsapp_7.jpeg',
  '/gallery/whatsapp_8.jpeg',
  '/gallery/whatsapp_9.jpeg',
  '/gallery/whatsapp_10.jpeg',
  '/gallery/whatsapp_11.jpeg',
  '/gallery/whatsapp_12.jpeg',
  '/gallery/whatsapp_13.jpeg',
  '/gallery/whatsapp_14.jpeg',
  '/gallery/whatsapp_15.jpeg',
  '/gallery/whatsapp_17.jpeg',
  '/gallery/whatsapp_18.jpeg',
  '/gallery/whatsapp_20.jpeg',
  '/gallery/whatsapp_21.jpeg',
  '/gallery/whatsapp_22.jpeg',
  '/gallery/whatsapp_23.jpeg',
  '/gallery/whatsapp_24.jpeg',
  '/gallery/whatsapp_25.jpeg',
  '/gallery/whatsapp_26.jpeg',
  '/gallery/whatsapp_27.jpeg',
  '/gallery/whatsapp_28.jpeg',
  '/gallery/whatsapp_29.jpeg',
  '/gallery/whatsapp_30.jpeg',
  '/gallery/whatsapp_32.jpeg',
  '/gallery/whatsapp_33.jpeg'
];

export const HERO_EXTERIOR_IMAGE = '/gallery/whatsapp_1.jpeg';
export const HERO_INTERIOR_IMAGE = '/gallery/whatsapp_2.jpeg';
export const HERO_IMAGE_URL = '/gallery/whatsapp_1.jpeg';
export const FADE_STYLE_IMAGE_URL = '/gallery/whatsapp_3.jpeg';
export const HERO_IMAGE_URL_2 = '/gallery/whatsapp_1.jpeg';
export const FADE_STYLE_IMAGE_URL_2 = '/gallery/whatsapp_4.jpeg';

export const SERVICES_DATA: HaircutService[] = [
  {
    id: 'corte-pelo',
    name: 'Corte de Pelo',
    category: 'clasicos',
    price: 12,
    priceDisplay: '12 €',
    durationMinutes: 30,
    description: 'Corte completo, degradado o clásico con acabado profesional a navaja.',
    popular: true,
    recommendedFaceShapes: ['ovalado', 'cuadrado', 'redondo', 'diamante'],
    includes: ['Corte a medida', 'Acabado a navaja', 'Peinado con producto']
  },
  {
    id: 'pelo-barba',
    name: 'Pelo + Barba',
    category: 'barba',
    price: 22,
    priceDisplay: '22 €',
    durationMinutes: 45,
    description: 'Servicio completo de corte de pelo junto con arreglo y perfilado de barba.',
    popular: true,
    recommendedFaceShapes: ['ovalado', 'cuadrado', 'redondo', 'diamante'],
    includes: ['Corte de pelo', 'Ritual y perfilado de barba', 'Toalla caliente']
  },
  {
    id: 'barba',
    name: 'Barba',
    category: 'barba',
    price: 12,
    priceDisplay: '12 €',
    durationMinutes: 25,
    description: 'Diseño, recorte, perfilado a navaja e hidratación de barba.',
    popular: false,
    recommendedFaceShapes: ['ovalado', 'cuadrado', 'redondo', 'diamante'],
    includes: ['Perfilado a navaja', 'Recorte y rebajado', 'Aceite hidratante']
  },
  {
    id: 'tratamiento-pelo',
    name: 'Tratamiento de Pelo',
    category: 'clasicos',
    price: 60,
    priceDisplay: 'Desde 60 €',
    durationMinutes: 40,
    description: 'Tratamiento capilar nutritivo, reparador y fortalecedor intensivo.',
    popular: false,
    recommendedFaceShapes: ['ovalado', 'cuadrado', 'redondo', 'diamante'],
    includes: ['Diagnóstico capilar', 'Tratamiento nutritivo', 'Lavado tonificante']
  },
  {
    id: 'limpieza-facial',
    name: 'Limpieza Facial',
    category: 'clasicos',
    price: 30,
    priceDisplay: '30 €',
    durationMinutes: 35,
    description: 'Higiene facial profunda para eliminar impurezas e hidratar la piel.',
    popular: false,
    recommendedFaceShapes: ['ovalado', 'cuadrado', 'redondo', 'diamante'],
    includes: ['Exfoliación profunda', 'Mascarilla purificante', 'Hidratación final']
  }
];

export const BARBERS_DATA: Barber[] = [
  {
    id: 'samir-barber',
    name: 'Samir (Sam)',
    role: 'Master Barber & Especialista',
    experienceYears: 10,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
    bio: 'Gran profesionalidad y atención personalizada. Experto en cortes modernos, degradados a navaja y estilo urbano.',
    specialties: ['Skin Fade', 'Ritual de Barba', 'Corte a Navaja'],
    rating: 4.98,
    reviewCount: 120,
    availableDays: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
  },
  {
    id: 'abdel-barber',
    name: 'Abdel',
    role: 'Barber & Stylist Senior',
    experienceYears: 8,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    bio: 'Reconocido por su excelente trato y técnica impecable en cabello y barba. Altamente recomendado por los clientes habituales.',
    specialties: ['Corte & Barba', 'Massatge Cranial', 'Perfilado'],
    rating: 4.96,
    reviewCount: 95,
    availableDays: ['Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
  },
  {
    id: 'mostafa-barber',
    name: 'Mostafa',
    role: 'Fade & Lineup Specialist',
    experienceYears: 7,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
    bio: 'Especialista en perfiles pulidos, contornos limpios y atención muy detallista tanto para adultos como para niños.',
    specialties: ['Line-Up Precision', 'Corte Infantil', 'Textured Crop'],
    rating: 4.94,
    reviewCount: 80,
    availableDays: ['Lunes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
  },
  {
    id: 'achraf-barber',
    name: 'Achraf',
    role: 'Barber & Stylist',
    experienceYears: 6,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
    bio: 'Profesional paciente y de trato acogedor, apasionado por ofrecer la mejor experiencia de corte del barrio.',
    specialties: ['Degradados', 'Cuidado Capilar', 'Corte Clásico'],
    rating: 4.95,
    reviewCount: 75,
    availableDays: ['Lunes', 'Martes', 'Jueves', 'Viernes', 'Sábado']
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-roger',
    author: 'Roger',
    barberName: 'Equip Barber shop samos',
    rating: 5,
    date: 'Hace 1 año',
    comment: 'Boníssima experiència en aquesta perruqueria! Vaig anar amb els meus dos fills (7 anys i 7 mesos) i vam sortir encantats. Tracte espectacular amb els nens i amb mi i treballadors molt professionals i polits. Ademes l’establiment molt modern.',
    haircutName: 'Corte Infantil & Adulto',
    verified: true
  },
  {
    id: 'rev-lluis',
    author: 'Lluís',
    barberName: 'Equip Barber shop samos',
    rating: 5,
    date: 'Hace 1 año',
    comment: 'Tallen molt bé el cabell. Ràpids i eficients. Molt bon servei a bon preu.',
    haircutName: 'Corte Clásico Executiv',
    verified: true
  },
  {
    id: 'rev-xavier',
    author: 'Xavier Bea',
    barberName: 'Equip Barber shop samos',
    rating: 5,
    date: 'Hace 6 años',
    comment: 'Gran professionalitat, grans perruquers i excel.lent tracte per preus econòmics. Molt recomenable!',
    haircutName: 'Corte & Arreglo',
    verified: true
  },
  {
    id: 'rev-pablo',
    author: 'Pablo Pérez Lavilla',
    barberName: 'Samir (Sam)',
    rating: 5,
    date: 'Hace 5 meses',
    comment: 'Servei de deu.',
    haircutName: 'Skin Fade / Degradado Precision',
    verified: true
  },
  {
    id: 'rev-arnau-s',
    author: 'Arnau Sanz',
    barberName: 'Equip Barber shop samos',
    rating: 5,
    date: 'Hace 1 año',
    comment: 'Tot molt bé. Fins després!',
    haircutName: 'Corte Clásico Executiv',
    verified: true
  },
  {
    id: 'rev-arnau-p',
    author: 'Arnau Perez',
    barberName: 'Equip Barber shop samos',
    rating: 5,
    date: 'Hace 4 años',
    comment: 'Molt recomanable, es nota l\'experiència.',
    haircutName: 'Corte & Barba',
    verified: true
  },
  {
    id: 'rev-ach',
    author: 'Ach Missaoui',
    barberName: 'Samir (Sam)',
    rating: 5,
    date: 'Hace 2 meses',
    comment: 'Vaig trobar aquest lloc per casualitat durant el meu viatge a Barcelona, i quina troballa! Sóc extremadament exigent pel que fa a les barberies, però aquesta és, sens dubte, la millor que he visitat.',
    haircutName: 'Skin Fade / Degradado Precision',
    verified: true
  },
  {
    id: 'rev-biagio',
    author: 'Biagio',
    barberName: 'Abdel',
    rating: 5,
    date: 'Hace 2 meses',
    comment: 'El perruquer que em va tallar els cabells va ser molt amable i un autèntic professional. A més, parla molt bé anglès, cosa que és ideal per als que no són de Barcelona. Totalment recomanable!',
    haircutName: 'Corte & Arreglo de Barba',
    verified: true
  },
  {
    id: 'rev-marc-sola',
    author: 'Marc Solà Segura',
    barberName: 'Equip Barber shop samos',
    rating: 5,
    date: 'Hace 1 mes',
    comment: 'Molt bons tallant els cabells, gent molt amable i molt bons resultats.',
    haircutName: 'Skin Fade',
    verified: true
  },
  {
    id: 'rev-mark-aneri',
    author: 'mark aneri',
    barberName: 'Equip Barber shop samos',
    rating: 5,
    date: 'Hace 3 meses',
    comment: '100% recomanable!!! Servei impecable, feia anys que no rebia un servei així. Moltes gràcies!!',
    haircutName: 'Corte & Arreglo de Barba',
    verified: true
  },
  {
    id: 'rev-andres',
    author: 'Andres Murillo',
    barberName: 'Equip Barber shop samos',
    rating: 5,
    date: 'Hace 7 meses',
    comment: 'Excel·lent servei d\'atenció i amb moltíssima experiència a la seva professió, molt però molt recomanable.',
    haircutName: 'Arreglo de Barba',
    verified: true
  },
  {
    id: 'rev-manuel',
    author: 'Manuel Toribio Moreno',
    barberName: 'Abdel',
    rating: 5,
    date: 'Hace 2 meses',
    comment: 'Abdel és el millor perruquer de Barcelona! Molt recomanat!',
    haircutName: 'Corte & Barba',
    verified: true
  },
  {
    id: 'rev-nelson',
    author: 'Nelson Santos',
    barberName: 'Equip Barber shop samos',
    rating: 5,
    date: 'Hace 7 meses',
    comment: 'Excel·lent servei, la meva barberia de confiança al barri.',
    haircutName: 'Skin Fade',
    verified: true
  },
  {
    id: 'rev-karl',
    author: 'karl Rodriguez',
    barberName: 'Samir (Sam)',
    rating: 5,
    date: 'Hace 5 meses',
    comment: 'El servei és impecable !!. Samir i tots els nois són súper agradables i molt professionals.',
    haircutName: 'Corte & Arreglo de Barba',
    verified: true
  },
  {
    id: 'rev-juan-moral',
    author: 'JUAN MORAL RAEZ',
    barberName: 'Equip Barber shop samos',
    rating: 5,
    date: 'Hace 7 meses',
    comment: 'He anat aquesta tarda a tallar-me els cabells molt professionals i em queda molt bé, excel·lent servei i molt simpàtics.',
    haircutName: 'Corte Clásico Executiv',
    verified: true
  },
  {
    id: 'rev-jordi-m',
    author: 'Jordi',
    barberName: 'Mostafa',
    rating: 5,
    date: 'Hace 9 meses',
    comment: 'Espectacular experiència i servei. He anat a moltes barberies, modernes, clàssiques, de moda per IG, però a cap com en aquesta. He arribat per casualitat, sóc del barri, i ja en tenen un client més. Mostafa és un crac!',
    haircutName: 'Skin Fade & Contornos',
    verified: true
  },
  {
    id: 'rev-alba',
    author: 'Alba Nozal Miró',
    barberName: 'Equip Barber shop samos',
    rating: 5,
    date: 'Hace 1 año',
    comment: 'La nostra perruqueria familiar, fa anys que forma part de la nostra rutina mensual tant pel meu fill gran de 7 anys com pel meu marit!!! Ahir van atendre el nostre nadó de 7 mesos per primera vegada i tot perfecte!',
    haircutName: 'Corte Infantil & Adulto',
    verified: true
  },
  {
    id: 'rev-jose-m',
    author: 'José Manuel Pérez OPORTUNIA',
    barberName: 'Equip Barber shop samos',
    rating: 5,
    date: 'Hace 10 meses',
    comment: 'Excel·lent servei, molt professional i gens convencional. Tall de cabell i barba, massatge cranial, neteja de cutis amb tovalloles calentes, talls de tota mena, tisora, navalla, preus molt ajustats. Tornaré sempre !!!',
    haircutName: 'Ritual de Barba Esculpida',
    verified: true
  },
  {
    id: 'rev-roxy',
    author: 'Roxy Flower',
    barberName: 'Equip Barber shop samos',
    rating: 5,
    date: 'Hace 1 año',
    comment: 'Fa molt de temps que porto els meus fills a aquesta barberia, acaben de reformar-la fa res, el disseny és espectacular, sobri, elegant i molt minimalista. Els barbers són super amables i eficients.',
    haircutName: 'Corte Infantil & Juvenil',
    verified: true
  },
  {
    id: 'rev-judith',
    author: 'Judith Mestdagh',
    barberName: 'Equip Barber shop samos',
    rating: 5,
    date: 'Hace 11 meses',
    comment: 'Molt satisfet! Servei amable. Som aquí de viatge i el meu fill es volia tallar els cabells. És exactament com els volia!',
    haircutName: 'Corte Junior / Niños',
    verified: true
  },
  {
    id: 'rev-rafael',
    author: 'Rafael Pennese',
    barberName: 'Equip Barber shop samos',
    rating: 5,
    date: 'Hace 1 año',
    comment: 'Aquesta és una parada obligatòria per a mi cada vegada que sóc a Barcelona. Són agradables, educats i no gaire xerraires. El resultat és perfecte, ja que presten molta atenció als detalls. M\'hi sento mimat.',
    haircutName: 'Corte & Ritual Barba',
    verified: true
  },
  {
    id: 'rev-jordi-candal',
    author: 'Jordi Candal',
    barberName: 'Samir (Sam)',
    rating: 5,
    date: 'Hace 1 año',
    comment: 'Són molt professionals! Massatge curtet abans de començar a tallar els cabells, i si fas barba, espectacular!! Tovallola calenta i massatge a la cara també! Un 10!!',
    haircutName: 'Ritual de Barba Esculpida',
    verified: true
  },
  {
    id: 'rev-tahny',
    author: 'Tahny',
    barberName: 'Equip Barber shop samos',
    rating: 5,
    date: 'Hace 10 meses',
    comment: 'Segona vegada que vinc a aquesta barberia 💈 és la millor de la zona, els nois donen molt bé els seus serveis són amables, i la barberia és impecable. Gràcies! 🫂',
    haircutName: 'Skin Fade',
    verified: true
  },
  {
    id: 'rev-javier-g',
    author: 'Javier Gracia Blasco',
    barberName: 'Equip Barber shop samos',
    rating: 5,
    date: 'Hace 1 año',
    comment: 'Ja fa temps que passo per les mans d\'aquests nois, que es prenen el seu temps i la seva atenció per deixar-te perfecte tant de cabell com de barba, utilitzant productes, locions, etc... I a un preu super!!! Formen part del barri👍',
    haircutName: 'Corte & Barba Complete',
    verified: true
  },
  {
    id: 'rev-jmarrod',
    author: 'J MarRod',
    barberName: 'Equip Barber shop samos',
    rating: 5,
    date: 'Hace 1 año',
    comment: 'Són increïbles! Gran tracte i molt dedicats es prenen el seu temps perquè et quedi perfecte i entenen a la perfecció allò que un es vol fer.',
    haircutName: 'Skin Fade',
    verified: true
  },
  {
    id: 'rev-alexander',
    author: 'Alexander Muñoz Posso',
    barberName: 'Samir (Sam)',
    rating: 5,
    date: 'Hace 1 año',
    comment: 'La millor barberia del barri amb el seu local reformat li dóna un ambient agradable i de luxe perquè hi passin la recomano total i l\'atenció de Sam i el seu treball excel·lent!',
    haircutName: 'Skin Fade & Barba',
    verified: true
  },
  {
    id: 'rev-coraima',
    author: 'Coraima J. Villamar chisaguano',
    barberName: 'Equip Barber shop samos',
    rating: 5,
    date: 'Hace 1 año',
    comment: 'La millor perruqueria del barri! I més quan es tracta dels nostres petits, feina impecable i tracte immillorable... Super recomanat!',
    haircutName: 'Corte Junior / Niños',
    verified: true
  },
  {
    id: 'rev-mohamed-e',
    author: 'Mohamed Erahimi',
    barberName: 'Achraf, Abdel i Mostafa',
    rating: 5,
    date: 'Hace 1 mes',
    comment: 'L\'Achraf, l\'Abdel i el Moustapha són uns professionals excel·lents; els recomano molt. Hala Madrid 🌟',
    haircutName: 'Corte & Arreglo',
    verified: true
  },
  {
    id: 'rev-sergio',
    author: 'Sergio López',
    barberName: 'Equip Barber shop samos',
    rating: 5,
    date: 'Hace 3 meses',
    comment: 'Els millors! Xampú, condicionador i tallats a mida impecables.',
    haircutName: 'Corte & Xampú',
    verified: true
  },
  {
    id: 'rev-izaan',
    author: 'Izaan _NR',
    barberName: 'Equip Barber shop samos',
    rating: 5,
    date: 'Hace 1 mes',
    comment: 'Molt bon tracte i resultat excel·lent.',
    haircutName: 'Skin Fade',
    verified: true
  }
];

export const SHOP_INFO = {
  name: 'Barber shop samos',
  slogan: 'Barbería profesional en Sant Martí, Barcelona. Cuidado masculino, degradados pulidos y máxima atención.',
  address: 'Carrer de la Indústria, 284',
  district: 'Sant Martí',
  city: '08026 Barcelona',
  plusCode: 'C57J+M6 Barcelona',
  phone: '+34 634 66 30 21',
  whatsapp: '34634663021',
  googleMapsUrl: 'https://www.google.com/maps/place/Barber+shop+samos/@41.4141852,2.1805521,2612m/data=!3m1!1e3!4m16!1m9!3m8!1s0x12a4a2d6c1a4eb67:0x850d170b7fe6e6c!2sBarber+shop+samos!8m2!3d41.4141852!4d2.1805521!9m1!1b1!16s%2Fg%2F11ghmvz7_g!3m5!1s0x12a4a2d6c1a4eb67:0x850d170b7fe6e6c!8m2!3d41.4141852!4d2.1805521!16s%2Fg%2F11ghmvz7_g',
  rating: 4.9,
  reviewCount: 177,
  email: '',
  openingHours: [
    { day: 'Lunes', hours: '09:30 – 21:00' },
    { day: 'Martes', hours: '09:30 – 21:00' },
    { day: 'Miércoles', hours: '09:30 – 21:00' },
    { day: 'Jueves', hours: '09:30 – 21:00' },
    { day: 'Viernes', hours: '09:30 – 21:00' },
    { day: 'Sábado', hours: '09:30 – 21:00' },
    { day: 'Domingo', hours: 'Cerrado' }
  ],
  socials: {
    facebook: 'https://www.facebook.com/people/Barberia-jtsam/100037523064875/#',
    instagram: 'https://www.instagram.com/barber_shop_samos_1?utm_source=qr',
    tiktok: ''
  },
  amenities: [
    'Aparcamiento accesible para personas en silla de ruedas',
    'Servicios completos en las instalaciones',
    'Aseo público disponible',
    'Atención con y sin cita previa',
    'Pagos con móvil mediante NFC, Tarjetas de crédito y débito',
    'Excelente atención para niños (Corte infantil)'
  ]
};

export const FAQS = [
  {
    question: '¿Dónde está ubicada Barber shop samos?',
    answer: 'Nos encontramos en Carrer de la Indústria, 284, Sant Martí, 08026 Barcelona (Código Plus: C57J+M6 Barcelona).'
  },
  {
    question: '¿Cuál es el teléfono y WhatsApp para pedir cita?',
    answer: 'Puedes contactar directamente al 634 66 30 21 (+34 634 66 30 21) o usar nuestro formulario de reservas online que te conecta a WhatsApp.'
  },
  {
    question: '¿Atendéis a niños y familias?',
    answer: '¡Sí! Es una de nuestras especialidades más valoradas por los clientes del barrio de Sant Martí, ofreciendo máxima paciencia y trato cariñoso con niños de todas las edades.'
  },
  {
    question: '¿Qué formas de pago aceptáis?',
    answer: 'Aceptamos pago con tarjeta de crédito/dèbit, pago móvil mediante NFC y efectivo.'
  }
];
