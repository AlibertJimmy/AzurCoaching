// Import React Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Import Functions
import { scrollToTop } from '../../utils/Functions';

// Import Style
import {
  ContactStripContainer,
  AbsoluteContainer1, StyledTitle,
  AbsoluteContainer2, StyledButton, StyledText1
} from '../../utils/Styles/ContactStripStyle';

function ContactStrip () {
  const title = 'Do you like my services ?';
  const text1 = "Let's discuss it, I would be happy";
  const text2 = 'to share with you.';
  const buttonText = 'Contact Me';

  return (
            <ContactStripContainer id='contactStripContainer'>
                <AbsoluteContainer1 id='absoluteContainer1'>
                    <StyledTitle>{title}</StyledTitle>
                </AbsoluteContainer1>
                <AbsoluteContainer2 id='absoluteContainer2'>
                    <StyledText1>
                        {text1}<br/>{text2}
                    </StyledText1>
                    <Link to='/Contact' onClick={() => scrollToTop()}>
                        <StyledButton>{buttonText}</StyledButton>
                    </Link>
                </AbsoluteContainer2>

            </ContactStripContainer>
  );
}

export default ContactStrip;
