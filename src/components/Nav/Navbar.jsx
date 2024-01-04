// Import React Libraries
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Import Component
import Burger from './BurgerButton';

// Import Functions
import { scrollToTop } from '../../utils/Functions';

//  Import Asset
import LogoPNG from '../../assets/logo/Azur_Logo.png';

// Import Style
import { StyledNav, Logo } from '../../utils/Styles/NavStyle';

function Navbar () {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      // Check if the scroll position is beyond the threshold
      if (scrollPosition > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
        <StyledNav isScrolled={isScrolled} id='navBar'>
            <Link to='/' onClick={scrollToTop}><Logo src={LogoPNG} alt='Logo'/></Link>
            <Burger/>
        </StyledNav>
  );
};

export default Navbar;
