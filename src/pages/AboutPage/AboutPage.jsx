import React, { Component, Fragment } from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import TopPageComponent from '../../components/TopPageComponent/TopPageComponent'
import AboutComponent from '../../components/AboutComponent/AboutComponent'
import AboutDescriptionComponent from '../../components/AboutDescriptionComponent/AboutDescriptionComponent'
import FooterComponent from '../../components/FooterComponent/FooterComponent'

class AboutPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
        <Fragment>
            <NavbarComponent title="About Us | Triktorial" />
            <TopPageComponent pagetitle="About Us" />
            <AboutComponent />
            <AboutDescriptionComponent />
            <FooterComponent />
        </Fragment>
    )
  }
}

export default AboutPage