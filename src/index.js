// Import React Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom' 


// Import Component
import Navbar from './components/Nav/Navbar';
import Home from './pages/Home/Home';
import IndividualServices from './pages/IndividualServices/IndividualServices';
import BusinessServices from './pages/BusinessServices/BusinessServices';
import Contact from './pages/Contact/Contact';

// Import Style 
import styled from 'styled-components'



const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  
`

const ContentWrapper = styled.div`
  
  width: 100%;
  
`
function App(){


  return (
    <React.StrictMode>
    <Router>
        <Navbar/>
        <HomeWrapper>
        
          <ContentWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/BusinessServices" element={<BusinessServices />} />
              <Route path="IndividualServices/" element={<IndividualServices />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </ContentWrapper>
        </HomeWrapper>
    </Router>
  </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);


