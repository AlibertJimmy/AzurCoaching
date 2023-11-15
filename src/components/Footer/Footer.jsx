// Import React Libraries
import { Link } from 'react-router-dom'
import { css } from 'styled-components'

// Import Component
import CopyEmailLink from '../Mail/Mail'

// Import Assets
import ArrowUp from '../../assets/icon/arrowUp.png'
import Mail from '../../assets/icon/Mail.png'
import Tel from '../../assets/icon/Tel.png'
import Azur_Logo from '../../assets/logo/Azur_Logo.png'
import LinkedIn_Black from '../../assets/icon/LinkedIn_Black.png'

// Import Style
import styled from 'styled-components'
import colors from '../../utils/Colors'
import { ComponentBorder } from '../../utils/Styles'



const StyledFooter = styled.div`
    display: flex;
    flex-direction: row;
    
    justify-content: space-between;

    margin-top:50px;

    background-color: ${colors.creme};
    color: ${colors.headerFooterText};

    button#goToTopButton {
        background-color: ${colors.creme};
        color: #fff;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        margin-right:5px;
        border-radius:15px;

        &:hover{
            background-color: white;
        }
      }
`
const ContentDiv = styled.div`
    ${ComponentBorder};
    text-align:center;
    margin: 20px 0;

`

const CommonP = css`
    margin: 5px;
    text-align:center;
`

const StyledP = styled.p`
    ${CommonP};
    font-size: 15px;

`

const StyledP1 = styled.p`
    ${CommonP};
    font-size: 20px;
    font-family: sans-serif;
    font-weight:bold;
    text-transform: uppercase;
`

const StyledIMG = styled.img`
      height: 100px;
      width: 200px;
`
const StyledIMG2 = styled.img`
      height: 30px;
      width: 30px;
      padding-left:10px;
`

const StyledIMG3 = styled.img`
    height: 20px;
    width: 20px;
    padding-right: 10px;
`

const StyledImgArrowUp = styled.img`
    height: 20px; 
    width: 20px;
`

const SideDivStyle = css`
    width:60px;
    ${ComponentBorder};
`
const ButtonDiv = styled.div`
    ${SideDivStyle};
    margin-bottom: 10px;
    display:flex;
    justify-content: flex-start;
    align-items: flex-end;
`

const StyledButton = styled.button`
      margin:0;
      padding:0;
`

const LeftSideDiv = styled.div`
    ${SideDivStyle};
    
`


function Footer() {

    const mailPopUpStyle = {
        fontFamily: 'sans-serif',
        backgroundColor: 'white',
        color: '#000',
        borderRadius: '5px',
    }

    const handleGoToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

  return (
    <StyledFooter>
        <LeftSideDiv></LeftSideDiv>
        <ContentDiv>
            <StyledIMG src={Azur_Logo} alt='Azur_Logo'></StyledIMG>
            <StyledP1>Follow Us
                <span>
                    <Link>
                    <StyledIMG2 src={LinkedIn_Black} alt='LinkedIn_Black'></StyledIMG2>
                    </Link>
                </span>
            </StyledP1>
            <StyledP><span><StyledIMG3 src={Mail} alt='Mail'></StyledIMG3></span><CopyEmailLink email={`Mymail@gmail.com`} style={mailPopUpStyle}/></StyledP>
            <StyledP><span><StyledIMG3 src={Tel} alt='Tel'></StyledIMG3></span>Phone Number</StyledP>
            <StyledP>TVA</StyledP>
            <StyledP>Copyright 2023 © Azur.</StyledP>
        </ContentDiv>
        <ButtonDiv>
            <StyledButton id="goToTopButton" onClick={handleGoToTop}>
                <StyledImgArrowUp src={ArrowUp} alt='arrowUp'></StyledImgArrowUp>
            </StyledButton>
        </ButtonDiv>
    </StyledFooter>
  )
}

export default Footer
