import React from 'react';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import TopPageComponent from './components/TopPageComponent/TopPageComponent';
import ContactComponent from './components/ContactComponent/ContactComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';

function App() {
  return (
    <div>
      <NavbarComponent />
      <TopPageComponent pagetitle="Contact Us" />
      <ContactComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
