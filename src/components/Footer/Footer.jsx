// Import React Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Import Component
import CopyEmailLink from '../Mail/Mail';

// Import Assets
import ArrowUp from '../../assets/icon/arrowUp.png';
import Mail from '../../assets/icon/Mail.png';
import Tel from '../../assets/icon/Tel.png';
import AzurLogo from '../../assets/logo/Azur_Logo.png';
import LinkedInBlack from '../../assets/icon/LinkedIn_Black.png';

// Import Style
import {
  FooterWrapper, FooterContainer,
  TextContainer, StyledP,
  SideContainer, StyledButton, StyledImgArrowUp
} from '../../utils/Styles/FooterStyle';

function Footer () {
  const mailPopUpStyle = {
    fontFamily: 'sans-serif',
    backgroundColor: 'white',
    color: '#000',
    borderRadius: '5px'
  };

  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterWrapper id='footerWrapper'>
        <SideContainer/>
        <FooterContainer>
            <img src={AzurLogo} alt='Azur_Logo' style={{ height: '100px', width: '200px' }}/>
            <TextContainer>
                <StyledP style={{ fontSize: '20px', fontWeight: 'bold', textTransform: 'uppercase' }}>Follow Us</StyledP>
                <Link><img src={LinkedInBlack} alt='LinkedIn_Black' style={{ height: '30px', width: '30px' }}/></Link>
            </TextContainer>
            <TextContainer>
                <img src={Mail} alt='Mail' style={{ height: '20px', width: '20px' }}/>
                <StyledP><CopyEmailLink email={'Mymail@gmail.com'} style={mailPopUpStyle}/></StyledP>
            </TextContainer>
            <TextContainer>
                <img src={Tel} alt='Tel' style={{ height: '20px', width: '20px' }}/>
                <StyledP>Phone Number</StyledP>
            </TextContainer>
            <TextContainer>
                <StyledP>TVA</StyledP>
            </TextContainer>
            <TextContainer>
                <StyledP>Copyright 2023 © Azur.</StyledP>
            </TextContainer>
        </FooterContainer>
        <SideContainer>
            <StyledButton id="goToTopButton" onClick={handleGoToTop}>
                <StyledImgArrowUp src={ArrowUp} alt='arrowUp'></StyledImgArrowUp>
            </StyledButton>
        </SideContainer>
    </FooterWrapper>
  );
}

export default Footer;
