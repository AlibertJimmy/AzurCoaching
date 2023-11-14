// Import React Component
import React, { useState } from 'react';

// Import Assets
import ArrowDown from '../../assets/icon/arrowDown.png'

// Import Style
import styled from 'styled-components';
import { StyledLink, StyledLinkDropDown, StyledSpanHeader } from '../../utils/Styles';

// Styled components
const DropdownContainer = styled.div`
  
  height: 40px;
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.open ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 200px;
  margin-top:12px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownItem = styled.div`
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const DropDownArrow = styled.img`
  width: 10px;
  height:10px;
  padding:0;
  margin:0;
`

// Dropdown component
function Dropdown({ dropDownTitle, options, links }){
  const [isOpen, setIsOpen] = useState(false);



  const handleOptionClick = () => {
    setIsOpen(false);

  };

  return (
    <DropdownContainer onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} id='dropDown'>
      <StyledSpanHeader>{dropDownTitle}</StyledSpanHeader><DropDownArrow src={ArrowDown} alt="ArrowDown" style={{paddingLeft:'5px'}}/>
      <DropdownContent open={isOpen}>
        {options.map((option, index) => (
          <DropdownItem key={index} >
            <StyledLinkDropDown key={index} to={`/${links[index]}`} onClick={() => handleOptionClick(links(index))}>{option}</StyledLinkDropDown>
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default Dropdown;