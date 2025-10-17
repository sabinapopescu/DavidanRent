import { Language } from './types';

export const translations = {
  ro: {
    // Navigation
    nav: {
      home: 'Acasă',
      cars: 'Toate Mașinile',
      services: 'Servicii',
      about: 'Despre Noi',
      contact: 'Contact',
    },
    // Hero
    hero: {
      title: 'Închiriază mașina perfectă',
      subtitle: 'Cele mai bune prețuri și servicii în Chișinău',
      searchTitle: 'Caută mașina ta',
      pickupDate: 'Data ridicării',
      dropoffDate: 'Data returnării',
      location: 'Locație',
      search: 'Caută disponibilitatea',
    },
    // Features
    features: {
      support247: 'Suport 24/7',
      support247Desc: 'Mereu disponibili pentru tine',
      freeCancellation: 'Anulare gratuită',
      freeCancellationDesc: 'Anulare până cu 24h înainte',
      bestPrice: 'Cele mai bune prețuri',
      bestPriceDesc: 'Prețuri competitive garantate',
      newCars: 'Mașini noi',
      newCarsDesc: 'Flotă modernă și bine întreținută',
    },
    // Car specs
    specs: {
      seats: 'Locuri',
      doors: 'Uși',
      luggage: 'Bagaje',
      fuel: 'Combustibil',
      gearbox: 'Cutie',
      year: 'An',
    },
    fuel: {
      benzina: 'Benzină',
      diesel: 'Diesel',
      hibrid: 'Hibrid',
      electric: 'Electric',
    },
    gearbox: {
      manuala: 'Manuală',
      automata: 'Automată',
      CVT: 'CVT',
      robotizata: 'Robotizată',
    },
    // Actions
    actions: {
      rentNow: 'Închiriază acum',
      viewDetails: 'Vezi detalii',
      bookNow: 'Rezervă',
      callUs: 'Sună-ne',
      whatsapp: 'WhatsApp',
    },
    // Common
    common: {
      perDay: '/ zi',
      from: 'de la',
      currency: '€',
      featured: 'Recomandate',
    },
  },
  ru: {
    nav: {
      home: 'Главная',
      cars: 'Все Машины',
      services: 'Услуги',
      about: 'О Нас',
      contact: 'Контакты',
    },
    hero: {
      title: 'Арендуйте идеальный автомобиль',
      subtitle: 'Лучшие цены и сервис в Кишиневе',
      searchTitle: 'Найдите свой автомобиль',
      pickupDate: 'Дата получения',
      dropoffDate: 'Дата возврата',
      location: 'Место',
      search: 'Проверить наличие',
    },
    features: {
      support247: 'Поддержка 24/7',
      support247Desc: 'Всегда на связи',
      freeCancellation: 'Бесплатная отмена',
      freeCancellationDesc: 'Отмена за 24 часа',
      bestPrice: 'Лучшие цены',
      bestPriceDesc: 'Гарантированно выгодные цены',
      newCars: 'Новые автомобили',
      newCarsDesc: 'Современный и ухоженный автопарк',
    },
    specs: {
      seats: 'Мест',
      doors: 'Дверей',
      luggage: 'Багаж',
      fuel: 'Топливо',
      gearbox: 'КПП',
      year: 'Год',
    },
    fuel: {
      benzina: 'Бензин',
      diesel: 'Дизель',
      hibrid: 'Гибрид',
      electric: 'Электро',
    },
    gearbox: {
      manuala: 'Механика',
      automata: 'Автомат',
      CVT: 'CVT',
      robotizata: 'Робот',
    },
    actions: {
      rentNow: 'Арендовать',
      viewDetails: 'Подробнее',
      bookNow: 'Забронировать',
      callUs: 'Позвонить',
      whatsapp: 'WhatsApp',
    },
    common: {
      perDay: '/ день',
      from: 'от',
      currency: '€',
      featured: 'Рекомендуем',
    },
  },
  en: {
    nav: {
      home: 'Home',
      cars: 'All Cars',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'Rent the perfect car',
      subtitle: 'Best prices and service in Chisinau',
      searchTitle: 'Find your car',
      pickupDate: 'Pickup Date',
      dropoffDate: 'Drop-off Date',
      location: 'Location',
      search: 'Check Availability',
    },
    features: {
      support247: '24/7 Support',
      support247Desc: 'Always here for you',
      freeCancellation: 'Free Cancellation',
      freeCancellationDesc: 'Cancel up to 24h before',
      bestPrice: 'Best Prices',
      bestPriceDesc: 'Competitive prices guaranteed',
      newCars: 'New Cars',
      newCarsDesc: 'Modern and well-maintained fleet',
    },
    specs: {
      seats: 'Seats',
      doors: 'Doors',
      luggage: 'Luggage',
      fuel: 'Fuel',
      gearbox: 'Transmission',
      year: 'Year',
    },
    fuel: {
      benzina: 'Gasoline',
      diesel: 'Diesel',
      hibrid: 'Hybrid',
      electric: 'Electric',
    },
    gearbox: {
      manuala: 'Manual',
      automata: 'Automatic',
      CVT: 'CVT',
      robotizata: 'Robotic',
    },
    actions: {
      rentNow: 'Rent Now',
      viewDetails: 'View Details',
      bookNow: 'Book Now',
      callUs: 'Call Us',
      whatsapp: 'WhatsApp',
    },
    common: {
      perDay: '/ day',
      from: 'from',
      currency: '€',
      featured: 'Featured',
    },
  },
};

export const useTranslation = (lang: Language = 'ro') => {
  return {
    t: translations[lang],
    lang,
  };
};
