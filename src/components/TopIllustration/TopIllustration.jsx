// Import React Libraries
import React from 'react';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Assets
import HomePicture from '../../assets/pictures/header_index.jpg';

// Import Datas

// Import Style
import styled, { css } from 'styled-components';

// Import Constants
import { responsiveWidth, topIllustrationHeight } from '../../utils/Constant';

const IllustrationContainer = styled.div`
    position: relative;
    width: 100%; 
    height:${topIllustrationHeight}px;
    background-image: url(${HomePicture});
    background-size: cover;
`;

const ContentPosition = styled.div`
    
    position: absolute;
    top: 50%;
    left: 50%;
    text-align:center;
    transform: translate(-50%, -50%);
    background-color: transparent ;

    width:100%;

    border-radius: 15px;
`;

const Commontext = css`
    font-family:sans-serif;
    font-weight: bold;
    line-height: 1;
    color: white;
`;

const StyledTitle = styled.h1`
    ${Commontext};
    font-size:100px;
    
    text-transform:uppercase;

    @media (max-width: ${responsiveWidth}px) {
        font-size: 45px;    
    }
`;

const StyledText1 = styled.div`
    ${Commontext};
    font-size:25px;

    @media (max-width: ${responsiveWidth}px) {
        font-size: 15px;    
    }
`;
const StyledText2 = styled.div`
    ${Commontext};
    font-size:35px;

    text-transform:uppercase;

    margin-top: 20px;

    @media (max-width: ${responsiveWidth}px) {
        font-size: 20px;    
    }

`;

function TopIllustration ({ title, text1, text2 }) {
  return (
            <IllustrationContainer>
                <ContentPosition>
                    <StyledTitle>{title}</StyledTitle>
                    {text1
                      ? (
                        <StyledText1>{text1}</StyledText1>
                        )
                      : (null)
                    }
                    {text2
                      ? (
                        <StyledText2>{text2}</StyledText2>
                        )
                      : (null)
                    }

                </ContentPosition>

            </IllustrationContainer>
  );
}

TopIllustration.propTypes = {
  title: PropTypes.string.isRequired,
  text1: PropTypes.string,
  text2: PropTypes.string
};

export default TopIllustration;
