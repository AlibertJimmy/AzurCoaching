// Import React Librairies
import React from 'react';
//  Import Asset
import LogoPNG from '../../../assets/logo/Azur_Logo.png';

// Import Style
import styled from 'styled-components';
import { navHeight } from '../../../utils/Constant';

const SizedIMG = styled.img`
    width: ${navHeight * 2}px;
    height: ${navHeight}px;
`;

function Logo () {
  return (
        <SizedIMG src={LogoPNG} alt='Logo'></SizedIMG>
  );
}

export default Logo;
