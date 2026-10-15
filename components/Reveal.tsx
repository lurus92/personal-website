import { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

// Scroll-in for key blocks: signals hierarchy as the reader reaches each section.
const Reveal = ({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ type: 'spring', stiffness: 110, damping: 22, delay }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
