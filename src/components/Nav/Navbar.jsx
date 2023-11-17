// Import React Libraries
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Import Component 
import Burger from './BurgerButton'
import Logo from './Logo/Logo'

// Import Style
import styled from 'styled-components'
import { ComponentBorder } from '../../utils/Styles'
import { navHeight } from '../../utils/Constant'

// Import Constants
import { responsiveWidth } from '../../utils/Constant'



const BaseNav = ({ className, children }) => <nav className={className}>{children}</nav>;

const StyledNav = styled(BaseNav)`
    position: fixed;
    top:0;
    width:100%;
    height: ${navHeight}px;

    display: flex;
    justify-content: space-between;
    padding: 10px;
    z-index: 9999;
    
    transition: background-color 0.3s ease; /* Add a smooth transition */

    background-color: ${({ isScrolled }) => (isScrolled ? 'white' : 'transparent')};
    color: ${({ isScrolled }) => (isScrolled ? 'black' : 'white')};

    


`
//
function Navbar(){
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const scrollThreshold = 100; // Adjust the threshold as needed
  
        // Check if the scroll position is beyond the threshold
        if (scrollPosition > scrollThreshold) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      // Add the scroll event listener
      document.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener on component unmount
      return () => {
        document.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <StyledNav isScrolled={isScrolled}>
            <Link to='/'><Logo/></Link>
            <Burger/> 
        </StyledNav>
    )

}

export default Navbar;