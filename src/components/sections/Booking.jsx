import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Bed, ArrowRight, CheckCircle } from 'lucide-react';
import { ROOMS, HOTEL } from '@/utils/constants';
import { useInView } from '@/hooks/useInView';

export default function Booking() {
  const [form, setForm] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    room: '',
    name: '',
    email: '',
    phone: '',
    specialRequests: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [headerRef, headerInView] = useInView();

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-24 lg:py-32 bg-mahogany-950 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Booking Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-mahogany-950/80" />
      </div>

      <div className="section-padding relative">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            className="section-subtitle text-gold-400 mb-2"
          >
            Your Journey Begins
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title text-cream-50"
          >
            Reserve Your
            <br />
            <em className="font-light text-gold-300">Himalayan Escape</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="mt-5 font-sans text-cream-400 max-w-md mx-auto"
          >
            Fill in your details and our reservations team will confirm your stay within 2 hours.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <CheckCircle size={72} className="text-green-400 mx-auto mb-6" />
              <h3 className="font-display text-4xl text-cream-50 mb-4">
                Reservation Received!
              </h3>
              <p className="font-sans text-cream-400 text-lg mb-8 max-w-md mx-auto">
                Thank you, {form.name}. We&apos;ll confirm your stay at {HOTEL.name} within 2 hours via {form.email}.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-ghost"
              >
                Make Another Booking
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 40 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              onSubmit={handleSubmit}
              className="bg-cream-50/5 backdrop-blur-md border border-cream-50/10 rounded-3xl p-8 lg:p-12"
            >
              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Check In */}
                <div>
                  <label className="font-sans text-xs tracking-widest uppercase text-cream-400 mb-2 flex items-center gap-2">
                    <Calendar size={12} /> Check In
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    required
                    value={form.checkIn}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-cream-50/10 border border-cream-50/20 text-cream-100 text-sm px-4 py-3.5 rounded-xl outline-none focus:border-gold-500 transition-colors placeholder-cream-600"
                  />
                </div>

                {/* Check Out */}
                <div>
                  <label className="font-sans text-xs tracking-widest uppercase text-cream-400 mb-2 flex items-center gap-2">
                    <Calendar size={12} /> Check Out
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    required
                    value={form.checkOut}
                    onChange={handleChange}
                    min={form.checkIn || new Date().toISOString().split('T')[0]}
                    className="w-full bg-cream-50/10 border border-cream-50/20 text-cream-100 text-sm px-4 py-3.5 rounded-xl outline-none focus:border-gold-500 transition-colors"
                  />
                </div>

                {/* Guests */}
                <div>
                  <label className="font-sans text-xs tracking-widest uppercase text-cream-400 mb-2 flex items-center gap-2">
                    <Users size={12} /> Guests
                  </label>
                  <select
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    className="w-full bg-cream-50/10 border border-cream-50/20 text-cream-100 text-sm px-4 py-3.5 rounded-xl outline-none focus:border-gold-500 transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n} className="bg-mahogany-900">{n} Guest{n > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>

                {/* Room */}
                <div>
                  <label className="font-sans text-xs tracking-widest uppercase text-cream-400 mb-2 flex items-center gap-2">
                    <Bed size={12} /> Room Type
                  </label>
                  <select
                    name="room"
                    value={form.room}
                    onChange={handleChange}
                    className="w-full bg-cream-50/10 border border-cream-50/20 text-cream-100 text-sm px-4 py-3.5 rounded-xl outline-none focus:border-gold-500 transition-colors"
                  >
                    <option value="" className="bg-mahogany-900">Select a Room</option>
                    {ROOMS.map((r) => (
                      <option key={r.id} value={r.id} className="bg-mahogany-900">
                        {r.name} — ₹{r.price.toLocaleString()}/night
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label className="font-sans text-xs tracking-widest uppercase text-cream-400 mb-2 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-cream-50/10 border border-cream-50/20 text-cream-100 text-sm px-4 py-3.5 rounded-xl outline-none focus:border-gold-500 transition-colors placeholder-cream-600"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="font-sans text-xs tracking-widest uppercase text-cream-400 mb-2 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-cream-50/10 border border-cream-50/20 text-cream-100 text-sm px-4 py-3.5 rounded-xl outline-none focus:border-gold-500 transition-colors placeholder-cream-600"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="font-sans text-xs tracking-widest uppercase text-cream-400 mb-2 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full bg-cream-50/10 border border-cream-50/20 text-cream-100 text-sm px-4 py-3.5 rounded-xl outline-none focus:border-gold-500 transition-colors placeholder-cream-600"
                  />
                </div>

                {/* Special Requests */}
                <div className="md:col-span-2">
                  <label className="font-sans text-xs tracking-widest uppercase text-cream-400 mb-2 block">
                    Special Requests
                  </label>
                  <textarea
                    name="specialRequests"
                    placeholder="Any special requirements, celebrations, dietary needs..."
                    value={form.specialRequests}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-cream-50/10 border border-cream-50/20 text-cream-100 text-sm px-4 py-3.5 rounded-xl outline-none focus:border-gold-500 transition-colors placeholder-cream-600 resize-none"
                  />
                </div>
              </div>

              {/* Policies */}
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between mb-8 pt-6 border-t border-cream-50/10">
                <div className="font-sans text-xs text-cream-500 max-w-sm">
                  Free cancellation up to 48 hours before check-in. Check-in: {HOTEL.checkIn} • Check-out: {HOTEL.checkOut}
                </div>
                <div className="flex gap-2 shrink-0">
                  {['🔒 Secure', '✓ Free Cancellation', '☎ 24/7 Support'].map((b) => (
                    <span key={b} className="font-sans text-xs text-cream-500 bg-cream-50/5 px-3 py-1.5 rounded-full border border-cream-50/10">
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto btn-primary text-base px-12 py-5 disabled:opacity-70 disabled:cursor-wait"
              >
                {loading ? (
                  <span className="flex items-center gap-3">
                    <span className="w-4 h-4 rounded-full border-2 border-cream-50/30 border-t-cream-50 animate-spin" />
                    Processing...
                  </span>
                ) : (
                  <>
                    Confirm Reservation
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
}
