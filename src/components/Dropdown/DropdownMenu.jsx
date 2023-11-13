import React from "react";

// Import React Libraries

// Import Component

// Import Style
import styled from "styled-components";
import { StyledLink } from "../../utils/Styles";
// Import Colors
import colors from "../../utils/Colors";

// Import Constants
import { responsiveWidth } from "../../utils/Constant";


const StyledLi = styled.li`
    list-style:none;
`



const StyledUl = styled.ul`
    padding-left:0;
    border: 0px solid black;
    background-color: ${colors.backGroundDropdownMenu};

    @media (max-width: ${responsiveWidth}px){
        background: ${colors.backGroundDropDownMobile};
        border: 0px;
    }
`


function DropdownMenu({open,handleCloseDropdownMenu, links, linksRender}) {

    function handleLinkClick() {
        handleCloseDropdownMenu(); // Call the function passed as a prop from Burger component
    }
    console.log(`links : `,links);
  return open ?(
      <div id='DropdownMenu'>
        <StyledUl>
            {links.map((link, index) => (
                <StyledLi><StyledLink key={link} to={`/${link}`} onClick={handleLinkClick}>{linksRender[index]}</StyledLink></StyledLi>
            ))}
        </StyledUl>
      </div>
  ):null;
}

export default DropdownMenu
