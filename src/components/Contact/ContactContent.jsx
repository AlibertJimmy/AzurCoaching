// Import React Libraries
import React from 'react';

// Import Component
import ContactIntroduction from './ContactIntroduction';
import ContactForm from '../ContactForm/ContactForm';

// Import Style
import { ContentWrapper } from '../../utils/Styles/ContactStyle';

function ContactContent () {
  return (
            <ContentWrapper id='contactContentWrapper'>
                <ContactIntroduction/>
                <ContactForm/>
            </ContentWrapper>
  );
}
export default ContactContent;
