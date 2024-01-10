import React, { Component, Fragment } from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import TopPageComponent from '../../components/TopPageComponent/TopPageComponent'
import ProjectDetailsComponent from '../../components/ProjectDetailsComponent/ProjectDetailsComponent'
import FooterComponent from '../../components/FooterComponent/FooterComponent'

class ProjectDetailsPage extends Component {
  render() {
    return (
        <Fragment>
            <NavbarComponent title="Project Details | Triktorial" />
            <TopPageComponent pagetitle="Project Details" />
            <ProjectDetailsComponent />
            <FooterComponent />
        </Fragment>
    )
  }
}

export default ProjectDetailsPage