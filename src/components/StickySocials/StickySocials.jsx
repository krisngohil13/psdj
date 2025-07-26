import React, { useState, useEffect } from 'react';
import { FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';
import styles from './StickySocials.module.css';

const StickySocials = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show socials after loader finishes (6 seconds) plus a small delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4000); // 6 seconds for loader + 0.5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/psdj_interior_architecture/profilecard/?igsh=amtxODM5anIxbHBj',
      icon: FaInstagram,
      color: '#E4405F',
      gradient: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/psdj-interior-architecture/',
      icon: FaLinkedinIn,
      color: '#0077B5',
      gradient: 'linear-gradient(45deg, #0077B5, #00A0DC)'
    }
  ];

  return (
    <div className={`${styles.stickySocials} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.socialContainer}>
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              style={{ 
                '--social-color': social.color,
                '--social-gradient': social.gradient,
                animationDelay: `${index * 0.2}s`
              }}
              aria-label={social.name}
            >
              <div className={styles.iconWrapper}>
                <IconComponent className={styles.socialIcon} />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default StickySocials; 