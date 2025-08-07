'use client';

import { BadgePercent, ClipboardCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const USPBar = () => {
  const usps = [
    {
      icon: BadgePercent,
      headline: 'No Hidden Costs. On-Time Delivery.',
      description: 'We give you a clear, detailed price from the start. We finish every project on the promised date, ensuring a stress-free experience.',
    },
    {
      icon: ClipboardCheck,
      headline: 'What You See is What You Get.',
      description: 'The beautiful 3D designs we show you are not just a dream. We use quality materials to make your home look exactly like the design you approved.',
    },
    {
      icon: Sparkles,
      headline: 'A Home Designed Uniquely For You.',
      description: 'We listen to your story and lifestyle to create a one-of-a-kind design that is 100% you. No templates, just pure personalisation.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {usps.map((usp, index) => {
            const IconComponent = usp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-amber-100 rounded-2xl group-hover:bg-amber-200 transition-colors duration-300">
                    <IconComponent className="w-12 h-12 text-amber-500" />
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 leading-tight">
                  {usp.headline}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                  {usp.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default USPBar;