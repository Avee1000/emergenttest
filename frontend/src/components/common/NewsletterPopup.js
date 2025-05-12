import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Show popup after 45 seconds
    const timer = setTimeout(() => {
      // Check if user has already subscribed via local storage
      const hasSubscribed = localStorage.getItem('solacevr_newsletter_subscribed');
      if (!hasSubscribed) {
        setIsOpen(true);
      }
    }, 45000);

    return () => clearTimeout(timer);
  }, []);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      setError('Email is required');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Here you would typically send this to your backend or newsletter service
    console.log('Newsletter signup:', email);
    
    // Set as submitted and store in local storage
    setIsSubmitted(true);
    localStorage.setItem('solacevr_newsletter_subscribed', 'true');
    
    // Close popup after 3 seconds
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-dark bg-opacity-70 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="bg-white rounded-3xl overflow-hidden w-full max-w-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <div className="relative">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
                aria-label="Close newsletter popup"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
              
              <div className="flex flex-col md:flex-row">
                <div 
                  className="bg-primary md:w-2/5 py-6 px-6 flex items-center justify-center"
                  style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1642759464832-5d8290d987fd')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="relative z-10 text-white text-center p-4">
                    <h3 className="text-2xl font-bold mb-2">Stay Connected</h3>
                    <p>Join the future of spiritual technology</p>
                  </div>
                  <div className="absolute inset-0 bg-primary opacity-80"></div>
                </div>
                
                <div className="p-6 md:p-8 md:w-3/5">
                  {!isSubmitted ? (
                    <>
                      <h3 className="text-2xl font-bold mb-2">Join Our Newsletter</h3>
                      <p className="text-gray-600 mb-6">
                        Get the latest updates on SolaceVR and the future of #GodTech and #FaithTech.
                      </p>
                      
                      <form onSubmit={handleSubmit}>
                        <div className="mb-5">
                          <label htmlFor="email" className="form-label">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                              setError('');
                            }}
                            className={`form-input ${error ? 'border-red-500' : ''}`}
                            placeholder="your@email.com"
                          />
                          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                        </div>
                        
                        <button
                          type="submit"
                          className="w-full btn-primary"
                        >
                          Subscribe Now
                        </button>
                        
                        <p className="text-xs text-gray-500 text-center mt-4">
                          We respect your privacy. Unsubscribe at any time.
                        </p>
                      </form>
                    </>
                  ) : (
                    <div className="text-center py-6">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg 
                          className="w-8 h-8 text-green-500" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                      <p className="text-gray-600">
                        You've been successfully subscribed to our newsletter.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewsletterPopup;
