import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('solacevr_cookies_accepted');
    if (!hasAccepted) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('solacevr_cookies_accepted', 'all');
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem('solacevr_cookies_accepted', 'essential');
    setIsVisible(false);
  };

  const openSettings = () => {
    // In a real implementation, this would open a more detailed cookie settings modal
    console.log('Open cookie settings');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200"
        >
          <div className="container mx-auto px-4 py-4 md:py-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2">We Value Your Privacy</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                  By clicking "Accept All", you consent to our use of cookies. 
                  <button 
                    onClick={openSettings}
                    className="text-primary hover:underline focus:outline-none ml-1"
                  >
                    Cookie Policy
                  </button>
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={acceptEssential}
                  className="btn bg-gray-200 text-gray-800 hover:bg-gray-300 text-sm py-2"
                >
                  Essential Only
                </button>
                <button
                  onClick={acceptAll}
                  className="btn-primary text-sm py-2"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
