// Import React Libraries
import React from 'react';

// Import Component
import ContactIntroduction from './ContactIntroduction';
import ContactForm from '../ContactForm/ContactForm';

// Import Style
import styled from 'styled-components';

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px 50px;
`;

function ContactContent () {
  return (
            <ContentWrapper>
                <ContactIntroduction/>
                <ContactForm/>
            </ContentWrapper>
  );
}
export default ContactContent;
