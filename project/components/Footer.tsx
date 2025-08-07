'use client';

import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#about', label: 'About Us' },
    { href: '#contact', label: 'Contact' },
  ];

  const services = [
    { href: '#residential', label: 'Residential' },
    { href: '#commercial', label: 'Commercial' },
    { href: '#luxury', label: 'Luxury' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Column 1: Brand */}
            <div className="space-y-4">
              <h3 className="text-xl lg:text-2xl font-bold text-white">
                Kalakruti Associates
              </h3>
              <p className="text-lg text-amber-400 font-medium">
                ଆପଣଙ୍କ ସ୍ବପ୍ନର ଘର, ଆମର କଳାକୃତି
              </p>
              <p className="text-gray-400 leading-relaxed">
                Transforming homes and offices across Bhubaneswar and Cuttack with innovative interior design solutions that blend modern luxury with local warmth.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.href}>
                    <a
                      href={service.href}
                      className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                    >
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400">
                      123 Main Street,<br />
                      Sahid Nagar, Bhubaneswar,<br />
                      Odisha, 751007
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <a
                    href="tel:+919876543210"
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                  >
                    +91 98765 43210
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <a
                    href="mailto:contact@kalakrutiassociates.com"
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                  >
                    contact@kalakrutiassociates.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} Kalakruti Associates. All Rights Reserved. Website Designed with ❤️
            </p>

            {/* Social Media Links */}
            <div className="flex items-center space-x-6">
              <a
                href="https://www.linkedin.com/company/kalakrutiassociates"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/kalakrutiassociates"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/kalakrutiassociates"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;