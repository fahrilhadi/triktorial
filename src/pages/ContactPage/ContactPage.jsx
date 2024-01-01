import React, { Component, Fragment } from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import TopPageComponent from '../../components/TopPageComponent/TopPageComponent'
import ContactComponent from '../../components/ContactComponent/ContactComponent'
import FooterComponent from '../../components/FooterComponent/FooterComponent'

class ContactPage extends Component {
  render() {
    return (
        <Fragment>
            <NavbarComponent />
            <TopPageComponent pagetitle="Contact Us" />
            <ContactComponent />
            <FooterComponent />
        </Fragment>
    )
  }
}

export default ContactPage