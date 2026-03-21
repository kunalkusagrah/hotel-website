import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/utils/constants';
import { useInView } from '@/hooks/useInView';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [headerRef, headerInView] = useInView();

  const next = () => { setDirection(1); setCurrent((c) => (c + 1) % TESTIMONIALS.length); };
  const prev = () => { setDirection(-1); setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length); };

  const t = TESTIMONIALS[current];

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-cream-50 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-500/5 blur-3xl pointer-events-none" />

      <div className="section-padding relative">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            className="section-subtitle mb-2"
          >
            Guest Stories
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title text-mahogany-950"
          >
            What Our Guests
            <br />
            <em className="font-light">Are Saying</em>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative min-h-64">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={t.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 60 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-10 lg:p-14 shadow-lg relative"
              >
                {/* Quote Icon */}
                <Quote size={48} className="text-gold-200 mb-6" fill="#f0c04a" />

                <p className="font-display text-xl lg:text-2xl text-mahogany-700 font-light italic leading-relaxed mb-10">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-5 flex-wrap">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-cream-200"
                  />
                  <div>
                    <div className="font-display text-lg font-semibold text-mahogany-900">{t.name}</div>
                    <div className="font-sans text-sm text-mahogany-400">{t.origin}</div>
                    <div className="flex gap-1 mt-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={12} fill="#e8a820" className="text-gold-500" />
                      ))}
                    </div>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="font-sans text-xs text-mahogany-400 italic">{t.stay}</div>
                  </div>
                </div>

                {/* Background number */}
                <div className="absolute bottom-6 right-8 font-display text-8xl font-bold text-cream-100 select-none pointer-events-none">
                  {String(current + 1).padStart(2, '0')}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border-2 border-mahogany-200 text-mahogany-600 hover:border-mahogany-900 hover:text-mahogany-900 transition-all flex items-center justify-center hover:scale-110"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 h-2 bg-mahogany-900' : 'w-2 h-2 bg-mahogany-200 hover:bg-mahogany-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border-2 border-mahogany-200 text-mahogany-600 hover:border-mahogany-900 hover:text-mahogany-900 transition-all flex items-center justify-center hover:scale-110"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* All Reviews Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.button
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`p-5 rounded-2xl text-left transition-all duration-300 ${
                i === current
                  ? 'bg-mahogany-900 text-cream-50 shadow-lg'
                  : 'bg-cream-100 hover:bg-cream-200 text-mahogany-700'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-9 h-9 rounded-full object-cover" />
                <div>
                  <div className={`font-sans text-xs font-semibold ${i === current ? 'text-cream-50' : 'text-mahogany-900'}`}>
                    {testimonial.name}
                  </div>
                  <div className={`font-sans text-xs ${i === current ? 'text-cream-300' : 'text-mahogany-400'}`}>
                    {testimonial.origin}
                  </div>
                </div>
              </div>
              <div className={`font-sans text-xs leading-relaxed line-clamp-3 ${i === current ? 'text-cream-300' : 'text-mahogany-500'}`}>
                {testimonial.text}
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
