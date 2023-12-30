import React from 'react';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import BannerComponent from './components/BannerComponent/BannerComponent';
import ServicesComponent from './components/ServicesComponent/ServicesComponent';
import AnalysisComponent from './components/AnalysisComponent/AnalysisComponent';
import SummaryComponent from './components/SummaryComponent/SummaryComponent';

function App() {
  return (
    <div>
      <NavbarComponent />
      <BannerComponent />
      <ServicesComponent />
      <AnalysisComponent />
      <SummaryComponent />
    </div>
  );
}

export default App;
