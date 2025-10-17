import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/store/appStore';
import { useTranslation } from '@/lib/i18n';
import { Language } from '@/lib/types';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useAppStore();
  const { t } = useTranslation(language);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: Language[] = ['ro', 'ru', 'en'];

  return (
    <>
      {/* Top bar */}
      <div className="bg-secondary border-b border-border/50">
        <div className="container-custom py-2">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-6">
              <a href="mailto:davidanrentcar@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">davidanrentcar@gmail.com</span>
              </a>
              <a href="tel:+37379818666" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" />
                <span>+373 79 818 666</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 py-1 rounded text-xs font-medium transition-colors uppercase ${
                    language === lang
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50' : 'bg-transparent'
        }`}
      >
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="text-2xl font-bold">
                <span className="text-foreground">Davi</span>
                <span className="text-primary">Dan</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
                {t.nav.home}
              </Link>
              <Link to="/cars" className="text-foreground hover:text-primary transition-colors font-medium">
                {t.nav.cars}
              </Link>
              <Link to="/services" className="text-foreground hover:text-primary transition-colors font-medium">
                {t.nav.services}
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
                {t.nav.about}
              </Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
                {t.nav.contact}
              </Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="outline" size="sm" asChild>
                <a href="tel:+37379818666">
                  <Phone className="w-4 h-4 mr-2" />
                  {t.actions.callUs}
                </a>
              </Button>
              <Button size="sm" className="btn-hero" asChild>
                <a href="https://wa.me/37379818666" target="_blank" rel="noopener noreferrer">
                  {t.actions.whatsapp}
                </a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[104px] bg-background/98 backdrop-blur-md z-40 animate-fade-in">
          <nav className="container-custom py-8 flex flex-col gap-6">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl text-foreground hover:text-primary transition-colors font-medium"
            >
              {t.nav.home}
            </Link>
            <Link
              to="/cars"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl text-foreground hover:text-primary transition-colors font-medium"
            >
              {t.nav.cars}
            </Link>
            <Link
              to="/services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl text-foreground hover:text-primary transition-colors font-medium"
            >
              {t.nav.services}
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl text-foreground hover:text-primary transition-colors font-medium"
            >
              {t.nav.about}
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl text-foreground hover:text-primary transition-colors font-medium"
            >
              {t.nav.contact}
            </Link>
            <div className="flex flex-col gap-3 mt-4">
              <Button variant="outline" asChild>
                <a href="tel:+37379818666">
                  <Phone className="w-4 h-4 mr-2" />
                  {t.actions.callUs}
                </a>
              </Button>
              <Button className="btn-hero" asChild>
                <a href="https://wa.me/37379818666" target="_blank" rel="noopener noreferrer">
                  {t.actions.whatsapp}
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
