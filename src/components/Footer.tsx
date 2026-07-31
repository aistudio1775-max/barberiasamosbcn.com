import React from 'react';
import { Scissors, MapPin, Phone, Facebook, Instagram } from 'lucide-react';
import { SHOP_INFO } from '../data/barbershopData';
import { PageType } from './Navbar';
import { SxmosLogo } from './SxmosLogo';

interface FooterProps {
  onNavigatePage?: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigatePage }) => {
  const handleNav = (page: PageType) => {
    if (onNavigatePage) {
      onNavigatePage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-stone-950 text-stone-400 border-t border-stone-800/80 pt-16 pb-8 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNav('inicio')}>
              <SxmosLogo className="h-10 w-auto" showBackground={true} />
              <span className="font-serif text-lg font-bold tracking-tight text-stone-100">
                BARBER SHOP <span className="text-amber-500 font-sans tracking-wider text-xs uppercase font-extrabold">SAMOS</span>
              </span>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed">
              {SHOP_INFO.slogan}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-stone-100 font-bold text-base tracking-wide">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('inicio')} className="hover:text-amber-400 transition-colors cursor-pointer text-left">Inicio</button>
              </li>
              <li>
                <button onClick={() => handleNav('cortes')} className="hover:text-amber-400 transition-colors cursor-pointer text-left">Catálogo de Cortes & Servicios</button>
              </li>
              <li>
                <button onClick={() => handleNav('reservas')} className="hover:text-amber-400 transition-colors cursor-pointer text-left">Apartado de Reservas</button>
              </li>
              <li>
                <button onClick={() => handleNav('galeria')} className="hover:text-amber-400 transition-colors cursor-pointer text-left">Galería de Trabajos</button>
              </li>
              <li>
                <button onClick={() => handleNav('resenas')} className="hover:text-amber-400 transition-colors cursor-pointer text-left">Opiniones & Reseñas</button>
              </li>
              <li>
                <button onClick={() => handleNav('contacto')} className="hover:text-amber-400 transition-colors cursor-pointer text-left">Contacto & Localización</button>
              </li>
            </ul>
          </div>

          {/* Col 3: Horarios */}
          <div className="space-y-3">
            <h4 className="font-serif text-stone-100 font-bold text-base tracking-wide">
              Horario de Atención
            </h4>
            <ul className="space-y-1.5 text-xs">
              {SHOP_INFO.openingHours.map((item, idx) => (
                <li key={idx} className="flex justify-between border-b border-stone-900 pb-1">
                  <span className="text-stone-400">{item.day}</span>
                  <strong className="text-stone-200">{item.hours}</strong>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contacto */}
          <div className="space-y-3">
            <h4 className="font-serif text-stone-100 font-bold text-base tracking-wide">
              Ubicación
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{SHOP_INFO.address}, {SHOP_INFO.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{SHOP_INFO.phone}</span>
              </div>
              {SHOP_INFO.socials.facebook && (
                <div className="flex items-center gap-2 pt-1">
                  <Facebook className="w-4 h-4 text-blue-400 shrink-0" />
                  <a
                    href={SHOP_INFO.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Facebook oficial
                  </a>
                </div>
              )}
              {SHOP_INFO.socials.instagram && (
                <div className="flex items-center gap-2 pt-0.5">
                  <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                  <a
                    href={SHOP_INFO.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-400 transition-colors"
                  >
                    Instagram (@barber_shop_samos_1)
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>© {new Date().getFullYear()} {SHOP_INFO.name}. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-stone-300 transition-colors cursor-pointer">Política de Privacidad</span>
            <span className="hover:text-stone-300 transition-colors cursor-pointer">Términos de Servicio</span>
            <span className="hover:text-stone-300 transition-colors cursor-pointer">Aviso Legal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
