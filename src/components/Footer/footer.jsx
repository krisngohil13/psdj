
import styles from './footer.module.css';

const Footer = () => {


  return (
    <footer className={styles.footer}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.patternGrid} />
        {/* {particles.map((style, index) => (
          <div key={index} className={styles.particle} style={style} />
        ))} */}

      </div>

      <div className={styles.footerContent}>
        {/* Main Content */}
        <div className={styles.topSection}>
          <div className={styles.brandSection}>
            <h3>PSDJ Interior</h3>
            <p>Crafting spaces that tell your story</p>
            <div className={styles.socialLinks}>
              <a 
                href="https://www.instagram.com/psdj_interior_architecture/profilecard/?igsh=amtxODM5anIxbHBj" 
                aria-label="Instagram" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a 
                href="https://www.linkedin.com/company/psdj-interior-architecture/" 
                aria-label="LinkedIn" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.linkColumn}>
              <h4>Explore</h4>
              <ul>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h4>Services</h4>
              <ul>
                <li><a href="/residential">Residential</a></li>
                <li><a href="/commercial">Commercial</a></li>
                <li><a href="/hospitality">Hospitality</a></li>
                <li><a href="/consultation">Consultation</a></li>
              </ul>
            </div>

            <div className={styles.contactColumn}>
              <h4>Get in Touch</h4>
              <div className={styles.contactInfo}>
                <p>Mumbai, India</p>
                <p>info@psdjinterior.com</p>
                <p>+91 123 456 7890</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            <p>© 2024 PSDJ Interior. All rights reserved.</p>
          </div>
          <div className={styles.bottomLinks}>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
