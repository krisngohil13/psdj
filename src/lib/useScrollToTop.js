import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  // Additional effect to handle page refresh
  useEffect(() => {
    // Scroll to top on page load/refresh
    const handlePageLoad = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto' // Use 'auto' for immediate scroll on refresh
      });
    };

    // Handle initial page load
    handlePageLoad();

    // Also handle browser back/forward buttons
    const handleBeforeUnload = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []); // Empty dependency array means this runs once on mount
};

export default useScrollToTop; 