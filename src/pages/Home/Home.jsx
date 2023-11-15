// Import React Libraries

// Import Component
import HomeIllustration from '../../components/HomeIllustration/HomeIllustration';
import Presentation from '../../components/Home/Presentation/Presentation';
import AnimatedIconStrip from '../../components/Home/AnimatedIconStrip/AnimatedIconStrip';
import OurServices from '../../components/Home/Services/OurServices';
import Footer from '../../components/Footer/Footer';
// Import Assets

// Import Style


function Home() {
    return (
          <div>
            <HomeIllustration/>
            <Presentation/>
            <AnimatedIconStrip/>
            <OurServices/>
            <Footer/>
          </div>
    )
  }
  
  export default Home
  