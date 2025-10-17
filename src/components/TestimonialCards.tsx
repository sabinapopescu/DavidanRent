import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { fadeUp, staggerContainer } from '@/lib/animations';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Maria Ionescu',
    role: 'Business Traveler',
    content: 'Excellent service! The car was clean, modern, and exactly as described. Pick-up and drop-off were seamless.',
    rating: 5,
  },
  {
    name: 'Alexandru Popescu',
    role: 'Tourist',
    content: 'Great value for money. The team was very professional and helpful. Highly recommend for anyone visiting Chișinău.',
    rating: 5,
  },
  {
    name: 'Elena Rusu',
    role: 'Local Customer',
    content: 'I rent from Davidan regularly for business trips. Always reliable, fair prices, and excellent customer support.',
    rating: 5,
  },
];

export const TestimonialCards = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          variants={fadeUp}
          custom={index}
          className="card-premium p-6"
          whileHover={
            prefersReducedMotion
              ? {}
              : {
                  y: -4,
                  transition: { duration: 0.2 },
                }
          }
        >
          {/* Rating */}
          <div className="flex gap-1 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < testimonial.rating
                    ? 'fill-primary text-primary'
                    : 'text-muted-foreground/30'
                }`}
              />
            ))}
          </div>

          {/* Content */}
          <p className="text-foreground mb-6 italic">"{testimonial.content}"</p>

          {/* Author */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-lg">
                {testimonial.name.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-semibold text-foreground">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
