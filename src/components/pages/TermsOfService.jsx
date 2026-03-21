import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TermsOfService() {
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
            Terms of Service
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
              1. Agreement to Terms
            </h2>
            <p className="font-sans text-mahogany-700 leading-relaxed">
              By accessing and using this website and booking services with The Himalayan Haven, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-mahogany-900 mb-4">
              2. Booking and Reservations
            </h2>
            <div className="space-y-4 font-sans text-mahogany-700">
              <p>
                <strong>Reservation Confirmation:</strong> All bookings are subject to acceptance and confirmation by The Himalayan Haven. A booking is confirmed only when you receive a confirmation email.
              </p>
              <p>
                <strong>Check-in/Check-out:</strong> Check-in time is 2:00 PM and check-out time is 12:00 PM. Early check-in and late check-out are subject to availability.
              </p>
              <p>
                <strong>Payment:</strong> Full payment is required at the time of booking unless otherwise agreed. We accept major credit cards and online transfers.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-mahogany-900 mb-4">
              3. Cancellation and Refunds
            </h2>
            <div className="space-y-4 font-sans text-mahogany-700">
              <p>
                <strong>Free Cancellation:</strong> Cancellations made up to 48 hours before check-in are eligible for a full refund.
              </p>
              <p>
                <strong>Late Cancellations:</strong> Cancellations made within 48 hours of check-in will incur a charge equal to the first night's accommodation.
              </p>
              <p>
                <strong>No-show:</strong> No-shows will be charged the full reservation amount.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-mahogany-900 mb-4">
              4. Guest Conduct
            </h2>
            <p className="font-sans text-mahogany-700 leading-relaxed mb-4">
              Guests agree to conduct themselves appropriately and respect the facility, staff, and other guests. The Himalayan Haven reserves the right to refuse service or terminate a reservation for disruptive, illegal, or inappropriate behavior without refund.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-mahogany-900 mb-4">
              5. Liability Disclaimer
            </h2>
            <p className="font-sans text-mahogany-700 leading-relaxed">
              The Himalayan Haven is not responsible for lost, stolen, or damaged personal belongings. We recommend using the in-room safe or our security deposit box. Activities and excursions are undertaken at the guest's own risk.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-mahogany-900 mb-4">
              6. Amendments
            </h2>
            <p className="font-sans text-mahogany-700 leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be posted on this page, and your continued use of the website constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-mahogany-900 mb-4">
              7. Contact Us
            </h2>
            <p className="font-sans text-mahogany-700">
              For inquiries regarding these Terms of Service, please contact us at:{' '}
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
