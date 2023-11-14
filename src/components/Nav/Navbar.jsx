// Import React Libraries
import React from 'react'

// Import Component 
import Burger from './BurgerButton'

// Import Style
import styled from 'styled-components'
import { ComponentBorder } from '../../utils/Styles'
import { navHeight } from '../../utils/Constant'
import Logo from './Logo.jsx/Logo'
import { Link } from 'react-router-dom'

const Nav = styled.nav`
    ${ComponentBorder};
    height: ${navHeight}px;

    display: flex;
    justify-content: space-between;
    padding: 10px;

`
//
function Navbar(){

    return (
        <Nav>
            <Link to='/'><Logo/></Link>
            <Burger/> 
        </Nav>
    )

}

export default Navbar;