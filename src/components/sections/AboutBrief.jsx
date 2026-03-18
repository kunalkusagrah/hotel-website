import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { STATS } from '@/utils/constants';

export default function AboutBrief() {
  const [leftRef, leftInView] = useInView();
  const [rightRef, rightInView] = useInView();
  const [statsRef, statsInView] = useInView();

  return (
    <section id="about-brief" className="py-24 lg:py-32 bg-mahogany-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-forest-500/5 blur-3xl" />

      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          {/* Left - Images */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -60 }}
            animate={leftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="relative pb-2 sm:pb-10 lg:pb-0"
          >
            <div className="relative rounded-3xl overflow-hidden h-[360px] sm:h-[500px] img-zoom">
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&q=80"
                alt="The Himalayan Haven Exterior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mahogany-950/40 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={leftInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:right-4 lg:-right-6 bg-cream-50 rounded-2xl p-5 sm:p-6 shadow-2xl w-full sm:w-auto sm:max-w-xs"
            >
              <div className="font-script text-gold-500 text-xl mb-1">Est. 2018</div>
              <div className="font-display text-mahogany-900 text-lg font-semibold mb-2">
                Award-Winning Hospitality
              </div>
              <div className="flex gap-1">
                {['🏆', '⭐', '🌿', '✨'].map((e, i) => (
                  <span key={i} className="text-lg">{e}</span>
                ))}
              </div>
            </motion.div>

            {/* Small image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={leftInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="hidden sm:block absolute -top-6 -left-4 lg:-left-6 w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-mahogany-950 shadow-xl img-zoom"
            >
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&q=80"
                alt="Hotel Spa"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 60 }}
            animate={rightInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <div className="section-subtitle text-gold-400 mb-3">Redefining Your Comfort</div>
            <h2 className="section-title text-cream-50 mb-8">
              With Luxury
              <br />
              <em className="text-gold-300">& Grace</em>
            </h2>

            <div className="space-y-5 font-sans text-cream-400 leading-relaxed text-sm sm:text-base mb-10">
              <p>
                Nestled at 2,050 metres in the heart of the Kullu Valley, The Himalayan Haven is where Himalayan nature and refined luxury meet seamlessly. Since 2018, we have been crafting unforgettable mountain escapes.
              </p>
              <p>
                Our 15-acre private estate encompasses 42 suites and villas, a world-class spa, three dining venues, and a dedicated adventure centre — all designed around the philosophy of mindful, immersive luxury.
              </p>
              <p>
                Every element, from the hand-woven Kullu textiles to the locally-sourced stone, tells the story of Himachal Pradesh&apos;s rich cultural tapestry.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-ghost"
              >
                Plan Your Stay
              </button>
              <button className="font-sans text-sm tracking-widest uppercase text-cream-200 hover:text-gold-400 transition-colors flex items-center gap-2 border-b border-cream-600 pb-1 hover:border-gold-400">
                Our Story →
              </button>
            </div>

            {/* Stats */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0 }}
              animate={statsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-cream-700/30"
            >
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="font-display text-3xl font-semibold text-gold-400">{stat.value}</div>
                  <div className="font-sans text-xs text-cream-500 mt-1 tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
