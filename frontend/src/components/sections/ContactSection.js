import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';

const ContactSection = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

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

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setIsSubmitSuccessful(false);
    }
  }, [isSubmitSuccessful, reset]);

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

  const onSubmit = (data) => {
    if (currentStep < 3) {
      setFormData({...formData, ...data});
      setCurrentStep(currentStep + 1);
      reset(data); // Keep the data but reset validation state
    } else {
      const finalData = {...formData, ...data};
      console.log('Form submitted:', finalData);
      // Here you would typically send the data to your backend
      setIsSubmitSuccessful(true);
      setCurrentStep(4); // Move to thank you step
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Define form steps
  const formSteps = [
    {
      title: "Tell us about yourself",
      fields: (
        <>
          <div className="mb-5">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              id="name"
              className={`form-input ${errors.name ? 'border-red-500' : ''}`}
              placeholder="Your full name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              id="email"
              type="email"
              className={`form-input ${errors.email ? 'border-red-500' : ''}`}
              placeholder="Your email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input
              {...register("phone", { required: "Phone number is required" })}
              id="phone"
              className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
              placeholder="Your phone number"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>
        </>
      )
    },
    {
      title: "About your organization",
      fields: (
        <>
          <div className="mb-5">
            <label htmlFor="organization" className="form-label">Organization Name</label>
            <input
              {...register("organization", { required: "Organization name is required" })}
              id="organization"
              className={`form-input ${errors.organization ? 'border-red-500' : ''}`}
              placeholder="Your organization"
            />
            {errors.organization && <p className="text-red-500 text-sm mt-1">{errors.organization.message}</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="role" className="form-label">Your Role</label>
            <select
              {...register("role", { required: "Role is required" })}
              id="role"
              className={`form-input ${errors.role ? 'border-red-500' : ''}`}
            >
              <option value="">Select your role</option>
              <option value="clergy">Clergy/Faith Leader</option>
              <option value="admin">Administrative Staff</option>
              <option value="tech">Technology Team</option>
              <option value="consultant">Consultant/Advisor</option>
              <option value="other">Other</option>
            </select>
            {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="size" className="form-label">Organization Size</label>
            <select
              {...register("size", { required: "Organization size is required" })}
              id="size"
              className={`form-input ${errors.size ? 'border-red-500' : ''}`}
            >
              <option value="">Select organization size</option>
              <option value="1-50">1-50 members</option>
              <option value="51-200">51-200 members</option>
              <option value="201-500">201-500 members</option>
              <option value="501-1000">501-1000 members</option>
              <option value="1000+">1000+ members</option>
            </select>
            {errors.size && <p className="text-red-500 text-sm mt-1">{errors.size.message}</p>}
          </div>
        </>
      )
    },
    {
      title: "Your interests",
      fields: (
        <>
          <div className="mb-5">
            <label className="form-label">Products of Interest</label>
            <div className="space-y-3 mt-2">
              <div className="flex items-start">
                <input
                  {...register("interestedIn.spiritualAgents")}
                  id="spiritualAgents"
                  type="checkbox"
                  className="mt-1 mr-3"
                />
                <label htmlFor="spiritualAgents" className="cursor-pointer">
                  <span className="font-medium block">AI-Powered Spiritual Agents</span>
                  <span className="text-sm text-gray-600">Intelligent assistants for faith questions and guidance</span>
                </label>
              </div>
              
              <div className="flex items-start">
                <input
                  {...register("interestedIn.virtualSpaces")}
                  id="virtualSpaces"
                  type="checkbox"
                  className="mt-1 mr-3"
                />
                <label htmlFor="virtualSpaces" className="cursor-pointer">
                  <span className="font-medium block">Virtual Sacred Spaces</span>
                  <span className="text-sm text-gray-600">3D/VR environments for worship and meditation</span>
                </label>
              </div>
              
              <div className="flex items-start">
                <input
                  {...register("interestedIn.analytics")}
                  id="analytics"
                  type="checkbox"
                  className="mt-1 mr-3"
                />
                <label htmlFor="analytics" className="cursor-pointer">
                  <span className="font-medium block">Engagement Dashboard</span>
                  <span className="text-sm text-gray-600">Analytics and insights for community engagement</span>
                </label>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="form-label">Anything else you'd like to share?</label>
            <textarea
              {...register("message")}
              id="message"
              rows="4"
              className="form-input"
              placeholder="Tell us about your specific needs or questions"
            ></textarea>
          </div>

          <div className="mb-5">
            <label htmlFor="referral" className="form-label">How did you hear about us?</label>
            <select
              {...register("referral")}
              id="referral"
              className="form-input"
            >
              <option value="">Select an option</option>
              <option value="search">Search Engine</option>
              <option value="social">Social Media</option>
              <option value="conference">Conference/Event</option>
              <option value="recommendation">Colleague Recommendation</option>
              <option value="press">Press/Media</option>
              <option value="other">Other</option>
            </select>
          </div>
        </>
      )
    }
  ];

  return (
    <section className="section bg-white relative py-20 md:py-32" id="contact">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-5 pointer-events-none"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485')` }}
      />
      
      <div className="container relative z-10">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-5xl mx-auto"
        >
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <p className="text-primary font-medium tracking-widest uppercase mb-3">Contact Us</p>
            <h2 className="mb-6">Ready to Transform Your Community's Spiritual Experience?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Schedule a personalized demo to see how SolaceVR can help your organization create meaningful digital connections and enhance your spiritual ministry.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Form Side */}
              <div className="lg:col-span-8 p-8 md:p-12">
                {currentStep < 4 ? (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-8">
                      <div className="flex items-center">
                        {[1, 2, 3].map((step) => (
                          <React.Fragment key={step}>
                            <div 
                              className={`relative flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                                step === currentStep
                                  ? 'border-primary bg-primary text-white'
                                  : step < currentStep
                                  ? 'border-primary bg-white text-primary'
                                  : 'border-gray-300 bg-gray-100 text-gray-400'
                              }`}
                            >
                              {step < currentStep ? (
                                <svg 
                                  className="w-5 h-5" 
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
                              ) : (
                                <span>{step}</span>
                              )}
                            </div>
                            {step < 3 && (
                              <div 
                                className={`flex-1 h-0.5 mx-2 ${
                                  step < currentStep ? 'bg-primary' : 'bg-gray-300'
                                }`}
                              ></div>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                      <h3 className="text-2xl font-bold mt-6 mb-2">{formSteps[currentStep - 1].title}</h3>
                      <p className="text-gray-600">Step {currentStep} of 3</p>
                    </div>

                    {formSteps[currentStep - 1].fields}

                    <div className="flex justify-between mt-8">
                      {currentStep > 1 && (
                        <button
                          type="button"
                          onClick={handlePrevious}
                          className="btn bg-gray-200 text-gray-800 hover:bg-gray-300"
                        >
                          Back
                        </button>
                      )}
                      <button
                        type="submit"
                        className={`btn-primary ${currentStep === 1 ? 'ml-auto' : ''}`}
                      >
                        {currentStep === 3 ? 'Submit Request' : 'Continue'}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-12">
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
                    <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                    <p className="text-gray-600 mb-6">
                      Your demo request has been submitted successfully. A member of our team will be in touch within 24 hours to schedule your personalized demo.
                    </p>
                    <p className="text-gray-600">
                      In the meantime, why not explore our 
                      <a href="#research" className="text-primary hover:underline mx-1">
                        research
                      </a>
                      or
                      <a href="#case-studies" className="text-primary hover:underline mx-1">
                        case studies
                      </a>
                      ?
                    </p>
                  </div>
                )}
              </div>
              
              {/* Info Side */}
              <div className="lg:col-span-4 bg-primary text-white p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  
                  <div className="space-y-4 mb-10">
                    <div className="flex items-start">
                      <svg 
                        className="w-6 h-6 mr-3 mt-0.5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                        />
                      </svg>
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:info@solacevr.com" className="text-white text-opacity-80 hover:text-opacity-100">info@solacevr.com</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg 
                        className="w-6 h-6 mr-3 mt-0.5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                        />
                      </svg>
                      <div>
                        <p className="font-medium">Phone</p>
                        <a href="tel:+15557890123" className="text-white text-opacity-80 hover:text-opacity-100">(555) 789-0123</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg 
                        className="w-6 h-6 mr-3 mt-0.5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                        />
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                        />
                      </svg>
                      <address className="not-italic">
                        <p className="font-medium">Address</p>
                        <p className="text-white text-opacity-80">
                          123 Tech Plaza, Suite 400<br />
                          San Francisco, CA 94103
                        </p>
                      </address>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white bg-opacity-10 rounded-xl p-6">
                  <p className="font-medium mb-2">Calendly</p>
                  <p className="text-white text-opacity-80 mb-4">
                    Want to skip the form? Schedule a meeting directly through our calendar.
                  </p>
                  <a 
                    href="#calendly" 
                    className="block text-center py-3 px-4 bg-white text-primary rounded-xl font-medium hover:bg-opacity-90 transition-colors duration-300"
                  >
                    Open Calendar
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
