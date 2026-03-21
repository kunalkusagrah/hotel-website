import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';
import { HOTEL, HOTEL_LOCATION } from '@/utils/constants';

export default function ContactReach() {
  const mapEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(HOTEL_LOCATION.mapQuery)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="py-24 lg:py-32 bg-mahogany-950 text-cream-100 relative overflow-hidden">
      <div className="section-padding">
        <div className="text-center mb-12">
          <div className="section-subtitle text-gold-400 mb-2">Reach Us Easily</div>
          <h2 className="section-title text-cream-50">Hotel Contact & Location</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-cream-50/5 border border-cream-50/15 rounded-3xl p-6 sm:p-8 backdrop-blur-sm"
          >
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gold-400 mt-1 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-cream-400">Address</div>
                  <p className="font-sans text-base text-cream-100 leading-relaxed">{HOTEL.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} className="text-gold-400 mt-1 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-cream-400">Phone</div>
                  <a href={`tel:${HOTEL.phone.replace(/\s+/g, '')}`} className="font-sans text-base text-cream-100 hover:text-gold-300 transition-colors">
                    {HOTEL.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} className="text-gold-400 mt-1 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-cream-400">Email</div>
                  <a href={`mailto:${HOTEL.email}`} className="font-sans text-base text-cream-100 hover:text-gold-300 transition-colors">
                    {HOTEL.email}
                  </a>
                </div>
              </div>
            </div>

            <a
              href={HOTEL_LOCATION.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold-400/50 px-6 py-3 text-sm tracking-widest uppercase text-gold-300 hover:bg-gold-500 hover:text-mahogany-950 transition-colors"
            >
              <Navigation size={14} />
              Open Google Maps
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl overflow-hidden border border-cream-50/15 min-h-[360px]"
          >
            <iframe
              title="The Himalayan Haven Location"
              src={mapEmbedSrc}
              loading="lazy"
              className="w-full h-full min-h-[360px]"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
