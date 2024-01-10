import React, { Component, Fragment } from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import TopPageComponent from '../../components/TopPageComponent/TopPageComponent'
import TermsConditionComponent from '../../components/TermsConditionComponent/TermsConditionComponent'
import FooterComponent from '../../components/FooterComponent/FooterComponent'

class TermsConditionPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
        <Fragment>
            <NavbarComponent title="Terms and Condition | Triktorial" />
            <TopPageComponent pagetitle="Terms and Condition" />
            <TermsConditionComponent />
            <FooterComponent />
        </Fragment>
    )
  }
}

export default TermsConditionPage