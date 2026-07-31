import React from 'react';
import { Scissors, Star, ShieldCheck, Sparkles, ChevronRight, Navigation, Facebook, Instagram } from 'lucide-react';
import { HERO_EXTERIOR_IMAGE, SHOP_INFO } from '../data/barbershopData';
import { ShopStatusBadge } from './ShopStatusBadge';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenFaceGuide: () => void;
  onNavigatePage?: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenFaceGuide, onNavigatePage }) => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-stone-950">
      {/* Permanent Exterior Barbershop Background Image behind headline text */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_EXTERIOR_IMAGE}
          alt="Fachada SXMOS Barber Shop"
          className="w-full h-full object-cover object-center filter brightness-[0.65] scale-100 transition-transform duration-1000"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.src = '/gallery/whatsapp_1.jpeg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-stone-950/70 to-stone-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl space-y-6">
          {/* Top Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <ShopStatusBadge />
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/90 border border-amber-500/40 text-amber-400 text-xs font-semibold tracking-wide uppercase backdrop-blur-md shadow-xl">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Indústria 284, Sant Martí (Barcelona)</span>
            </div>

            {/* Social Media Links */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-900/90 border border-stone-800 text-stone-300 text-xs backdrop-blur-md shadow-xl">
              <span className="text-stone-400 text-[11px] font-medium">Síguenos:</span>
              {SHOP_INFO.socials.facebook && (
                <a
                  href={SHOP_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-1 text-stone-300 font-medium"
                  title="Facebook"
                >
                  <Facebook className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-xs">Facebook</span>
                </a>
              )}
              <span className="text-stone-700">|</span>
              {SHOP_INFO.socials.instagram && (
                <a
                  href={SHOP_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition-colors flex items-center gap-1 text-stone-300 font-medium"
                  title="Instagram"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  <span className="text-xs">Instagram</span>
                </a>
              )}
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-stone-100 leading-[1.1]">
            BARBER SHOP <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              SAMOS
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-stone-300 text-base sm:text-lg font-normal leading-relaxed max-w-xl">
            Cortes de pelo, degradados y barba. Reserva tu cita online.
          </p>

          {/* CTAs - 3 Buttons Together */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 flex-wrap">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/25 hover:-translate-y-0.5 transition-all group cursor-pointer shrink-0"
            >
              <Scissors className="w-5 h-5 text-stone-950 group-hover:rotate-12 transition-transform" />
              <span>Pedir Cita</span>
              <ChevronRight className="w-4 h-4 text-stone-950/70 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => {
                if (onNavigatePage) {
                  onNavigatePage('cortes');
                } else {
                  const el = document.getElementById('cortes');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-5 py-3.5 rounded-xl bg-stone-900/90 hover:bg-stone-800 text-stone-200 border border-stone-700/80 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 backdrop-blur-sm transition-all cursor-pointer hover:border-amber-500/40"
            >
              <Scissors className="w-4 h-4 text-amber-400" />
              <span>Ver Catálogo de Cortes</span>
            </button>

            <a
              href={SHOP_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 backdrop-blur-sm transition-all shadow-lg hover:border-amber-400"
            >
              <Navigation className="w-4 h-4 text-amber-400 fill-amber-400/20" />
              <span>Ver en Google Maps</span>
            </a>
          </div>

          {/* Face guide helper card */}
          <div className="pt-1">
            <button
              onClick={onOpenFaceGuide}
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-stone-400 hover:text-amber-300 transition-colors group underline decoration-amber-500/50 underline-offset-4"
            >
              <Sparkles className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
              <span>¿No sabes qué corte va mejor con tu tipo de rostro? <strong>Asesor de Visajismo →</strong></span>
            </button>
          </div>

          {/* Quick Metrics & Trust Badges */}
          <div className="pt-6 border-t border-stone-800/80 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="flex items-center gap-3 bg-stone-900/60 p-3 rounded-xl border border-stone-800/60 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                <Star className="w-5 h-5 fill-amber-400" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-stone-100">4.9 / 5.0 ⭐</div>
                <div className="text-xs text-stone-400">177 Reseñas en Google</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-stone-900/60 p-3 rounded-xl border border-stone-800/60 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-stone-100">100% Garantía</div>
                <div className="text-xs text-stone-400">Trato Personalizado</div>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center gap-3 bg-stone-900/60 p-3 rounded-xl border border-stone-800/60 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                <Scissors className="w-5 h-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-stone-100">Atención Directa</div>
                <div className="text-xs text-stone-400">Reserva Online</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

