// Import React Libraries
import React from 'react';

// Import Assets
import ProfilePic from '../../../assets/pictures/ProfilePic.png';

// Import Datas
import { PresentationContent } from '../../../datas/Presentation';

// Import Style
import styled, { css } from 'styled-components';
import { profilePicSize, profilePicSizeResponsive, responsiveWidth } from '../../../utils/Constant';

const PresentationWrapper = styled.div`
    display: flex;
    align-items:center;
    margin: 20px;

    @media (max-width: ${responsiveWidth}px){
        flex-direction:column;
      }

`;
const PresentationTextWrapper = styled.div`
    margin: 20px;
`;

const StyledTitle = styled.h1`

`;

const StyledSumUp = styled.h2`
    font-style:sans-serif;
    font-size:20px;
    font-weight:normal;
    margin:0;
`;

const CommonP = css`
    font-size: 18px;
`;

const StyledP = styled.p`
    ${CommonP};
`;

const StyledPItalic = styled.p`
    ${CommonP};
    font-style:italic;
`;

const StyledIMG = styled.img`
    margin: 20px;

    height: ${profilePicSize}px;
    width: ${profilePicSize}px;
    border-radius: ${profilePicSize / 2}px;

    @media (max-width: ${responsiveWidth}px){
        height: ${profilePicSizeResponsive}px;
        width: ${profilePicSizeResponsive}px;
        border-radius: ${profilePicSizeResponsive / 2}px;
      }
    
`;

function Presentation () {
  return (
            <PresentationWrapper>
                <PresentationTextWrapper>
                    <StyledTitle>{PresentationContent.title}</StyledTitle>
                    <StyledSumUp>{PresentationContent.sumUp[0].name}</StyledSumUp>
                    <StyledSumUp>{PresentationContent.sumUp[0].title1}</StyledSumUp>
                    <StyledSumUp>{PresentationContent.sumUp[0].title2}</StyledSumUp>
                    <StyledSumUp>{PresentationContent.sumUp[0].title3}</StyledSumUp>
                    <StyledP>{PresentationContent.text1}</StyledP>
                    <StyledP>{PresentationContent.text2}</StyledP>
                    <StyledPItalic>{PresentationContent.textItalic}</StyledPItalic>
                </PresentationTextWrapper>
                <div>
                    <StyledIMG src={ProfilePic} alt='ProfilePic'></StyledIMG>
                </div>
            </PresentationWrapper>
  );
}

export default Presentation;
