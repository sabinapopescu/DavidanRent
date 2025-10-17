import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CarCard } from '@/components/CarCard';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { useAppStore } from '@/store/appStore';
import { useTranslation } from '@/lib/i18n';
import carsData from '@/data/cars.json';
import { Car } from '@/lib/types';
import { SlidersHorizontal, Grid, List } from 'lucide-react';

const Cars = () => {
  const { language } = useAppStore();
  const { t } = useTranslation(language);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [fuelFilter, setFuelFilter] = useState<string>('all');
  const [gearboxFilter, setGearboxFilter] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  const cars = carsData as Car[];

  // Apply filters
  const filteredCars = cars.filter((car) => {
    const priceMatch = car.pricePerDay.amount >= priceRange[0] && car.pricePerDay.amount <= priceRange[1];
    const fuelMatch = fuelFilter === 'all' || car.specs.fuel === fuelFilter;
    const gearboxMatch = gearboxFilter === 'all' || car.specs.gearbox === gearboxFilter;
    return priceMatch && fuelMatch && gearboxMatch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-secondary/30 py-12 border-b border-border/50">
        <div className="container-custom">
          <h1 className="mb-4">{t.nav.cars}</h1>
          <p className="text-muted-foreground text-lg">
            {language === 'ro' && `${filteredCars.length} mașini disponibile`}
            {language === 'ru' && `${filteredCars.length} автомобилей доступно`}
            {language === 'en' && `${filteredCars.length} cars available`}
          </p>
        </div>
      </section>

      <div className="container-custom py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-4 lg:mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5" />
                  {language === 'ro' && 'Filtre'}
                  {language === 'ru' && 'Фильтры'}
                  {language === 'en' && 'Filters'}
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  {showFilters ? language === 'ro' ? 'Ascunde' : language === 'ru' ? 'Скрыть' : 'Hide' : language === 'ro' ? 'Arată' : language === 'ru' ? 'Показать' : 'Show'}
                </Button>
              </div>

              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Price Range */}
                <div className="card-premium p-4">
                  <h3 className="font-semibold mb-4">
                    {language === 'ro' && 'Preț pe zi'}
                    {language === 'ru' && 'Цена в день'}
                    {language === 'en' && 'Price per day'}
                  </h3>
                  <Slider
                    min={0}
                    max={100}
                    step={5}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-4"
                  />
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{priceRange[0]}€</span>
                    <span>{priceRange[1]}€</span>
                  </div>
                </div>

                {/* Fuel Type */}
                <div className="card-premium p-4">
                  <h3 className="font-semibold mb-4">{t.specs.fuel}</h3>
                  <Select value={fuelFilter} onValueChange={setFuelFilter}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">
                        {language === 'ro' && 'Toate'}
                        {language === 'ru' && 'Все'}
                        {language === 'en' && 'All'}
                      </SelectItem>
                      <SelectItem value="benzina">{t.fuel.benzina}</SelectItem>
                      <SelectItem value="diesel">{t.fuel.diesel}</SelectItem>
                      <SelectItem value="hibrid">{t.fuel.hibrid}</SelectItem>
                      <SelectItem value="electric">{t.fuel.electric}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Gearbox */}
                <div className="card-premium p-4">
                  <h3 className="font-semibold mb-4">{t.specs.gearbox}</h3>
                  <Select value={gearboxFilter} onValueChange={setGearboxFilter}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">
                        {language === 'ro' && 'Toate'}
                        {language === 'ru' && 'Все'}
                        {language === 'en' && 'All'}
                      </SelectItem>
                      <SelectItem value="manuala">{t.gearbox.manuala}</SelectItem>
                      <SelectItem value="automata">{t.gearbox.automata}</SelectItem>
                      <SelectItem value="CVT">{t.gearbox.CVT}</SelectItem>
                      <SelectItem value="robotizata">{t.gearbox.robotizata}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Reset Filters */}
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setPriceRange([0, 100]);
                    setFuelFilter('all');
                    setGearboxFilter('all');
                  }}
                >
                  {language === 'ro' && 'Resetează filtrele'}
                  {language === 'ru' && 'Сбросить фильтры'}
                  {language === 'en' && 'Reset Filters'}
                </Button>
              </div>
            </div>
          </aside>

          {/* Cars Grid */}
          <main className="flex-1">
            {/* View Mode Toggle */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                {language === 'ro' && `Afișare ${filteredCars.length} rezultate`}
                {language === 'ru' && `Показано ${filteredCars.length} результатов`}
                {language === 'en' && `Showing ${filteredCars.length} results`}
              </p>
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {filteredCars.length > 0 ? (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                    : 'flex flex-col gap-6'
                }
              >
                {filteredCars.map((car, index) => (
                  <div key={car.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                    <CarCard car={car} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">
                  {language === 'ro' && 'Nu am găsit mașini cu aceste criterii'}
                  {language === 'ru' && 'Не найдено автомобилей с такими критериями'}
                  {language === 'en' && 'No cars found with these criteria'}
                </p>
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cars;
