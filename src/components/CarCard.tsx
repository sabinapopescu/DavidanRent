import { Link } from 'react-router-dom';
import { Car as CarIcon, Users, Fuel, Cog, DoorOpen, Luggage } from 'lucide-react';
import { Car } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/store/appStore';
import { useTranslation } from '@/lib/i18n';

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

interface CarCardProps {
  car: Car;
}

export const CarCard = ({ car }: CarCardProps) => {
  const { language } = useAppStore();
  const { t } = useTranslation(language);

  return (
    <div className="card-premium hover-lift group overflow-hidden">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={carImages[car.photos[0]?.src] || car.photos[0]?.src}
          alt={car.photos[0]?.alt || car.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {car.featured && (
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
            {t.common.featured}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-1">{car.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">
          {car.make} {car.model}
        </p>

        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="flex flex-col items-center gap-1 p-2 rounded bg-muted/50">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-xs text-muted-foreground">{car.specs.seats} {t.specs.seats}</span>
          </div>
          <div className="flex flex-col items-center gap-1 p-2 rounded bg-muted/50">
            <DoorOpen className="w-4 h-4 text-primary" />
            <span className="text-xs text-muted-foreground">{car.specs.doors} {t.specs.doors}</span>
          </div>
          <div className="flex flex-col items-center gap-1 p-2 rounded bg-muted/50">
            <Luggage className="w-4 h-4 text-primary" />
            <span className="text-xs text-muted-foreground">{car.specs.luggage || 0}</span>
          </div>
        </div>

        {/* Additional Specs */}
        <div className="flex items-center gap-4 mb-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Fuel className="w-3 h-3 text-primary" />
            <span>{t.fuel[car.specs.fuel]}</span>
          </div>
          <div className="flex items-center gap-1">
            <Cog className="w-3 h-3 text-primary" />
            <span>{t.gearbox[car.specs.gearbox]}</span>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div>
            <p className="text-sm text-muted-foreground">{t.common.from}</p>
            <p className="text-2xl font-bold text-foreground">
              {car.pricePerDay.amount}{t.common.currency}
              <span className="text-sm text-muted-foreground font-normal"> {t.common.perDay}</span>
            </p>
          </div>
          <Button asChild className="btn-hero">
            <Link to={`/cars/${car.slug}`}>{t.actions.viewDetails}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
