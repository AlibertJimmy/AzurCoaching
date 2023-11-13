// Import React Libraries
import React from "react";

// Import compoment
import Dropdown from "../Dropdown/Dropdown";


// Import Style
import styled from "styled-components";
import { StyledLink } from "../../utils/Styles";

import colors from "../../utils/Colors";

// Import constantes
import { responsiveWidth } from "../../utils/Constant";



const StyledUl = styled.ul`

    display: flex;
    gap: 2rem;

    list-style: none;
    text-decoration: none;
    color: ${colors.link};
    padding:0;


    @media (max-width: ${responsiveWidth}px){
        flex-flow: column nowrap;

        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100px;
        padding: 3rem 3rem;
        text-align: left;
        margin-top: 0;
        gap:1rem;
        
        justify-content: top-start;
        
        background: #ffffff;

        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)' };
       li{
            margin-bottom: 0px;
       }
    }
`



function SideNav({open, handleCloseBurger}){


    function handleLinkClick() {
        handleCloseBurger(); // Call the function passed as a prop from Burger component
    }

    const dropDownTitle = 'Services';
    const links = ['BusinessServices', 'IndividualServices'];
    const linksRender = ['Business Services', 'Individual Services'];

    return(
        <StyledUl open={open}>
            <li><StyledLink to="/" onClick={handleLinkClick}>Home</StyledLink></li>
            {/*<li><DropDown dropdownTitle={dropDownTitle} links={links} linksRender={linksRender}/></li>*/}
            <li><Dropdown dropDownTitle ={dropDownTitle} options={linksRender} links={links}/></li>
            <li><StyledLink to="/Contact" onClick={handleLinkClick}>Contact</StyledLink></li>
        </StyledUl>
    )
}

export default SideNav;