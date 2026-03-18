import { MARQUEE_ITEMS } from '@/utils/constants';
import { Star } from 'lucide-react';

export default function Marquee() {
  return (
    <div className="bg-mahogany-900 py-5 overflow-hidden">
      <div className="marquee-container" role="region" aria-label="Hotel highlights">
        <div className="marquee-inner">
          {[0, 1].map((segment) => (
            <div key={segment} className="marquee-segment" aria-hidden={segment === 1}>
              {MARQUEE_ITEMS.map((item, i) => (
                <div key={`${segment}-${i}`} className="flex items-center gap-6 px-6">
                  <span className="font-display text-cream-50 text-sm sm:text-base uppercase tracking-[0.16em] sm:tracking-[0.2em] font-light whitespace-nowrap">
                    {item}
                  </span>
                  <Star size={12} fill="#e8a820" className="text-gold-500 shrink-0" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
