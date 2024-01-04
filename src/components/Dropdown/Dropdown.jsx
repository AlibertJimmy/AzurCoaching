// Import React Libraries
import React, { useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Function
import { scrollToTop } from '../../utils/Functions';

// Import Style
import {
  DropdownContainer,
  DropDownTitleContainer, DropDownTitle, DropDownIcon,
  DropdownContent, DropdownItem, DropDownLink
} from '../../utils/Styles/DropDownStyle';

function Dropdown ({ dropDownTitle, options, links, handleCloseBurger }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = () => {
    setIsOpen(false);
    scrollToTop();
    handleCloseBurger();
  };

  return (
    <DropdownContainer onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} id={`dropDown${dropDownTitle}`}>
      <DropDownTitleContainer><DropDownTitle>{dropDownTitle}</DropDownTitle><DropDownIcon icon={faChevronDown}/></DropDownTitleContainer>
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
