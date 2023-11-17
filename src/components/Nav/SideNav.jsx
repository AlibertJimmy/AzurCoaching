// Import React Libraries
import React from "react";

// Import compoment
import Dropdown from "../Dropdown/Dropdown";


// Import Style
import styled from "styled-components";
import { StyledLink, underLineEffect } from "../../utils/Styles";

// Import constantes
import { responsiveWidth } from "../../utils/Constant";
import { scrollToTop } from "../../utils/Functions";


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

        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)' };
       li{
            margin-bottom: 0px;
       }
    }
`
const StyledLi = styled.li`
    ${underLineEffect};

`


function SideNav({open, handleCloseBurger}){


    function handleLinkClick() {
        handleCloseBurger(); 
        scrollToTop();
    }

    

    const dropDownTitle = 'Services';
    const links = ['BusinessServices', 'IndividualServices'];
    const linksRender = ['Business Services', 'Individual Services'];
    
    return(
        <StyledUl open={open}>
            <StyledLi><StyledLink to="/" onClick={handleLinkClick}>Home</StyledLink></StyledLi>
            <StyledLi><Dropdown dropDownTitle ={dropDownTitle} options={linksRender} links={links}/></StyledLi>
            <StyledLi><StyledLink to="/Contact" onClick={handleLinkClick}>Contact</StyledLink></StyledLi>
        </StyledUl>
    )
}

export default SideNav;