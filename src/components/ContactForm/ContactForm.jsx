// Import React Librarie
import React, { useState } from 'react';

// Import Assets
import MailWhite from '../../assets/icon/Mail_White.png';
import {
  FormInputWrapper, FormInputContainer, FormFieldWrapper, FormInput,
  StyledIMG
} from '../../utils/Styles/ContactStyle';
import { StyledButton } from '../../utils/Styles';

// Import Style

function ContactForm () {
  const [formData, setFormData] = useState({
    name: '',
    firstName: '',
    email: '',
    phone: '',
    companie: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    firstName: '',
    email: '',
    phone: '',
    companie: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFormErrors = {};
    if (!formData.name.trim()) {
      newFormErrors.name = 'Name is required';
    } else if (/\d/.test(formData.name)) {
      newFormErrors.name = 'Name should not contain numbers';
    }

    if (!formData.firstName.trim()) {
      newFormErrors.firstName = 'Firstname is required';
    } else if (/\d/.test(formData.firstName)) {
      newFormErrors.firstName = 'First Name should not contain numbers';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newFormErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newFormErrors.email = 'Invalid email format';
    }

    const phoneRegex = /^\d{10}$/;
    if (!formData.phone.trim()) {
      newFormErrors.phone = 'Phone is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newFormErrors.phone = 'Invalid phone number format';
    }

    const maxSubjectLength = 100;
    if (!formData.subject.trim()) {
      newFormErrors.subject = 'Subject is required';
    } else if (formData.subject.length > maxSubjectLength) {
      newFormErrors.subject = `Subject should be at most ${maxSubjectLength} characters`;
    }

    const maxMessageLength = 500;
    if (!formData.message.trim()) {
      newFormErrors.message = 'Message is required';
    } else if (formData.message.length > maxMessageLength) {
      newFormErrors.message = `Message should be at most ${maxMessageLength} characters`;
    }

    if (Object.keys(newFormErrors).length === 0) {
      console.log('Form submitted:', formData);
    } else {
      setFormErrors(newFormErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <FormInputWrapper id='formInputWrapper'>
            <FormInputContainer id='formInputContainerName'>
                <FormFieldWrapper>
                    <label htmlFor="name">Name *</label>
                    <FormInput
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    />
                    <span className="error">{formErrors.name}</span>
                </FormFieldWrapper>
            </FormInputContainer>

            <FormInputContainer id='formInputContainerFirstName'>
                <FormFieldWrapper>
                    <label htmlFor="firstName">First Name *</label>
                    <FormInput
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    />
                    <span className="error">{formErrors.firstName}</span>
                </FormFieldWrapper>
            </FormInputContainer>

            <FormInputContainer id='formInputContainerEmail'>
                <FormFieldWrapper>
                    <label htmlFor="email">Email *</label>
                    <FormInput
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    />
                    <span className="error">{formErrors.email}</span>
                </FormFieldWrapper>
            </FormInputContainer>

            <FormInputContainer id='formInputContainerPhone'>
                <FormFieldWrapper>
                    <label htmlFor="phone">Phone *</label>
                    <FormInput
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    />
                    <span className="error">{formErrors.phone}</span>
                </FormFieldWrapper>
            </FormInputContainer>

            <FormInputContainer id='formInputContainerCompanie'>
                <FormFieldWrapper>
                    <label htmlFor="companie">Companie</label>
                    <FormInput
                    type="text"
                    id="companie"
                    name="companie"
                    value={formData.companie}
                    onChange={handleChange}
                    />
                    <span className="error">{formErrors.companie}</span>
                </FormFieldWrapper>
            </FormInputContainer>

            <FormInputContainer id='formInputContainerSubject'>
                <FormFieldWrapper>
                    <label htmlFor="subject">Subject *</label>
                    <FormInput
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    />
                    <span className="error">{formErrors.subject}</span>
                </FormFieldWrapper>
            </FormInputContainer>

            <FormInputContainer id='formInputContainerMessage'>
                <FormFieldWrapper style={{ height: '150px' }}>
                    <label htmlFor="message">Message *</label>
                    <FormInput
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    style={{ height: '110px' }}
                    />
                    <span className="error">{formErrors.message}</span>
                </FormFieldWrapper>
            </FormInputContainer>
        </FormInputWrapper>
        <div style={{ marginLeft: '10px' }}>
            <StyledButton type="submit"><span><StyledIMG src={MailWhite} alt='Mail'></StyledIMG></span>Send the Message</StyledButton>
        </div>
    </form>
  );
};
export default ContactForm;
