// Import Style
import styled, { css } from 'styled-components';

// Import Colors
import colors from '../Colors';

// Import Constants
import { responsiveWidth, responsiveWidthMobile } from '../Constant';

export const ContactStripContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    height: 300px;

    background-color: ${colors.bluePastel};

    @media (max-width: ${responsiveWidthMobile}px) {
        height: 250px;
    }
`;

export const CommomContentPosition = css`
    position: absolute;
    transform: translate(-50%, -50%);

    width: 100%;
    left: 50%;

    text-align: center;
    
    background-color: transparent ;
`;

export const AbsoluteContainer1 = styled.div`
    ${CommomContentPosition};
    top: 25%;
`;

export const AbsoluteContainer2 = styled.div`
    ${CommomContentPosition};
    top: 75%;
`;

export const StyledTitle = styled.h1`
    font-size:30px;
    
    font-family:sans-serif;
    font-weight: 900;
    color: black;
    text-transform:uppercase;

    @media (max-width: ${responsiveWidth}px) {
        font-size: 35px;    
    }
    @media (max-width: ${responsiveWidthMobile}px) {
        font-size: 25px;    
    }
`;

export const StyledText1 = styled.div`
    font-size:25px;
        
    font-family: sans-serif;
    color: white;

    @media (max-width: ${responsiveWidth}px) {
        font-size: 25px;    
    }
    @media (max-width: ${responsiveWidthMobile}px) {
        font-size: 20px;    
    }
`;

export const StyledButton = styled.button`
    padding: 12px 18px;
    margin-top: 20px;
    cursor: pointer;

    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;    

    color: ${colors.bluePastel};    
    background: white;
    
    border: none;
    border-radius: 5px;
`;
