// Import React Libraries
import React from 'react';

// Import Component
import IncrementalAnimation from '../../IncrementalAnimation/IncrementalAnimation';

// Import Datas
import { iconList } from '../../../datas/AnimatedIconStrip';

// Import Style
import { AnimatedIconWrapper, AnimatedIconContainer } from '../../../utils/Styles/AnimatedIconStripStyle';

function AnimatedIconStrip () {
  return (
    <AnimatedIconWrapper id='animatedIconWrapper'>
        {iconList.map((icon) => (
        <AnimatedIconContainer key={icon.name} id={`AnimatedIconContainer${icon.name}`}>
            <img
            src={icon.illustration} alt="PIC"
            style={{ height: '60px', width: '60px' }}/>
            <IncrementalAnimation endValue={icon.amount}/>
            <h2 style={ { textAlign: 'center' } }>{icon.name}</h2>
        </AnimatedIconContainer>
        ))}
    </AnimatedIconWrapper>
  );
}
export default AnimatedIconStrip;
