'use client';

import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Kalakruti Associates transformed our 3BHK apartment into a dream home. Their attention to detail and understanding of our needs was exceptional. The team delivered exactly what they promised, on time and within budget.",
      name: "Priyanka S.",
      location: "Patia, Bhubaneswar",
    },
    {
      quote: "We hired them for our office interior in Cuttack and couldn't be happier. The modern design has impressed all our clients and created a productive workspace for our team. Highly professional service!",
      name: "Rajesh Kumar",
      location: "Link Road, Cuttack",
    },
    {
      quote: "The luxury interior design for our villa exceeded all expectations. From concept to completion, Kalakruti Associates maintained the highest standards. Our home is now a masterpiece that reflects our personality perfectly.",
      name: "Sunita & Prakash M.",
      location: "Jaydev Vihar, Bhubaneswar",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Happy Clients in{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Bhubaneswar
            </span>{' '}
            Say
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about their experience with Kalakruti Associates.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl border border-gray-200 p-6 lg:p-8 relative hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6">
                <div className="bg-amber-500 rounded-full p-2">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="pt-6">
                <p className="text-gray-700 italic leading-relaxed text-base lg:text-lg mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                  <p className="text-amber-600 font-medium">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;