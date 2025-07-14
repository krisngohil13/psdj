import React from 'react';
import styles from './SocialGrid.module.css';
import interiorImage from '../../assets/images/1.jpg';

const SocialGrid = () => {
  const socialLinks = [
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/psdj_interior_architecture/profilecard/?igsh=amtxODM5anIxbHBj',
      color: '#f8f9fa',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/company/psdj-interior-architecture/',
      color: '#f8f9fa',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    }
  ];

  return (
    <section className={styles.socialSection}>
      <div className={styles.sectionContent}>
        <div className={styles.titleContainer}>
        <h2 className={styles.title}>
          <span className={styles.titleLine}>Follow Our Journey</span>
          <span className={styles.titleAccent}>On Social Media</span>
        </h2>
          <div className={styles.titleDecoration}></div>
        </div>
        
        <div className={styles.gridContainer}>
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.url} 
              className={styles.gridItem}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className={styles.itemContent}>
                <div className={styles.imageContainer}>
                  <img src={interiorImage} alt={`PSDJ Interior on ${social.platform}`} className={styles.backgroundImage} />
                  <div className={styles.overlay}></div>
                </div>
                <div className={styles.platformInfo}>
                  <div className={styles.iconWrapper}>
                    {social.icon}
                  </div>
                  <div className={styles.textContent}>
                  <span className={styles.platformName}>{social.platform}</span>
                  <span className={styles.followText}>Follow Our Work</span>
                  </div>
                </div>
                <div className={styles.hoverEffect}></div>
              </div>
            </a>
          ))}
        </div>
      </div>
      
      <div className={styles.decorativeElements}>
        <div className={styles.line}></div>
        <div className={styles.dot}></div>
      </div>
    </section>
  );
};

export default SocialGrid; 