// Import React Libraries
import React from 'react';

// Import Datas
import { ContactIntroductionContent } from '../../datas/ContactIntroduction';

// Import Style
import styled, { css } from 'styled-components';
import colors from '../../utils/Colors';

// Import Constants
import { responsiveWidth } from '../../utils/Constant';

const IntroductionContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledTitle = styled.h1`
    font-size:30px;
    font-family:sans-serif;
    color: ${colors.bluePastel};

    @media (max-width: ${responsiveWidth}px) {
        font-size: 45px;    
    }
`;

const CommonText = css`
    font-size:15px;
    font-family:sans-serif;
`;

const StyledText1 = styled.p`
    ${CommonText};
    margin-bottom:5px;;

    @media (max-width: ${responsiveWidth}px) {
        font-size: 25px;    
    }
`;

const StyledText2 = styled.p`
    ${CommonText};
    font-weight: bold;
    margin-top:5px;


    @media (max-width: ${responsiveWidth}px) {
        font-size: 25px;    
    }
`;

function ContactIntroduction () {
  return (
            <IntroductionContainer>
                    <StyledTitle>{ContactIntroductionContent.title}</StyledTitle>
                    <StyledText1>
                        {ContactIntroductionContent.text1}
                        <br></br>
                        {ContactIntroductionContent.text2}
                    </StyledText1>
                    <StyledText2>
                        {ContactIntroductionContent.text3}
                    </StyledText2>
            </IntroductionContainer>
  );
}

export default ContactIntroduction;
