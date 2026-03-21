import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { DINING } from '@/utils/constants';
import { useInView } from '@/hooks/useInView';
import { openWhatsAppBooking } from '@/utils/contact';

function DiningCard({ item, index }) {
  const [ref, inView] = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group relative rounded-3xl overflow-hidden cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-80 img-zoom">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mahogany-950/90 via-mahogany-950/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8">
        <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
          <div className="inline-block bg-gold-500 text-mahogany-950 text-xs font-sans font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
            {item.tag}
          </div>
          <div className="font-sans text-cream-400 text-xs tracking-widest uppercase mb-1">{item.type}</div>
          <h3 className="font-display text-3xl font-semibold text-cream-50 mb-2">{item.name}</h3>
          <div className="flex items-center gap-2 text-cream-400 text-xs mb-4">
            <Clock size={12} />
            <span className="font-sans">{item.hours}</span>
          </div>
          <p className="font-sans text-sm text-cream-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-h-0 group-hover:max-h-24 overflow-hidden">
            {item.description}
          </p>
          <button
            onClick={() => openWhatsAppBooking(`Hi, I am interested in dining at ${item.name} (${item.type}). Please share the menu and reservation details.`)}
            className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 font-sans text-xs tracking-widest uppercase text-gold-400 flex items-center gap-1 hover:gap-2"
          >
            View Menu <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Dining() {
  const [headerRef, headerInView] = useInView();

  return (
    <section id="dining" className="py-24 lg:py-32 bg-cream-50 relative overflow-hidden">
      <div className="section-padding">
        {/* Header */}
        <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              className="section-subtitle mb-2"
            >
              A Culinary Journey
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="section-title text-mahogany-950"
            >
              Dining &amp;
              <br />
              <em className="font-light">Gastronomy</em>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-sans text-mahogany-500 text-base leading-relaxed max-w-md"
          >
            Three distinct dining experiences, each offering a unique perspective on Himalayan flavours fused with global culinary excellence.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DINING.map((item, i) => (
            <DiningCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Reservation CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 bg-mahogany-900 rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div>
            <div className="font-script text-gold-400 text-2xl mb-2">Fine Dining Reservations</div>
            <h3 className="font-display text-3xl lg:text-4xl text-cream-50 font-light">
              Reserve your table at Peaks<br />
              <span className="italic font-medium">— our signature restaurant</span>
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <button
              onClick={() => openWhatsAppBooking('Hi, I would like to make a reservation at Peaks restaurant. Please share availability and pricing.')}
              className="btn-ghost"
            >
              Make a Reservation
            </button>
            <button
              onClick={() => openWhatsAppBooking('Hi, could you share the menus for all dining venues at The Himalayan Haven?')}
              className="font-sans text-sm tracking-widest uppercase text-cream-300 hover:text-gold-400 transition-colors border-b border-cream-700 pb-1 hover:border-gold-400"
            >
              View Menus →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
