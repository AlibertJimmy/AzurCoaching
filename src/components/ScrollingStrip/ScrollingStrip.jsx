// Import React Libraries
import React, { useState, useEffect } from 'react';

// Import PropTypes
import PropTypes from 'prop-types';
import { homeTitlesPropTypes } from '../../datas/DataPropTypes';

// Import Constant
import { responsiveWidth } from '../../utils/Constant';

// Import Style
import styled from 'styled-components';

const TitleContainer = ({ className, children }) => <div className={className}>{children}</div>;

TitleContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

const StyledTitleContainer = styled(TitleContainer)`
    ${({ customStyle }) => customStyle && `
    font-size: ${customStyle.fontSize};
    font-style: ${customStyle.fontStyle};
    font-family: ${customStyle.fontFamily};
    font-weight:${customStyle.fontWeight};
    line-height:${customStyle.lineHeight};
    color: ${customStyle.color};
    text-transform: ${customStyle.textTransform};
    `}  

    @media (max-width: ${responsiveWidth}px) {
        ${({ customStyle }) => customStyle && `
        font-size: ${customStyle.fontSizeResponsive};
        `
      }
`;

function ScrollingStrip ({ datas, customStyle }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Add temporisation between datas display
  useEffect(() => {
    if (datas.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % datas.length);
      }, 3000); // 8 seconds

      return () => {
        clearInterval(timer); // Clear the interval on component unmount
      };
    }
  }, [datas]);

  if (datas.length === 0) {
    return null;
  }

  return (
      <div>
        <StyledTitleContainer customStyle={customStyle}>
            {datas[currentIndex]}
        </StyledTitleContainer>

      </div>
  );
}

const customStylePropTypes = PropTypes.shape({
  fontSize: PropTypes.string.isRequired,
  fontSizeResponsive: PropTypes.string.isRequired,
  fontStyle: PropTypes.string.isRequired,
  fontFamily: PropTypes.string.isRequired,
  fontWeight: PropTypes.string.isRequired,
  lineHeight: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  textTransform: PropTypes.string.isRequired
});

ScrollingStrip.propTypes = {
  datas: homeTitlesPropTypes.isRequired,
  customStyle: customStylePropTypes.isRequired

};

export default ScrollingStrip;
