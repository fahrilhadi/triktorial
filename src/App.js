import React from 'react';
import TopPageComponent from './components/TopPageComponent/TopPageComponent';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import AboutDescriptionComponent from './components/AboutDescriptionComponent/AboutDescriptionComponent';

function App() {
  return (
    <div>
      <NavbarComponent />
      <TopPageComponent pagetitle="About Us" />
      <AboutDescriptionComponent />
    </div>
  );
}

export default App;
