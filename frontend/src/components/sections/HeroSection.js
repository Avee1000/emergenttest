import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden" id="hero">
      {/* Video Background */}
      <div className="hero-video-container">
        <img 
          src="https://images.unsplash.com/photo-1660312829285-581db72a3e46" 
          alt="Sacred virtual space" 
          className="hero-video"
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-3xl text-white"
        >
          <motion.h1 
            variants={itemVariants} 
            className="mb-6"
          >
            Experience the Next Era of Spiritual Connection
          </motion.h1>
          
          <motion.p 
            variants={itemVariants} 
            className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl"
          >
            SolaceVR blends compassionate theology with cutting-edge AI and immersive VR to re-energize global faith practice for communities worldwide.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#demo" 
              className="btn-primary"
            >
              Book a Demo
            </a>
            <a 
              href="#research" 
              className="btn bg-white bg-opacity-10 text-white border border-white border-opacity-20 backdrop-blur-sm hover:bg-opacity-20"
            >
              Download Research Preview
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <p className="text-white/60 text-sm mb-2">Scroll to explore</p>
        <div className="w-5 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
          <motion.div 
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ 
              y: [0, 13, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
