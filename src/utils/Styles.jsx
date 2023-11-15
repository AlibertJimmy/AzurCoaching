// Import React Libraries
import { Link } from 'react-router-dom';

// Import Style
import styled,{ css } from 'styled-components'

// Impor Colors
import colors from './Colors';
import { borderWidth, responsiveWidth } from './Constant';

export const PageWrapper = styled.div`

`

export const ComponentBorder = css`
    border: ${borderWidth}px solid black;
`

const commonWriting = css`
  font-family:  sans-serif;
  font-weight:bold;

  @media (max-width: ${responsiveWidth}px){
    color: ${colors.linkResponsive};
  }

`;

const commonLink = css`
    
  text-decoration: none;

  &:hover {
    color: ${colors.linkHover};
  }

  
    
`

export const underLineEffect = css`
    display: inline-block;
    height: 40px;
    position:relative;

    &::after {
      content: '';
      position: absolute;
      width: 0;
      bottom: 10px;
      height: 2px; /* Adjust the underline height as needed */
      left: 50%;
      transform: translateX(-50%);
      background-color: #007bff; /* Set the underline color */
      transition: width 0.3s ease-out; /* Set the animation duration and easing */
    }

    &:hover::after {
      width: 100%;
    }
`


export const StyledLink = styled(Link)`
    ${commonWriting};
    ${commonLink};
    color:inherit;
`

export const StyledLinkDropDown = styled(Link)`
    ${commonWriting};
    color: ${colors.linkResponsive} ;
    text-decoration: none;
`

export const StyledLi = styled.li`
  list-style:none;
    
  position: relative;
  display: inline-block;
  height:45px;
`
export const StyledSpanHeader = styled.span`
  ${commonWriting};
`