import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  HelpCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ExternalLink,
  Camera,
  Star,
  Quote,
  X,
  ThumbsUp,
  Navigation,
  Maximize2,
  Scissors,
  Facebook,
  Instagram
} from 'lucide-react';
import { SHOP_INFO, FAQS, REVIEWS_DATA, SAMOS_PHOTOS, HERO_EXTERIOR_IMAGE, HERO_INTERIOR_IMAGE } from '../data/barbershopData';
import { Review } from '../types';
import { openWhatsAppBooking } from '../utils/whatsapp';

interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'fades' | 'barba' | 'clasicos' | 'estilos';
  imageUrl: string;
  barberName: string;
  photoIndex: number;
  tags: string[];
}

interface GalleryReviewsContactProps {
  activeSection?: 'all' | 'galeria' | 'resenas' | 'contacto';
}

export const GalleryReviewsContact: React.FC<GalleryReviewsContactProps> = ({ activeSection = 'all' }) => {
  // --- CONTACT STATE ---
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // --- GALLERY STATE ---
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'fades' | 'barba' | 'clasicos' | 'estilos'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categoriesList: ('fades' | 'barba' | 'clasicos' | 'estilos')[] = ['fades', 'barba', 'clasicos', 'estilos'];
  const barbersList = ['Samir (Sam)', 'Abdel', 'Mostafa', 'Achraf', 'Equipo Barber shop samos'];
  const titlesList = [
    'Degradado Precision Skin Fade',
    'Interior & Instalaciones Barber shop samos',
    'Fachada & Ubicación Indústria 284',
    'Mid Skin Fade & Perfilado de Barba',
    'Corte Estilo Urbano & Peinado Cera Mate',
    'Ritual de Barba Esculpida con Toalla Caliente',
    'Low Fade & Contornos Limpios a Navaja',
    'Corte Clásico Ejecutivo',
    'Corte Infantil & Atención Paciente',
    'Textured Crop & Texturizado Superior',
    'Barba Completa Perfilada & Hidratación',
    'Sillones Barbería Exclusive & Ambiente',
    'High Skin Fade + Peinado Volumétrico',
    'Corte Ejecutivo & Lavado Tonificante',
    'Afeitado Tradicional a Navaja',
    'Diseño & Line-Up Marcado',
    'Corte Modern Mullet & Estilo',
    'Atención Personalizada en Samos'
  ];

  const galleryItems: GalleryItem[] = SAMOS_PHOTOS.map((photoUrl, index) => {
    const category = categoriesList[index % categoriesList.length];
    const barberName = barbersList[index % barbersList.length];
    let titleBase = titlesList[index % titlesList.length];

    if (photoUrl === HERO_INTERIOR_IMAGE) {
      titleBase = 'Interior & Sillones de la Barbería';
    } else if (photoUrl === HERO_EXTERIOR_IMAGE) {
      titleBase = 'Fachada Exterior SXMOS Barber Shop';
    }

    return {
      id: `gal-real-${index + 1}`,
      title: `${titleBase} (Foto Real #${index + 1})`,
      category: photoUrl === HERO_INTERIOR_IMAGE || photoUrl === HERO_EXTERIOR_IMAGE ? 'estilos' : category,
      imageUrl: photoUrl,
      barberName,
      photoIndex: index + 1,
      tags: ['Foto Real Samos', 'Sant Martí', 'Carrer Indústria 284'],
    };
  });

  const filteredItems = galleryItems.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory
  );

  const currentLightboxItem = lightboxIndex !== null ? galleryItems[lightboxIndex] : null;

  const handlePrevPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length);
  };

  const handleNextPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % galleryItems.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowLeft') handlePrevPhoto();
      if (e.key === 'ArrowRight') handleNextPhoto();
      if (e.key === 'Escape') setLightboxIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  // --- REVIEWS STATE ---
  const [reviewsList] = useState<Review[]>(REVIEWS_DATA);

  return (
    <div className="bg-stone-950 text-stone-100">
      {/* SECTION 1: GALERÍA DE TRABAJOS */}
      {(activeSection === 'all' || activeSection === 'galeria') && (
        <section id="galeria" className="py-16 border-t border-stone-800/80 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="font-serif text-3xl sm:text-4xl font-black text-stone-100 tracking-tight uppercase">
                GALERÍA DE FOTOS
              </h2>
              <p className="text-stone-400 text-sm">
                Fotos reales de nuestros cortes, degradados y barba.
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryItems.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setLightboxIndex(index)}
                  className="group relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-800/80 aspect-[4/3] shadow-md cursor-pointer hover:border-amber-500/60 transition-all duration-300"
                >
                  <img
                    src={item.imageUrl}
                    alt="Trabajo de barbería"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = '/gallery/whatsapp_1.jpeg';
                    }}
                  />
                  <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/20 transition-colors" />
                  
                  {/* Maximize Icon on hover */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-stone-950/80 backdrop-blur-md border border-stone-700/80 text-amber-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 2: RESEÑAS Y OPINIONES */}
      {(activeSection === 'all' || activeSection === 'resenas') && (
        <section id="resenas" className="py-16 border-t border-stone-800/80 bg-stone-900/30 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="font-serif text-3xl sm:text-4xl font-black text-stone-100 tracking-tight uppercase">
                RESEÑAS DE CLIENTES
              </h2>
              <p className="text-stone-400 text-sm">
                4.9 ⭐ en Google Maps con más de 177 valoraciones.
              </p>
            </div>

            {/* Rating Summary Banner */}
            <div className="bg-stone-900/90 border border-stone-800 p-6 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="text-4xl sm:text-5xl font-serif font-black text-amber-400">4.9</div>
                <div>
                  <div className="flex items-center text-amber-400 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-stone-400 mt-1 block">
                    177 Reseñas en Google
                  </span>
                </div>
              </div>

              <a
                href={SHOP_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all shrink-0"
              >
                <span>Ver Reseñas en Google</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviewsList.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-stone-900/80 p-6 rounded-2xl border border-stone-800 flex flex-col justify-between space-y-4 relative shadow-md hover:border-stone-700 transition-colors"
                >
                  <Quote className="w-8 h-8 text-amber-500/20 absolute top-6 right-6" />

                  <div className="space-y-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>

                    <p className="text-stone-300 text-sm leading-relaxed italic">
                      "{rev.comment}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between text-xs">
                    <div>
                      <strong className="text-stone-100 font-semibold block">{rev.author}</strong>
                      {rev.haircutName && (
                        <span className="text-amber-400/80 text-[11px] block">
                          {rev.haircutName}
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="text-stone-500 block">{rev.date}</span>
                      {rev.verified && (
                        <span className="text-emerald-400 text-[10px] flex items-center gap-1 justify-end">
                          <CheckCircle2 className="w-3 h-3" /> Verificado
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 3: CONTACTO, UBICACIÓN & FAQS */}
      {(activeSection === 'all' || activeSection === 'contacto') && (
        <section id="contacto" className="py-16 border-t border-stone-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-stone-100 tracking-tight uppercase">
              CONTACTO Y HORARIOS
            </h2>
            <p className="text-stone-400 text-sm">
              Carrer de la Indústria 284, Sant Martí (Barcelona)
            </p>
          </div>

          {/* Grid: Info + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Direct Info & Hours */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Info Card */}
              <div className="bg-stone-900/80 p-6 rounded-2xl border border-stone-800 space-y-6 shadow-xl">
                <h3 className="font-serif text-xl font-bold text-stone-100 border-b border-stone-800 pb-3">
                  Información de Contacto
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3 text-stone-300">
                    <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-stone-100 font-semibold">
                        {SHOP_INFO.address}
                      </strong>
                      <span className="text-stone-400 text-xs">{SHOP_INFO.city}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-stone-300">
                    <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <span className="text-stone-400 text-xs block">Teléfono de atención:</span>
                      <a
                        href={`tel:${SHOP_INFO.phone}`}
                        className="font-semibold text-stone-100 hover:text-amber-400 transition-colors"
                      >
                        Atención Telefónica
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-stone-300">
                    <Scissors className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <span className="text-stone-400 text-xs block">Reserva de cita:</span>
                      <button
                        onClick={() => openWhatsAppBooking()}
                        className="font-semibold text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        Reservar Cita Online <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {SHOP_INFO.socials.facebook && (
                    <div className="flex items-center gap-3 text-stone-300">
                      <Facebook className="w-5 h-5 text-blue-500 shrink-0" />
                      <div>
                        <span className="text-stone-400 text-xs block">Página de Facebook:</span>
                        <a
                          href={SHOP_INFO.socials.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-blue-400 hover:text-blue-300 hover:underline flex items-center gap-1"
                        >
                          Barbería Barberia-jtsam <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  )}

                  {SHOP_INFO.socials.instagram && (
                    <div className="flex items-center gap-3 text-stone-300">
                      <Instagram className="w-5 h-5 text-pink-500 shrink-0" />
                      <div>
                        <span className="text-stone-400 text-xs block">Instagram oficial:</span>
                        <a
                          href={SHOP_INFO.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-pink-400 hover:text-pink-300 hover:underline flex items-center gap-1"
                        >
                          @barber_shop_samos_1 <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Schedule Table */}
                <div className="pt-4 border-t border-stone-800 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
                    Horario de Apertura:
                  </span>
                  {SHOP_INFO.openingHours.map((item, i) => (
                    <div key={i} className="flex justify-between text-xs text-stone-300">
                      <span className="text-stone-400">{item.day}:</span>
                      <strong className="text-stone-100 font-semibold">{item.hours}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Google Maps & Location Card */}
            <div className="lg:col-span-7 bg-stone-900/80 p-6 sm:p-8 rounded-2xl border border-stone-800 space-y-6 flex flex-col justify-between shadow-xl">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Ubicación Exacta</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-stone-100">
                  Barber shop samos
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Encuéntranos fácilmente en Google Maps. Haz clic en el botón a continuación para obtener las indicaciones de cómo llegar.
                </p>
              </div>

              {/* Google Maps Embed / Visual Container */}
              <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden border border-stone-800 bg-stone-950 shadow-inner group">
                <iframe
                  title="Ubicación de Barber shop samos en Google Maps"
                  src="https://maps.google.com/maps?q=Barber+shop+samos+41.4141852,2.1805521&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  loading="lazy"
                  allowFullScreen
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              </div>

              {/* Direct Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={SHOP_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all"
                >
                  <Navigation className="w-4 h-4 fill-stone-950" />
                  <span>Ver en Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <button
                  onClick={() => openWhatsAppBooking()}
                  className="flex-1 py-3.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
                >
                  <Scissors className="w-4 h-4 text-stone-950" />
                  <span>Pedir Cita por WhatsApp</span>
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto space-y-4 pt-12 border-t border-stone-800">
            <div className="text-center space-y-2 mb-6">
              <h3 className="font-serif text-2xl font-bold text-stone-100 flex items-center justify-center gap-2">
                <HelpCircle className="w-6 h-6 text-amber-400" />
                <span>Preguntas Frecuentes (FAQ)</span>
              </h3>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-stone-900/90 border border-stone-800 rounded-xl overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-4 text-left font-semibold text-stone-200 text-sm flex items-center justify-between hover:text-amber-400 transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-amber-400 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-xs text-stone-400 leading-relaxed border-t border-stone-900 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Gallery Image Lightbox Modal */}
      {currentLightboxItem && lightboxIndex !== null && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-stone-950/95 backdrop-blur-md animate-in fade-in duration-200 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col p-4 sm:p-6 space-y-4"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-stone-800/80 pb-3">
              <span className="text-amber-400 font-bold text-xs sm:text-sm uppercase tracking-wider">
                Foto {lightboxIndex + 1} de {galleryItems.length}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2 rounded-full bg-stone-950/80 text-stone-300 hover:text-stone-100 border border-stone-700/80 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High Res Image Container with Prev/Next Controls */}
            <div className="relative w-full max-h-[70vh] sm:max-h-[75vh] flex items-center justify-center overflow-hidden rounded-2xl bg-stone-950">
              <img
                src={currentLightboxItem.imageUrl}
                alt={currentLightboxItem.title}
                className="max-h-[70vh] sm:max-h-[75vh] w-full object-contain rounded-2xl"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = '/gallery/whatsapp_1.jpeg';
                }}
              />

              {/* Prev Button */}
              <button
                onClick={handlePrevPhoto}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-stone-950/80 hover:bg-stone-950 text-amber-400 border border-stone-700/80 shadow-xl transition-all hover:scale-110 cursor-pointer"
                title="Foto Anterior"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNextPhoto}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-stone-950/80 hover:bg-stone-950 text-amber-400 border border-stone-700/80 shadow-xl transition-all hover:scale-110 cursor-pointer"
                title="Foto Siguiente"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Footer action */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <div className="text-xs text-stone-400 hidden sm:block">
                📍 Barber shop samos • Carrer de la Indústria 284, Sant Martí
              </div>
              <button
                onClick={() => {
                  setLightboxIndex(null);
                  openWhatsAppBooking();
                }}
                className="w-full sm:w-auto py-3 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
              >
                <Scissors className="w-4 h-4 text-stone-950" />
                <span>Pedir Cita para este Estilo por WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
