import React, { Component, Fragment } from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import TopPageComponent from '../../components/TopPageComponent/TopPageComponent'
import ServicesComponent from '../../components/ServicesComponent/ServicesComponent'
import ContactComponent from '../../components/ContactComponent/ContactComponent'
import FooterComponent from '../../components/FooterComponent/FooterComponent'

class ServicesPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
        <Fragment>
            <NavbarComponent title="Our Services | Triktorial" />
            <TopPageComponent pagetitle="Our Services" />
            <ServicesComponent />
            <ContactComponent />
            <FooterComponent />
        </Fragment>
    )
  }
}

export default ServicesPage