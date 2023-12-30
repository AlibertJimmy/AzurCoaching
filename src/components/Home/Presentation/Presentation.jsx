// Import React Libraries
import React from 'react';

// Import Assets
import ProfilePic from '../../../assets/pictures/ProfilePic.png';

// Import Datas
import { PresentationContent } from '../../../datas/Presentation';

// Import Style
import {
  PresentationWrapper,
  PresentationContainer,
  StyledSumUp, ProfileIMG
} from '../../../utils/Styles/PresentationStyle';

function Presentation () {
  return (
    <PresentationWrapper id='presentationWrapper'>
        <PresentationContainer id='presentationContainer'>
            <h1>{PresentationContent.title}</h1>
            <StyledSumUp>{PresentationContent.sumUp[0].name}</StyledSumUp>
            <StyledSumUp>{PresentationContent.sumUp[0].title1}</StyledSumUp>
            <StyledSumUp>{PresentationContent.sumUp[0].title2}</StyledSumUp>
            <StyledSumUp>{PresentationContent.sumUp[0].title3}</StyledSumUp>
            <p style={{ fontSize: '18px' }}>{PresentationContent.text1}</p>
            <p style={{ fontSize: '18px' }}>{PresentationContent.text2}</p>
            <p style={{ fontSize: '18px', fontStyle: 'italic' }}>{PresentationContent.textItalic}</p>
        </PresentationContainer>
        <ProfileIMG src={ProfilePic} alt='ProfilePic'/>
    </PresentationWrapper>
  );
}

export default Presentation;
