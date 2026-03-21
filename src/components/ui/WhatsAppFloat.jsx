import { motion } from 'framer-motion';
import { HOTEL } from '@/utils/constants';

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12.01 2.001c-5.523 0-10 4.478-10 10a9.95 9.95 0 0 0 1.53 5.32L2 22l4.81-1.5a9.96 9.96 0 0 0 5.2 1.46h.01c5.523 0 10-4.478 10-10s-4.477-9.959-10.01-9.959Zm0 18.2h-.008a8.22 8.22 0 0 1-4.19-1.14l-.3-.18-2.86.89.91-2.78-.2-.31a8.21 8.21 0 0 1-1.27-4.39c0-4.53 3.67-8.2 8.21-8.2 2.19 0 4.25.85 5.8 2.4a8.15 8.15 0 0 1 2.41 5.8c0 4.53-3.68 8.21-8.21 8.21Zm4.5-6.16c-.25-.13-1.5-.74-1.73-.82-.23-.09-.4-.13-.57.12-.17.25-.65.82-.8.99-.15.17-.3.19-.56.06-.25-.13-1.06-.39-2.02-1.24-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.39.1-.52.11-.11.25-.3.37-.44.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.37-.78-1.88-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.45 1.02 2.61.13.17 1.76 2.69 4.28 3.77.6.26 1.07.42 1.44.54.61.19 1.17.16 1.61.1.49-.07 1.5-.61 1.71-1.2.21-.59.21-1.09.14-1.2-.06-.11-.23-.17-.48-.3Z"
      />
    </svg>
  );
}

export default function WhatsAppFloat() {
  const phone = HOTEL.phone.replace(/\D/g, '');
  const text = encodeURIComponent(
    'Hi! I need help with booking and available rooms at The Himalayan Haven.'
  );
  const href = `https://wa.me/${phone}?text=${text}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 left-4 sm:bottom-6 sm:left-6 z-50 group"
      initial={{ opacity: 0, y: 16, scale: 0.9 }}
      animate={{ opacity: 1, y: [0, -4, 0], scale: 1 }}
      transition={{
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
        y: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      <div className="inline-flex flex-col items-center gap-1.5">
        <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl border border-white/30 transition-transform duration-300 group-hover:scale-105 group-active:scale-95">
          <span className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366]/40 blur-sm animate-pulse" />
          <span className="absolute inset-0 rounded-full border border-white/35 animate-ping" />
          <span className="relative">
            <WhatsAppIcon />
          </span>
        </span>

        <span className="rounded-full bg-white text-[#25D366] px-2.5 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase shadow-md border border-[#25D366]/20 leading-none transition-all duration-300 group-hover:translate-y-0.5">
          Book now!
        </span>
      </div>
    </motion.a>
  );
}
