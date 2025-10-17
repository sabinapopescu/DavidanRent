import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Users, Luggage, Fuel, Settings, Car as CarIcon, Phone, MessageCircle } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAppStore } from '@/store/appStore';
import { useTranslation } from '@/lib/i18n';
import carsData from '@/data/cars.json';
import type { Car } from '@/lib/types';

// Import car images
import daciaLogan from '@/assets/cars/dacia-logan-2022.jpg';
import vwPassat from '@/assets/cars/vw-passat-2020.jpg';
import toyotaCamry from '@/assets/cars/toyota-camry-2021.jpg';
import bmwX5 from '@/assets/cars/bmw-x5-2022.jpg';
import mercedesCClass from '@/assets/cars/mercedes-c-class-2021.jpg';
import renaultClio from '@/assets/cars/renault-clio-2023.jpg';

const carImages: Record<string, string> = {
  'dacia-logan-2022': daciaLogan,
  'vw-passat-2020': vwPassat,
  'toyota-camry-2021': toyotaCamry,
  'bmw-x5-2022': bmwX5,
  'mercedes-c-class-2021': mercedesCClass,
  'renault-clio-2023': renaultClio,
};

const CarDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { language } = useAppStore();
  const { t } = useTranslation(language);
  const [selectedImage, setSelectedImage] = useState(0);

  const car = carsData.find((c) => c.slug === slug) as Car | undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!car) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">
            {language === 'ro' && 'Mașina nu a fost găsită'}
            {language === 'ru' && 'Автомобиль не найден'}
            {language === 'en' && 'Car Not Found'}
          </h1>
          <Button onClick={() => navigate('/cars')} variant="default">
            {language === 'ro' && 'Înapoi la mașini'}
            {language === 'ru' && 'Назад к машинам'}
            {language === 'en' && 'Back to Cars'}
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const imageSrc = carImages[car.photos[selectedImage]?.src] || carImages['dacia-logan-2022'];
  
  const getSpecLabel = (key: string) => {
    const labels = {
      gearbox: { ro: 'Cutie de viteze', ru: 'Коробка передач', en: 'Gearbox' },
      fuel: { ro: 'Combustibil', ru: 'Топливо', en: 'Fuel' },
      seats: { ro: 'Locuri', ru: 'Места', en: 'Seats' },
      doors: { ro: 'Uși', ru: 'Двери', en: 'Doors' },
      luggage: { ro: 'Bagaje', ru: 'Багаж', en: 'Luggage' },
      year: { ro: 'An', ru: 'Год', en: 'Year' },
    };
    return labels[key as keyof typeof labels]?.[language] || key;
  };
  
  const specs = [
    { icon: Settings, label: getSpecLabel('gearbox'), value: car.specs.gearbox },
    { icon: Fuel, label: getSpecLabel('fuel'), value: car.specs.fuel },
    { icon: Users, label: getSpecLabel('seats'), value: car.specs.seats },
    { icon: CarIcon, label: getSpecLabel('doors'), value: car.specs.doors },
    { icon: Luggage, label: getSpecLabel('luggage'), value: car.specs.luggage || 0 },
    { icon: Calendar, label: getSpecLabel('year'), value: car.year },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-24">
        {/* Back button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/cars')}
          className="mb-6 -ml-2"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {language === 'ro' && 'Înapoi la mașini'}
          {language === 'ru' && 'Назад к машинам'}
          {language === 'en' && 'Back to Cars'}
        </Button>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                <img
                  src={imageSrc}
                  alt={car.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {car.photos.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {car.photos.map((photo, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`aspect-[4/3] rounded-md overflow-hidden border-2 transition-all ${
                        selectedImage === idx ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <img
                        src={carImages[photo.src] || imageSrc}
                        alt={photo.alt}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">{car.title}</h1>
              <p className="text-muted-foreground text-lg">
                {car.make} {car.model} · {car.year}
              </p>
            </div>

            {/* Price */}
            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-primary">
                  {car.pricePerDay.currency === 'EUR' ? '€' : '$'}
                  {car.pricePerDay.amount}
                </span>
                <span className="text-muted-foreground">
                  / {language === 'ro' ? 'zi' : language === 'ru' ? 'день' : 'day'}
                </span>
              </div>
              {car.deposit && (
                <p className="text-sm text-muted-foreground mt-2">
                  {language === 'ro' ? 'Depozit' : language === 'ru' ? 'Залог' : 'Deposit'}: {car.deposit.currency === 'EUR' ? '€' : '$'}
                  {car.deposit.amount}
                </p>
              )}
              {car.minDays && car.minDays > 1 && (
                <Badge variant="secondary" className="mt-3">
                  {language === 'ro' ? 'Zile minime' : language === 'ru' ? 'Минимум дней' : 'Min days'}: {car.minDays}
                </Badge>
              )}
            </Card>

            {/* Specifications */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                {language === 'ro' ? 'Specificații' : language === 'ru' ? 'Характеристики' : 'Specifications'}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {specs.map((spec, idx) => (
                  <Card key={idx} className="p-4 flex items-center gap-3">
                    <spec.icon className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">{spec.label}</p>
                      <p className="font-medium">{spec.value}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-4">
              <Button size="lg" className="w-full text-lg h-14" asChild>
                <Link to="/rent">
                  <Calendar className="mr-2 h-5 w-5" />
                  {language === 'ro' ? 'Rezervă acum' : language === 'ru' ? 'Забронировать' : 'Book Now'}
                </Link>
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+37379818666">
                    <Phone className="mr-2 h-4 w-4" />
                    {language === 'ro' ? 'Sună' : language === 'ru' ? 'Позвонить' : 'Call'}
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a
                    href="https://wa.me/37379818666"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Similar Cars */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold mb-8">
            {language === 'ro' ? 'Mașini similare' : language === 'ru' ? 'Похожие автомобили' : 'Similar Cars'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {carsData
              .filter((c) => c.id !== car.id && c.specs.body === car.specs.body)
              .slice(0, 3)
              .map((similarCar) => (
                <Card key={similarCar.id} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow" onClick={() => navigate(`/cars/${similarCar.slug}`)}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={carImages[similarCar.photos[0]?.src] || carImages['dacia-logan-2022']}
                      alt={similarCar.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{similarCar.title}</h3>
                    <p className="text-2xl font-bold text-primary">
                      {similarCar.pricePerDay.currency === 'EUR' ? '€' : '$'}
                      {similarCar.pricePerDay.amount}
                      <span className="text-sm font-normal text-muted-foreground">
                        {' '}
                        / {language === 'ro' ? 'zi' : language === 'ru' ? 'день' : 'day'}
                      </span>
                    </p>
                  </div>
                </Card>
              ))}
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default CarDetails;
