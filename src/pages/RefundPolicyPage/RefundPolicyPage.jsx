import React, { Component, Fragment } from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import TopPageComponent from '../../components/TopPageComponent/TopPageComponent'
import RefundPolicyComponent from '../../components/RefundPolicyComponent/RefundPolicyComponent'
import FooterComponent from '../../components/FooterComponent/FooterComponent'

class RefundPolicyPage extends Component {
  render() {
    return (
        <Fragment>
            <NavbarComponent title="Refund Policy | Triktorial" />
            <TopPageComponent pagetitle="Refund Policy" />
            <RefundPolicyComponent />
            <FooterComponent />
        </Fragment>
    )
  }
}

export default RefundPolicyPage