import React, { Component, Fragment } from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import TopPageComponent from '../../components/TopPageComponent/TopPageComponent'
import PrivacyPolicyComponent from '../../components/PrivacyPolicyComponent/PrivacyPolicyComponent'
import FooterComponent from '../../components/FooterComponent/FooterComponent'

class PrivacyPolicyPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
        <Fragment>
            <NavbarComponent title="Privacy and Policy | Triktorial" />
            <TopPageComponent pagetitle="Privacy and Policy" />
            <PrivacyPolicyComponent />
            <FooterComponent />
        </Fragment>
    )
  }
}

export default PrivacyPolicyPage