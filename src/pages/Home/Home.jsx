// Import React Libraries
import React from 'react';

// Import Component
import HomeIllustration from '../../components/TopIllustration/HomeIllustration';
import Presentation from '../../components/Home/Presentation/Presentation';
import AnimatedIconStrip from '../../components/Home/AnimatedIconStrip/AnimatedIconStrip';
import OurServices from '../../components/Home/Services/OurServices';
import Footer from '../../components/Footer/Footer';

function Home () {
  return (
    <div>
      <HomeIllustration/>
      <Presentation/>
      <AnimatedIconStrip/>
      <OurServices/>
      <Footer/>
    </div>
  );
}
export default Home;
