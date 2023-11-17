// Import React Libraries
//import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// Import Constans
import { responsiveWidth } from '../../../utils/Constant' 
// Import Style
import styled from 'styled-components'
import { ComponentBorder } from '../../../utils/Styles';


const ServicesWrapper = styled.div`
    ${ComponentBorder};    
    display:flex;
    flex-wrap: wrap;
    margin: 20px;   
`

const ServiceContainer = styled.div`
    ${ComponentBorder};    
    flex: 0 0 calc(33.33% - 10px);
    display:flex;
    flex-direction: row;    
    width: 300px;

    &:hover{
        img{
            border: 2px solid black;
            border-radius:20px;
        }  
    }

    @media (max-width: ${responsiveWidth}px){
        flex: 1 0 calc(50% - 10px);
      }
`

const IconContainer = styled.div`
    ${ComponentBorder};
    margin:5px;
    margin-right: 10px;
    display:inline-block;
    height: 40px;
    width: 40px;

`

const IconIMG = styled.img`

    height: 30px;
    width: 30px;
    padding:5px;

    border: 2px solid white;
    border-radius:20px;
`

const ServiceContentContainer = styled.div`
    display:flex;
    flex-direction:column;
    ${ComponentBorder};
`
const StyledTitle = styled.h1`
    font-size:20px;

`
const StyledP = styled.p`

`

function Services({servicesList}) {


    return (
        
          <ServicesWrapper>
            
                    {servicesList.map((service) => (
                    <ServiceContainer key={service.title}>
                        
                            <IconContainer>
                            
                            <HashLink to={`/${service.link}${service.anchor ? `#${service.anchor}` : ''}`}>
                                    <IconIMG src={service.illustration} alt='icon'></IconIMG>
                            </HashLink>
                            </IconContainer>
                        
                        <ServiceContentContainer>
                            <StyledTitle>{service.title}</StyledTitle>
                            <StyledP>{service.text}</StyledP>
                        </ServiceContentContainer>
                        
                    </ServiceContainer>
                ))}
          </ServicesWrapper>
        
    )
  }
  
  export default Services
  