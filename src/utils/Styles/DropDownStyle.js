// Import React Libraries
import { Link } from 'react-router-dom';

// Import Style
import styled from 'styled-components';
import { NavCommonWriting } from '../Styles';

// Import Colors
import colors from '../Colors';

export const DropdownContainer = styled.div`
  height: 40px;
`;

export const DropDownTitle = styled.span`
  ${NavCommonWriting};
`;

export const DropdownContent = styled.div`
  display: ${(props) => (props.open ? 'block' : 'none')};
  position: absolute;
  
  min-width: 200px;
  margin-top:12px;

  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

  z-index: 1;
`;

export const DropdownItem = styled.div`
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const DropDownArrow = styled.img`
  width: 10px;
  height: 10px;

  padding:0;
  margin:0;
`;

export const DropDownLink = styled(Link)`
    ${NavCommonWriting};
    color: ${colors.linkResponsive} ;
    text-decoration: none;
`;
