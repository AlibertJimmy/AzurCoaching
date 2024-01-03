// Import React Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Import Component
import ScrollingStrip from '../ScrollingStrip/ScrollingStrip';

// Import Functions
import { scrollToTop } from '../../utils/Functions';

// Import Datas
import { homeTitles } from '../../datas/HomeTitles';

// Import Style
import { StyledButton } from '../../utils/Styles';
import { TopIllustrationWrapper, AbsolutePositionContainer, HomeTopTitle } from '../../utils/Styles/TopIllustrationStyle';

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
            <TopIllustrationWrapper id='topHomeIllustrationWrapper'>
                <AbsolutePositionContainer id='scrollingStripContainer'>
                    <HomeTopTitle>Azur</HomeTopTitle>

                    <ScrollingStrip datas={homeTitles} customStyle={customStyle}/>
                    <Link to='/BusinessServices' onClick={() => scrollToTop()}>
                        <StyledButton>Check My Services</StyledButton>
                    </Link>

                </AbsolutePositionContainer>

            </TopIllustrationWrapper>
  );
}

export default HomeIllustration;
