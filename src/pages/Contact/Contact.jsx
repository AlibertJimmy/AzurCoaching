// Import React Libraries

// Import Component
import TopIllustration from "../../components/TopIllustration/TopIllustration"
import Footer from "../../components/Footer/Footer"
// Import Datas

// Import Style
import { PageWrapper } from "../../utils/Styles"



function Contact() {

      const title='Contact';

      return (
            <PageWrapper>
            
                  <TopIllustration title={title}/>
                  <Footer/>
            </PageWrapper>
      )
}
  
  export default Contact
  