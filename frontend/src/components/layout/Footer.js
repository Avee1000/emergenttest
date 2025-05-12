import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import LogoText from '../icons/LogoText';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const columns = [
    {
      title: 'Products',
      links: [
        { name: 'Spiritual Agents', href: '#products' },
        { name: 'Virtual Sacred Spaces', href: '#products' },
        { name: 'Engagement Dashboard', href: '#products' },
        { name: 'API & Integrations', href: '#' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Research Hub', href: '#research' },
        { name: 'Blog', href: '#blog' },
        { name: 'Case Studies', href: '#case-studies' },
        { name: 'Support Center', href: '#' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Leadership', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press Kit', href: '#press' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Ethics Framework', href: '#' },
        { name: 'Accessibility', href: '#' },
      ]
    }
  ];

  const socialLinks = [
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
    { icon: <FaLinkedinIn />, href: '#', label: 'LinkedIn' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
    { icon: <FaYoutube />, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-dark text-white">
      {/* Pre-Footer CTA */}
      <div className="container py-16 md:py-24">
        <motion.div 
          className="bg-primary rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariant}
        >
          <div className="mb-6 md:mb-0 text-center md:text-left max-w-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your community's spiritual journey?</h3>
            <p className="text-white text-opacity-80">Join organizations worldwide using SolaceVR to deepen engagement and expand their reach.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#demo" className="btn bg-white text-primary hover:bg-opacity-90">Book a Demo</a>
            <a href="#research" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10">Download Research</a>
          </div>
        </motion.div>
      </div>

      {/* Main Footer */}
      <div className="container py-12 md:py-16 border-t border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Logo and Info */}
          <div className="lg:col-span-2">
            <LogoText className="mb-6" />
            <p className="text-gray-400 mb-6 max-w-xs">
              Restoring Spirituality Through Technology. Creating AI-powered tools and immersive experiences for faith communities worldwide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 p-2.5 rounded-full hover:bg-primary transition-colors duration-300 text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Footer Columns */}
          {columns.map((column, index) => (
            <div key={index} className="flex flex-col">
              <h4 className="font-display font-bold text-lg mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {currentYear} SolaceVR. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            <a href="#" className="hover:text-white transition-colors duration-200">WeAreSolace.com</a>
          </p>
          <address className="mt-2 md:mt-0 not-italic">
            123 Tech Plaza, Suite 400, San Francisco, CA 94103
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
