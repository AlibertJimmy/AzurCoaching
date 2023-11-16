// Import React Libraries

// Import Component
import TopIllustration from "../../components/TopIllustration/TopIllustration"
import ServicesDetails from "../../components/Services/ServicesDetail"
import ContactStrip from "../../components/Services/ContactStrip"
import Footer from "../../components/Footer/Footer"
// Import Datas
import { BusinessServicesListDetail } from "../../datas/BusinessServicesDetail"
// Import Style
import { PageWrapper } from "../../utils/Styles"



function BusinessServices() {

    const title = 'My Services';
    const text1 = 'for fompanies';

      return (
            <PageWrapper>
                <TopIllustration title={title} text1={text1}/>
                <ServicesDetails servicesList={BusinessServicesListDetail}/>
                <ContactStrip/>
                <Footer/>  
            </PageWrapper>
      )
      }
  
  export default BusinessServices
  