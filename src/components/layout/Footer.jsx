import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Youtube, ArrowUpRight } from 'lucide-react';
import { HOTEL, NAV_LINKS } from '@/utils/constants';

const FOOTER_LINKS = {
  'Explore': ['Our Story', 'Rooms & Suites', 'Dining', 'Spa & Wellness', 'Gallery'],
  'Activities': ['Trekking', 'River Rafting', 'Paragliding', 'Skiing', 'Yoga & Meditation'],
  'Information': ['Book a Stay', 'Gift Vouchers', 'Events & Weddings', 'Corporate Retreats', 'Cancellation Policy'],
};

const SOCIAL = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Twitter, label: 'X / Twitter', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-mahogany-950 text-cream-200 relative overflow-hidden">
      {/* Top Decorative Wave */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #e8a820 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative section-padding pt-16 sm:pt-20 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="font-script text-gold-400 text-xl mb-1">Luxury Mountain Escape</div>
              <div className="font-display text-2xl sm:text-3xl font-semibold text-cream-50 tracking-[0.12em] sm:tracking-wider uppercase leading-tight">
                {HOTEL.name.split(' ').slice(1).join(' ')}
              </div>
              <div className="h-px w-16 bg-gold-500 mt-3" />
            </div>

            <p className="font-sans text-sm leading-relaxed text-cream-400 mb-8 max-w-xs">
              Perched amid snow-capped peaks and ancient deodar forests, we offer the finest luxury retreat in the Indian Himalayas.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              {[
                { icon: MapPin, text: HOTEL.address },
                { icon: Phone, text: HOTEL.phone },
                { icon: Mail, text: HOTEL.email },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3 text-sm text-cream-400 hover:text-cream-200 transition-colors cursor-default">
                  <Icon size={15} className="mt-0.5 shrink-0 text-gold-500" />
                  <span className="break-words">{text}</span>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-8">
              {SOCIAL.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-cream-700/50 flex items-center justify-center text-cream-400 hover:border-gold-500 hover:text-gold-400 transition-all duration-300 hover:scale-110"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-sans text-xs tracking-[0.3em] uppercase text-cream-50 font-medium mb-6">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-sans text-sm text-cream-400 hover:text-gold-400 transition-colors duration-200 flex items-center gap-1 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border border-cream-700/30 rounded-2xl p-5 sm:p-8 mb-16 bg-mahogany-900/30 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="w-full md:w-auto">
              <div className="font-script text-gold-400 text-xl mb-1">Stay Connected</div>
              <h3 className="font-display text-xl sm:text-2xl text-cream-50 max-w-md">
                Subscribe for exclusive offers & stories
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3 sm:gap-0">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full sm:flex-1 sm:min-w-[240px] md:w-72 bg-mahogany-950/80 border border-cream-700/40 text-cream-200 placeholder-cream-600 text-sm px-5 py-3.5 rounded-full sm:rounded-l-full sm:rounded-r-none outline-none focus:border-gold-500 transition-colors"
              />
              <button className="w-full sm:w-auto bg-gold-500 hover:bg-gold-400 text-mahogany-950 font-sans font-semibold text-sm px-6 py-3.5 rounded-full sm:rounded-r-full sm:rounded-l-none transition-colors whitespace-nowrap flex items-center justify-center gap-2">
                Subscribe <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-cream-800/30">
          <p className="font-sans text-xs text-cream-600">
            © {new Date().getFullYear()} {HOTEL.name}. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="font-sans text-xs text-cream-600 hover:text-cream-300 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
