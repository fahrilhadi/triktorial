import React, { Component, Fragment } from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import TopPageComponent from '../../components/TopPageComponent/TopPageComponent'
import CourseDetailsComponent from '../../components/CourseDetailsComponent/CourseDetailsComponent'
import FooterComponent from '../../components/FooterComponent/FooterComponent'

class CourseDetailsPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
        <Fragment>
            <NavbarComponent title="Course Details | Triktorial" />
            <TopPageComponent pagetitle="Course Details" />
            <CourseDetailsComponent />
            <FooterComponent />
        </Fragment>
    )
  }
}

export default CourseDetailsPage