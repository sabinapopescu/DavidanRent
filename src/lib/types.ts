export type Money = { amount: number; currency: 'EUR' | 'USD' | 'MDL' };
export type Period = { start: string; end: string }; // ISO datetime
export type AddOn = { id: string; name: string; nameRo: string; nameRu: string; price: Money; charged: 'per_day' | 'per_booking' };
export type Insurance = { id: string; name: string; nameRo: string; nameRu: string; daily: Money; excess: Money };

export type CarSpecs = {
  fuel: 'benzina' | 'diesel' | 'hibrid' | 'electric';
  gearbox: 'manuala' | 'automata' | 'CVT' | 'robotizata';
  body: string;
  seats: number;
  doors: number;
  luggage?: number;
  year: number;
};

export type Car = {
  id: string;
  slug: string;
  title: string;
  make: string;
  model: string;
  year: number;
  photos: { src: string; alt: string }[];
  specs: CarSpecs;
  pricePerDay: Money;
  deposit?: Money;
  minDays?: number;
  blocked: Period[];
  addons?: AddOn[];
  insurances?: Insurance[];
  featured?: boolean;
};

export type Booking = {
  id: string;
  status: 'pending' | 'confirmed' | 'canceled';
  carId: string;
  pickup: string;
  dropoff: string;
  locationPickup: string;
  locationDropoff: string;
  customer: {
    name: string;
    phone: string;
    email: string;
    licenseFront?: string;
    licenseBack?: string;
  };
  selections: {
    addons?: { id: string; qty: number }[];
    insuranceId?: string;
  };
  pricing: {
    base: Money;
    addons: Money;
    insurance: Money;
    fees: Money;
    discount: Money;
    total: Money;
  };
  notes?: string;
  createdAt: string;
};

export type Language = 'ro' | 'ru' | 'en';
