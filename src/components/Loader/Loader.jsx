import React, { useEffect, useState } from 'react';
import styles from './loader.module.css';
import loaderBg from '../../assets/images/loader2.webp';
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
    }, 6000); // Adjusted to match animation timing

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;


  return (
    <div className={`${styles.loaderContainer} ${imageLoaded ? styles.loaded : ''}`}>
     
      
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