import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { AMENITIES } from '@/utils/constants';

export default function Amenities() {
  const [headerRef, headerInView] = useInView();

  return (
    <section id="amenities" className="py-24 lg:py-32 bg-cream-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c94830' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="section-padding relative">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-subtitle text-gold-500 mb-3"
          >
            Serenity &amp; Bliss
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="section-title text-mahogany-950"
          >
            The luxury of being
            <br />
            <em className="text-mahogany-600 font-light">your true self</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 font-sans text-mahogany-500 text-lg"
          >
            Indulge in world-class amenities crafted to rejuvenate body, mind, and spirit.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AMENITIES.map((item, i) => (
            <AmenityCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AmenityCard({ item, index }) {
  const [ref, inView] = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-3xl p-8 group hover:bg-mahogany-900 transition-colors duration-500 cursor-default shadow-sm hover:shadow-xl"
    >
      <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
        {item.icon}
      </div>
      <h3 className="font-display text-xl font-semibold text-mahogany-900 group-hover:text-cream-50 transition-colors mb-3">
        {item.title}
      </h3>
      <p className="font-sans text-sm text-mahogany-500 group-hover:text-cream-300 transition-colors leading-relaxed">
        {item.description}
      </p>
      <div className="mt-6 h-px bg-cream-200 group-hover:bg-cream-700/30 transition-colors" />
      <button className="mt-4 font-sans text-xs tracking-widest uppercase text-mahogany-400 group-hover:text-gold-400 transition-colors hover:underline">
        Learn More →
      </button>
    </motion.div>
  );
}
