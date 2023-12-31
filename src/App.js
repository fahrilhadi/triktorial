import React from 'react';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import BannerComponent from './components/BannerComponent/BannerComponent';
import ServicesComponent from './components/ServicesComponent/ServicesComponent';
import AnalysisComponent from './components/AnalysisComponent/AnalysisComponent';
import SummaryComponent from './components/SummaryComponent/SummaryComponent';
import RecentProjectsComponent from './components/RecentProjectsComponent/RecentProjectsComponent';
import CoursesComponent from './components/CoursesComponent/CoursesComponent';
import VideoComponent from './components/VideoComponent/VideoComponent';
import TestimonialComponent from './components/TestimonialComponent/TestimonialComponent';

function App() {
  return (
    <div>
      <NavbarComponent />
      <BannerComponent />
      <ServicesComponent />
      <AnalysisComponent />
      <SummaryComponent />
      <RecentProjectsComponent />
      <CoursesComponent />
      <VideoComponent />
      <TestimonialComponent />
    </div>
  );
}

export default App;
