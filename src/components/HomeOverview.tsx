import React from 'react';
import { Scissors, Calendar, Camera, Star, MapPin, Clock, ArrowRight, Sparkles, Navigation, Phone } from 'lucide-react';
import { SHOP_INFO, SERVICES_DATA } from '../data/barbershopData';
import { PageType } from './Navbar';
import { ShopStatusBadge } from './ShopStatusBadge';

interface HomeOverviewProps {
  onNavigatePage: (page: PageType) => void;
  onOpenBooking: (serviceId?: string) => void;
  onOpenFaceGuide: () => void;
}

export const HomeOverview: React.FC<HomeOverviewProps> = ({
  onNavigatePage,
  onOpenBooking,
  onOpenFaceGuide,
}) => {
  const topServices = SERVICES_DATA.slice(0, 3);

  return (
    <div className="bg-stone-950 text-stone-100 py-12 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <ShopStatusBadge />
          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-stone-100">
            BARBER SHOP SAMOS
          </h2>
          <p className="text-stone-400 text-sm">
            Carrer de la Indústria 284, Sant Martí (Barcelona)
          </p>
        </div>

        {/* Navigation Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Servicios */}
          <div
            onClick={() => onNavigatePage('cortes')}
            className="group relative bg-stone-900/90 border border-stone-800 hover:border-amber-500/60 p-6 rounded-2xl transition-all duration-300 cursor-pointer shadow-xl hover:-translate-y-1 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                <Scissors className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                Servicios & Precios
              </h3>
              <p className="text-stone-400 text-xs sm:text-sm">
                Consulta nuestras tarifas de corte, barba y tratamientos.
              </p>
            </div>
            <div className="pt-2 flex items-center gap-2 text-amber-400 text-xs font-bold group-hover:translate-x-1 transition-transform">
              <span>Ver servicios</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 2: Pedir Cita */}
          <div
            onClick={() => onNavigatePage('reservas')}
            className="group relative bg-gradient-to-br from-stone-900 via-stone-900 to-emerald-950/30 border border-emerald-900/40 hover:border-emerald-500/60 p-6 rounded-2xl transition-all duration-300 cursor-pointer shadow-xl hover:-translate-y-1 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-stone-950 transition-colors">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-100 group-hover:text-emerald-300 transition-colors">
                Pedir Cita Online
              </h3>
              <p className="text-stone-400 text-xs sm:text-sm">
                Reserva hora de forma rápida y directa por WhatsApp.
              </p>
            </div>
            <div className="pt-2 flex items-center gap-2 text-emerald-400 text-xs font-bold group-hover:translate-x-1 transition-transform">
              <span>Reservar ahora</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 3: Galería */}
          <div
            onClick={() => onNavigatePage('galeria')}
            className="group relative bg-stone-900/90 border border-stone-800 hover:border-amber-500/60 p-6 rounded-2xl transition-all duration-300 cursor-pointer shadow-xl hover:-translate-y-1 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                <Camera className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                Galería de Fotos
              </h3>
              <p className="text-stone-400 text-xs sm:text-sm">
                Fotos reales de nuestros trabajos y la barbería.
              </p>
            </div>
            <div className="pt-2 flex items-center gap-2 text-amber-400 text-xs font-bold group-hover:translate-x-1 transition-transform">
              <span>Ver fotos</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 4: Reseñas */}
          <div
            onClick={() => onNavigatePage('resenas')}
            className="group relative bg-stone-900/90 border border-stone-800 hover:border-amber-500/60 p-6 rounded-2xl transition-all duration-300 cursor-pointer shadow-xl hover:-translate-y-1 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                <Star className="w-6 h-6 fill-amber-400" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                Reseñas (4.9 ⭐)
              </h3>
              <p className="text-stone-400 text-xs sm:text-sm">
                Opiniones reales de nuestros clientes en Google.
              </p>
            </div>
            <div className="pt-2 flex items-center gap-2 text-amber-400 text-xs font-bold group-hover:translate-x-1 transition-transform">
              <span>Ver opiniones</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 5: Ubicación & Contacto */}
          <div
            onClick={() => onNavigatePage('contacto')}
            className="group relative bg-stone-900/90 border border-stone-800 hover:border-amber-500/60 p-6 rounded-2xl transition-all duration-300 cursor-pointer shadow-xl hover:-translate-y-1 flex flex-col justify-between space-y-4 sm:col-span-2 lg:col-span-2"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-950 text-amber-400 text-xs border border-stone-800">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Lun - Sáb: 09:30 - 21:00</span>
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                Ubicación & Contacto
              </h3>
              <p className="text-stone-400 text-xs sm:text-sm">
                {SHOP_INFO.address}. Tel: {SHOP_INFO.phone}
              </p>
            </div>
            <div className="pt-2 flex items-center gap-2 text-amber-400 text-xs font-bold group-hover:translate-x-1 transition-transform">
              <span>Ver contacto y mapa</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Featured Popular Cuts Teaser */}
        <div className="bg-stone-900/60 border border-stone-800/80 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-4">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-100">
                Cortes Más Solicitados
              </h3>
              <p className="text-stone-400 text-xs sm:text-sm">
                Nuestros servicios estrella con acabado profesional
              </p>
            </div>
            <button
              onClick={() => onNavigatePage('cortes')}
              className="px-5 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-amber-300 border border-stone-700 text-xs font-bold flex items-center gap-2 self-start sm:self-auto transition-colors cursor-pointer"
            >
              <span>Ver catálogo completo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topServices.map((cut) => (
              <div
                key={cut.id}
                className="bg-stone-950/80 rounded-2xl p-4 border border-stone-800/80 flex flex-col justify-between space-y-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-serif font-bold text-stone-100 text-base">{cut.name}</h4>
                  <span className="text-amber-400 font-bold text-base shrink-0">{cut.priceDisplay || `${cut.price}€`}</span>
                </div>
                <p className="text-stone-400 text-xs line-clamp-2">{cut.description}</p>
                <div className="pt-2 flex items-center justify-between border-t border-stone-900 text-xs">
                  <span className="text-stone-500">⏳ {cut.durationMinutes} min</span>
                  <button
                    onClick={() => onOpenBooking(cut.id)}
                    className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <span>Reservar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visagism / Face shape banner */}
        <div className="bg-gradient-to-r from-stone-900 via-amber-950/30 to-stone-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Asesor de Imagen Gratuito</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-100">
              ¿Dudas sobre qué corte favorece más a tu rostro?
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm max-w-xl">
              Descubre qué estilo de degradado o barba encaja perfectamente con la forma de tu cara (ovalada, cuadrada, redonda, etc.)
            </p>
          </div>
          <button
            onClick={onOpenFaceGuide}
            className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-amber-500/20 shrink-0 cursor-pointer transition-all"
          >
            <span>Abrir Guía de Visajismo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
