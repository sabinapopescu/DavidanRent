import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { fadeUp } from '@/lib/animations';

interface ScrollStoryProps {
  title: string;
  description: string;
  image: string;
  points: string[];
}

export const ScrollStory = ({ title, description, image, points }: ScrollStoryProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const prefersReducedMotion = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -50]
  );

  return (
    <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Image with parallax */}
      <motion.div 
        className="relative aspect-[4/3] overflow-hidden rounded-lg"
        style={{ y: prefersReducedMotion ? undefined : y }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeUp}
        className="space-y-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        <p className="text-muted-foreground text-lg">{description}</p>
        
        <div className="space-y-4">
          {points.map((point, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              custom={index + 1}
              className="flex items-start gap-3"
            >
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <p className="text-foreground">{point}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
