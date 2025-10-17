import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, MapPin, Search, Shield, Clock, Star, Phone } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FeaturedCarousel } from '@/components/FeaturedCarousel';
import { BenefitsRail } from '@/components/BenefitsRail';
import { ScrollStory } from '@/components/ScrollStory';
import { AnimatedSteps } from '@/components/AnimatedSteps';
import { TestimonialCards } from '@/components/TestimonialCards';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAppStore } from '@/store/appStore';
import { useTranslation } from '@/lib/i18n';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { fadeUp } from '@/lib/animations';
import carsData from '@/data/cars.json';
import { Car } from '@/lib/types';
import heroImage from '@/assets/hero-bg.jpg';

const Home = () => {
  const { language } = useAppStore();
  const { t } = useTranslation(language);
  const [pickupDate, setPickupDate] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const featuredCars = (carsData as Car[]).filter((car) => car.featured);

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.98]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const benefits = [
    { icon: Clock, title: t.features.support247, description: t.features.support247Desc },
    { icon: Shield, title: t.features.freeCancellation, description: t.features.freeCancellationDesc },
    { icon: Star, title: t.features.bestPrice, description: t.features.bestPriceDesc },
    { icon: Phone, title: t.features.newCars, description: t.features.newCarsDesc },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section - Full height with car showcase */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={prefersReducedMotion ? {} : { opacity: heroOpacity, scale: heroScale }}
      >
        {/* Dark background with hero image */}
        <div className="absolute inset-0 bg-background z-0">
          <img 
            src={heroImage} 
            alt="Luxury car showroom" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        
        {/* Animated red glow accent - hidden on mobile */}
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none hidden md:block"
          animate={prefersReducedMotion ? {} : {
            background: [
              'radial-gradient(ellipse 800px 400px at 50% 50%, hsl(356 85% 51% / 0.15), transparent)',
              'radial-gradient(ellipse 1000px 500px at 50% 50%, hsl(356 85% 51% / 0.2), transparent)',
              'radial-gradient(ellipse 800px 400px at 50% 50%, hsl(356 85% 51% / 0.15), transparent)',
            ],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="container-custom relative z-10 py-32">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <motion.div variants={fadeUp} custom={0} className="mb-8">
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-semibold mb-6">
                {language === 'ro' && 'Închiriere auto premium'}
                {language === 'ru' && 'Премиум прокат автомобилей'}
                {language === 'en' && 'Premium car rental'}
              </span>
              <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl">
                {t.hero.title}
              </h1>
            </motion.div>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              variants={fadeUp}
              custom={1}
            >
              {t.hero.subtitle}
            </motion.p>
          </motion.div>

          {/* Search Box - More prominent */}
          <motion.div 
            className="max-w-6xl mx-auto card-premium p-8 md:p-10 backdrop-blur-sm bg-card/95"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8">{t.hero.searchTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <motion.div
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label className="block text-sm font-medium mb-2 text-muted-foreground">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  {t.hero.pickupDate}
                </label>
                <Input
                  type="datetime-local"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full h-12"
                />
              </motion.div>
              <motion.div
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label className="block text-sm font-medium mb-2 text-muted-foreground">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  {t.hero.dropoffDate}
                </label>
                <Input
                  type="datetime-local"
                  value={dropoffDate}
                  onChange={(e) => setDropoffDate(e.target.value)}
                  className="w-full h-12"
                />
              </motion.div>
              <motion.div
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label className="block text-sm font-medium mb-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  {t.hero.location}
                </label>
                <Input placeholder={language === 'ro' ? 'Chișinău' : language === 'ru' ? 'Кишинев' : 'Chisinau'} className="w-full h-12" />
              </motion.div>
            </div>
            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            >
              <Button size="lg" className="w-full btn-hero h-14 text-lg" asChild>
                <Link to="/cars">
                  <Search className="w-5 h-5 mr-2" />
                  {t.hero.search}
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container-custom">
          <BenefitsRail benefits={benefits} />
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.4 }}
          >
            <h2 className="mb-4">{t.common.featured}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'ro' && 'Descoperă cele mai populare mașini din flota noastră'}
              {language === 'ru' && 'Откройте для себя самые популярные автомобили нашего автопарка'}
              {language === 'en' && 'Discover the most popular cars from our fleet'}
            </p>
          </motion.div>
          
          <FeaturedCarousel cars={featuredCars} />
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button size="lg" variant="outline" asChild className="hover-lift">
              <Link to="/cars">
                {language === 'ro' && 'Vezi toate mașinile'}
                {language === 'ru' && 'Посмотреть все автомобили'}
                {language === 'en' && 'View All Cars'}
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-secondary/30">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">
              {language === 'ro' && 'Cum funcționează?'}
              {language === 'ru' && 'Как это работает?'}
              {language === 'en' && 'How It Works?'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'ro' && 'Închirierea unei mașini nu a fost niciodată atât de simplă'}
              {language === 'ru' && 'Аренда автомобиля еще никогда не была такой простой'}
              {language === 'en' && 'Renting a car has never been this simple'}
            </p>
          </motion.div>
          
          <AnimatedSteps />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container-custom">
          <ScrollStory
            title={language === 'ro' ? 'De ce Davidan RentCar?' : language === 'ru' ? 'Почему Davidan RentCar?' : 'Why Davidan RentCar?'}
            description={
              language === 'ro' 
                ? 'Cu peste 10 ani de experiență în industria de rent-a-car, oferim servicii de încredere și mașini moderne pentru orice nevoie.'
                : language === 'ru'
                ? 'Имея более 10 лет опыта в индустрии проката автомобилей, мы предлагаем надежные услуги и современные автомобили для любых нужд.'
                : 'With over 10 years of experience in the car rental industry, we provide trusted services and modern cars for any need.'
            }
            image={heroImage}
            points={
              language === 'ro'
                ? [
                    'Flota constantă actualizată cu cele mai noi modele',
                    'Prețuri transparente fără costuri ascunse',
                    'Asistență 24/7 pentru orice situație',
                    'Livrare gratuită în Chișinău',
                  ]
                : language === 'ru'
                ? [
                    'Постоянно обновляемый автопарк с новейшими моделями',
                    'Прозрачные цены без скрытых расходов',
                    'Поддержка 24/7 в любой ситуации',
                    'Бесплатная доставка в Кишиневе',
                  ]
                : [
                    'Constantly updated fleet with the newest models',
                    'Transparent prices with no hidden costs',
                    '24/7 assistance for any situation',
                    'Free delivery in Chișinău',
                  ]
            }
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary/30">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">
              {language === 'ro' && 'Ce spun clienții noștri'}
              {language === 'ru' && 'Что говорят наши клиенты'}
              {language === 'en' && 'What Our Customers Say'}
            </h2>
          </motion.div>
          
          <TestimonialCards />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5 border-y border-border/50">
        <div className="container-custom text-center">
          <motion.h2 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {language === 'ro' && 'Gata să pornești la drum?'}
            {language === 'ru' && 'Готовы отправиться в путь?'}
            {language === 'en' && 'Ready to hit the road?'}
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {language === 'ro' && 'Contactează-ne acum și rezervă mașina perfectă pentru următoarea ta aventură'}
            {language === 'ru' && 'Свяжитесь с нами сейчас и забронируйте идеальный автомобиль для вашего следующего приключения'}
            {language === 'en' && 'Contact us now and book the perfect car for your next adventure'}
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.div whileHover={prefersReducedMotion ? {} : { scale: 1.05 }} whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}>
              <Button size="lg" className="btn-hero" asChild>
                <a href="https://wa.me/37379818666" target="_blank" rel="noopener noreferrer">
                  {t.actions.whatsapp}
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={prefersReducedMotion ? {} : { scale: 1.05 }} whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+37379818666">
                  <Phone className="w-5 h-5 mr-2" />
                  {t.actions.callUs}
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
