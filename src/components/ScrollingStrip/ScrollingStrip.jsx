// Import React Libraries
import React, { useState, useEffect } from "react";
import css from "styled-components";

// Import Component

// Import Constant
import { responsiveWidth } from "../../utils/Constant";

// Import Style
import styled from 'styled-components';





const TitleContainer = styled.div`
    ${({ customStyle }) => customStyle &&`
    font-size: ${customStyle.fontSize};
    font-style: ${customStyle.fontStyle};
    font-family: ${customStyle.fontFamily};
    font-weight:${customStyle.fontWeight};
    line-height:${customStyle.lineHeight};
    color: ${customStyle.color};
    text-transform: ${customStyle.textTransform};
    `}  

    @media (max-width: ${responsiveWidth}px) {
        ${({ customStyle }) => customStyle &&`
        font-size: ${customStyle.fontSizeResponsive};
        `
      }
`


function ScrollingStrip({datas, customStyle}){

  const [currentIndex, setCurrentIndex] = useState(0);

  // Add temporisation between datas display
  useEffect(() => {
    if (datas.length > 0) {
  
      const timer = setInterval(() => {
        // Update the current index to show the next data
        setCurrentIndex((prevIndex) => (prevIndex + 1) % datas.length);
      }, 3000); // 8 seconds
  
      return () => {
        clearInterval(timer); // Clear the interval on component unmount
      };
    }
  }, [datas]);
  
      if (datas.length === 0) {
        return null; // Return null or a loading indicator until reviews are available.
      }

  return (
      <div>
        <TitleContainer customStyle={customStyle}>
            {datas[currentIndex]}
        </TitleContainer>
        
      </div>
  )
}

export default ScrollingStrip;

