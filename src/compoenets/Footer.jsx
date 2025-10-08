import React from 'react';
import { Facebook, Youtube, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a1628] text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Hero Apps Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 3l7 7-7 7V3z"/>
              </svg>
            </div>
            <h3 className="text-white text-xl font-semibold">Hero Apps</h3>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Building innovative mobile and web applications that empower businesses
            and individuals to achieve their goals. We're committed to delivering
            cutting-edge solutions with exceptional user experiences.
          </p>
        </div>

        {/* Company Section */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-lg">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="" className="hover:text-white transition-colors">Our Team</a></li>
            <li><a href="" className="hover:text-white transition-colors">Newsroom</a></li>
            <li><a href="" className="hover:text-white transition-colors">Partners</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-lg">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="" className="hover:text-white transition-colors">Support Center</a></li>
            <li><a href="" className="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="" className="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="" className="hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        {/* Social Icons Section */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-lg">Follow Us</h4>
          <div className="flex gap-4">
            <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://youtube.com" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            © 2025 Hero Apps. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
