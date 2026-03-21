import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Play } from 'lucide-react';
import { HOTEL } from '@/utils/constants';
import { openWhatsAppBooking } from '@/utils/contact';

const SLIDES = [
  {
    id: 0,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=90',
    headline: 'Immerse Yourself',
    sub: 'In Himalayan',
    accent: 'Luxury',
    caption: 'Where the mountains meet magnificence',
  },
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=90',
    headline: 'Adventure',
    sub: 'Awaits at',
    accent: 'Every Summit',
    caption: 'Curated experiences across the Kullu valley',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=90',
    headline: 'Serenity Finds',
    sub: 'You at',
    accent: '2,050 Metres',
    caption: 'Unwind in our award-winning mountain spa',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[current];

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.headline}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-mahogany-950/60 via-mahogany-950/30 to-mahogany-950/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-mahogany-950/50 to-transparent" />

      {/* Snow Particles Decoration */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/70 rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, 30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative h-full flex flex-col justify-center section-padding">
        <div className="max-w-3xl">
          {/* Script */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`script-${slide.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-script text-gold-400 text-3xl sm:text-4xl mb-2"
            >
              {HOTEL.script}
            </motion.div>
          </AnimatePresence>

          {/* Main Headline */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`headline-${slide.id}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              <h1 className="font-display text-cream-50 leading-none">
                <span className="block text-5xl sm:text-6xl lg:text-8xl font-semibold uppercase tracking-tight">
                  {slide.headline}
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-7xl font-light uppercase tracking-wide">
                  {slide.sub}
                </span>
                <span className="block text-5xl sm:text-6xl lg:text-8xl font-semibold uppercase tracking-tight text-gold-400">
                  {slide.accent}
                </span>
              </h1>
            </motion.div>
          </AnimatePresence>

          {/* Caption */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`caption-${slide.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-6 font-sans text-cream-300 text-lg sm:text-xl font-light tracking-wide"
            >
              {slide.caption}
            </motion.p>
          </AnimatePresence>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <button
              onClick={() => openWhatsAppBooking('Hi, I want to book a stay from your website. Please share room options and best rates.')}
              className="btn-primary text-base px-10 py-5"
            >
              Contact to Book
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => setShowVideo(true)}
              className="btn-ghost text-base px-8 py-5"
            >
              <Play size={16} fill="currentColor" />
              Watch Film
            </button>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === current ? 'w-10 bg-gold-400' : 'w-4 bg-cream-50/50 hover:bg-cream-50/80'
              }`}
            />
          ))}
        </div>

        {/* Scroll Down */}
        <motion.button
          onClick={() => document.getElementById('about-brief')?.scrollIntoView({ behavior: 'smooth' })}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream-300 hover:text-cream-50 transition-colors"
        >
          <span className="font-sans text-xs tracking-[0.3em] uppercase">Discover</span>
          <ChevronDown size={22} />
        </motion.button>

        {/* Side Info */}
        <div className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 items-center">
          <div className="w-px h-16 bg-cream-50/30" />
          <div className="flex flex-col gap-4">
            {[
              { label: 'Alt', value: '2,050m' },
              { label: 'Rooms', value: '42' },
              { label: 'Acres', value: '15+' },
            ].map(({ label, value }) => (
              <div key={label} className="text-center">
                <div className="font-display text-cream-50 text-lg font-medium">{value}</div>
                <div className="font-sans text-cream-400 text-xs tracking-widest uppercase">{label}</div>
              </div>
            ))}
          </div>
          <div className="w-px h-16 bg-cream-50/30" />
        </div>

        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-24 right-6 lg:right-12 hidden sm:flex items-center gap-3 bg-mahogany-950/60 backdrop-blur-md border border-cream-50/20 rounded-2xl px-5 py-3"
        >
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <div>
            <div className="font-sans text-cream-50 text-sm font-medium">Manali, Himachal Pradesh</div>
            <div className="font-sans text-cream-400 text-xs">India — Open Year Round</div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowVideo(false)}
            className="fixed inset-0 z-50 bg-mahogany-950/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-mahogany-900 flex items-center justify-center"
            >
              {HOTEL.filmUrl ? (
                HOTEL.filmUrl.includes('youtube.com') || HOTEL.filmUrl.includes('youtu.be') ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${HOTEL.filmUrl.match(/(?:v=|youtu\.be\/)([^&?/]+)/)?.[1]}?autoplay=1&rel=0`}
                    title="Hotel Film"
                    allow="autoplay; fullscreen"
                    className="w-full h-full"
                  />
                ) : (
                  <video
                    src={HOTEL.filmUrl}
                    autoPlay
                    controls
                    className="w-full h-full object-cover"
                  />
                )
              ) : (
                <div className="text-center text-cream-300">
                  <Play size={48} className="mx-auto mb-4 opacity-50" />
                  <p className="font-display text-2xl">Hotel Film Coming Soon</p>
                  <p className="text-sm mt-2 opacity-60">Experience the magic of Himalayan Haven</p>
                </div>
              )}
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 text-cream-200 hover:text-cream-50 bg-mahogany-800 rounded-full p-2 z-10"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
