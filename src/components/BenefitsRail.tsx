import { motion } from 'framer-motion';
import { Clock, Shield, Star, Phone, MapPin, Award } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { fadeUp, staggerContainer } from '@/lib/animations';

interface Benefit {
  icon: typeof Clock;
  title: string;
  description: string;
}

interface BenefitsRailProps {
  benefits: Benefit[];
}

export const BenefitsRail = ({ benefits }: BenefitsRailProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {benefits.map((benefit, index) => {
        const Icon = benefit.icon;
        return (
          <motion.div
            key={index}
            variants={fadeUp}
            custom={index}
            className="text-center group"
          >
            <motion.div
              className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
              whileHover={
                prefersReducedMotion
                  ? {}
                  : {
                      rotate: 4,
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }
              }
            >
              <Icon className="w-8 h-8 text-primary" />
            </motion.div>
            <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
            <p className="text-muted-foreground text-sm">{benefit.description}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
