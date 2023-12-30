// Import React Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Import Component
import Services from './Services';

// Import Assets
import ArrowRight from '../../../assets/icon/arrowRight.png';

// Import Datas
import { IndividualServicesList } from '../../../datas/IndividualServices';
import { BusinessServicesList } from '../../../datas/BusinessServices';

// Import Style
import { SectionWrapper } from '../../../utils/Styles';
import {
  StyledSubTitle, StyledTitle,
  ButtonContainer, CustomButton, StyledIMG
} from '../../../utils/Styles/ServicesStyle';

function OurServices () {
  return (

          <SectionWrapper id='servicesSectionWrapper'>
            <StyledTitle>Our Services</StyledTitle>

            <StyledSubTitle>Companies</StyledSubTitle>
            <Services servicesList={BusinessServicesList}/>
            <ButtonContainer>
                <Link to='/BusinessServices'>
                    <CustomButton>Discover All Business Services
                            <StyledIMG src={ArrowRight} alt='arrowRight'></StyledIMG>
                    </CustomButton>
                </Link>
            </ButtonContainer>

            <StyledSubTitle>Individual</StyledSubTitle>
            <Services servicesList={IndividualServicesList}/>
            <ButtonContainer>
                <Link to='/IndividualServices'>
                    <CustomButton>Discover All Individual Services
                            <StyledIMG src={ArrowRight} alt='arrowRight'></StyledIMG>
                    </CustomButton>
                </Link>
            </ButtonContainer>
          </SectionWrapper>

  );
}

export default OurServices;
