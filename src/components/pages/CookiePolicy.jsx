import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CookiePolicy() {
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
            Cookie Policy
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
              1. What Are Cookies?
            </h2>
            <p className="font-sans text-mahogany-700 leading-relaxed">
              Cookies are small text files stored on your device (computer, phone, or tablet) when you visit our website. They help us remember your preferences and improve your browsing experience.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-mahogany-900 mb-4">
              2. Types of Cookies We Use
            </h2>
            <div className="space-y-4 font-sans text-mahogany-700">
              <p>
                <strong>Essential Cookies:</strong> These are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas.
              </p>
              <p>
                <strong>Functional Cookies:</strong> These enhance your experience by remembering your choices, such as language preferences and login information.
              </p>
              <p>
                <strong>Analytics Cookies:</strong> These help us understand how visitors use our website, allowing us to improve its performance and content.
              </p>
              <p>
                <strong>Marketing Cookies:</strong> These track your online activity to deliver targeted advertisements and measure the effectiveness of marketing campaigns.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-mahogany-900 mb-4">
              3. How We Use Cookies
            </h2>
            <ul className="space-y-3 font-sans text-mahogany-700">
              <li className="flex gap-3">
                <span className="text-gold-500 font-bold">•</span>
                <span>Authenticate your login and remember your preferences</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold-500 font-bold">•</span>
                <span>Analyze website traffic and user behavior</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold-500 font-bold">•</span>
                <span>Deliver personalized content and recommendations</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold-500 font-bold">•</span>
                <span>Measure marketing campaign effectiveness</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold-500 font-bold">•</span>
                <span>Improve website functionality and security</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-mahogany-900 mb-4">
              4. Cookie Duration
            </h2>
            <div className="space-y-4 font-sans text-mahogany-700">
              <p>
                <strong>Session Cookies:</strong> These expire when you close your browser. They do not remain on your device after your visit.
              </p>
              <p>
                <strong>Persistent Cookies:</strong> These remain on your device for a specified period (from a few days to several years) to enhance your future visits.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-mahogany-900 mb-4">
              5. Managing Your Cookie Preferences
            </h2>
            <p className="font-sans text-mahogany-700 leading-relaxed mb-4">
              Most web browsers allow you to control cookies through their settings. You can choose to accept or reject cookies, or delete existing cookies. However, disabling essential cookies may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-mahogany-900 mb-4">
              6. Third-Party Cookies
            </h2>
            <p className="font-sans text-mahogany-700 leading-relaxed">
              We may use third-party services (such as Google Analytics) that set their own cookies to analyze website performance. These services have their own cookie policies, and we encourage you to review them.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-mahogany-900 mb-4">
              7. Contact Us
            </h2>
            <p className="font-sans text-mahogany-700">
              For questions about our use of cookies, please contact us at:{' '}
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
