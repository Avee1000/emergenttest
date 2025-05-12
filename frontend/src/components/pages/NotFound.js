import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const NotFound = () => {
  return (
    <div className="App">
      <Navbar />
      <div 
        className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1464802686167-b939a6910659")' }}
      >
        <div className="absolute inset-0 bg-dark bg-opacity-70 z-0"></div>
        
        <motion.div 
          className="glass-morphism rounded-3xl p-8 md:p-12 max-w-2xl text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            404
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Page Not Found
          </motion.h2>
          
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-gray-300 text-lg mb-3">
              "The universe is full of magical things patiently waiting for our wits to grow sharper."
            </p>
            <p className="text-gray-400 italic">— Eden Phillpotts</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a 
              href="/" 
              className="btn-primary inline-block mx-auto"
            >
              Return Home
            </a>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
