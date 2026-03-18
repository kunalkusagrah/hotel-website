import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GALLERY_IMAGES } from '@/utils/constants';
import { useInView } from '@/hooks/useInView';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const [headerRef, headerInView] = useInView();

  const categories = ['All', ...new Set(GALLERY_IMAGES.map((g) => g.cat))];
  const filtered = filter === 'All' ? GALLERY_IMAGES : GALLERY_IMAGES.filter((g) => g.cat === filter);

  const navLightbox = (dir) => {
    const idx = filtered.findIndex((g) => g.id === lightbox.id);
    const next = (idx + dir + filtered.length) % filtered.length;
    setLightbox(filtered[next]);
  };

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-mahogany-950 relative overflow-hidden">
      {/* Grain */}
      <div className="absolute inset-0 noise-texture opacity-30" />

      <div className="section-padding relative">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="section-subtitle text-gold-400 mb-2"
            >
              Making Memories Special
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="section-title text-cream-50"
            >
              Moments &amp;
              <br />
              <em className="font-light text-cream-300">Emotions</em>
            </motion.h2>
          </div>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-3 flex-wrap"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`font-sans text-xs tracking-widest uppercase px-5 py-2 rounded-full border transition-all duration-300 ${
                  filter === cat
                    ? 'bg-gold-500 border-gold-500 text-mahogany-950 font-medium'
                    : 'border-cream-700/50 text-cream-400 hover:border-cream-400 hover:text-cream-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4"
        >
          {filtered.map((img, i) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                i % 5 === 0 ? 'col-span-2 row-span-2' : ''
              }`}
              style={{ aspectRatio: i % 5 === 0 ? '1' : '3/4' }}
              onClick={() => setLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-mahogany-950/0 group-hover:bg-mahogany-950/40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="text-cream-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-mahogany-950/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="font-sans text-xs text-cream-400 tracking-widest uppercase">{img.cat}</div>
                <div className="font-display text-cream-50 font-medium">{img.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-mahogany-950/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-cream-200 hover:text-cream-50 bg-mahogany-800/60 rounded-full p-3 z-10"
            >
              <X size={22} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navLightbox(-1); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-mahogany-800/60 text-cream-200 hover:text-cream-50 rounded-full p-3 z-10"
            >
              <ChevronLeft size={24} />
            </button>

            <motion.img
              key={lightbox.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              src={lightbox.src}
              alt={lightbox.label}
              className="max-h-[85vh] max-w-5xl w-full object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => { e.stopPropagation(); navLightbox(1); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-mahogany-800/60 text-cream-200 hover:text-cream-50 rounded-full p-3 z-10"
            >
              <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <div className="font-display text-cream-50 text-xl">{lightbox.label}</div>
              <div className="font-sans text-cream-400 text-xs tracking-widest uppercase mt-1">{lightbox.cat}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
