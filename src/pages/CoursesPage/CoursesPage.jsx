import React, { Component, Fragment } from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import TopPageComponent from '../../components/TopPageComponent/TopPageComponent'
import AllCoursesComponent from '../../components/AllCoursesComponent/AllCoursesComponent'
import FooterComponent from '../../components/FooterComponent/FooterComponent'

class CoursesPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
        <Fragment>
            <NavbarComponent title="All Courses | Triktorial" />
            <TopPageComponent pagetitle="All Courses" />
            <AllCoursesComponent />
            <FooterComponent />
        </Fragment>
    )
  }
}

export default CoursesPage