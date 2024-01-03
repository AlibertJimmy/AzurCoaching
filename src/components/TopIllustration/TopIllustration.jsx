// Import React Libraries
import React from 'react';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Style
import { TopIllustrationWrapper, AbsolutePositionContainer, TopPageTitle, TopPageText } from '../../utils/Styles/TopIllustrationStyle';

function TopIllustration ({ title, text1, text2 }) {
  return (
    <TopIllustrationWrapper id='topPageillustrationWrapper'>
      <AbsolutePositionContainer>
        <TopPageTitle>{title}</TopPageTitle>
        {text1
          ? (
            <TopPageText>{text1}</TopPageText>
            )
          : (null)
        }
        {text2
          ? (
          <>
          <br/>
          <TopPageText>{text2}</TopPageText>
          </>
            )
          : (null)
        }
      </AbsolutePositionContainer>
    </TopIllustrationWrapper>
  );
}

TopIllustration.propTypes = {
  title: PropTypes.string.isRequired,
  text1: PropTypes.string,
  text2: PropTypes.string
};

export default TopIllustration;
