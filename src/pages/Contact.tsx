import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useAppStore } from '@/store/appStore';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner';

const Contact = () => {
  const { language } = useAppStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to backend
    toast.success(
      language === 'ro'
        ? 'Mesaj trimis! Vă vom contacta în curând.'
        : language === 'ru'
        ? 'Сообщение отправлено! Мы свяжемся с вами в ближайшее время.'
        : 'Message sent! We will contact you soon.'
    );
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-secondary/30 py-20 border-b border-border/50">
        <div className="container-custom text-center">
          <h1 className="mb-4">
            {language === 'ro' && 'Contactează-ne'}
            {language === 'ru' && 'Свяжитесь с нами'}
            {language === 'en' && 'Contact Us'}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {language === 'ro' && 'Suntem aici pentru a răspunde la toate întrebările tale'}
            {language === 'ru' && 'Мы здесь, чтобы ответить на все ваши вопросы'}
            {language === 'en' && 'We are here to answer all your questions'}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  {language === 'ro' && 'Informații de Contact'}
                  {language === 'ru' && 'Контактная Информация'}
                  {language === 'en' && 'Contact Information'}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {language === 'ro' && 'Telefon'}
                        {language === 'ru' && 'Телефон'}
                        {language === 'en' && 'Phone'}
                      </h3>
                      <a href="tel:+37379818666" className="text-muted-foreground hover:text-primary transition-colors">
                        +373 79 818 666
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:davidanrentcar@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors break-all"
                      >
                        davidanrentcar@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {language === 'ro' && 'Adresă'}
                        {language === 'ru' && 'Адрес'}
                        {language === 'en' && 'Address'}
                      </h3>
                      <p className="text-muted-foreground">
                        {language === 'ro' && 'Chișinău, Moldova'}
                        {language === 'ru' && 'Кишинев, Молдова'}
                        {language === 'en' && 'Chisinau, Moldova'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {language === 'ro' && 'Program'}
                        {language === 'ru' && 'Часы работы'}
                        {language === 'en' && 'Working Hours'}
                      </h3>
                      <p className="text-muted-foreground">24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card-premium p-6">
                <h3 className="font-semibold mb-4">
                  {language === 'ro' && 'Contactare Rapidă'}
                  {language === 'ru' && 'Быстрая Связь'}
                  {language === 'en' && 'Quick Contact'}
                </h3>
                <div className="space-y-3">
                  <Button className="w-full btn-hero" asChild>
                    <a href="https://wa.me/37379818666" target="_blank" rel="noopener noreferrer">
                      <Send className="w-4 h-4 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="tel:+37379818666">
                      <Phone className="w-4 h-4 mr-2" />
                      {language === 'ro' && 'Sună Acum'}
                      {language === 'ru' && 'Позвонить'}
                      {language === 'en' && 'Call Now'}
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="mailto:davidanrentcar@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      {language === 'ro' && 'Trimite Email'}
                      {language === 'ru' && 'Отправить Email'}
                      {language === 'en' && 'Send Email'}
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-premium p-8">
              <h2 className="text-2xl font-bold mb-6">
                {language === 'ro' && 'Trimite-ne un Mesaj'}
                {language === 'ru' && 'Отправьте нам сообщение'}
                {language === 'en' && 'Send us a Message'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === 'ro' && 'Nume'}
                    {language === 'ru' && 'Имя'}
                    {language === 'en' && 'Name'}
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder={
                      language === 'ro' ? 'Numele tău' : language === 'ru' ? 'Ваше имя' : 'Your name'
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder={
                      language === 'ro'
                        ? 'email@exemplu.com'
                        : language === 'ru'
                        ? 'email@пример.com'
                        : 'email@example.com'
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === 'ro' && 'Telefon'}
                    {language === 'ru' && 'Телефон'}
                    {language === 'en' && 'Phone'}
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+373 ..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === 'ro' && 'Mesaj'}
                    {language === 'ru' && 'Сообщение'}
                    {language === 'en' && 'Message'}
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    placeholder={
                      language === 'ro'
                        ? 'Cum te putem ajuta?'
                        : language === 'ru'
                        ? 'Чем мы можем помочь?'
                        : 'How can we help you?'
                    }
                  />
                </div>
                <Button type="submit" className="w-full btn-hero">
                  <Send className="w-4 h-4 mr-2" />
                  {language === 'ro' && 'Trimite Mesajul'}
                  {language === 'ru' && 'Отправить Сообщение'}
                  {language === 'en' && 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
