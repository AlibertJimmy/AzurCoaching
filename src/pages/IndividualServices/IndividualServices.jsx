// Import React Libraries

// Import Component
import ServicesDetails from "../../components/Services/ServicesDetail"
import Footer from "../../components/Footer/Footer"
// Import Datas
import { IndividualServicesListDetail } from "../../datas/IndividualServicesDetails"

// Import Style
import { PageWrapper } from "../../utils/Styles"



function IndividualServices() {
      return (
            <PageWrapper>
            
                  <ServicesDetails servicesList={IndividualServicesListDetail}/>
                  <Footer/>
            </PageWrapper>
      )
}
  
  export default IndividualServices
  