import React, { useState } from 'react';
import { Navbar, PageType } from './components/Navbar';
import { Hero } from './components/Hero';
import { HomeOverview } from './components/HomeOverview';
import { HaircutCatalog } from './components/HaircutCatalog';
import { BookingSection } from './components/BookingSection';
import { FaceShapeGuideModal } from './components/FaceShapeGuideModal';
import { GalleryReviewsContact } from './components/GalleryReviewsContact';
import { Footer } from './components/Footer';
import { Home, ArrowLeft } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<PageType>('inicio');
  const [isFaceGuideOpen, setIsFaceGuideOpen] = useState<boolean>(false);
  const [selectedBookingServiceId, setSelectedBookingServiceId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceId?: string) => {
    if (serviceId) {
      setSelectedBookingServiceId(serviceId);
    }
    setActivePage('reservas');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePageChange = (page: PageType) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950 flex flex-col justify-between">
      <div>
        {/* Sticky Navigation Bar */}
        <Navbar
          activePage={activePage}
          onPageChange={handlePageChange}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Main Content View Container */}
        <main className="pt-20">
          {/* Back to Home Button when on Sub-pages */}
          {activePage !== 'inicio' && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2 flex items-center justify-between border-b border-stone-800/60 mb-4">
              <button
                onClick={() => handlePageChange('inicio')}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 hover:text-amber-400 text-xs font-semibold transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Volver a la Página Principal</span>
              </button>

              <div className="text-xs text-stone-400 uppercase tracking-wider font-bold">
                Sección: <span className="text-amber-400">{activePage}</span>
              </div>
            </div>
          )}

          {/* PAGE 1: INICIO (Página Principal dividida) */}
          {activePage === 'inicio' && (
            <>
              <Hero
                onOpenBooking={() => handleOpenBooking()}
                onOpenFaceGuide={() => setIsFaceGuideOpen(true)}
                onNavigatePage={(page) => handlePageChange(page as PageType)}
              />
              <HomeOverview
                onNavigatePage={handlePageChange}
                onOpenBooking={handleOpenBooking}
                onOpenFaceGuide={() => setIsFaceGuideOpen(true)}
              />
            </>
          )}

          {/* PAGE 2: CORTES & SERVICIOS */}
          {activePage === 'cortes' && (
            <div className="animate-in fade-in duration-300">
              <HaircutCatalog
                onOpenFaceGuide={() => setIsFaceGuideOpen(true)}
              />
            </div>
          )}

          {/* PAGE 3: RESERVAS ONLINE */}
          {activePage === 'reservas' && (
            <div className="animate-in fade-in duration-300">
              <BookingSection selectedServiceId={selectedBookingServiceId} />
            </div>
          )}

          {/* PAGE 4: GALERÍA DE TRABAJOS */}
          {activePage === 'galeria' && (
            <div className="animate-in fade-in duration-300">
              <GalleryReviewsContact activeSection="galeria" />
            </div>
          )}

          {/* PAGE 5: RESEÑAS & OPINIONES */}
          {activePage === 'resenas' && (
            <div className="animate-in fade-in duration-300">
              <GalleryReviewsContact activeSection="resenas" />
            </div>
          )}

          {/* PAGE 6: CONTACTO, MAPA & HORARIOS */}
          {activePage === 'contacto' && (
            <div className="animate-in fade-in duration-300">
              <GalleryReviewsContact activeSection="contacto" />
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <Footer onNavigatePage={handlePageChange} />

      {/* Visagism / Face Shape Guide Modal */}
      <FaceShapeGuideModal
        isOpen={isFaceGuideOpen}
        onClose={() => setIsFaceGuideOpen(false)}
      />
    </div>
  );
}

