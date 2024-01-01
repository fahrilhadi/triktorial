import React, { Component, Fragment } from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';
import BannerComponent from '../../components/BannerComponent/BannerComponent';
import ServicesComponent from '../../components/ServicesComponent/ServicesComponent';
import AnalysisComponent from '../../components/AnalysisComponent/AnalysisComponent';
import SummaryComponent from '../../components/SummaryComponent/SummaryComponent';
import RecentProjectsComponent from '../../components/RecentProjectsComponent/RecentProjectsComponent';
import CoursesComponent from '../../components/CoursesComponent/CoursesComponent';
import VideoComponent from '../../components/VideoComponent/VideoComponent';
import TestimonialComponent from '../../components/TestimonialComponent/TestimonialComponent';
import AboutComponent from '../../components/AboutComponent/AboutComponent';
import FooterComponent from '../../components/FooterComponent/FooterComponent';

class HomePage extends Component {
  render() {
    return (
        <Fragment>
            <NavbarComponent title="Triktorial" />
            <BannerComponent />
            <ServicesComponent />
            <AnalysisComponent />
            <SummaryComponent />
            <RecentProjectsComponent />
            <CoursesComponent />
            <VideoComponent />
            <TestimonialComponent />
            <AboutComponent />
            <FooterComponent />
        </Fragment>
    )
  }
}

export default HomePage