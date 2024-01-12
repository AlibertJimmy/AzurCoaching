// Import React Libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';

// Import Component
import CopyEmailLink from '../Mail/Mail';

// Import Assets
import Mail from '../../assets/icon/Mail.png';
import Tel from '../../assets/icon/Tel.png';
import AzurLogo from '../../assets/logo/Azur_Logo.png';
import LinkedInBlack from '../../assets/icon/LinkedIn_Black.png';

// Import Style
import {
  FooterWrapper, FooterContainer,
  TextContainer, FooterP,
  SideContainer, FooterButton, FooterIcon
} from '../../utils/Styles/FooterStyle';

function Footer () {
  const currentYear = format(new Date(), 'yyyy');
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
                <FooterP style={{ fontSize: '20px', fontWeight: 'bold', textTransform: 'uppercase' }}>Follow Us</FooterP>
                <Link><img src={LinkedInBlack} alt='LinkedIn_Black' style={{ height: '30px', width: '30px' }}/></Link>
            </TextContainer>
            <TextContainer>
                <img src={Mail} alt='Mail' style={{ height: '20px', width: '20px' }}/>
                <FooterP><CopyEmailLink email={'Mymail@gmail.com'} style={mailPopUpStyle}/></FooterP>
            </TextContainer>
            <TextContainer>
                <img src={Tel} alt='Tel' style={{ height: '20px', width: '20px' }}/>
                <FooterP>Phone Number</FooterP>
            </TextContainer>
            <TextContainer>
                <FooterP>TVA</FooterP>
            </TextContainer>
            <TextContainer>
                <FooterP>Copyright © {currentYear} All rights reserved.</FooterP>
            </TextContainer>
        </FooterContainer>
        <SideContainer>
            <FooterButton id="scrollToTopButton" onClick={handleGoToTop}>
              <FooterIcon icon={faChevronUp}/>
            </FooterButton>
        </SideContainer>
    </FooterWrapper>
  );
}

export default Footer;
