import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Home } from 'lucide-react';
import { SHOP_INFO } from '../data/barbershopData';
import { SxmosLogo } from './SxmosLogo';

export type PageType = 'inicio' | 'cortes' | 'reservas' | 'galeria' | 'resenas' | 'contacto';

interface NavbarProps {
  onOpenBooking: () => void;
  activePage: PageType;
  onPageChange: (page: PageType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, activePage, onPageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; id: PageType }[] = [
    { name: 'Inicio', id: 'inicio' },
    { name: 'Cortes & Servicios', id: 'cortes' },
    { name: 'Pedir Cita', id: 'reservas' },
    { name: 'Galería', id: 'galeria' },
    { name: 'Reseñas', id: 'resenas' },
    { name: 'Contacto', id: 'contacto' },
  ];

  const handleNavClick = (pageId: PageType) => {
    onPageChange(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-stone-950/98 backdrop-blur-md border-b border-amber-900/30 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-stone-950/98 via-stone-950/80 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with exact SXMOS Sign */}
        <button
          onClick={() => handleNavClick('inicio')}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <SxmosLogo className="h-10 sm:h-12 w-auto" showBackground={true} />
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-stone-100 flex items-center gap-1.5">
              BARBER SHOP <span className="text-amber-500 font-sans tracking-wider text-xs sm:text-sm font-extrabold uppercase">SAMOS</span>
            </span>
            <span className="text-[10px] text-stone-400 tracking-wider uppercase -mt-1 hidden sm:block">
              Sant Martí, Barcelona • Indústria 284
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-3 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer text-xs lg:text-sm ${
                  isActive
                    ? 'bg-amber-500/15 text-amber-300 font-bold border border-amber-500/40 shadow-sm'
                    : 'text-stone-300 hover:text-amber-400 hover:bg-stone-900/60 border border-transparent'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-stone-900 border border-stone-800 text-stone-200 hover:text-amber-400 transition-colors cursor-pointer"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-950/98 border-b border-stone-800 px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors text-left flex items-center justify-between ${
                    isActive
                      ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40'
                      : 'text-stone-200 hover:text-amber-400 hover:bg-stone-900/60'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-amber-400" />}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-stone-800 flex items-center justify-center gap-2 text-xs text-stone-400">
            <Phone className="w-3.5 h-3.5 text-amber-500" />
            <span>{SHOP_INFO.phone}</span>
          </div>
        </div>
      )}
    </header>
  );
};

