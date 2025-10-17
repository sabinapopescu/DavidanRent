import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CarCard } from '@/components/CarCard';
import { Button } from '@/components/ui/button';
import { Car } from '@/lib/types';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface FeaturedCarouselProps {
  cars: Car[];
}

export const FeaturedCarousel = ({ cars }: FeaturedCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const itemsPerView = 3;

  const next = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView >= cars.length ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, cars.length - itemsPerView) : prev - 1
    );
  };

  const visibleCars = cars.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        <AnimatePresence mode="popLayout">
          {visibleCars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -20 }}
              transition={{ 
                duration: prefersReducedMotion ? 0.12 : 0.3,
                delay: prefersReducedMotion ? 0 : index * 0.1 
              }}
              layout
            >
              <CarCard car={car} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prev}
          disabled={currentIndex === 0}
          className="hover-lift"
          aria-label="Previous cars"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        
        <div className="flex gap-2">
          {Array.from({ length: Math.ceil(cars.length / itemsPerView) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i * itemsPerView)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                Math.floor(currentIndex / itemsPerView) === i
                  ? 'bg-primary w-8'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={next}
          disabled={currentIndex + itemsPerView >= cars.length}
          className="hover-lift"
          aria-label="Next cars"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};
