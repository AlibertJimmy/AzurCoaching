// Import React Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Style
import styled from 'styled-components';
import { NavCommonWriting } from '../Styles';

// Import Colors
import colors from '../Colors';

// Import Constants
import { navHeight, responsiveWidth } from '../Constant';

// NavBar Related
export const Logo = styled.img`
  width: ${navHeight * 2}px;
  height: ${navHeight}px;
`;

const BaseNav = ({ className, children }) => <nav className={className}>{children}</nav>;

BaseNav.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export const StyledNav = styled(BaseNav)`
    position: fixed;
    top:0;
    width:100%;
    height: ${navHeight}px;

    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    z-index: 9999;
    
    transition: background-color 0.3s ease;

    background-color: ${({ isScrolled }) => (isScrolled ? 'white' : 'transparent')};
    color: ${({ isScrolled }) => (isScrolled ? 'black' : 'white')};
`;

// Burger Button Related
export const StyledBurger = styled.div`
  position: fixed;
  top: 10px;
  right: 15px;    

  width: 2rem;
  height: 2rem;

  border: none;

  z-index: 20;

  display: none;

  @media (max-width: ${responsiveWidth}px){
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div{
    height: 0.25rem;
    border-radius: 10px;
    
    transform-origin: 1px;

    &:nth-child(1){
        transform: ${({ open }) => open ? 'translate(14%) rotate(45deg)' : 'translate(0) rotate(0)'};
    }

    &:nth-child(2){
        transform: ${({ open }) => open ? 'translate(100%)' : 'translate(0)'};
        opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3){
        transform: ${({ open }) => open ? 'translate(14%) rotate(-45deg)' : 'translate(0) rotate(0)'};
    }

    background-color: ${({ open }) => open ? colors.burgerDivOpen : colors.burgerDiv};
    
    @media (max-width: ${responsiveWidth}px){
        background-color: black;
    }
  }
`;

// SideNav Related
export const NavUl = styled.ul`
  display: flex;
  gap: 2rem;

  list-style: none;
  text-decoration: none;
  
  padding: 0;
  margin-right: 20px;

  @media (max-width: ${responsiveWidth}px){
    flex-flow: column nowrap;

    position: fixed;
    top: 0;
    right: 0;

    height: 100%;
    width: 100px;

    padding: 3rem 3rem;
    margin: 0;

    gap: 1rem;
    
    background: white;

    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  }
`;

export const NavLi = styled.li`
    display: inline-block;
    height: 40px;
    position:relative;

    &::after {
      content: '';
      position: absolute;
      width: 0;
      bottom: 10px;
      height: 2px; 
      left: 50%;
      transform: translateX(-50%);
      background-color: #007bff; 
      transition: width 0.3s ease-out;
    }

    &:hover::after {
      width: 100%;
    }
`;

// Link Related
export const NavLink = styled(Link)`
  ${NavCommonWriting};
  text-decoration: none;

  color:inherit;

  &:hover {
    color: ${colors.linkHover};
  }
`;
