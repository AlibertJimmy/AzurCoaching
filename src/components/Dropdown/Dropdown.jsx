// Import React Libraries 
import React, {useState, useEffect,useRef} from "react";

// Import Component
import DropdownMenu from "./DropdownMenu";

// Import Assets
import arrow from '../../assets/icon/arrowDown.png'


// Import Style
import styled from "styled-components";
import colors from "../../utils/Colors";
import { StyledSpanHeader } from "../../utils/Styles";

// Import Constante
import { borderWidth } from "../../utils/Constant";



const StyledDropdown = styled.div`

    height: 2rem;


    border: ${borderWidth}px solid ${colors.backGroundDropdownMenu};
    border-radius: 5px;

    div{
        display:flex;
        flex-direction: row;
        align-items:center;

        img{
            height:10px;
            width:10px;
        }
    }

    
`



function DropDown({dropdownTitle,links, linksRender}) {
    const [open, setOpen] = useState(false);
    const DropdownRef = useRef(null);

    
    useEffect(() => {
        // Function to handle clicks outside the component
        function handleClickOutside(event) {
            if (DropdownRef.current && !DropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        
        // Add event listener when the component mounts
        document.addEventListener('click', handleClickOutside);

        // Remove the event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    // Function to close the Burger component
    function handleCloseDropdownMenu(event) {
        console.log('Event target:', event.target);
        setOpen(false);
    }
    
    return (
        <div id='dropDown' ref={DropdownRef} onMouseLeave={() => setOpen(false)}>
            
            <StyledDropdown
                open={open}
                onClick={() => setOpen(!open)}
                onMouseEnter={() => setOpen(true)}
            >
                <div><StyledSpanHeader>{dropdownTitle}</StyledSpanHeader><img src={arrow} alt="Arrow" /></div>
            </StyledDropdown>
            
            <DropdownMenu open={open} handleClosePrestationMenu={handleCloseDropdownMenu} links={links} linksRender={linksRender}/>
        </div>
    );
}


export default DropDown;
