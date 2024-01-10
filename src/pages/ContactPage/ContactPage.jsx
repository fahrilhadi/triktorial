import React, { Component, Fragment } from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import TopPageComponent from '../../components/TopPageComponent/TopPageComponent'
import ContactComponent from '../../components/ContactComponent/ContactComponent'
import FooterComponent from '../../components/FooterComponent/FooterComponent'

class ContactPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
        <Fragment>
            <NavbarComponent title="Contact Us | Triktorial" />
            <TopPageComponent pagetitle="Contact Us" />
            <ContactComponent />
            <FooterComponent />
        </Fragment>
    )
  }
}

export default ContactPage