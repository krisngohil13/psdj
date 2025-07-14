import React, { useEffect, useState } from 'react';
import styles from './loader.module.css';
import loaderBg from '../../assets/images/loader2.png';
import logo from '../../assets/logo3.png';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload the background image
    const img = new Image();
    img.src = loaderBg;
    img.onload = () => setImageLoaded(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjusted to match animation timing

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  // Create array of 12 particles with different positions
  const particles = Array.from({ length: 12 }, (_, index) => {
    const style = {
      width: `${Math.random() * 10 + 5}px`,
      height: `${Math.random() * 10 + 5}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 0.5}s`
    };
    return <div key={index} className={styles.particle} style={style}></div>;
  });

  return (
    <div className={`${styles.loaderContainer} ${imageLoaded ? styles.loaded : ''}`}>
      {/* Particles */}
      {particles}
      
      <div className={styles.logoWrapper}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logoImage} />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.text}>INTERIOR</div>
          <div className={styles.text}>ARCHITECTURE</div>
        </div>
      </div>
    </div>
  );
};

export default Loader; 