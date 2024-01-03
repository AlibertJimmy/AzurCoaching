// Import React Libraries
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Component
import Burger from './BurgerButton';

// Import Functions
import { scrollToTop } from '../../utils/Functions';

//  Import Asset
import LogoPNG from '../../assets/logo/Azur_Logo.png';

// Import Style
import styled from 'styled-components';

// Import Constants
import { navHeight } from '../../utils/Constant';

const BaseNav = ({ className, children }) => <nav className={className}>{children}</nav>;

BaseNav.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

const StyledNav = styled(BaseNav)`
    position: fixed;
    top:0;
    width:100%;
    height: ${navHeight}px;

    display: flex;
    justify-content: space-between;
    padding: 10px;
    z-index: 9999;
    
    transition: background-color 0.3s ease;

    background-color: ${({ isScrolled }) => (isScrolled ? 'white' : 'transparent')};
    color: ${({ isScrolled }) => (isScrolled ? 'black' : 'white')};
`;

const Logo = styled.img`
    width: ${navHeight * 2}px;
    height: ${navHeight}px;
`;

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
        <StyledNav isScrolled={isScrolled}>
            <Link to='/' onClick={scrollToTop}><Logo src={LogoPNG} alt='Logo'/></Link>
            <Burger/>
        </StyledNav>
  );
};

export default Navbar;
