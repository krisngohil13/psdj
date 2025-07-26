import React, { useEffect } from 'react'
import Header from './components/Header/header'
import Loader from './components/Loader/Loader'
import Router from './Router/Router'
import Footer from './components/Footer/footer'
import StickySocials from './components/StickySocials/StickySocials'

const Layout = () => { 
  // Ensure page starts from top on refresh and initial load
  useEffect(() => {
    // Scroll to top immediately on component mount
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });

    // Also handle page refresh
    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollToTop', 'true');
    };

    const handleLoad = () => {
      if (sessionStorage.getItem('scrollToTop')) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'auto'
        });
        sessionStorage.removeItem('scrollToTop');
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div>
        <Loader />
        <Header/>
        <Router/>
        <Footer/>
        <StickySocials />
    </div>
  )
}

export default Layout

