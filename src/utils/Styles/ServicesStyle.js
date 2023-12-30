// Import Style
import styled, { css } from 'styled-components';
import { StyledButton } from '../Styles';

// Import Colors
import colors from '../Colors';
import { responsiveWidth } from '../Constant';

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

// Services Related
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
