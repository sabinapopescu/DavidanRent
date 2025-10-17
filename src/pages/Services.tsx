import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useAppStore } from '@/store/appStore';
import { Plane, MapPin, Clock, Shield, Users, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const { language } = useAppStore();

  const services = [
    {
      icon: Plane,
      titleRo: 'Livrare la Aeroport',
      titleRu: 'Доставка в аэропорт',
      titleEn: 'Airport Delivery',
      descRo: 'Preluăm și returnăm mașina direct la aeroport pentru confortul tău',
      descRu: 'Встречаем и доставляем автомобиль прямо в аэропорт для вашего комфорта',
      descEn: 'We pick up and deliver the car directly to the airport for your convenience',
    },
    {
      icon: MapPin,
      titleRo: 'Livrare la Adresă',
      titleRu: 'Доставка по адресу',
      titleEn: 'Address Delivery',
      descRo: 'Livrăm mașina la orice adresă din Chișinău și împrejurimi',
      descRu: 'Доставляем автомобиль по любому адресу в Кишиневе и окрестностях',
      descEn: 'We deliver the car to any address in Chisinau and surroundings',
    },
    {
      icon: Clock,
      titleRo: 'Închiriere pe Termen Lung',
      titleRu: 'Долгосрочная аренда',
      titleEn: 'Long-term Rental',
      descRo: 'Tarife speciale pentru închirieri de peste 7, 14 sau 30 de zile',
      descRu: 'Специальные тарифы на аренду от 7, 14 или 30 дней',
      descEn: 'Special rates for rentals over 7, 14 or 30 days',
    },
    {
      icon: Shield,
      titleRo: 'Asigurare Completă',
      titleRu: 'Полное страхование',
      titleEn: 'Full Insurance',
      descRo: 'Opțiuni de asigurare flexibile pentru siguranța ta maximă',
      descRu: 'Гибкие варианты страхования для вашей максимальной безопасности',
      descEn: 'Flexible insurance options for your maximum safety',
    },
    {
      icon: Users,
      titleRo: 'Șofer Adițional',
      titleRu: 'Дополнительный водитель',
      titleEn: 'Additional Driver',
      descRo: 'Adaugă șoferi adițonali pentru mai multă flexibilitate',
      descRu: 'Добавьте дополнительных водителей для большей гибкости',
      descEn: 'Add additional drivers for more flexibility',
    },
    {
      icon: Headphones,
      titleRo: 'Suport 24/7',
      titleRu: 'Поддержка 24/7',
      titleEn: '24/7 Support',
      descRo: 'Echipa noastră este disponibilă non-stop pentru asistență',
      descRu: 'Наша команда доступна круглосуточно для помощи',
      descEn: 'Our team is available 24/7 for assistance',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-secondary/30 py-20 border-b border-border/50">
        <div className="container-custom text-center">
          <h1 className="mb-4">
            {language === 'ro' && 'Serviciile Noastre'}
            {language === 'ru' && 'Наши Услуги'}
            {language === 'en' && 'Our Services'}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {language === 'ro' && 'Oferim o gamă completă de servicii pentru a face experiența ta de închiriere cât mai convenabilă'}
            {language === 'ru' && 'Мы предлагаем полный спектр услуг, чтобы сделать вашу аренду максимально удобной'}
            {language === 'en' && 'We offer a full range of services to make your rental experience as convenient as possible'}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="card-premium p-8 hover-lift text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">
                    {language === 'ro' && service.titleRo}
                    {language === 'ru' && service.titleRu}
                    {language === 'en' && service.titleEn}
                  </h3>
                  <p className="text-muted-foreground">
                    {language === 'ro' && service.descRo}
                    {language === 'ru' && service.descRu}
                    {language === 'en' && service.descEn}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/5 border-y border-border/50">
        <div className="container-custom text-center">
          <h2 className="mb-6">
            {language === 'ro' && 'Ai nevoie de un serviciu personalizat?'}
            {language === 'ru' && 'Нужна персональная услуга?'}
            {language === 'en' && 'Need a custom service?'}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            {language === 'ro' && 'Contactează-ne și vom găsi soluția perfectă pentru nevoile tale'}
            {language === 'ru' && 'Свяжитесь с нами, и мы найдем идеальное решение для ваших нужд'}
            {language === 'en' && 'Contact us and we will find the perfect solution for your needs'}
          </p>
          <Button size="lg" className="btn-hero" asChild>
            <a href="https://wa.me/37379818666" target="_blank" rel="noopener noreferrer">
              {language === 'ro' && 'Contactează-ne pe WhatsApp'}
              {language === 'ru' && 'Свяжитесь с нами в WhatsApp'}
              {language === 'en' && 'Contact us on WhatsApp'}
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
