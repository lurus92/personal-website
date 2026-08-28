import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import luigiPortrait from '../public/images/luigi.jpg';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const springTransition = { type: 'spring' as const, stiffness: 120, damping: 20 };

const Hero = () => {
  const reduce = useReducedMotion();

  return (
    <section className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[55dvh] py-4">
      <motion.div
        className="space-y-7"
        variants={containerVariants}
        initial={reduce ? false : 'hidden'}
        animate="show"
      >
        <motion.div variants={itemVariants} transition={springTransition}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-sm font-medium text-slate-700 border border-slate-200">
            Analytics leader&nbsp;&amp;&nbsp;AI product builder
          </span>
        </motion.div>

        <motion.div variants={itemVariants} transition={springTransition} className="space-y-3">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.05]">
            Hi, I&apos;m Luigi Russo.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-[52ch]">
            I turn messy tracking into trustworthy analytics and build AI-first products that teams actually use. Zurich-based, with roots in Milan and Dubai.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} transition={springTransition} className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="button-primary"
            data-analytics-event="button_click"
            data-analytics-label="Book a call"
            data-analytics-category="Hero"
            data-analytics-location="Home"
          >
            Book a call
          </Link>
          <Link
            href="/projects"
            className="button-secondary"
            data-analytics-event="button_click"
            data-analytics-label="Explore the lab"
            data-analytics-category="Hero"
            data-analytics-location="Home"
          >
            Explore the lab
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative"
        initial={reduce ? false : { opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.25 }}
      >
        <div className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
          <Image
            src={luigiPortrait}
            alt="Luigi Russo"
            fill
            className="object-cover object-top"
            sizes="(min-width: 768px) 480px, 100vw"
            priority
          />
        </div>
        <div className="absolute -bottom-3 -right-3 bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-md">
          <p className="text-xs font-medium text-slate-500">Based in</p>
          <p className="text-sm font-semibold text-ink">Zurich, Switzerland</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
