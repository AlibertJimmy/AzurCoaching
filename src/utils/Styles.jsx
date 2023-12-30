// Import React Libraries
import { Link } from 'react-router-dom';

// Import Style
import styled, { css } from 'styled-components';

// Impor Colors
import colors from './Colors';
import { responsiveWidth } from './Constant';

export const PageWrapper = styled.div`
`;

export const ComponentBorder = css`
    border-radius:15px;
`;

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
`;

export const underLineEffect = css`
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

export const StyledLink = styled(Link)`
    ${commonWriting};
    ${commonLink};
    color:inherit;
`;

export const StyledLinkDropDown = styled(Link)`
    ${commonWriting};
    color: ${colors.linkResponsive} ;
    text-decoration: none;
`;

export const StyledLi = styled.li`
  list-style:none;
    
  position: relative;
  display: inline-block;
  height:45px;
`;
export const StyledSpanHeader = styled.span`
  ${commonWriting};
`;

export const ButtonStyle = css`
  background: #5B89B4;
  color: white;
  border-radius:5px;
  border:none;
  padding: 12px 18px;
  cursor:pointer;
  font-weight:600;
  font-size:12px;
  margin-top:20px;
  text-transform: uppercase;
`;

export const StyledButton = styled.button`
  ${ButtonStyle};
`;
