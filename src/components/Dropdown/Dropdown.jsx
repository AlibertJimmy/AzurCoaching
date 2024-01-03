// Import React Libraries
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Import Function
import { scrollToTop } from '../../utils/Functions';

// Import Assets
import ArrowDown from '../../assets/icon/arrowDown.png';

// Import Style
import { DropdownContainer, DropdownContent, DropdownItem, DropDownArrow, DropDownTitle, DropDownLink } from '../../utils/Styles/DropDownStyle';

function Dropdown ({ dropDownTitle, options, links, handleCloseBurger }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = () => {
    setIsOpen(false);
    scrollToTop();
    handleCloseBurger();
  };

  return (
    <DropdownContainer onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} id={`dropDown${dropDownTitle}`}>
      <DropDownTitle>{dropDownTitle}</DropDownTitle><DropDownArrow src={ArrowDown} alt="ArrowDown" style={{ paddingLeft: '5px' }}/>
      <DropdownContent open={isOpen}>
        {options.map((option, index) => (
          <DropdownItem key={index} >
            <DropDownLink key={index} to={`/${links[index]}`} onClick={() => handleOptionClick(links[index])}>{option}</DropDownLink>
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

Dropdown.propTypes = {
  dropDownTitle: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleCloseBurger: PropTypes.func.isRequired
};

export default Dropdown;
