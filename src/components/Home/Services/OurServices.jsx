// Import React Libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Import Component
import Services from './Services';

// Import Datas
import { IndividualServicesList } from '../../../datas/IndividualServices';
import { BusinessServicesList } from '../../../datas/BusinessServices';

// Import Style
import { SectionWrapper } from '../../../utils/Styles';
import {
  StyledSubTitle, StyledTitle,
  ButtonContainer, ServiceButton, ServiceIcon
} from '../../../utils/Styles/ServicesStyle';

function OurServices () {
  return (

          <SectionWrapper id='servicesSectionWrapper'>
            <StyledTitle>Our Services</StyledTitle>

            <StyledSubTitle>Companies</StyledSubTitle>
            <Services servicesList={BusinessServicesList}/>
            <ButtonContainer>
              <Link to='/BusinessServices' style={{ textDecoration: 'none' }}>
                <ServiceButton>Discover All Business Services
                  <ServiceIcon icon={faChevronRight}/>
                </ServiceButton>
              </Link>
            </ButtonContainer>

            <StyledSubTitle>Individual</StyledSubTitle>
            <Services servicesList={IndividualServicesList}/>
            <ButtonContainer>
              <Link to='/IndividualServices' style={{ textDecoration: 'none' }}>
                <ServiceButton>Discover All Individual Services
                  <ServiceIcon icon={faChevronRight}/>
                </ServiceButton>
              </Link>
            </ButtonContainer>
          </SectionWrapper>

  );
}

export default OurServices;
