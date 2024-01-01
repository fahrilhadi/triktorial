import React from 'react';
import TopPageComponent from './components/TopPageComponent/TopPageComponent';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';

function App() {
  return (
    <div>
      <NavbarComponent />
      <TopPageComponent pagetitle="About Us" />
    </div>
  );
}

export default App;
