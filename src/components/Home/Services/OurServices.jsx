// Import React Libraries
import { Link } from 'react-router-dom';
import { css } from 'styled-components';
// Import Component
import Services from './Services';

// Import Assets
import ArrowRight from '../../../assets/icon/arrowRight.png'

// Import Datas
import { IndividualServicesList } from '../../../datas/IndividualServices';
import { BusinessServicesList } from '../../../datas/BusinessServices';

// Import Style
import styled from 'styled-components'
import { ComponentBorder, StyledButton } from '../../../utils/Styles';
import colors from '../../../utils/Colors';


const ServicesWrapper = styled.div`
    
    display:flex;
    flex-direction:column;
    ${ComponentBorder};
    margin: 20px;
`
const CommonTitle = css`
    color:${colors.bluePastel};
`

const StyledTitle = styled.h1`
    ${CommonTitle};
    display:flex;
    font-size:30px;
    
    justify-content:center;
`
const StyledSubTitle = styled.h1`
    ${CommonTitle};
    font-size:20px;
    margin-left: 20px;
`
const ButtonContainer = styled.div`
    display:flex;
    justify-content:center;
`

const CustomButton = styled(StyledButton)`
    img{
        display:none;
    }    

    &:hover{
        img{
            display:inline;
        }
    }
`

const StyledIMG = styled.img`
    height: 10px;
    width: 10px;
    padding-left:10px;
`

function OurServices() {
    return (
        
          <ServicesWrapper>
            <StyledTitle>Our Services</StyledTitle>

            <StyledSubTitle>Companies</StyledSubTitle>
            <Services servicesList={BusinessServicesList}/>
            <ButtonContainer>
                <Link to='/BusinessServices'>
                    <CustomButton>Discover All Business Services
                        <span><StyledIMG src={ArrowRight} alt='arrowRight'></StyledIMG></span>
                    </CustomButton>
                </Link>
            </ButtonContainer>
    
            <StyledSubTitle>Individual</StyledSubTitle>
            <Services servicesList={IndividualServicesList}/>
            <ButtonContainer>
                <Link to='/IndividualServices'>
                    <CustomButton>Discover All Individual Services
                        <span><StyledIMG src={ArrowRight} alt='arrowRight'></StyledIMG></span>
                    </CustomButton>
                </Link>
            </ButtonContainer>
          </ServicesWrapper>
        
    )
  }
  
  
  export default OurServices
  