// Import Style
import styled, { css } from 'styled-components';
import { CommomAbsolutePositionHolder } from '../Styles';

// Import Asset
import HomePicture from '../../assets/pictures/header_index.jpg';

// Import Constants
import { responsiveWidth, topIllustrationHeight } from '../Constant';

export const TopIllustrationWrapper = styled.div`
  position: relative;

  height:${topIllustrationHeight}px;
  width: 100%; 

  background-image: url(${HomePicture});
  background-size: cover;
`;

export const AbsolutePositionContainer = styled.div`
  ${CommomAbsolutePositionHolder};
  top:50%;
  height: 300px;
  @media (max-width: ${responsiveWidth}px) {
    height: 175px;
  }
`;

const Commontext = css`
  font-family: sans-serif;
  font-weight: bold;
  
  line-height: 1;
  color: white;
`;

// Home Page Related
export const HomeTopTitle = styled.h1`
  ${Commontext};
  font-size: 50px;

  @media (max-width: ${responsiveWidth}px) {
      font-size: 25px;
  }
`;
// Page Related
export const TopPageTitle = styled.h1`
  ${Commontext};
  font-size: 100px;
  text-transform: uppercase;
  
  @media (max-width: ${responsiveWidth}px) {
      font-size: 45px;    
  }
`;

export const TopPageText = styled.div`
  ${Commontext};
  font-size: 35px;
  text-transform: uppercase;

  @media (max-width: ${responsiveWidth}px) {
      font-size: 20px;    
  }
`;
