// Import Style
import styled, { css } from 'styled-components';

// Impor Colors
import colors from './Colors';
import { horizontalMargin, responsiveWidth } from './Constant';

export const PageWrapper = styled.div`
  width: 100%;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  padding: ${horizontalMargin}px;

  box-sizing: border-box;
`;

// Link Related
export const NavCommonWriting = css`
  font-family:  sans-serif;
  font-weight: bold;

  @media (max-width: ${responsiveWidth}px){
    color: ${colors.linkResponsive};
  }
`;

// Button Related
export const ButtonStyle = css`
  padding: 12px 18px;

  font-weight:600;
  font-size:12px;
  text-transform: uppercase;

  cursor:pointer;

  background: #5B89B4;
  color: white;

  border:none;
  border-radius:5px;
`;

export const StyledButton = styled.button`
  ${ButtonStyle};
`;

// Absolute Position Holder
export const CommomAbsolutePositionHolder = css`
  position: absolute;
  transform: translate(-50%, -50%);

  width: 100%;
  left: 50%;

  text-align: center;
  
  background-color: transparent ;
`;
