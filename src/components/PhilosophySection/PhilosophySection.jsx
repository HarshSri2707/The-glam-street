import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const PhilosophySection = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
  ref={ref}
  className="
    relative
    py-8 sm:py-12 lg:py-16
    overflow-hidden
    bg-white
  "
>
  {/* Background Decoration (Desktop only) */}
  <div className="hidden lg:block absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-glam-rose/10 to-transparent pointer-events-none" />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
    <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="lg:col-span-3 space-y-6"
      >
        {/* Eyebrow */}
        <div>
          <span className="text-glam-burgundy text-xs sm:text-sm tracking-[0.25em] uppercase">
            {data.eyebrow}
          </span>
          <div className="h-px w-12 bg-glam-gold mt-2" />
        </div>

        {/* Title */}
        <h2 className="font-lora text-3xl sm:text-4xl lg:text-5xl font-bold text-glam-charcoal leading-tight">
          {data.title}
        </h2>

        {/* Description */}
        <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
          <p>{data.description}</p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative pl-4 border-l-2 border-glam-gold"
          >
            <p className="font-lora text-lg sm:text-xl text-glam-burgundy italic">
              “{data.highlight}”
            </p>
          </motion.div>
        </div>

        {/* Tribe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="flex items-center gap-3 pt-2"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-glam-rose to-glam-burgundy border-2 border-white"
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            50,000+ women trust us
          </span>
        </motion.div>
      </motion.div>

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="lg:col-span-2 relative mt-8 lg:mt-0"
      >
        <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
          <img
            src={data.image}
            alt={data.altText}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Badge – desktop only */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="hidden lg:block absolute -bottom-6 -left-6 bg-glam-burgundy text-white p-6 shadow-xl"
        >
          <div className="text-center">
            <div className="font-lora text-3xl font-bold">100%</div>
            <div className="text-xs tracking-wide">Authentic</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>

  );
};

export default PhilosophySection;