// Import React Libraries
import React from 'react';
import { HashLink } from 'react-router-hash-link';

// Import Proptype
import { serviceListPropType } from '../../../datas/DataPropTypes';

// Import Style
import {
  ServiceWrapper, ServiceContainer,
  IconContainer, IconIMG,
  ServiceContentContainer, StyledTitle
} from '../../../utils/Styles/ServicesStyle';

function Services ({ servicesList }) {
  return (

        <ServiceWrapper id='servicesWrapper'>
            {servicesList.map((service) => (
            <ServiceContainer key={service.title} id={`serviceContainer${service.title}`}>

                <IconContainer>
                    <HashLink to={`/${service.link}${service.anchor ? `#${service.anchor}` : ''}`}>
                            <IconIMG src={service.illustration} alt='icon'/>
                    </HashLink>
                </IconContainer>

                <ServiceContentContainer>
                    <StyledTitle>{service.title}</StyledTitle>
                    <p>{service.text}</p>
                </ServiceContentContainer>

            </ServiceContainer>
            ))}
        </ServiceWrapper>

  );
};

Services.propTypes = {
  servicesList: serviceListPropType.isRequired
};

export default Services;
