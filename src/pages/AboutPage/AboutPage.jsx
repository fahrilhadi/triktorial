import React, { Component, Fragment } from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import TopPageComponent from '../../components/TopPageComponent/TopPageComponent'
import AboutComponent from '../../components/AboutComponent/AboutComponent'
import AboutDescriptionComponent from '../../components/AboutDescriptionComponent/AboutDescriptionComponent'
import FooterComponent from '../../components/FooterComponent/FooterComponent'

class AboutPage extends Component {
  render() {
    return (
        <Fragment>
            <NavbarComponent />
            <TopPageComponent pagetitle="About Us" />
            <AboutComponent />
            <AboutDescriptionComponent />
            <FooterComponent />
        </Fragment>
    )
  }
}

export default AboutPage