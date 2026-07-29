export type ServiceCategory = 'todos' | 'degradados' | 'clasicos' | 'barba';

export type FaceShape = 'ovalado' | 'redondo' | 'cuadrado' | 'diamante' | 'alargado';

export interface HaircutService {
  id: string;
  name: string;
  category: ServiceCategory;
  price: number;
  priceDisplay?: string;
  durationMinutes: number;
  description: string;
  image?: string;
  images?: string[];
  popular?: boolean;
  recommendedFaceShapes: FaceShape[];
  includes: string[];
}

export interface Barber {
  id: string;
  name: string;
  role: string;
  experienceYears: number;
  avatar: string;
  bio: string;
  specialties: string[];
  rating: number;
  reviewCount: number;
  availableDays: string[]; // e.g. ['Lunes', 'Martes', ...]
}

export interface TimeSlot {
  time: string; // e.g., "10:00"
  available: boolean;
}

export interface BookingRequest {
  id: string;
  serviceIds: string[];
  barberId: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  notes?: string;
  totalPrice: number;
  totalDuration: number;
  status: 'confirmada' | 'completada' | 'cancelada';
  createdAt: string;
}

export interface Review {
  id: string;
  author: string;
  barberName?: string;
  rating: number;
  date: string;
  comment: string;
  haircutName?: string;
  verified: boolean;
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
