import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CaseStudiesSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
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

  const caseStudies = [
    {
      id: 1,
      title: "LDS Ward Digital Transformation",
      description: "A Mormon ward in Salt Lake City integrated SolaceVR's AI spiritual agents into their youth ministry, creating a safe space for young members to explore their faith.",
      quote: "The combination of AI-guided discussion and immersive sacred spaces has revolutionized how our youth engage with the gospel.",
      author: "Bishop David Henderson",
      role: "Ward President",
      metrics: [
        { value: 68, label: "Increase in Youth Participation", suffix: "%" },
        { value: 4.8, label: "Average User Satisfaction Score", suffix: "/5" },
        { value: 32, label: "Weekly Hours of Engagement", suffix: "hrs" }
      ],
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
      alt: "Clean, modern church interior"
    },
    {
      id: 2,
      title: "ELCA Parish Community Building",
      description: "An Evangelical Lutheran Church in America parish used SolaceVR's virtual sacred spaces to maintain connection with homebound members and expand their reach.",
      quote: "SolaceVR has enabled us to create a truly inclusive worship community that extends beyond our physical building's limitations.",
      author: "Rev. Sarah Johnson",
      role: "Parish Pastor",
      metrics: [
        { value: 41, label: "New Remote Participants", suffix: "%" },
        { value: 28, label: "Administrative Time Saved", suffix: "%" },
        { value: 3.2, label: "Times Higher Engagement Rate", suffix: "x" }
      ],
      image: "https://images.unsplash.com/photo-1525104171570-308e54169ae1",
      alt: "Traditional church pews"
    },
    {
      id: 3,
      title: "Catholic Retreat Center Integration",
      description: "A Catholic retreat center in Boston implemented SolaceVR's complete suite to extend their ministry beyond physical retreats, creating year-round engagement.",
      quote: "The analytics dashboard has transformed how we understand our community's spiritual needs and helped us create more meaningful programming.",
      author: "Sister Maria Thomasina",
      role: "Retreat Director",
      metrics: [
        { value: 234, label: "Monthly Virtual Retreatants", suffix: "" },
        { value: 52, label: "Weeks of Extended Engagement", suffix: "" },
        { value: 19, label: "Rise in Digital Engagement", suffix: "%" }
      ],
      image: "https://images.unsplash.com/photo-1569758884145-6a2e8a00e539",
      alt: "Ornate Catholic church interior"
    },
    {
      id: 4,
      title: "Interfaith College Campus Ministry",
      description: "A diverse campus ministry at Stanford used SolaceVR to create interfaith dialogue spaces and provide personalized spiritual guidance for students.",
      quote: "In our diverse campus community, SolaceVR has helped create common ground while respecting the unique theological perspectives of different faith traditions.",
      author: "Dr. Amrita Patel",
      role: "Interfaith Program Director",
      metrics: [
        { value: 8, label: "Faith Traditions Represented", suffix: "" },
        { value: 72, label: "Student Retention Rate", suffix: "%" },
        { value: 3, label: "Campus Awards for Innovation", suffix: "" }
      ],
      image: "https://images.unsplash.com/photo-1745647591090-6dcac361600d",
      alt: "Diverse religious gathering"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="section bg-dark text-white" id="case-studies">
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
            Case Studies
          </motion.p>
          <motion.h2 
            variants={itemVariants}
            className="mb-6 text-white"
          >
            Success Stories From Our Community
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-300"
          >
            See how religious organizations worldwide are using SolaceVR to transform their communities, deepen engagement, and expand their reach.
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="max-w-6xl mx-auto"
        >
          <Slider {...settings}>
            {caseStudies.map((study, index) => (
              <div key={study.id} className="outline-none">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-900 rounded-3xl p-8 md:p-10 overflow-hidden">
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">{study.title}</h3>
                      <p className="text-gray-300 mb-6">{study.description}</p>
                      
                      <div className="mb-8 pl-4 border-l-4 border-primary">
                        <blockquote className="italic text-gray-300 text-lg mb-3">"{study.quote}"</blockquote>
                        <div className="flex items-center">
                          <div>
                            <p className="font-medium text-white">{study.author}</p>
                            <p className="text-gray-400 text-sm">{study.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-gray-800 rounded-xl p-4 text-center">
                          <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                            {metric.value}{metric.suffix}
                          </div>
                          <p className="text-gray-400 text-sm">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="h-64 md:h-auto rounded-xl overflow-hidden relative">
                    <img 
                      src={study.image} 
                      alt={study.alt} 
                      className="w-full h-full object-cover transition-transform duration-10000 ease-in-out"
                      style={{ 
                        transform: 'scale(1.05)', 
                        transformOrigin: index % 2 === 0 ? 'center left' : 'center right' 
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
