import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Scissors, User, MessageCircle, CheckCircle2, Sparkles, AlertCircle, Send, ArrowRight } from 'lucide-react';
import { SERVICES_DATA, SHOP_INFO } from '../data/barbershopData';
import { openWhatsAppBooking, WHATSAPP_NUMBER } from '../utils/whatsapp';

interface BookingSectionProps {
  selectedServiceId?: string;
}

// Format local date YYYY-MM-DD
const getLocalDateString = (offsetDays = 0) => {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const BookingSection: React.FC<BookingSectionProps> = ({ selectedServiceId }) => {
  // Real-time ticker for live time comparison
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 30000); // refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const getTodayFormatted = () => getLocalDateString(0);
  const getTomorrowFormatted = () => getLocalDateString(1);
  const getDayAfterTomorrowFormatted = () => getLocalDateString(2);

  // Form states
  const [selectedDate, setSelectedDate] = useState<string>(getTodayFormatted());
  const [selectedTime, setSelectedTime] = useState<string>('11:00');
  const [selectedService, setSelectedService] = useState<string>(
    selectedServiceId ? selectedServiceId : SERVICES_DATA[0].id
  );
  const [clientName, setClientName] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSent, setIsSent] = useState<boolean>(false);

  // Update selected service if prop changes
  useEffect(() => {
    if (selectedServiceId) {
      setSelectedService(selectedServiceId);
    }
  }, [selectedServiceId]);

  // 30-minute interval time slots from 09:30 to 21:00
  const availableTimeSlots = [
    '09:30',
    '10:00', '10:30',
    '11:00', '11:30',
    '12:00', '12:30',
    '13:00', '13:30',
    '14:00', '14:30',
    '15:00', '15:30',
    '16:00', '16:30',
    '17:00', '17:30',
    '18:00', '18:30',
    '19:00', '19:30',
    '20:00', '20:30'
  ];

  // Helper to verify if a given time slot on a date is in the past
  const isSlotInPast = (slot: string, dateStr: string): boolean => {
    const todayStr = getTodayFormatted();

    if (dateStr < todayStr) return true;
    if (dateStr > todayStr) return false;

    // Same day: compare hour and minute
    const currentHour = now.getHours();
    const currentMin = now.getMinutes();

    const [slotHour, slotMin] = slot.split(':').map(Number);

    if (slotHour < currentHour) return true;
    if (slotHour === currentHour && slotMin <= currentMin) return true;

    return false;
  };

  // Automatically select the first available future slot when date changes or time moves forward
  useEffect(() => {
    // If selected date is in the past, reset to today
    if (selectedDate < getTodayFormatted()) {
      setSelectedDate(getTodayFormatted());
      return;
    }

    if (isSlotInPast(selectedTime, selectedDate)) {
      const firstValid = availableTimeSlots.find((slot) => !isSlotInPast(slot, selectedDate));
      if (firstValid) {
        setSelectedTime(firstValid);
      }
    }
  }, [selectedDate, now]);

  const hasAnyAvailableSlotsToday = availableTimeSlots.some((s) => !isSlotInPast(s, selectedDate));

  const currentServiceObj = SERVICES_DATA.find((s) => s.id === selectedService) || SERVICES_DATA[0];

  // Helper to format Spanish date nicely
  const formatSpanishDate = (dateStr: string) => {
    if (!dateStr) return 'Día por confirmar';
    if (dateStr === getTodayFormatted()) return 'Hoy';
    if (dateStr === getTomorrowFormatted()) return 'Mañana';
    if (dateStr === getDayAfterTomorrowFormatted()) return 'Pasado Mañana';

    try {
      const parts = dateStr.split('-');
      if (parts.length === 3) {
        const d = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
        return d.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' });
      }
    } catch {
      // fallback
    }
    return dateStr;
  };

  const handleSendBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);

    const formattedDateText = formatSpanishDate(selectedDate);

    openWhatsAppBooking({
      date: `${formattedDateText} (${selectedDate})`,
      time: selectedTime,
      serviceName: currentServiceObj.name,
      clientName: clientName.trim() ? clientName : undefined,
      notes: notes.trim() ? notes : undefined,
    });

    setTimeout(() => {
      setIsSent(false);
    }, 4000);
  };

  return (
    <section id="reservas" className="py-20 bg-stone-950 relative border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">
            <Calendar className="w-4 h-4 text-emerald-400" />
            <span>Reserva Tu Cita Online</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-black text-stone-100 tracking-tight uppercase">
            APARTADO DE RESERVAS
          </h2>

          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Elige el día, la hora y el tipo de corte o servicio que prefieras para tu cita en nuestra barbería.
          </p>
        </div>

        {/* Main Booking Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Steps */}
          <form onSubmit={handleSendBooking} className="lg:col-span-7 bg-stone-900/90 p-6 sm:p-8 rounded-3xl border border-stone-800 space-y-8 shadow-2xl">
            
            {/* STEP 1: Elige el Día */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-serif text-lg font-bold">
                <span className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs flex items-center justify-center font-sans font-extrabold">1</span>
                <h3>Elige el Día de la Cita</h3>
              </div>

              {/* Date Shortcut Pills */}
              <div className="grid grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedDate(getTodayFormatted())}
                  className={`py-3 px-3 rounded-xl text-xs font-bold border transition-all flex flex-col items-center gap-0.5 ${
                    selectedDate === getTodayFormatted()
                      ? 'bg-amber-500 text-stone-950 border-amber-500 shadow-md shadow-amber-500/20'
                      : 'bg-stone-950 text-stone-300 border-stone-800 hover:bg-stone-800'
                  }`}
                >
                  <span className="uppercase text-[10px] tracking-wider opacity-80">Hoy</span>
                  <span className="text-sm">Enfocado</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedDate(getTomorrowFormatted())}
                  className={`py-3 px-3 rounded-xl text-xs font-bold border transition-all flex flex-col items-center gap-0.5 ${
                    selectedDate === getTomorrowFormatted()
                      ? 'bg-amber-500 text-stone-950 border-amber-500 shadow-md shadow-amber-500/20'
                      : 'bg-stone-950 text-stone-300 border-stone-800 hover:bg-stone-800'
                  }`}
                >
                  <span className="uppercase text-[10px] tracking-wider opacity-80">Mañana</span>
                  <span className="text-sm">Recomendado</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedDate(getDayAfterTomorrowFormatted())}
                  className={`py-3 px-3 rounded-xl text-xs font-bold border transition-all flex flex-col items-center gap-0.5 ${
                    selectedDate === getDayAfterTomorrowFormatted()
                      ? 'bg-amber-500 text-stone-950 border-amber-500 shadow-md shadow-amber-500/20'
                      : 'bg-stone-950 text-stone-300 border-stone-800 hover:bg-stone-800'
                  }`}
                >
                  <span className="uppercase text-[10px] tracking-wider opacity-80">Pasado Mañana</span>
                  <span className="text-sm">Próximo</span>
                </button>
              </div>

              {/* Custom Date Input */}
              <div className="pt-1">
                <label className="text-xs text-stone-400 block mb-1">O selecciona una fecha específica en el calendario:</label>
                <div className="relative">
                  <input
                    type="date"
                    value={selectedDate}
                    min={getTodayFormatted()}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-stone-950 text-stone-100 px-4 py-3 rounded-xl border border-stone-800 text-sm focus:outline-none focus:border-amber-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* STEP 2: Elige la Hora */}
            <div className="space-y-3 pt-4 border-t border-stone-800/80">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="flex items-center gap-2 text-amber-400 font-serif text-lg font-bold">
                  <span className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs flex items-center justify-center font-sans font-extrabold">2</span>
                  <h3>Selecciona la Hora</h3>
                </div>
                <span className="text-xs text-stone-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  Horario: 09:30 a 21:00 (Intervalos de 30 min)
                </span>
              </div>

              {!hasAnyAvailableSlotsToday && selectedDate === getTodayFormatted() && (
                <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-300 text-xs flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>No quedan horas disponibles para hoy. Selecciona la fecha de mañana.</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedDate(getTomorrowFormatted())}
                    className="px-3 py-1 bg-amber-500 text-stone-950 font-bold rounded-lg text-[11px] hover:bg-amber-400 shrink-0 cursor-pointer"
                  >
                    Reservar Mañana
                  </button>
                </div>
              )}

              {/* Time slots grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                {availableTimeSlots.map((slot) => {
                  const isPast = isSlotInPast(slot, selectedDate);
                  const isSelected = selectedTime === slot && !isPast;

                  return (
                    <button
                      key={slot}
                      type="button"
                      disabled={isPast}
                      onClick={() => !isPast && setSelectedTime(slot)}
                      title={isPast ? 'Hora no disponible (ya ha pasado)' : `Seleccionar ${slot} h`}
                      className={`py-2.5 rounded-xl text-xs font-bold border transition-all ${
                        isPast
                          ? 'bg-stone-900/50 text-stone-600 border-stone-850 cursor-not-allowed opacity-45 line-through'
                          : isSelected
                          ? 'bg-amber-500 text-stone-950 border-amber-500 shadow-md shadow-amber-500/20 scale-105 cursor-pointer'
                          : 'bg-stone-950 text-stone-300 border-stone-800 hover:bg-stone-800 cursor-pointer'
                      }`}
                    >
                      {slot} h
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 3: Selecciona Corte o Servicio */}
            <div className="space-y-3 pt-4 border-t border-stone-800/80">
              <div className="flex items-center gap-2 text-amber-400 font-serif text-lg font-bold">
                <span className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs flex items-center justify-center font-sans font-extrabold">3</span>
                <h3>Corte o Servicio Deseado</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-72 overflow-y-auto pr-1 scrollbar-thin">
                {SERVICES_DATA.map((srv) => {
                  const isSelected = selectedService === srv.id;
                  const priceTag = srv.priceDisplay || `${srv.price} €`;
                  return (
                    <div
                      key={srv.id}
                      onClick={() => setSelectedService(srv.id)}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center gap-3 ${
                        isSelected
                          ? 'bg-amber-500/10 border-amber-500 shadow-md shadow-amber-500/10'
                          : 'bg-stone-950/80 border-stone-800 hover:border-stone-700'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-colors ${
                        isSelected 
                          ? 'bg-amber-500 text-stone-950 border-amber-400' 
                          : 'bg-stone-900 text-amber-400 border-stone-800'
                      }`}>
                        <Scissors className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <h4 className={`text-xs font-bold truncate ${isSelected ? 'text-amber-400' : 'text-stone-200'}`}>
                            {srv.name}
                          </h4>
                          <span className="text-xs font-extrabold text-amber-400 shrink-0">{priceTag}</span>
                        </div>
                      </div>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-amber-500 border-amber-500 text-stone-950' : 'border-stone-700'
                      }`}>
                        {isSelected && <CheckCircle2 className="w-3 h-3" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* STEP 4: Tus Datos (Nombre y Notas) */}
            <div className="space-y-4 pt-4 border-t border-stone-800/80">
              <div className="flex items-center gap-2 text-amber-400 font-serif text-lg font-bold">
                <span className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs flex items-center justify-center font-sans font-extrabold">4</span>
                <h3>Datos Personales & Notas (Opcional)</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-stone-300 block mb-1">
                    Tu Nombre Completo:
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-500 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Ej. Carlos García"
                      className="w-full bg-stone-950 text-stone-100 pl-10 pr-4 py-3 rounded-xl border border-stone-800 text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-stone-300 block mb-1">
                    Notas adicionales / Preferencias:
                  </label>
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Ej. Con degradado en navaja, primera vez..."
                    className="w-full bg-stone-950 text-stone-100 px-4 py-3 rounded-xl border border-stone-800 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>
            </div>

            {/* CTA Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-base flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/20 hover:-translate-y-0.5 transition-all group cursor-pointer"
              >
                <Scissors className="w-5 h-5 text-stone-950 group-hover:rotate-12 transition-transform" />
                <span>Reservar Cita</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center justify-center gap-2 text-xs text-stone-400 mt-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Confirmación directa e inmediata de tu reserva.</span>
              </div>
            </div>

          </form>

          {/* Right Column: Live Message Preview Card */}
          <div className="lg:col-span-5 bg-stone-900/80 p-6 sm:p-8 rounded-3xl border border-stone-800 space-y-6 shadow-2xl sticky top-28">
            <div className="space-y-2 border-b border-stone-800 pb-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Resumen de tu Cita</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-100">
                Detalles de la Reserva
              </h3>
              <p className="text-xs text-stone-400">
                Comprueba la información seleccionada para tu visita:
              </p>
            </div>

            {/* Simulated Reservation Card */}
            <div className="bg-stone-950 p-5 rounded-2xl border border-stone-800 font-sans space-y-3 relative overflow-hidden shadow-inner">
              <div className="flex items-center gap-3 pb-3 border-b border-stone-900">
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs border border-emerald-500/30">
                  <Scissors className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-100">Barber shop samos</h4>
                  <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Barbería Abierta • Sant Martí
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-stone-200 text-xs leading-relaxed space-y-2">
                <p className="font-bold text-emerald-300">
                  Resumen de solicitud de cita:
                </p>
                <div className="space-y-1 text-stone-300 border-l-2 border-emerald-500/50 pl-3 my-2">
                  <p>📅 <strong>Día:</strong> {formatSpanishDate(selectedDate)} ({selectedDate})</p>
                  <p>⏰ <strong>Hora:</strong> {selectedTime} h</p>
                  <p>✂️ <strong>Corte:</strong> {currentServiceObj.name} ({currentServiceObj.priceDisplay || `${currentServiceObj.price} €`})</p>
                  {clientName.trim() && <p>👤 <strong>Nombre:</strong> {clientName}</p>}
                  {notes.trim() && <p>📝 <strong>Notas:</strong> {notes}</p>}
                </div>
              </div>

              {/* Service Details Card */}
              <div className="p-3 bg-stone-900 rounded-xl border border-stone-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-stone-950 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                  <Scissors className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0 text-xs">
                  <span className="font-bold text-stone-100 block truncate">{currentServiceObj.name}</span>
                  <span className="text-amber-400 font-semibold">{currentServiceObj.priceDisplay || `${currentServiceObj.price} €`}</span>
                </div>
              </div>
            </div>

            {/* Quick Benefits */}
            <div className="space-y-2 pt-2 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Confirmación rápida en menos de 5 minutos.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sin pagos por adelantado en la web.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Modificación o cancelación gratis sin compromiso.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
