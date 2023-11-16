// Import React Libraries

// Import Constans
import { responsiveWidth } from '../../utils/Constant' 
// Import Style
import styled from 'styled-components'
import { ComponentBorder } from '../../utils/Styles';
import colors from '../../utils/Colors';


const ServicesWrapper = styled.div`
    ${ComponentBorder};    
    display:flex;
    flex-direction:column;
    margin: 20px;   
`

const ServiceContainer = styled.div`
    ${ComponentBorder}; 
    display:flex;
    justify-content: space-evenly;
    flex-direction: row;  
    position: relative;
    padding-top: 50px;
    padding-bottom: 50px;

    &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 30%;
        width: 33%; /* Adjust the width based on how much you want to underline */
        border-bottom: 1px solid ${colors.bluePastel}; /* Adjust the color and thickness */
      }

    &:last-child {
        &:before {
            content: none; /* Remove the underline effect for the last child */
        }
    }
    
    @media (max-width: ${responsiveWidth}px){
    flex-direction:column;
    }
    
`

const LeftDiv = styled.div`
    display:flex;
    flex-direction:column;
    width:300px;
    ${ComponentBorder};
`
 

const RightDiv = styled.div`
    display:flex;
    flex-direction:column;
    width:600px;
    ${ComponentBorder};

    @media (max-width: ${responsiveWidth}px){
        width:300px;
    }
`
const StyledTitle = styled.h1`
    font-size:25px;
    font-weight:bold;
    font-family: sans-serif;
    color: ${colors.bluePastel};
    padding-left:10px;
    position: relative;
    display: inline-block;
    height: 40px;

    &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 20px;
        width: 30%; /* Adjust the width based on how much you want to underline */
        border-bottom: 2px solid ${colors.bluePastel}; /* Adjust the color and thickness */
      }

`
const StyledP = styled.p`
      padding-left: 2em;
`

const StyledUl = styled.ul`
    list-style-type: none;

    li {
        position: relative;
        display: flex;

        &::before {
            content: "\\2714";
            margin-right: 1.5em; /* Adjust the spacing between the checkmark and text */

            @media (max-width: ${responsiveWidth}px){
                margin-right: 0.55em; 
                }
        }
    }

    
`

function ServicesDetails({servicesList}) {
    return (
        
          <ServicesWrapper>
            
                    {servicesList.map((service) => (
                    <ServiceContainer key={service.title}>
                        <LeftDiv>
                            <StyledTitle>{service.title}</StyledTitle>
                        </LeftDiv>
                        <RightDiv>
                        {service.text ? (
                            <StyledP>{service.text}</StyledP>
                            ) : (
                            <StyledUl>
                                {service.list.map((liComponent) => (
                                    <li>{liComponent.li}</li>
                                ))}
                            </StyledUl>
                            )}
                        </RightDiv>
                        
                    </ServiceContainer>
                ))}
          </ServicesWrapper>
        
    )
  }
  
  export default ServicesDetails
  