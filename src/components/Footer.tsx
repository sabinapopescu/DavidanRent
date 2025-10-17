import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Send } from 'lucide-react';
import { useAppStore } from '@/store/appStore';
import { useTranslation } from '@/lib/i18n';

export const Footer = () => {
  const { language } = useAppStore();
  const { t } = useTranslation(language);

  return (
    <footer className="bg-secondary border-t border-border/50 mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="text-2xl font-bold">
                <span className="text-foreground">Davi</span>
                <span className="text-primary">Dan</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              {language === 'ro' && 'Servicii premium de închiriere auto în Chișinău. Prețuri competitive și servicii de încredere.'}
              {language === 'ru' && 'Премиум услуги аренды автомобилей в Кишиневе. Конкурентные цены и надежный сервис.'}
              {language === 'en' && 'Premium car rental services in Chisinau. Competitive prices and trusted service.'}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/davidan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              {language === 'ro' && 'Link-uri Rapide'}
              {language === 'ru' && 'Быстрые Ссылки'}
              {language === 'en' && 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/cars" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t.nav.cars}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              {language === 'ro' && 'Servicii'}
              {language === 'ru' && 'Услуги'}
              {language === 'en' && 'Services'}
            </h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">
                {language === 'ro' && 'Livrare la aeroport'}
                {language === 'ru' && 'Доставка в аэропорт'}
                {language === 'en' && 'Airport Delivery'}
              </li>
              <li className="text-muted-foreground text-sm">
                {language === 'ro' && 'Închiriere pe termen lung'}
                {language === 'ru' && 'Долгосрочная аренда'}
                {language === 'en' && 'Long-term Rental'}
              </li>
              <li className="text-muted-foreground text-sm">
                {language === 'ro' && 'Suport 24/7'}
                {language === 'ru' && 'Поддержка 24/7'}
                {language === 'en' && '24/7 Support'}
              </li>
              <li className="text-muted-foreground text-sm">
                {language === 'ro' && 'Asigurare completă'}
                {language === 'ru' && 'Полная страховка'}
                {language === 'en' && 'Full Insurance'}
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              {language === 'ro' && 'Contact'}
              {language === 'ru' && 'Контакты'}
              {language === 'en' && 'Contact'}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+37379818666" className="text-muted-foreground hover:text-primary transition-colors">
                  +373 79 818 666
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:davidanrentcar@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all">
                  davidanrentcar@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  {language === 'ro' && 'Chișinău, Moldova'}
                  {language === 'ru' && 'Кишинев, Молдова'}
                  {language === 'en' && 'Chisinau, Moldova'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 DaviDan RentCar. 
            {language === 'ro' && ' Toate drepturile rezervate.'}
            {language === 'ru' && ' Все права защищены.'}
            {language === 'en' && ' All rights reserved.'}
          </p>
          <div className="flex items-center gap-4">
            <Link to="/legal/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              {language === 'ro' && 'Politica de confidențialitate'}
              {language === 'ru' && 'Политика конфиденциальности'}
              {language === 'en' && 'Privacy Policy'}
            </Link>
            <Link to="/legal/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              {language === 'ro' && 'Termeni și condiții'}
              {language === 'ru' && 'Условия использования'}
              {language === 'en' && 'Terms & Conditions'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
