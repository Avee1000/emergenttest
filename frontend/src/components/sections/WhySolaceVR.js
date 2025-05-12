import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhySolaceVR = () => {
  // Define array of features
  const features = [
    {
      title: "Faithful",
      description: "Developed with denominational scholars, ensuring content aligned with diverse theological traditions.",
      imageUrl: "https://images.unsplash.com/photo-1591696331111-ef9586a5b17a",
      alt: "Typewriter with text symbolizing faithful content"
    },
    {
      title: "Scalable",
      description: "From small congregations to global networks, our platform scales to meet communities of any size.",
      imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
      alt: "Robot on bench representing AI scalability"
    },
    {
      title: "Transparent",
      description: "Complete audit trails and doctrinal provenance for all content, ensuring trust and accountability.",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      alt: "Code on laptop representing transparent technology"
    }
  ];

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

  return (
    <section className="section bg-light relative overflow-hidden" id="why-solace">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50"></div>
      
      <div className="container relative z-10">
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
            Why SolaceVR
          </motion.p>
          <motion.h2 
            variants={itemVariants}
            className="mb-6"
          >
            The Future of Faith is Here
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 max-w-3xl mx-auto"
          >
            SolaceVR combines compassionate theology with cutting-edge technology to create a new paradigm for spiritual connection and community engagement.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card card-3d group"
            >
              <div className="card-3d-content">
                <div className="bg-gray-100 rounded-xl overflow-hidden mb-6 h-56">
                  <img 
                    src={feature.imageUrl} 
                    alt={feature.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySolaceVR;
