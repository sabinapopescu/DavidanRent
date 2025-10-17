import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Car, FileText, CheckCircle } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { fadeUp, staggerContainer } from '@/lib/animations';

interface Step {
  icon: typeof Search;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: Search,
    title: 'Search',
    description: 'Find your perfect car by selecting dates and preferences',
  },
  {
    icon: Car,
    title: 'Choose',
    description: 'Browse our fleet and pick the vehicle that suits you best',
  },
  {
    icon: FileText,
    title: 'Book',
    description: 'Fill in your details and confirm your reservation',
  },
  {
    icon: CheckCircle,
    title: 'Drive',
    description: 'Pick up your car and enjoy your journey',
  },
];

export const AnimatedSteps = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {/* Progress line */}
        <motion.div
          className="absolute top-12 left-0 right-0 h-0.5 bg-border hidden lg:block"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.2 : 1, delay: 0.3 }}
          style={{ transformOrigin: 'left' }}
        />

        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={index}
              variants={fadeUp}
              custom={index}
              className="relative text-center"
            >
              {/* Step number & icon */}
              <motion.div
                className="w-24 h-24 bg-card border-2 border-primary/20 rounded-full flex flex-col items-center justify-center mx-auto mb-4 relative z-10"
                whileHover={
                  prefersReducedMotion
                    ? {}
                    : {
                        scale: 1.05,
                        borderColor: 'hsl(var(--primary))',
                        transition: { duration: 0.2 },
                      }
                }
              >
                <Icon className="w-8 h-8 text-primary mb-1" />
                <span className="text-xs font-semibold text-muted-foreground">
                  Step {index + 1}
                </span>
              </motion.div>

              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
