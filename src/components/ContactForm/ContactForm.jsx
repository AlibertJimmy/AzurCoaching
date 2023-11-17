//Import React Librarie
import React, { useState } from 'react';
import { css } from 'styled-components';

// Import Assets
import Mail_White from '../../assets/icon/Mail_White.png'

// Import Style
import styled from 'styled-components';
import { ComponentBorder } from '../../utils/Styles';
import { ButtonStyle } from '../../utils/Styles';

const ContactInfoWrapper = styled.div`
    ${ComponentBorder};
    border-color:red;
    display: flex;
    flex-wrap:wrap;
    flex-direction:row;

`
const ContactInfoContainer = styled.div`
    ${ComponentBorder};
    display:flex;
    flex: 1 0 calc(40% - 10px);
    width: 500px;
    margin: 5px 10px;
`
const CommonContactElement = css`
    display:flex;
    flex-direction:column;
    width:100%;
    input {
        box-sizing: border-box; 
    }

    span.error {
        color: red;
        font-size: 12px;
        margin-top: 5px;
    }
`
const ContactElement = styled.div`
    ${CommonContactElement};
    
`

const ContactElementMessage = styled.div`
    ${CommonContactElement};

    height: 150px;

    textarea{
        height: 100%;
    }
`


const StyledIMG = styled.img`
    width: 15px;
    height:15px;
    padding-right: 10px;
`

const StyledButton = styled.button`
    ${ButtonStyle};
    width: 200px;
`


function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    firstName: '',
    email: '',
    phone:'',
    companie:'',
    subject:'',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    firstName: '',
    email: '',
    phone:'',
    companie:'',
    subject:'',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFormErrors = {};
    if (!formData.name.trim()) {
      newFormErrors.name = 'Name is required';
    }
    else if (/\d/.test(formData.name)) {
        newFormErrors.name = 'Name should not contain numbers';
    }

    if (!formData.firstName.trim()) {
        newFormErrors.firstName = 'Firstname is required';
    }
    else if (/\d/.test(formData.firstName)) {
        newFormErrors.firstName = 'First Name should not contain numbers';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newFormErrors.email = 'Email is required';
    }
    else if (!emailRegex.test(formData.email)) {
        newFormErrors.email = 'Invalid email format';
    }

    const phoneRegex = /^\d{10}$/; 
    if (!formData.phone.trim()) {
        newFormErrors.phone = 'Phone is required';
    }
    else if (!phoneRegex.test(formData.phone)) {
        newFormErrors.phone = 'Invalid phone number format';
    }

    const maxSubjectLength = 100;
    if (!formData.subject.trim()) {
        newFormErrors.subject = 'Subject is required';
    }
    else if (formData.subject.length > maxSubjectLength) {
        newFormErrors.subject = `Subject should be at most ${maxSubjectLength} characters`;
    }

    const maxMessageLength = 500;
    if (!formData.message.trim()) {
      newFormErrors.message = 'Message is required';
    }
    else if (formData.message.length > maxMessageLength) {
        newFormErrors.message = `Message should be at most ${maxMessageLength} characters`;
    }


    if (Object.keys(newFormErrors).length === 0) {
      // Form is valid, you can submit the data or perform other actions
      console.log('Form submitted:', formData);
    } else {
      // Update formErrors state with validation errors
      setFormErrors(newFormErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <ContactInfoWrapper>
            <ContactInfoContainer>
                <ContactElement>
                    <label htmlFor="name">Name *</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    />
                    <span className="error">{formErrors.name}</span>
                </ContactElement>
                
            </ContactInfoContainer>

            <ContactInfoContainer>
                <ContactElement>
                    <label htmlFor="firstName">First Name *</label>
                    <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    />
                    <span className="error">{formErrors.firstName}</span>
                </ContactElement>
            </ContactInfoContainer>

            <ContactInfoContainer>
                <ContactElement>
                    <label htmlFor="email">Email *</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    />
                    <span className="error">{formErrors.email}</span>
                </ContactElement>
            </ContactInfoContainer>

            <ContactInfoContainer>
                <ContactElement>
                    <label htmlFor="phone">Phone *</label>
                    <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    />
                    <span className="error">{formErrors.phone}</span>
                </ContactElement>
            </ContactInfoContainer>

            <ContactInfoContainer>
                <ContactElement>
                    <label htmlFor="companie">Companie</label>
                    <input
                    type="text"
                    id="companie"
                    name="companie"
                    value={formData.companie}
                    onChange={handleChange}
                    />
                    <span className="error">{formErrors.companie}</span>
                </ContactElement>
            </ContactInfoContainer>

            <ContactInfoContainer>
                <ContactElement>
                    <label htmlFor="subject">Subject *</label>
                    <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    />
                    <span className="error">{formErrors.subject}</span>
                </ContactElement>
            </ContactInfoContainer>

            <ContactInfoContainer>
                <ContactElementMessage>
                    <label htmlFor="message">Message *</label>
                    <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    />
                    <span className="error">{formErrors.message}</span>
                </ContactElementMessage>
            </ContactInfoContainer>
        
        </ContactInfoWrapper>
        

      
        

        <div style={{ marginLeft: '10px' }}>
            <StyledButton type="submit"><span><StyledIMG src={Mail_White} alt='Mail'></StyledIMG></span>Send the Message</StyledButton>
        </div>
        
        
    </form>
  );
};

export default ContactForm;
