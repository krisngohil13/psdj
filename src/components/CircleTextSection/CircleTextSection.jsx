import React, { useRef } from 'react';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';
import styles from './circleTextSection.module.css';
import interior1 from '../../assets/images/1.jpg';
import { Link } from 'react-router-dom';

const CircleTextSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgShapeY = useTransform(scrollYProgress, [0, 1], ["-10%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  // Create array of particles
  const particles = Array.from({ length: 15 }, (_, index) => (
    <Motion.div
      key={index}
      className={`${styles.particle} ${styles[`particle${index + 1}`]}`}
      initial={{ 
        opacity: 0,
        scale: 0.5,
        x: (index % 2 === 0 ? -20 : 20)
      }}
      whileInView={{ 
        opacity: [0.2, 0.4, 0.2],
        scale: [1, 1.2, 1],
        x: 0
      }}
      transition={{
        duration: 3 + (index * 0.2),
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.1
      }}
    />
  ));

  return (
    <section ref={sectionRef} className={styles.section}>
      {/* Title Section */}
      <div className={styles.titleSection}>
        <h1 className={styles.mainTitle}>
          For those who seek{" "}
          <Motion.span 
            className={styles.highlightText}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.8 }}
            variants={{
              hidden: { opacity: 0.8 },
              visible: { opacity: 1 }
            }}
          >
            beauty
            <Motion.div
              className={styles.underline}
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              viewport={{ once: false, amount: 0.8 }}
              variants={{
                hidden: { scaleX: 0 },
                visible: { 
                  scaleX: 1,
                  transition: {
                    duration: 1.2,
                    ease: "easeOut"
                  }
                }
              }}
            />
          </Motion.span>{" "}
          in every corner, we{" "}
          <Motion.span 
            className={styles.highlightText}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.8 }}
            variants={{
              hidden: { opacity: 0.8 },
              visible: { opacity: 1 }
            }}
          >
           design
            <Motion.div
              className={styles.underline}
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              viewport={{ once: false, amount: 0.8 }}
              variants={{
                hidden: { scaleX: 0 },
                visible: { 
                  scaleX: 1,
                  transition: {
                    duration: 1.2,
                    ease: "easeOut"
                  }
                }
              }}
            />
          </Motion.span>{" "}
          with care
        </h1>
      </div>

      <div className={styles.container}>
        {/* Image Side */}
        <div className={styles.imageContainer}>
          {/* Background Shape */}
          <Motion.div 
            className={styles.backgroundShape}
            style={{ y: bgShapeY }}
          />
          
          {/* Particles Container */}
          <div className={styles.particlesContainer}>
            {particles}
          </div>

          {/* Main Image */}
          <Motion.div 
            className={styles.imageWrapper}
            style={{ y: imageY }}
          >
            <img src={interior1} alt="Interior Design Process" />
          </Motion.div>
        </div>

        {/* Text Side */}
        <Motion.div 
          className={styles.textContainer}
          style={{ y: textY, opacity }}
        >
          <div className={styles.quoteContent}>
            <p className={styles.quote}>
              "Great design is about listening. We listen to our clients and find solutions with them, not for them. That's how we deliver seamless design from the very first foundation to the final stitch."
            </p>
            <div className={styles.author}>
              <h3>Graham Harris</h3>
              <p>Founder Partner & Managing Director</p>
            </div>
            <Link to="/services" className={styles.expertiseLink}>
              Our expertise
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className={styles.arrow}
              >
                <path 
                  d="M5 12H19M19 12L12 5M19 12L12 19" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default CircleTextSection; 