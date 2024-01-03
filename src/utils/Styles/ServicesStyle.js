// Import Style
import styled, { css } from 'styled-components';
import { StyledButton } from '../Styles';

// Import Colors
import colors from '../Colors';

// Import Constants
import { responsiveWidth, responsiveWidthMobile } from '../Constant';

// Titlte Related
export const CommonTitle = css`
  color:${colors.bluePastel};
`;

export const StyledTitle = styled.h1`
  ${CommonTitle};
  font-size:30px;
  text-align: center;
  margin: 0;
`;

export const StyledSubTitle = styled.h1`
  ${CommonTitle};
  font-size:20px;
  margin-left: 20px;
`;

// Our Services Related
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const CustomButton = styled(StyledButton)`
  
    img {
        display: none;
    }    

    &:hover {
      img {
          display: inline;
      }
    }
`;

export const StyledIMG = styled.img`
  height: 10px;
  width: 10px;
  padding-left:10px;
`;

// Services Home Related
export const ServiceWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;

  @media (max-width:${responsiveWidth}px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }

  @media (max-width:640px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceContainer = styled.div`
  display:flex;
  flex: 0 0 calc(33.33% - 10px);
  
  &:hover{
    img{
        border: 2px solid black;
        border-radius: 50%;
    }  
  }
  @media (max-width: ${responsiveWidth}px){
    flex: 1 0 calc(50% - 10px);
  }
`;

export const IconContainer = styled.div`
  display:inline-block;    
  
  width: 40px;
`;

export const IconIMG = styled.img`

    height: 30px;
    width: 30px;

    border: 2px solid transparent;
    border-radius:20px;
`;

export const ServiceContentContainer = styled.div`
    display:flex;
    flex-direction:column;
`;

// Service Detail Related

export const ServiceDetailWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;

    position: relative;
    padding: 50px 0;

    &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 30%;
        width: 33%; 
        border-bottom: 1px solid ${colors.bluePastel}; 
      }

    &:last-child {
        &:before {
            content: none; 
        }
    }
    
    @media (max-width: ${responsiveWidthMobile}px){
        flex-direction:column;
        align-items: center;
        gap: 1rem;
    }
    
`;

export const ServiceDetailTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width:300px;

`;

export const ServiceDetailTitle = styled.h1`
    font-size:25px;
    font-weight:bold;
    font-family: sans-serif;


    color: ${colors.bluePastel};

    position: relative;
    display: inline-block;

    margin: 0;

    width: fit-content;
    height: 40px;

    &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 25%;
        width: 50%;
        border-bottom: 2px solid ${colors.bluePastel}; 
    }

    @media (max-width: ${responsiveWidthMobile}px){
        &:before {
             
        }
    }
`;

export const ServiceDetailDescriptionContainer = styled.div`
    display:flex;
    flex-direction:column;

    width: 600px;

    @media (max-width: ${responsiveWidth}px){
        width:300px;
    }
`;

export const ServiceDetailDescriptionUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
        position: relative;
        display: flex;

        &::before {
            content: "\\2714";
            margin-right: 1.5em; 

            @media (max-width: ${responsiveWidth}px){
                margin-right: 0.55em; 
            }
        }
    }
`;
