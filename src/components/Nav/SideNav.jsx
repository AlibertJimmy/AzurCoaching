// Import React Libraries
import React from 'react';

// Import PropType
import PropTypes from 'prop-types';

// Import compoment
import Dropdown from '../Dropdown/Dropdown';

// Import Function
import { scrollToTop } from '../../utils/Functions';

// Import Style
import { NavLi, NavLink, NavUl } from '../../utils/Styles/NavStyle';

function SideNav ({ open, handleCloseBurger }) {
  function handleLinkClick () {
    handleCloseBurger();
    scrollToTop();
  }

  const dropDownTitle = 'Services';
  const links = ['BusinessServices', 'IndividualServices'];
  const linksRender = ['Business Services', 'Individual Services'];

  return (
        <NavUl open={open} id='navUl'>
            <NavLi><NavLink to="/" onClick={handleLinkClick}>Home</NavLink></NavLi>
            <NavLi><Dropdown dropDownTitle ={dropDownTitle} options={linksRender} links={links} handleCloseBurger={handleCloseBurger}/></NavLi>
            <NavLi><NavLink to="/Contact" onClick={handleLinkClick}>Contact</NavLink></NavLi>
        </NavUl>
  );
}

SideNav.propTypes = {
  open: PropTypes.bool.isRequired,
  handleCloseBurger: PropTypes.func.isRequired
};

export default SideNav;
