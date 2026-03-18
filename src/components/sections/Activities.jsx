import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, BarChart2, ArrowRight, MapPin } from 'lucide-react';
import { ACTIVITIES } from '@/utils/constants';
import { useInView } from '@/hooks/useInView';

const DIFFICULTY_COLOR = {
  Easy: 'text-green-500 bg-green-50',
  Moderate: 'text-amber-500 bg-amber-50',
  Thrill: 'text-orange-500 bg-orange-50',
  Challenging: 'text-red-500 bg-red-50',
};

function ActivityCard({ item, index }) {
  const [ref, inView] = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="bg-white rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-56 img-zoom overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mahogany-950/60 to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-mahogany-950/60 backdrop-blur-sm text-cream-50 text-xs font-sans font-medium tracking-widest uppercase px-3 py-1.5 rounded-full border border-cream-50/20">
          {item.category}
        </div>

        {/* Price */}
        <div className="absolute bottom-4 right-4 text-right">
          <span className="text-cream-50 font-display text-lg font-semibold">{item.price}</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-xl font-semibold text-mahogany-900 mb-2 group-hover:text-mahogany-700 transition-colors">
          {item.name}
        </h3>

        <p className="font-sans text-sm text-mahogany-500 leading-relaxed mb-5 flex-1">
          {item.description}
        </p>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-sm mb-6">
          <div className="flex items-center gap-1.5 text-mahogany-500">
            <Clock size={13} className="text-gold-500" />
            <span className="font-sans">{item.duration}</span>
          </div>
          <div className={`flex items-center gap-1.5 text-xs font-sans font-medium px-2.5 py-1 rounded-full ${DIFFICULTY_COLOR[item.difficulty]}`}>
            <BarChart2 size={11} />
            {item.difficulty}
          </div>
        </div>

        <button className="font-sans text-sm tracking-widest uppercase text-mahogany-900 hover:text-gold-600 transition-colors flex items-center gap-2 group/btn border-t border-cream-200 pt-4">
          <span>Book Experience</span>
          <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}

export default function Activities() {
  const [headerRef, headerInView] = useInView();

  return (
    <section id="activities" className="py-24 lg:py-32 bg-cream-100 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30" style={{
        background: 'linear-gradient(135deg, transparent 40%, rgba(200, 72, 48, 0.06) 100%)',
      }} />

      <div className="section-padding relative">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-subtitle mb-2"
          >
            Thrill &amp; Explore
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="section-title text-mahogany-950"
          >
            Adventure
            <br />
            <em className="font-light text-mahogany-600">Awaits You</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 font-sans text-mahogany-500"
          >
            From serene mountain walks to heart-pumping river rapids — our curated adventures cater to every explorer.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACTIVITIES.map((act, i) => (
            <ActivityCard key={act.id} item={act} index={i} />
          ))}
        </div>

        {/* Location Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 relative overflow-hidden rounded-3xl h-64"
        >
          <img
            src="https://picsum.photos/seed/manali-valley/1600/900"
            alt="Manali Valley"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-mahogany-950/60" />
          <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center lg:justify-between section-padding gap-6 text-center lg:text-left">
            <div>
              <div className="font-script text-gold-400 text-2xl mb-2">Base Camp</div>
              <h3 className="font-display text-3xl text-cream-50 font-light">
                Manali — Gateway to the <em className="font-semibold">Himalayas</em>
              </h3>
            </div>
            <button className="btn-ghost shrink-0">
              <MapPin size={15} />
              Explore All Activities
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
