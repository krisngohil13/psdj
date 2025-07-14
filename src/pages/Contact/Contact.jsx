import React, { useRef, useState } from 'react';
import { motion as Motion, useScroll, useTransform, useSpring } from 'framer-motion';
import styles from './Contact.module.css';
import contactImage from '../../assets/images/1.jpg';

const Contact = () => {
  const containerRef = useRef(null);
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax transforms
  const heroY = useTransform(smoothProgress, [0, 1], ['0%', '25%']);
  const patternY = useTransform(smoothProgress, [0, 1], ['0%', '15%']);
  const formOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0.9]);

  // Create array of particles with different positions
  const particles = Array.from({ length: 12 }, (_, index) => {
    const style = {
      width: `${Math.random() * 10 + 5}px`,
      height: `${Math.random() * 10 + 5}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 0.5}s`
    };
    return (
      <Motion.div
        key={index}
        className={styles.particle}
        style={style}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8 + index,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.5,
        }}
      />
    );
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  return (
    <div ref={containerRef} className={styles.contactPage}>
      {/* Background Pattern */}
      <Motion.div 
        className={styles.backgroundPattern}
        style={{ y: patternY }}
      />
      
      {/* Decorative Shapes Container */}
      <div className={styles.shapesContainer}>
        {/* Logo-inspired shapes */}
        <Motion.div className={styles.logoShapes}>
          <Motion.div 
            className={`${styles.shape} ${styles.shape1}`}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <Motion.div 
            className={`${styles.shape} ${styles.shape2}`}
            animate={{
              rotate: [0, -360],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <Motion.div 
            className={`${styles.shape} ${styles.shape3}`}
            animate={{
              rotate: [0, 180, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <Motion.div 
            className={`${styles.shape} ${styles.shape4}`}
            animate={{
              rotate: [0, -180, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </Motion.div>

        {/* Animated Particles */}
        {particles}
      </div>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <Motion.div 
          className={styles.heroContent}
          style={{ y: heroY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.titleWrapper}>
            <span className={styles.subTitle}>Get in Touch</span>
            <h1 className={styles.mainTitle}>
              <span className={styles.titleLight}>Let's Create</span>
              <span className={styles.titleBold}>Your Dream Space</span>
            </h1>
            <div className={styles.headerDivider}></div>
            <p className={styles.headerDescription}>
              Transform your vision into reality with our expert team. We're here to bring your interior dreams to life.
            </p>
          </div>
        </Motion.div>
      </section>

      {/* Contact Form Section */}
      <Motion.section 
        className={styles.contactSection}
        style={{ opacity: formOpacity }}
      >
        <div className={styles.contactWrapper}>
          {/* Form Side */}
          <Motion.div 
            className={styles.formContainer}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.sectionTitle}>Send us a Message</h2>
            <form 
              className={styles.contactForm}
              onSubmit={handleSubmit}
            >
              <div className={styles.inputGroup}>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                  placeholder="Your Name" 
                />
              </div>
              <div className={styles.inputGroup}>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                  placeholder="Your Email" 
                />
              </div>
              <div className={styles.inputGroup}>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your Phone (Optional)" 
                />
              </div>
              <div className={styles.inputGroup}>
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4} 
                  required 
                  placeholder="Tell us about your project..." 
                />
              </div>
              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={formStatus === 'submitting'}
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                <span className={styles.btnArrow}>→</span>
              </button>
            </form>
          </Motion.div>

          {/* Details Side */}
          <Motion.div 
            className={styles.detailsContainer}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.detailsContent}>
              <h2 className={styles.sectionTitle}>Contact Details</h2>
              <div className={styles.detailsGrid}>
                <div className={styles.detailItem}>
                  <span className={styles.detailIcon}>📍</span>
                  <div className={styles.detailText}>
                    <h3>Visit Us</h3>
                    <p>123, PSDJ Studio, Main Street<br />Mumbai, India</p>
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailIcon}>📞</span>
                  <div className={styles.detailText}>
                    <h3>Call Us</h3>
                    <p>+91 12345 67890</p>
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailIcon}>✉️</span>
                  <div className={styles.detailText}>
                    <h3>Email Us</h3>
                    <p>info@psdjinterior.com</p>
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailIcon}>🕒</span>
                  <div className={styles.detailText}>
                    <h3>Working Hours</h3>
                    <p>Mon - Sat: 10:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <Motion.div 
              className={styles.imageContainer}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img src={contactImage} alt="PSDJ Interior" className={styles.detailsImage} />
              <div className={styles.imageOverlay}></div>
            </Motion.div>
          </Motion.div>
        </div>
      </Motion.section>
    </div>
  );
};

export default Contact; 