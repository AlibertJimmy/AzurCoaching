// Import React Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Import Component
import ScrollingStrip from '../ScrollingStrip/ScrollingStrip';

// Import Functions
import { scrollToTop } from '../../utils/Functions';

// Import Assets
import HomePicture from '../../assets/pictures/header_index.jpg';

// Import Datas
import { homeTitles } from '../../datas/HomeTitles';

// Import Style
import styled from 'styled-components';
import { StyledButton } from '../../utils/Styles';

// Import Constants
import { responsiveWidth, topIllustrationHeight } from '../../utils/Constant';

const IllustrationContainer = styled.div`
    position: relative;
    width: 100%; 
    height:${topIllustrationHeight}px;
    background-image: url(${HomePicture});
    background-size: cover;
`;

const ScrollingStripPosition = styled.div`
    
    position: absolute;
    top: 50%;
    left: 50%;
    text-align:center;
    transform: translate(-50%, -50%);
    background-color: transparent ;

    width:100%;

    border-radius: 15px;
`;

const StyledTitle = styled.h1`
    font-family: sans-serif;
    color: white;
    font-size:50px;

    @media (max-width: ${responsiveWidth}px) {
        font-size: 25px;
        
      }
`;

function HomeIllustration () {
  const customStyle = {
    fontSize: '100px',
    fontSizeResponsive: '25px',
    fontStyle: '',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    lineHeight: '1',
    color: 'white',
    textTransform: 'uppercase'

  };

  return (
            <IllustrationContainer>
                <ScrollingStripPosition>
                    <StyledTitle>Azur</StyledTitle>

                    <ScrollingStrip datas={homeTitles} customStyle={customStyle}/>
                    <Link to='/BusinessServices' onClick={scrollToTop}>
                        <StyledButton>Check My Services</StyledButton>
                    </Link>

                </ScrollingStripPosition>

            </IllustrationContainer>
  );
}

export default HomeIllustration;
