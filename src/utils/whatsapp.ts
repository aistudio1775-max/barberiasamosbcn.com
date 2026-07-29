export const WHATSAPP_NUMBER = '34634663021';

export interface BookingDetails {
  date?: string;
  time?: string;
  serviceName?: string;
  clientName?: string;
  notes?: string;
}

export const openWhatsAppBooking = (detailsOrService?: string | BookingDetails) => {
  let text = '';
  if (typeof detailsOrService === 'string') {
    text = `Hola, me gustaría pedir cita para el servicio: ${detailsOrService} en Barber shop samos.`;
  } else if (detailsOrService && typeof detailsOrService === 'object') {
    const { date, time, serviceName, clientName, notes } = detailsOrService;
    text = `Hola! Me gustaría reservar una cita en Barber shop samos:\n\n` +
      `📅 Día: ${date || 'Por acordar'}\n` +
      `⏰ Hora: ${time || 'Por acordar'}\n` +
      `✂️ Corte / Servicio: ${serviceName || 'Corte de pelo'}\n` +
      (clientName ? `👤 Nombre: ${clientName}\n` : '') +
      (notes ? `📝 Notas: ${notes}\n` : '');
  } else {
    text = `Hola, me gustaría pedir cita en Barber shop samos.`;
  }

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};

