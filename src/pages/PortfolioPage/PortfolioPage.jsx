import React, { Component, Fragment } from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import TopPageComponent from '../../components/TopPageComponent/TopPageComponent'
import AllProjectsComponent from '../../components/AllProjectsComponent/AllProjectsComponent'
import FooterComponent from '../../components/FooterComponent/FooterComponent'

class PortfolioPage extends Component {
  render() {
    return (
        <Fragment>
            <NavbarComponent title="Our Portfolio | Triktorial" />
            <TopPageComponent pagetitle="Our Portfolio" />
            <AllProjectsComponent />
            <FooterComponent />
        </Fragment>
    )
  }
}

export default PortfolioPage