import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Marquee from '@/components/ui/Marquee';
import AboutBrief from '@/components/sections/AboutBrief';
import Rooms from '@/components/sections/Rooms';
import Amenities from '@/components/sections/Amenities';
import Gallery from '@/components/sections/Gallery';
import Dining from '@/components/sections/Dining';
import Activities from '@/components/sections/Activities';
import Testimonials from '@/components/sections/Testimonials';
import Booking from '@/components/sections/Booking';
import ScrollProgress from '@/components/ui/ScrollProgress';
import BackToTop from '@/components/ui/BackToTop';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <div className="relative">
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <AboutBrief />
        <Rooms />
        <Amenities />
        <Dining />
        <Activities />
        <Gallery />
        <Testimonials />
        <Booking />
      </main>

      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </div>
  );
}
