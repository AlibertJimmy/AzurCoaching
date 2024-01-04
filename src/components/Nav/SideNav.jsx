// Import React Libraries
import React from 'react';

// Import PropType
import PropTypes from 'prop-types';

// Import compoment
import Dropdown from '../Dropdown/Dropdown';

// Import Function
import { scrollToTop } from '../../utils/Functions';

// Import Style
import styled from 'styled-components';
import { NavLink, UnderLineEffect } from '../../utils/Styles/NavStyle';

// Import constantes
import { responsiveWidth } from '../../utils/Constant';

const StyledUl = styled.ul`

    display: flex;
    gap: 2rem;

    list-style: none;
    text-decoration: none;
    
    padding:0;
    margin-right: 20px;


    @media (max-width: ${responsiveWidth}px){
        flex-flow: column nowrap;

        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 100px;
        padding: 3rem 3rem;
        text-align: left;
        margin-top: 0;
        margin-right:0;
        gap:1rem;
        
        justify-content: top-start;
        
        background: #ffffff;

        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
       li{
            margin-bottom: 0px;
       }
    }
`;
const StyledLi = styled.li`
    ${UnderLineEffect};
    border: 1px solid red;
`;

function SideNav ({ open, handleCloseBurger }) {
  function handleLinkClick () {
    handleCloseBurger();
    scrollToTop();
  }

  const dropDownTitle = 'Services';
  const links = ['BusinessServices', 'IndividualServices'];
  const linksRender = ['Business Services', 'Individual Services'];

  return (
        <StyledUl open={open}>
            <StyledLi><NavLink to="/" onClick={handleLinkClick}>Home</NavLink></StyledLi>
            <StyledLi><Dropdown dropDownTitle ={dropDownTitle} options={linksRender} links={links} handleCloseBurger={handleCloseBurger}/></StyledLi>
            <StyledLi><NavLink to="/Contact" onClick={handleLinkClick}>Contact</NavLink></StyledLi>
        </StyledUl>
  );
}

SideNav.propTypes = {
  open: PropTypes.bool.isRequired,
  handleCloseBurger: PropTypes.func.isRequired
};

export default SideNav;
