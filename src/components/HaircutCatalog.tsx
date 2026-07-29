import React from 'react';
import { Scissors, CheckCircle2, Sparkles, HelpCircle } from 'lucide-react';
import { SERVICES_DATA } from '../data/barbershopData';
import { HaircutService } from '../types';
import { openWhatsAppBooking } from '../utils/whatsapp';

interface HaircutCatalogProps {
  onOpenFaceGuide: () => void;
}

export const HaircutCatalog: React.FC<HaircutCatalogProps> = ({
  onOpenFaceGuide,
}) => {
  return (
    <section id="cortes" className="py-16 sm:py-20 bg-stone-900/60 relative border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 mb-2">
              <Scissors className="w-3.5 h-3.5" />
              <span>Servicios & Tarifas</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-100 tracking-tight">
              NUESTROS SERVICIOS
            </h2>
          </div>

          <button
            onClick={onOpenFaceGuide}
            className="self-start sm:self-auto px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-750 border border-stone-700 text-amber-300 font-medium text-xs sm:text-sm flex items-center gap-2 transition-all shadow-sm cursor-pointer"
          >
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>Guía de Visajismo</span>
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <HaircutCardItem key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface HaircutCardItemProps {
  service: HaircutService;
}

const HaircutCardItem: React.FC<HaircutCardItemProps> = ({ service }) => {
  const priceTag = service.priceDisplay || `${service.price} €`;

  return (
    <div className="bg-stone-950 rounded-2xl border border-stone-800/80 hover:border-amber-500/50 p-6 flex flex-col justify-between space-y-4 group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="space-y-3">
        {/* Top Header: Title & Price */}
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-xl font-bold text-stone-100 group-hover:text-amber-400 transition-colors">
                {service.name}
              </h3>
              {service.popular && (
                <span className="bg-amber-500/10 text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-500/20 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  MÁS PEDIDO
                </span>
              )}
            </div>
          </div>

          <div className="bg-stone-900 border border-amber-500/40 text-amber-400 font-extrabold text-lg px-3.5 py-1.5 rounded-xl whitespace-nowrap shadow-md">
            {priceTag}
          </div>
        </div>

        {/* Short Description */}
        <p className="text-stone-300 text-sm leading-relaxed">
          {service.description}
        </p>

        {/* Includes List */}
        <div className="pt-2 border-t border-stone-900 space-y-1.5">
          {service.includes.map((inc, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-stone-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>{inc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={() => openWhatsAppBooking(service.name)}
        className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-500/10 transition-all cursor-pointer mt-2"
      >
        <Scissors className="w-4 h-4 text-stone-950" />
        <span>Pedir Cita ({priceTag})</span>
      </button>
    </div>
  );
};
