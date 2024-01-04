// Import React Libraries
import React, { useState, useEffect, useRef } from 'react';

// Import PropType
import PropTypes from 'prop-types';

// Import Component
import SideNav from './SideNav';

// Import Style
import { StyledBurger } from '../../utils/Styles/NavStyle';

export const sideNavPropsType = PropTypes.shape({
  open: PropTypes.bool.isRequired,
  handleCloseBurger: PropTypes.func.isRequired
});

function Burger () {
  const [open, setOpen] = useState(false);
  const burgerRef = useRef(null);

  useEffect(() => {
    // Function to handle clicks outside the component
    function handleClickOutside (event) {
      console.log('burgerRef.current');
      console.log(burgerRef.current);
      console.log('!burgerRef.current.contains(event.target)');
      console.log(!burgerRef.current.contains(event.target));
      console.log('event.target');
      console.log(event.target);

      if (burgerRef.current && !burgerRef.current.contains(event.target)) {
        setOpen(false);
        console.log('handleClickOutside closing');
      }
      console.log('handleClickOutside');
    }

    // Add event listener when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  function handleCloseBurger () {
    setOpen(false);
  }

  return (
        <div ref={burgerRef} id='menuWrapper'>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <SideNav open={open} handleCloseBurger={handleCloseBurger}/>
        </div>
  );
}

export default Burger;
