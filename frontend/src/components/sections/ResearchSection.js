import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ResearchSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would send this data to your backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
  };

  return (
    <section 
      className="section relative py-20 md:py-32 overflow-hidden" 
      id="research"
      style={{ 
        backgroundImage: `url('https://images.unsplash.com/photo-1604011237320-8e0506614fdf')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-dark bg-opacity-80"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.p 
              variants={itemVariants}
              className="text-primary font-medium tracking-widest uppercase mb-3"
            >
              Research Hub
            </motion.p>
            <motion.h2 
              variants={itemVariants}
              className="text-white mb-6"
            >
              The Future of Spirituality in the Age of AI
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-gray-300 mb-8"
            >
              Our flagship research report examines how artificial intelligence and virtual reality are reshaping religious practice and spiritual connection in the digital age.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white border-opacity-10"
            >
              <h4 className="text-white text-xl mb-4 font-semibold">The report includes:</h4>
              <ul className="space-y-3">
                {[
                  'Comprehensive survey of 2,500+ religious leaders',
                  'Analysis of emerging trends in digital spirituality',
                  'Case studies from diverse faith traditions',
                  'Ethical framework for AI in religious contexts',
                  'Practical implementation guidance for communities'
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-gray-200">
                    <svg 
                      className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" 
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
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="flex items-center bg-primary bg-opacity-20 rounded-lg p-4 border-l-4 border-primary">
                <svg 
                  className="w-10 h-10 text-primary mr-4 flex-shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
                <p className="text-white">
                  As mentioned in <span className="font-semibold">AI 2027 Industry Report</span>: "SolaceVR represents the leading edge of compassionate technology in the spiritual sector."
                </p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            {!formSubmitted ? (
              <>
                <motion.h3 
                  variants={itemVariants}
                  className="text-2xl font-bold mb-6"
                >
                  Download Research Preview
                </motion.h3>
                <motion.form 
                  variants={itemVariants}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div>
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="form-label">Organization</label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Your organization"
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="form-label">Your Role</label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="form-input"
                    >
                      <option value="">Select your role</option>
                      <option value="clergy">Clergy/Faith Leader</option>
                      <option value="admin">Administrative Staff</option>
                      <option value="tech">Technology Team</option>
                      <option value="consultant">Consultant/Advisor</option>
                      <option value="academic">Academic/Researcher</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full btn-primary"
                    >
                      Get Instant Access
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    By submitting this form, you agree to our <a href="#" className="text-primary hover:underline">Privacy Policy</a> and to receive updates from SolaceVR.
                  </p>
                </motion.form>
              </>
            ) : (
              <motion.div 
                className="text-center py-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg 
                    className="w-10 h-10 text-green-500" 
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
                <p className="text-gray-600 mb-6">
                  Your download link has been sent to your email. Check your inbox for immediate access to our research preview.
                </p>
                <a 
                  href="#blog" 
                  className="text-primary font-medium hover:underline"
                >
                  Explore our latest blog posts →
                </a>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
