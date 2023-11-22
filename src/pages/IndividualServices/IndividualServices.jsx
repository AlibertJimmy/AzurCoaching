// Import React Libraries
import React from 'react';

// Import Component
import TopIllustration from '../../components/TopIllustration/TopIllustration';
import ServicesDetails from '../../components/Services/ServicesDetail';
import ContactStrip from '../../components/Services/ContactStrip';
import Footer from '../../components/Footer/Footer';
// Import Datas
import { IndividualServicesListDetail } from '../../datas/IndividualServicesDetails';

// Import Style
import { PageWrapper } from '../../utils/Styles';

function IndividualServices () {
  const title = 'My Services';
  const text1 = 'for individuals';
  const text2 = 'professional and career coaching';

  return (
      <PageWrapper>
            <TopIllustration title={title} text1={text1} text2={text2}/>
            <ServicesDetails servicesList={IndividualServicesListDetail}/>
            <ContactStrip/>
            <Footer/>
      </PageWrapper>
  );
}
export default IndividualServices;
