// Import React Libraries
import React from 'react';

// Import Datas
import { ContactIntroductionContent } from '../../datas/ContactIntroduction';

// Import Style
import { IntroductionContainer, StyledTitle, StyledText } from '../../utils/Styles/ContactStyle';

function ContactIntroduction () {
  return (
            <IntroductionContainer id='contactIntroductionContainer'>
                    <StyledTitle>{ContactIntroductionContent.title}</StyledTitle>
                    <StyledText>
                        {ContactIntroductionContent.text1}
                        <br></br>
                        {ContactIntroductionContent.text2}
                    </StyledText>
                    <StyledText style={{ fontWeight: 'bold' }}>
                        {ContactIntroductionContent.text3}
                    </StyledText>
            </IntroductionContainer>
  );
}

export default ContactIntroduction;
