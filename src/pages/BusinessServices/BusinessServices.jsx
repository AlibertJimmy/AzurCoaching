// Import React Libraries

// Import Component
import ServicesDetails from "../../components/Services/ServicesDetail"
import Footer from "../../components/Footer/Footer"
// Import Datas
import { BusinessServicesListDetail } from "../../datas/BusinessServicesDetail"
// Import Style
import { PageWrapper } from "../../utils/Styles"



function BusinessServices() {
      return (
            <PageWrapper>

                <ServicesDetails servicesList={BusinessServicesListDetail}/>
                <Footer/>  
            </PageWrapper>
      )
      }
  
  export default BusinessServices
  