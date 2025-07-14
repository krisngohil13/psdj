import React, { useRef, useState, useEffect } from 'react';
import { motion as Motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import styles from './hero.module.css';

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);

  const titles = [
    { first: "INTERIOR", second: "ARCHITECTURE" },
    { first: "MODERN", second: "DESIGNS" },
    { first: "LUXURY", second: "LIVING" },
    { first: "CREATIVE", second: "SPACES" }
  ];

  const subtitles = [
    "Creating exceptional spaces that inspire",
    "Transforming visions into reality",
    "Where innovation meets elegance",
    "Designing tomorrow's living spaces"
  ];

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 6000);

    const subtitleInterval = setInterval(() => {
      setCurrentSubtitleIndex((prev) => (prev + 1) % subtitles.length);
    }, 6000);

    return () => {
      clearInterval(titleInterval);
      clearInterval(subtitleInterval);
    };
  }, []);

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transform values for scroll effects
  const titleScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section 
      ref={containerRef}
      className={styles.hero}
    >
      {/* Background pattern with parallax effect */}
      <Motion.div 
        className={styles.backgroundPattern}
        style={{ y: backgroundY }}
      >
        <div className={styles.dotPattern}></div>
      </Motion.div>

      {/* Main content */}
      <Motion.div 
        className={styles.contentWrapper}
        style={{ 
          scale: titleScale,
          opacity: titleOpacity,
        }}
        ref={textRef}
      >
        <Motion.div
          className={styles.textContainer}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className={styles.title}>
            <AnimatePresence mode="wait">
              <Motion.span
                key={`first-${currentTitleIndex}`}
                className={styles.titleFirst}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {titles[currentTitleIndex].first}
              </Motion.span>
              <Motion.span
                key={`second-${currentTitleIndex}`}
                className={styles.titleSecond}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {titles[currentTitleIndex].second}
              </Motion.span>
            </AnimatePresence>
          </h1>
          
          <Motion.div
            className={styles.subtitleWrapper}
          >
            <AnimatePresence mode="wait">
              <Motion.p 
                key={currentSubtitleIndex}
                className={styles.subtitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {subtitles[currentSubtitleIndex]}
              </Motion.p>
            </AnimatePresence>
          </Motion.div>
        </Motion.div>
      </Motion.div>

      {/* Scroll indicator */}
      <Motion.div 
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          delay: 2
        }}
      >
        <div className={styles.scrollContent}>
          <span className={styles.scrollText}>SCROLL</span>
          <div className={styles.scrollBox}>
            <Motion.div 
              className={styles.scrollDot}
              animate={{ 
                y: [0, 12, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      </Motion.div>
    </section>
  );
};

export default Hero; 