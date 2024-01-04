// Import React Libraries
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import Style
import styled from 'styled-components';
import { NavCommonWriting } from '../Styles';

// Import Colors
import colors from '../Colors';

export const DropdownContainer = styled.div`
  height: 40px;
`;

export const DropDownTitleContainer = styled.div`
  display: flex;
  align-items: center;
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

// Icon
export const DropDownIcon = styled(FontAwesomeIcon)`
  width: 10px;
  height: 10px;
  color: black;
  margin-left: 5px;
`;

// Link
export const DropDownLink = styled(Link)`
    ${NavCommonWriting};
    color: ${colors.linkResponsive} ;
    text-decoration: none;
`;
