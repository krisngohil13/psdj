import React, { useRef, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import styles from './header.module.css';
import logo from '../../assets/logo3.png';

const left_nav_links = [
  { path: "/projects", display: "Our work" },
  { path: "/expertise", display: "Our expertise" },
];

const right_nav_links = [
  { path: "/team", display: "Our people" },
  { path: "/contact", display: "Contact us" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuExiting, setIsMenuExiting] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if we're scrolled past threshold
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Handle menu close with animation
  const handleMenuClose = () => {
    setIsMenuExiting(true);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsMenuExiting(false);
    }, 300);
  };

  return (
      <header 
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`} 
        ref={headerRef}
      >
        <div className={styles.nav__wrapper}>
          {/* Left Navigation */}
          <nav className={`${styles.navigation} ${styles.left__nav}`}>
            <ul className={styles.menu}>
            {left_nav_links.map((item) => (
              <li className={styles.nav__item} key={item.path}>
                  <NavLink 
                    to={item.path}
                    className={({ isActive }) => 
                    isActive ? `${styles.nav__link} ${styles.active}` : styles.nav__link
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

        {/* Logo */}
          <div className={styles.logo}>
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <img src={logo} alt="Interior Architecture Logo" className={styles.logo__image} />
            </Link>
          </div>

          {/* Right Navigation */}
          <nav className={`${styles.navigation} ${styles.right__nav}`}>
            <ul className={styles.menu}>
            {right_nav_links.map((item) => (
              <li className={styles.nav__item} key={item.path}>
                  <NavLink 
                    to={item.path}
                    className={({ isActive }) => 
                    isActive ? `${styles.nav__link} ${styles.active}` : styles.nav__link
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
          className={styles.mobile__menu}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <RiMenuLine />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {(isMobileMenuOpen || isMenuExiting) && (
          <div className={`${styles.mobile__menu__overlay} ${isMenuExiting ? styles.exiting : ''}`}>
            <div className={styles.mobile__header}>
            <Link to="/" onClick={handleMenuClose}>
              <img src={logo} alt="Interior Architecture Logo" className={styles.mobile__logo} />
            </Link>
              <button 
                className={styles.mobile__close}
                onClick={handleMenuClose}
                aria-label="Close menu"
              >
                <RiCloseLine />
              </button>
            </div>
          <nav className={styles.mobile__nav}>
            <ul className={styles.mobile__menu__list}>
              {[...left_nav_links, ...right_nav_links].map((item) => (
                <li key={item.path} className={styles.mobile__menu__item}>
                  <Link
                    to={item.path}
                    className={`${styles.mobile__link} ${location.pathname === item.path ? styles.active : ''}`}
                    onClick={handleMenuClose}
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          </div>
        )}
      </header>
  );
};

export default Header;
