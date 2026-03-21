import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Marquee from '@/components/ui/Marquee';
import AboutBrief from '@/components/sections/AboutBrief';
import Rooms from '@/components/sections/Rooms';
import Gallery from '@/components/sections/Gallery';
import Testimonials from '@/components/sections/Testimonials';
import ReelsShowcase from '@/components/sections/ReelsShowcase';
import ContactReach from '@/components/sections/ContactReach';
import ScrollProgress from '@/components/ui/ScrollProgress';
import BackToTop from '@/components/ui/BackToTop';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import PrivacyPolicy from '@/components/pages/PrivacyPolicy';
import TermsOfService from '@/components/pages/TermsOfService';
import CookiePolicy from '@/components/pages/CookiePolicy';

function HomePage() {
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
        <Gallery />
        <Testimonials />
        <ReelsShowcase />
        <ContactReach />
      </main>

      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </div>
  );
}

function PolicyPage({ component: Component }) {
  return (
    <div className="relative">
      <Navbar />
      <Component />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PolicyPage component={PrivacyPolicy} />} />
        <Route path="/terms" element={<PolicyPage component={TermsOfService} />} />
        <Route path="/cookies" element={<PolicyPage component={CookiePolicy} />} />
      </Routes>
    </BrowserRouter>
  );
}
