// Import Style
import styled from 'styled-components';

// Import Constants
import { horizontalMargin, profilePicSize, profilePicSizeResponsive, responsiveWidth } from '../Constant';

export const PresentationWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: ${horizontalMargin}px;

  @media (max-width: ${responsiveWidth}px){
      flex-direction:column;
  }
`;

export const PresentationContainer = styled.div`
  margin: 20px;
`;

export const StyledSumUp = styled.h2`
  font-style: sans-serif;
  font-size: 20px;
  font-weight: normal;
  margin:0;
`;

export const ProfileIMG = styled.img`
  margin: 20px;

  height: ${profilePicSize}px;
  width: ${profilePicSize}px;

  border-radius: 50%;

  @media (max-width: ${responsiveWidth}px){
    height: ${profilePicSizeResponsive}px;
    width: ${profilePicSizeResponsive}px;
  }
`;
