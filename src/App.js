import React from 'react';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import TopPageComponent from './components/TopPageComponent/TopPageComponent';
import AllCoursesComponent from './components/AllCoursesComponent/AllCoursesComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';

function App() {
  return (
    <div>
      <NavbarComponent />
      <TopPageComponent pagetitle="All Courses" />
      <AllCoursesComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
