'use client';

import { motion } from 'framer-motion';

const FinalCTA = () => {
  return (
    <section id="consultation" className="py-16 lg:py-24 bg-gradient-to-r from-amber-500 to-orange-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 lg:space-y-8"
        >
          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
            Ready to Start Your Dream Interior Project?
          </h2>

          {/* Sub-headline */}
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Let&apos;s discuss how we can bring your vision to life. Your first consultation is on us.
          </p>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8 my-8 lg:my-12"
          >
            <div className="text-white/90">
              <div className="text-2xl font-bold">FREE</div>
              <div className="text-sm">Design Consultation</div>
            </div>
            <div className="text-white/90">
              <div className="text-2xl font-bold">24-48 HRS</div>
              <div className="text-sm">Response Time</div>
            </div>
            <div className="text-white/90">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm">Satisfaction Guaranteed</div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-4"
          >
            <a
              href="tel:+919876543210"
              className="inline-block bg-white text-orange-600 px-8 py-4 lg:px-12 lg:py-6 rounded-lg text-lg lg:text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl hover:bg-gray-50"
            >
              Get Your Free Consultation Now
            </a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="pt-6 text-white/80"
          >
            <p className="text-base lg:text-lg">
              Call us at{' '}
              <a href="tel:+919876543210" className="font-semibold hover:text-white transition-colors duration-200">
                +91 98765 43210
              </a>{' '}
              or email{' '}
              <a href="mailto:contact@kalakrutiassociates.com" className="font-semibold hover:text-white transition-colors duration-200">
                contact@kalakrutiassociates.com
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;