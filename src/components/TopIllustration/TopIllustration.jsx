// Import React Libraries

// Import Assets
import HomePicture from '../../assets/pictures/header_index.jpg';

// Import Datas

// Import Style
import styled from 'styled-components';

// Import Constants
import { borderWidth, responsiveWidth } from '../../utils/Constant';

const IllustrationContainer = styled.div`
    position: relative;
    width: 100%; 
    height:99vh;
    background-image: url(${HomePicture});
    background-size: cover;
`

const ContentPosition = styled.div`
    
    position: absolute;
    top: 50%;
    left: 50%;
    text-align:center;
    transform: translate(-50%, -50%);
    background-color: transparent ;

    width:100%;

    border-radius: 15px;
    border: ${borderWidth}px solid black;
`


const StyledTitle = styled.h1`
    font-size:100px;
    
    font-family:sans-serif;
    font-weight: bold;
    line-height: 1;
    color: white;
    text-transform:uppercase;

    @media (max-width: ${responsiveWidth}px) {
        font-size: 45px;    
    }
`

const StyledText1 = styled.div`
    font-size:15px;
        
    font-family:sans-serif;
    font-weight: bold;
    line-height: 1;
    color: white;

    @media (max-width: ${responsiveWidth}px) {
        font-size: 25px;    
    }
`
const StyledText2 = styled.div`
    font-size:20px;
            
    font-family:sans-serif;
    font-weight: bold;
    line-height: 1;
    color: white;
    text-transform:uppercase;

    margin-top: 20px;

    @media (max-width: ${responsiveWidth}px) {
        font-size: 25px;    
    }

`

function TopIllustration({title, text1, text2}) {

    return (
            <IllustrationContainer>
                <ContentPosition>
                    <StyledTitle>{title}</StyledTitle>
                    <StyledText1>{text1}</StyledText1>
                    {text2 ? (
                        <StyledText2>{text2}</StyledText2>
                        ) : (null)
                    }
                    
                    
                </ContentPosition>
                
            </IllustrationContainer>
    )
  }
  
  export default TopIllustration;
  