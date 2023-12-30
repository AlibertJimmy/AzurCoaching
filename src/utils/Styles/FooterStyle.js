// Import Style
import styled from 'styled-components';

// Import Colors
import colors from '../../utils/Colors';

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 50px;

  background-color: ${colors.creme};
  color: ${colors.headerFooterText};

  button#goToTopButton {
    background-color: ${colors.creme};
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    margin-right:5px;
    border-radius:15px;

    &:hover{
        background-color: white;
    }
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 20px 0;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledP = styled.p`
  font-family: sans-serif;
  font-size: 15px;

  margin: 10px;
`;

export const SideContainer = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: flex-end;

  width:60px;

  margin-bottom: 10px;
`;

export const StyledButton = styled.button`
      margin:0;
      padding:0;
`;

export const StyledImgArrowUp = styled.img`
    height: 20px; 
    width: 20px;
`;
