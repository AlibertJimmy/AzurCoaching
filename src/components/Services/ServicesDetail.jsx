// Import React Libraries
import React from 'react';

// Import PropTypes
import { servicesListDetailPropTypes } from '../../datas/DataPropTypes';

// Import Style
import { SectionWrapper } from '../../utils/Styles';
import {
  ServiceDetailWrapper,
  ServiceDetailTitleContainer, ServiceDetailTitle,
  ServiceDetailDescriptionContainer, ServiceDetailDescriptionUl
} from '../../utils/Styles/ServicesStyle';

function ServicesDetails ({ servicesList }) {
  return (

    <SectionWrapper>
            {servicesList.map((service) => (
            <ServiceDetailWrapper key={service.title} id={service.anchor}>
                <ServiceDetailTitleContainer>
                    <ServiceDetailTitle>{service.title}</ServiceDetailTitle>
                </ServiceDetailTitleContainer>
                <ServiceDetailDescriptionContainer>
                {service.text
                  ? (
                    <p style={{ margin: '0' }}>{service.text}</p>
                    )
                  : (
                    <ServiceDetailDescriptionUl>
                        {service.list.map((liComponent, index) => (
                            <li key={`${service.title}-li-${index}`}>{liComponent.li}</li>
                        ))}
                    </ServiceDetailDescriptionUl>
                    )}
                </ServiceDetailDescriptionContainer>
            </ServiceDetailWrapper>
            ))}
    </SectionWrapper>

  );
}

ServicesDetails.propTypes = servicesListDetailPropTypes;

export default ServicesDetails;
