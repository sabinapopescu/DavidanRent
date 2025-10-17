import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useAppStore } from '@/store/appStore';
import { Award, Users, Car, Heart } from 'lucide-react';

const About = () => {
  const { language } = useAppStore();

  const stats = [
    {
      icon: Car,
      value: '50+',
      labelRo: 'Mașini în flotă',
      labelRu: 'Автомобилей в парке',
      labelEn: 'Cars in fleet',
    },
    {
      icon: Users,
      value: '2000+',
      labelRo: 'Clienți mulțumiți',
      labelRu: 'Довольных клиентов',
      labelEn: 'Happy customers',
    },
    {
      icon: Award,
      value: '8+',
      labelRo: 'Ani de experiență',
      labelRu: 'Лет опыта',
      labelEn: 'Years of experience',
    },
    {
      icon: Heart,
      value: '24/7',
      labelRo: 'Suport disponibil',
      labelRu: 'Доступная поддержка',
      labelEn: 'Available support',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-secondary/30 py-20 border-b border-border/50">
        <div className="container-custom text-center">
          <h1 className="mb-4">
            {language === 'ro' && 'Despre DaviDan RentCar'}
            {language === 'ru' && 'О DaviDan RentCar'}
            {language === 'en' && 'About DaviDan RentCar'}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {language === 'ro' && 'Partenerul tău de încredere pentru închirierea de mașini în Chișinău'}
            {language === 'ru' && 'Ваш надежный партнер по аренде автомобилей в Кишиневе'}
            {language === 'en' && 'Your trusted partner for car rental in Chisinau'}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              {language === 'ro' && 'Povestea Noastră'}
              {language === 'ru' && 'Наша История'}
              {language === 'en' && 'Our Story'}
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                {language === 'ro' &&
                  'DaviDan RentCar a fost fondată cu o misiune simplă: să oferim servicii de închiriere auto de cea mai înaltă calitate în Moldova. De-a lungul anilor, ne-am construit o reputație solidă bazată pe încredere, transparență și excelență în servicii.'}
                {language === 'ru' &&
                  'DaviDan RentCar была основана с простой миссией: предоставлять услуги по аренде автомобилей высочайшего качества в Молдове. За годы работы мы построили прочную репутацию, основанную на доверии, прозрачности и превосходном обслуживании.'}
                {language === 'en' &&
                  'DaviDan RentCar was founded with a simple mission: to provide the highest quality car rental services in Moldova. Over the years, we have built a solid reputation based on trust, transparency and service excellence.'}
              </p>
              <p>
                {language === 'ro' &&
                  'Flota noastră modernă include mașini pentru orice nevoie - de la modele economice pentru călătorii urbane până la vehicule premium pentru evenimente speciale. Toate mașinile noastre sunt atent întreținute și verificate pentru a asigura siguranța și confortul tău.'}
                {language === 'ru' &&
                  'Наш современный автопарк включает автомобили на любой вкус - от экономичных моделей для городских поездок до премиальных автомобилей для особых событий. Все наши автомобили тщательно обслуживаются и проверяются для обеспечения вашей безопасности и комфорта.'}
                {language === 'en' &&
                  'Our modern fleet includes cars for every need - from economical models for urban travel to premium vehicles for special events. All our cars are carefully maintained and checked to ensure your safety and comfort.'}
              </p>
              <p>
                {language === 'ro' &&
                  'Suntem mândri de echipa noastră profesionistă care lucrează 24/7 pentru a te ajuta cu orice întrebare sau necesitate. Satisfacția clientului este prioritatea noastră numărul unu.'}
                {language === 'ru' &&
                  'Мы гордимся нашей профессиональной командой, которая работает 24/7, чтобы помочь вам с любыми вопросами или потребностями. Удовлетворенность клиентов - наш приоритет номер один.'}
                {language === 'en' &&
                  'We are proud of our professional team that works 24/7 to help you with any questions or needs. Customer satisfaction is our number one priority.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-secondary/30">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                  <p className="text-muted-foreground">
                    {language === 'ro' && stat.labelRo}
                    {language === 'ru' && stat.labelRu}
                    {language === 'en' && stat.labelEn}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {language === 'ro' && 'Valorile Noastre'}
            {language === 'ru' && 'Наши Ценности'}
            {language === 'en' && 'Our Values'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-premium p-8 text-center">
              <h3 className="text-xl font-bold mb-4">
                {language === 'ro' && 'Transparență'}
                {language === 'ru' && 'Прозрачность'}
                {language === 'en' && 'Transparency'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'ro' && 'Prețuri clare, fără costuri ascunse. Ceea ce vezi este ceea ce plătești.'}
                {language === 'ru' && 'Четкие цены без скрытых расходов. Что видите, то и платите.'}
                {language === 'en' && 'Clear prices with no hidden costs. What you see is what you pay.'}
              </p>
            </div>
            <div className="card-premium p-8 text-center">
              <h3 className="text-xl font-bold mb-4">
                {language === 'ro' && 'Calitate'}
                {language === 'ru' && 'Качество'}
                {language === 'en' && 'Quality'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'ro' && 'Mașini moderne, bine întreținute și verificate pentru siguranța ta.'}
                {language === 'ru' && 'Современные автомобили, хорошо обслуживаемые и проверенные для вашей безопасности.'}
                {language === 'en' && 'Modern cars, well maintained and checked for your safety.'}
              </p>
            </div>
            <div className="card-premium p-8 text-center">
              <h3 className="text-xl font-bold mb-4">
                {language === 'ro' && 'Disponibilitate'}
                {language === 'ru' && 'Доступность'}
                {language === 'en' && 'Availability'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'ro' && 'Suport 24/7 pentru a te ajuta oricând ai nevoie.'}
                {language === 'ru' && 'Поддержка 24/7, чтобы помочь вам в любое время.'}
                {language === 'en' && '24/7 support to help you whenever you need.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
