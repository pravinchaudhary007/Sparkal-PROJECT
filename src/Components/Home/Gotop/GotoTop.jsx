import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { GiUpgrade } from "react-icons/gi";

const GotoTop = () => {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();
  const [isGrabbing, setIsGrabbing] = useState(false);

  useEffect(() => {
    // Check for saved scroll position on pathname change
    const savedPosition = localStorage.getItem('scrollPosition');
    if (savedPosition) {
      window.scrollTo(0, Number(savedPosition));
      localStorage.removeItem('scrollPosition'); // Clear position after scrolling
    } else {
      window.scrollTo(0, 0); // Scroll to top if no saved position
    }
  }, [pathname]);

  const handleScroll = () => {
    setVisible(window.scrollY > 300); // Set visibility based on scroll position
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      const position = window.scrollY;
      localStorage.setItem('scrollPosition', position);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Return null if not visible
  if (!visible) return null;

  return (
    <button
      aria-label="Scroll to top"
      className={`md:p-2 p-1 md:rounded-md rounded-sm block duration-700 drop-shadow-xl 
                  z-50 lg:bottom-5 md:bottom-4 sm:bottom-3 bottom-2 lg:right-5 md:right-3 sm:right-3 right-4 fixed 
                  ${isGrabbing ? 'cursor-grabbing' : 'cursor-grab'} 
                  bg-gradient-to-r from-white to-[#dbd2b7] transition-transform 
                  transform ${visible ? 'translate-x-0' : 'translate-x-full'}`}
      onMouseDown={() => setIsGrabbing(true)} 
      onMouseUp={() => setIsGrabbing(false)} 
      onMouseLeave={() => setIsGrabbing(false)} 
      onClick={scrollToTop}
      style={{ transition: 'transform 3s ease-in-out 3s' }} 
    >
      <GiUpgrade className='lg:h-5 lg:w-5 md:h-4 md:w-4 sm:h-4 sm:w-4 h-3 w-3' />
    </button>
  );
};

export default GotoTop;
