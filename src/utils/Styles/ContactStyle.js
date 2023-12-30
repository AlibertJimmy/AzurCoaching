// Import Style
import styled from 'styled-components';

// Import Colors
import colors from '../Colors';

// Import Constants
import { responsiveWidth } from '../../utils/Constant';

// Content Related
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 50px;

  @media (max-width: ${responsiveWidth}px) { 
    margin: 25px;
  }
`;

// Introduction Related
export const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled.h1`
  font-size: 30px;
  font-family: sans-serif;

  color: ${colors.bluePastel};
`;

export const StyledText = styled.p`
  font-size: 15px;
  font-family: sans-serif;

  margin: 5px 0;
`;

// Form Related
export const FormInputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const FormInputContainer = styled.div`
  display:flex;
  flex: 1 0 calc(40% - 10px);
  width: 500px;
  margin: 5px 10px;
`;

export const FormFieldWrapper = styled.div`
  display:flex;
  flex-direction:column;

  width:100%;

  input {
    box-sizing: border-box; 
  }

  span.error {
    color: red;
    font-size: 12px;
    margin-top: 5px;
  }

  textarea {
    height: 100%;
  }    
`;

export const FormInput = styled.input`
  border: 1px solid black;
  border-radius: 2px;
  height:25px;

  &:focus {
    outline: 1px solid #8c8a89;
  }
`;

export const StyledIMG = styled.img`
  width: 15px;
  height:15px;
  padding-right: 10px;
`;
