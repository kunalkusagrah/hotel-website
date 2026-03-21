import { motion } from 'framer-motion';
import { Play, Instagram } from 'lucide-react';
import { INSTA_REELS } from '@/utils/constants';

export default function ReelsShowcase() {
  return (
    <section id="reels" className="py-24 lg:py-32 bg-cream-100 relative overflow-hidden">
      <div className="section-padding">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="section-subtitle mb-2">Instagram Reels</div>
            <h2 className="section-title text-mahogany-950">
              Hotel Highlights
              <br />
              <span className="font-light italic">in Motion</span>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm tracking-widest uppercase text-mahogany-700 hover:text-mahogany-900"
          >
            <Instagram size={16} />
            Follow on Instagram
          </a>
        </div>

        <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {INSTA_REELS.map((reel, index) => (
            <motion.article
              key={reel.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-3xl overflow-hidden bg-mahogany-950 shadow-xl group"
            >
              <div className="relative aspect-[9/16] bg-black">
                <video
                  src={reel.video}
                  poster={reel.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mahogany-950/85 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 rounded-full bg-black/35 backdrop-blur-sm p-2 text-white">
                  <Play size={14} fill="currentColor" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-cream-50">
                  <div className="font-display text-xl leading-tight">{reel.title}</div>
                  <div className="font-sans text-xs mt-1 text-cream-300">{reel.caption}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>        </div>      </div>
    </section>
  );
}
