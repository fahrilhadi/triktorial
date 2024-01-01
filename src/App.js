import React from 'react';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import TopPageComponent from './components/TopPageComponent/TopPageComponent';
import AllProjectsComponent from './components/AllProjectsComponent/AllProjectsComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';

function App() {
  return (
    <div>
      <NavbarComponent />
      <TopPageComponent pagetitle="Our Portfolio" />
      <AllProjectsComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
