// Import React Libraries
import { Link } from 'react-router-dom';

// Import Style
import styled, { css } from 'styled-components';
import { NavCommonWriting } from '../Styles';

// Import Colors
import colors from '../Colors';

export const UnderLineEffect = css`
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

export const NavLink = styled(Link)`
  ${NavCommonWriting};
  text-decoration: none;

  color:inherit;

  &:hover {
    color: ${colors.linkHover};
  }
`;
