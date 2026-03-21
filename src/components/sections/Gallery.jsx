import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, Camera } from 'lucide-react';
import { GALLERY_IMAGES } from '@/utils/constants';
import { useInView } from '@/hooks/useInView';

// Bento layout spans and aspect ratios for the "All" view  
const BENTO_SPAN = [
  'col-span-2 row-span-2', // 0 – hero square
  '',                       // 1
  '',                       // 2
  'col-span-2',             // 3 – wide
  '',                       // 4
  '',                       // 5
  'col-span-2',             // 6 – wide
  '',                       // 7
  '',                       // 8
];

const BENTO_ASPECT = [
  'aspect-square',    // 0 – hero
  'aspect-[3/4]',     // 1
  'aspect-[3/4]',     // 2
  'aspect-[16/7]',    // 3 – wide
  'aspect-[3/4]',     // 4
  'aspect-[3/4]',     // 5
  'aspect-[16/7]',    // 6 – wide
  'aspect-[3/4]',     // 7
  'aspect-[3/4]',     // 8
];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const [headerRef, headerInView] = useInView();

  const categories = ['All', ...new Set(GALLERY_IMAGES.map((g) => g.cat))];
  const filtered = filter === 'All' ? GALLERY_IMAGES : GALLERY_IMAGES.filter((g) => g.cat === filter);

  const navLightbox = (dir) => {
    const idx = filtered.findIndex((g) => g.id === lightbox.id);
    setLightbox(filtered[(idx + dir + filtered.length) % filtered.length]);
  };

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-mahogany-950 relative overflow-hidden">
      {/* Grain texture */}
      <div className="absolute inset-0 noise-texture opacity-30" />
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-mahogany-700/20 blur-[100px] pointer-events-none" />

      <div className="section-padding relative">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
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

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex items-center gap-2 text-cream-500"
          >
            <Camera size={15} className="text-gold-400" />
            <span className="font-sans text-xs tracking-[0.3em] uppercase">
              {GALLERY_IMAGES.length} Captures
            </span>
          </motion.div>
        </div>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-2 flex-wrap mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-sans text-xs tracking-widest uppercase px-5 py-2 rounded-full border transition-all duration-300 ${
                filter === cat
                  ? 'bg-gold-500 border-gold-500 text-mahogany-950 font-semibold shadow-lg shadow-gold-500/25'
                  : 'border-cream-700/40 text-cream-500 hover:border-cream-400 hover:text-cream-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Bento Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => {
              const spanClass = filter === 'All' ? (BENTO_SPAN[i] ?? '') : '';
              const aspectClass = filter === 'All' ? (BENTO_ASPECT[i] ?? 'aspect-[3/4]') : 'aspect-[3/4]';

              return (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.88 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className={`relative overflow-hidden rounded-2xl cursor-pointer group ${spanClass} ${aspectClass}`}
                  onClick={() => setLightbox(img)}
                >
                  {/* Image */}
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Gradient overlay — deepens on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-mahogany-950/70 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Gold ring glow on hover */}
                  <div className="absolute inset-0 rounded-2xl ring-inset ring-0 group-hover:ring-2 ring-gold-400/50 transition-all duration-500 pointer-events-none" />

                  {/* ZoomIn icon scales in from center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                      <ZoomIn size={20} className="text-cream-50" />
                    </div>
                  </div>

                  {/* Bottom label slides up */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="font-sans text-[10px] tracking-widest uppercase text-gold-400 mb-0.5">{img.cat}</div>
                    <div className="font-display text-cream-50 font-medium text-sm leading-tight">{img.label}</div>
                  </div>

                  {/* Featured badge on hero tile */}
                  {i === 0 && filter === 'All' && (
                    <div className="absolute top-4 left-4 bg-gold-500/90 backdrop-blur-sm text-mahogany-950 text-[10px] font-sans font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-mahogany-950/97 backdrop-blur-md flex flex-col items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            {/* Top bar */}
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-5 z-10">
              <div>
                <div className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-400">{lightbox.cat}</div>
                <div className="font-display text-cream-50 text-lg leading-tight">{lightbox.label}</div>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="w-10 h-10 rounded-full bg-mahogany-800/70 text-cream-300 hover:text-cream-50 hover:bg-mahogany-700 transition-colors flex items-center justify-center"
              >
                <X size={18} />
              </button>
            </div>

            {/* Image + arrows */}
            <div className="relative w-full max-w-5xl px-14 sm:px-16" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={lightbox.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28 }}
                src={lightbox.src}
                alt={lightbox.label}
                className="max-h-[70vh] w-full object-contain rounded-xl"
              />

              <button
                onClick={(e) => { e.stopPropagation(); navLightbox(-1); }}
                className="absolute left-1 top-1/2 -translate-y-1/2 w-11 h-11 bg-mahogany-800/70 hover:bg-mahogany-700 text-cream-200 hover:text-cream-50 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); navLightbox(1); }}
                className="absolute right-1 top-1/2 -translate-y-1/2 w-11 h-11 bg-mahogany-800/70 hover:bg-mahogany-700 text-cream-200 hover:text-cream-50 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Film strip thumbnails */}
            <div
              className="absolute bottom-0 left-0 right-0 flex gap-2 justify-center px-6 py-4 overflow-x-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {filtered.map((img) => (
                <button
                  key={img.id}
                  onClick={() => setLightbox(img)}
                  className={`shrink-0 w-14 h-14 rounded-lg overflow-hidden transition-all duration-200 ${
                    img.id === lightbox.id
                      ? 'ring-2 ring-gold-400 scale-110 opacity-100'
                      : 'opacity-40 hover:opacity-75'
                  }`}
                >
                  <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
