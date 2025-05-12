import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Tab } from '@headlessui/react';

const ProductsSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const tabContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  const products = [
    {
      id: 1,
      name: 'Spiritual Agents',
      description: 'AI-powered assistants trained with denominational scholars, capable of answering doctrinal questions and leading prayers in accordance with specific faith traditions.',
      features: [
        'Natural conversation about faith topics',
        'Multi-denominational theological training',
        'Available 24/7 for spiritual guidance',
        'Customizable to your community\'s beliefs',
        'Transparent sources for all responses'
      ],
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
      alt: 'Tree with sunlight representing spiritual connection'
    },
    {
      id: 2,
      name: 'Virtual Sacred Spaces',
      description: 'Photorealistic 3D/VR environments that recreate chapels, temples, mosques, gurudwaras, and meditation halls accessible through VR headsets or any browser.',
      features: [
        'High-fidelity sacred space recreations',
        'Cross-platform accessibility (VR, desktop, mobile)',
        'Communal or private spiritual experiences',
        'Guided meditation and prayer experiences',
        'Customizable architecture and aesthetics'
      ],
      image: 'https://images.unsplash.com/photo-1616940779493-6958fbd615fe',
      alt: 'Peaceful indoor sacred space with plants'
    },
    {
      id: 3,
      name: 'Engagement Dashboard',
      description: 'Analytics platform that helps clergy and community leaders track engagement, understand content resonance, and make data-informed decisions for pastoral care.',
      features: [
        'Comprehensive engagement metrics',
        'Content effectiveness analysis',
        'Community participation tracking',
        'Pastoral care prioritization tools',
        'Privacy-first data collection'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      alt: 'Data analytics dashboard on laptop'
    }
  ];

  return (
    <section className="section bg-white" id="products">
      <div className="container">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.p 
            variants={itemVariants}
            className="text-primary font-medium tracking-widest uppercase mb-2"
          >
            Our Products
          </motion.p>
          <motion.h2 
            variants={itemVariants}
            className="mb-6"
          >
            Transformative Solutions for Faith Communities
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-600"
          >
            Our suite of technology solutions helps faith communities connect with their members in meaningful ways, expanding reach while deepening engagement.
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="max-w-6xl mx-auto"
        >
          <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <Tab.List className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-2 space-y-2 md:space-y-0 mb-10">
              {products.map((product) => (
                <Tab
                  key={product.id}
                  className={({ selected }) =>
                    `flex-1 py-3 px-4 text-lg font-medium rounded-xl transition-all duration-300 focus:outline-none
                    ${selected 
                      ? 'bg-primary text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`
                  }
                >
                  {product.name}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="bg-gray-50 rounded-3xl p-6 md:p-10">
              <AnimatePresence mode="wait">
                {products.map((product, idx) => (
                  <Tab.Panel
                    key={product.id}
                    static
                    className={idx === selectedIndex ? 'block' : 'hidden'}
                  >
                    <motion.div
                      variants={tabContentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="flex flex-col md:flex-row gap-10"
                    >
                      <div className="md:w-1/2">
                        <div className="rounded-2xl overflow-hidden h-80">
                          <img 
                            src={product.image} 
                            alt={product.alt} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:w-1/2">
                        <h3 className="text-3xl font-bold mb-4">{product.name}</h3>
                        <p className="text-gray-600 mb-6">{product.description}</p>
                        <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <svg 
                                className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" 
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
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-8">
                          <a href="#demo" className="btn-primary">
                            Schedule a Demo
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </Tab.Panel>
                ))}
              </AnimatePresence>
            </Tab.Panels>
          </Tab.Group>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
