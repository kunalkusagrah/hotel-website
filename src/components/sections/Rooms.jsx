import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Maximize2, Wifi, ArrowRight, Star, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { ROOMS } from '@/utils/constants';
import { useInView } from '@/hooks/useInView';
import { openWhatsAppBooking } from '@/utils/contact';

function RoomCard({ room, index, onBook }) {
  const [ref, inView] = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-64 sm:h-72 overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mahogany-950/60 via-transparent to-transparent" />

        {/* Tag */}
        {room.tag && (
          <div className="absolute top-4 left-4 bg-gold-500 text-mahogany-950 text-xs font-sans font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full">
            {room.tag}
          </div>
        )}

        {/* Category */}
        <div className="absolute top-4 right-4 bg-mahogany-950/60 backdrop-blur-md text-cream-50 text-xs font-sans tracking-widest uppercase px-3 py-1.5 rounded-full border border-cream-50/20">
          {room.category}
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} fill="#e8a820" className="text-gold-400" />
            ))}
          </div>
          <div className="text-cream-50 font-sans text-sm">
            <span className="font-bold text-lg">₹{room.price.toLocaleString()}</span>
            <span className="text-cream-300 text-xs">/night</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="font-sans text-xs tracking-[0.2em] uppercase text-mahogany-400 mb-1">{room.type}</div>
            <h3 className="font-display text-2xl font-semibold text-mahogany-900">{room.name}</h3>
          </div>
        </div>

        <p className="font-sans text-sm text-mahogany-600 leading-relaxed mb-5 flex-1">
          {room.description}
        </p>

        {/* Quick Stats */}
        <div className="flex items-center gap-6 text-mahogany-500 text-sm mb-6 border-t border-cream-200 pt-4">
          <div className="flex items-center gap-1.5">
            <Maximize2 size={14} className="text-gold-500" />
            <span>{room.size}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users size={14} className="text-gold-500" />
            <span>Up to {room.capacity}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Wifi size={14} className="text-gold-500" />
            <span>Free WiFi</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-6">
          {room.amenities.slice(0, 3).map((a) => (
            <span key={a} className="flex items-center gap-1 text-xs font-sans text-mahogany-600 bg-cream-100 rounded-full px-3 py-1">
              <Check size={10} className="text-gold-500" />
              {a}
            </span>
          ))}
          {room.amenities.length > 3 && (
            <span className="text-xs font-sans text-mahogany-400 bg-cream-100 rounded-full px-3 py-1">
              +{room.amenities.length - 3} more
            </span>
          )}
        </div>

        <button
          onClick={() => onBook(room)}
          className="btn-primary w-full justify-center"
        >
          Reserve Room
          <ArrowRight size={16} />
        </button>
      </div>
    </motion.div>
  );
}

export default function Rooms() {
  const [filter, setFilter] = useState('All');
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [headerRef, headerInView] = useInView();

  const categories = ['All', ...new Set(ROOMS.map((r) => r.category))];
  const filtered = filter === 'All' ? ROOMS : ROOMS.filter((r) => r.category === filter);

  return (
    <section id="rooms" className="py-24 lg:py-32 bg-cream-50">
      <div className="section-padding">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="section-subtitle mb-2"
            >
              Sparkling View
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="section-title text-mahogany-950"
            >
              Our Rooms 
              {/* <br /> */}
              <span className="font-light italic"> &amp; Suites</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md font-sans text-mahogany-500 text-base leading-relaxed"
          >
            Each space is a sanctuary — thoughtfully designed to blend Himalayan heritage with contemporary luxury.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-3 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-sans text-sm tracking-widest uppercase px-6 py-2.5 rounded-full border transition-all duration-300 ${
                filter === cat
                  ? 'bg-mahogany-900 border-mahogany-900 text-cream-50'
                  : 'border-mahogany-300 text-mahogany-600 hover:border-mahogany-900 hover:text-mahogany-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {filtered.map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} onBook={setSelectedRoom} />
          ))}
        </div>

        {/* View All */}
        {/* <div className="text-center mt-14">
          <button className="btn-outline">
            View All Accommodations
            <ArrowRight size={16} />
          </button>
        </div> */}
      </div>

      {/* Room Detail Modal */}
      <AnimatePresence>
        {selectedRoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedRoom(null)}
            className="fixed inset-0 z-50 bg-mahogany-950/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-cream-50 w-full sm:max-w-2xl sm:rounded-3xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <div className="relative h-72">
                <img src={selectedRoom.image} alt={selectedRoom.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-mahogany-950/50 to-transparent" />
                <button
                  onClick={() => setSelectedRoom(null)}
                  className="absolute top-4 right-4 bg-mahogany-950/60 text-cream-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-mahogany-900 transition-colors"
                >
                  ✕
                </button>
                <div className="absolute bottom-4 left-6">
                  <div className="font-sans text-xs tracking-widest uppercase text-cream-300 mb-1">{selectedRoom.type}</div>
                  <h3 className="font-display text-3xl text-cream-50 font-semibold">{selectedRoom.name}</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="font-sans text-mahogany-600 leading-relaxed mb-8">{selectedRoom.description}</p>
                <h4 className="font-display text-lg font-semibold mb-4">Room Amenities</h4>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {selectedRoom.amenities.map((a) => (
                    <div key={a} className="flex items-center gap-2 text-sm text-mahogany-700">
                      <Check size={14} className="text-gold-500 shrink-0" />
                      {a}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-cream-200">
                  <div>
                    <div className="font-sans text-sm text-mahogany-500">Starting from</div>
                    <div className="font-display text-3xl font-semibold text-mahogany-900">
                      ₹{selectedRoom.price.toLocaleString()}<span className="text-lg text-mahogany-400 font-light">/night</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      openWhatsAppBooking(`Hi, I am interested in booking the ${selectedRoom.name} at INR ${selectedRoom.price.toLocaleString()} per night. Please share availability.`);
                      setSelectedRoom(null);
                    }}
                    className="btn-primary"
                  >
                    Contact to Book
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
