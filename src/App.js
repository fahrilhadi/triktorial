import React from 'react';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import BannerComponent from './components/BannerComponent/BannerComponent';
import ServicesComponent from './components/ServicesComponent/ServicesComponent';
import AnalysisComponent from './components/AnalysisComponent/AnalysisComponent';
import SummaryComponent from './components/SummaryComponent/SummaryComponent';
import RecentProjectsComponent from './components/RecentProjectsComponent/RecentProjectsComponent';

function App() {
  return (
    <div>
      <NavbarComponent />
      <BannerComponent />
      <ServicesComponent />
      <AnalysisComponent />
      <SummaryComponent />
      <RecentProjectsComponent />
    </div>
  );
}

export default App;
