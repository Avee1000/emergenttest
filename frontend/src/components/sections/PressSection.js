import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFileAlt, FaNewspaper, FaMicrophone, FaVideo } from 'react-icons/fa';

const PressSection = () => {
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
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const pressResources = [
    {
      title: "Media Kit",
      icon: <FaFileAlt className="w-8 h-8" />,
      description: "Download logos, product images, founder bios, and approved messaging.",
      link: "#",
      color: "bg-primary"
    },
    {
      title: "Press Releases",
      icon: <FaNewspaper className="w-8 h-8" />,
      description: "Browse our latest announcements and company news.",
      link: "#",
      color: "bg-secondary"
    },
    {
      title: "Podcast Features",
      icon: <FaMicrophone className="w-8 h-8" />,
      description: "Listen to interviews with our leadership team.",
      link: "#",
      color: "bg-accent"
    },
    {
      title: "Keynote Clips",
      icon: <FaVideo className="w-8 h-8" />,
      description: "Watch highlights from our conference presentations.",
      link: "#",
      color: "bg-primary"
    }
  ];

  const quotes = [
    {
      quote: "SolaceVR represents a bold step forward in how we think about the intersection of technology and spirituality.",
      author: "Dr. Maya Patel",
      role: "Professor of Religious Studies, Harvard University"
    },
    {
      quote: "In our increasingly digital world, SolaceVR has found a way to make faith practice more accessible without sacrificing depth or authenticity.",
      author: "Rabbi Joshua Goldstein",
      role: "Interfaith Technology Council"
    },
    {
      quote: "The ethical framework SolaceVR has built into their AI spiritual agents should become the industry standard.",
      author: "Imam Fareed Abdullah",
      role: "Director, Center for Digital Ethics"
    },
    {
      quote: "What impresses me most about SolaceVR is how they've managed to create technology that doesn't replace human connection but rather enhances it.",
      author: "Sister Maria Thérèse",
      role: "Catholic Digital Initiatives"
    },
    {
      quote: "Their data-driven approach to spiritual engagement provides invaluable insights while maintaining the highest standards of privacy and respect.",
      author: "Dr. Thomas Chen",
      role: "Buddhist Technology Association"
    },
    {
      quote: "SolaceVR's virtual sacred spaces have allowed our global community to gather in ways we never thought possible.",
      author: "Pastor Sarah Johnson",
      role: "New Life Digital Church"
    }
  ];

  return (
    <section 
      className="section relative py-20 md:py-32" 
      id="press"
      style={{ 
        backgroundImage: `url('https://images.unsplash.com/photo-1642759464832-5d8290d987fd')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark"></div>
      
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
            className="text-primary font-medium tracking-widest uppercase mb-3"
          >
            Press & Thought Leadership
          </motion.p>
          <motion.h2 
            variants={itemVariants}
            className="text-white mb-6"
          >
            Making Headlines in the GodTech Space
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-300"
          >
            SolaceVR is at the forefront of the conversation about the future of faith and technology. Explore our resources for media, researchers, and thought leaders.
          </motion.p>
        </motion.div>

        {/* Press Resources */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {pressResources.map((resource, index) => (
            <motion.a
              variants={itemVariants}
              key={index}
              href={resource.link}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-10 hover:bg-opacity-15 transition-all duration-300 group"
            >
              <div className={`${resource.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                {resource.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
              <p className="text-gray-300 mb-4">{resource.description}</p>
              <div className="text-primary font-medium flex items-center">
                <span>Access now</span>
                <svg 
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
                  />
                </svg>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Quote Wall */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-5xl mx-auto"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-white text-center mb-10"
          >
            Voices from the Field
          </motion.h3>
          
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {quotes.map((quote, index) => (
              <div 
                key={index} 
                className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-5"
              >
                <blockquote className="italic text-gray-300 mb-4">"{quote.quote}"</blockquote>
                <div>
                  <p className="font-medium text-white">{quote.author}</p>
                  <p className="text-primary text-sm">{quote.role}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PressSection;
