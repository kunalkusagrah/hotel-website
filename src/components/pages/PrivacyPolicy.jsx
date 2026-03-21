import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <div className="bg-mahogany-950 text-cream-50 py-12">
        <div className="section-padding flex items-center gap-4 mb-4">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full border border-cream-50/30 flex items-center justify-center hover:border-cream-50 transition-colors"
          >
            <ArrowLeft size={18} />
          </button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-padding"
        >
          <h1 className="font-display text-5xl font-light leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="font-sans text-cream-300">Last updated: March 2026</p>
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="section-padding py-16 max-w-3xl"
      >
        <div className="space-y-10">
          <section>
            <h2 className="font-display text-2xl font-semibold text-mahogany-900 mb-4">
              1. Introduction
            </h2>
            <p className="font-sans text-mahogany-700 leading-relaxed">
              The Himalayan Haven ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-mahogany-900 mb-4">
              2. Information We Collect
            </h2>
            <div className="space-y-4 font-sans text-mahogany-700">
              <p>
                <strong>Personal Information:</strong> Name, email address, phone number, and postal address provided during bookings or inquiries.
              </p>
              <p>
                <strong>Booking Information:</strong> Check-in/check-out dates, room preferences, special requests, and payment details.
              </p>
              <p>
                <strong>Technical Information:</strong> IP address, browser type, pages visited, and time spent on our website through cookies and analytics.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-mahogany-900 mb-4">
              3. How We Use Your Information
            </h2>
            <ul className="space-y-3 font-sans text-mahogany-700">
              <li className="flex gap-3">
                <span className="text-gold-500 font-bold">•</span>
                <span>Process and manage your reservations and payments</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold-500 font-bold">•</span>
                <span>Communicate with you about your booking and stay</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold-500 font-bold">•</span>
                <span>Send promotional offers and updates (with your consent)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold-500 font-bold">•</span>
                <span>Improve our website and services through analytics</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold-500 font-bold">•</span>
                <span>Comply with legal obligations</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-mahogany-900 mb-4">
              4. Data Security
            </h2>
            <p className="font-sans text-mahogany-700 leading-relaxed">
              We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-mahogany-900 mb-4">
              5. Your Rights
            </h2>
            <p className="font-sans text-mahogany-700 leading-relaxed mb-4">
              You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at stay@himalayanhaven.in.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-mahogany-900 mb-4">
              6. Contact Us
            </h2>
            <p className="font-sans text-mahogany-700">
              For any privacy concerns, please contact us at:{' '}
              <a href="mailto:stay@himalayanhaven.in" className="text-mahogany-900 font-semibold hover:text-gold-500 transition-colors">
                stay@himalayanhaven.in
              </a>
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
