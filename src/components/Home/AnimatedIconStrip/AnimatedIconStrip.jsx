// Import React Libraries
import React from 'react';
// Import Component
import IncrementalAnimation from '../../IncrementalAnimation/IncrementalAnimation';
// Import Datas
import { iconList } from '../../../datas/AnimatedIconStrip';

// Import Constans
import { responsiveWidth } from '../../../utils/Constant';
// Import Style
import styled from 'styled-components';
import colors from '../../../utils/Colors';

const IconWrapper = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color:${colors.creme};
    padding: 40px 0;

    @media (max-width: ${responsiveWidth}px){
        flex-direction:column;
      }
`;

const IconContainer = styled.div`

`;

const IconIMG = styled.img`
    height: 60px;
    width: 60px;
`;

const IconIllustrationContainer = styled.div`
    display: flex;
    justify-content: center;
`;

function AnimatedIconStrip () {
  return (
    <IconWrapper>
    {iconList.map((icon) => (
    <IconContainer key={icon.name}>
        <IconIllustrationContainer>
            <IconIMG src={icon.illustration} alt="PIC"></IconIMG>
        </IconIllustrationContainer>
        <div>
            <IncrementalAnimation endValue={icon.amount}></IncrementalAnimation>
            <h2 style={ { textAlign: 'center' } }>{icon.name}</h2>
        </div>
    </IconContainer>
    ))}
    </IconWrapper>
  );
}
export default AnimatedIconStrip;
