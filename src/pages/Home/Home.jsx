// Import React Libraries

// Import Component
import HomeIllustration from '../../components/HomeIllustration/HomeIllustration';
import Presentation from '../../components/Home/Presentation/Presentation';
import AnimatedIconStrip from '../../components/Home/AnimatedIconStrip/AnimatedIconStrip';
import OurServices from '../../components/Home/Services/OurServices';
// Import Assets

// Import Style


function Home() {
    return (
          <div>
            <HomeIllustration/>
            <Presentation/>
            <AnimatedIconStrip/>
            <OurServices/>
          </div>
    )
  }
  
  export default Home
  