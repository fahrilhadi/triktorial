import React, { Component, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import AboutPage from '../pages/AboutPage/AboutPage'
import ServicesPage from '../pages/ServicesPage/ServicesPage'
import CoursesPage from '../pages/CoursesPage/CoursesPage'
import PortfolioPage from '../pages/PortfolioPage/PortfolioPage'
import ContactPage from '../pages/ContactPage/ContactPage'
import RefundPolicyPage from '../pages/RefundPolicyPage/RefundPolicyPage'
import TermsConditionPage from '../pages/TermsConditionPage/TermsConditionPage'
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage/PrivacyPolicyPage'
import ProjectDetailsPage from '../pages/ProjectDetailsPage/ProjectDetailsPage'
import CourseDetailsPage from '../pages/CourseDetailsPage/CourseDetailsPage'

class AppRouter extends Component {
  render() {
    return (
        <Fragment>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/services' element={<ServicesPage />} />
                <Route path='/courses' element={<CoursesPage />} />
                <Route path='/portfolio' element={<PortfolioPage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/refund' element={<RefundPolicyPage />} />
                <Route path='/terms' element={<TermsConditionPage />} />
                <Route path='/privacy' element={<PrivacyPolicyPage />} />
                <Route path='/projectdetails' element={<ProjectDetailsPage />} />
                <Route path='/coursedetails' element={<CourseDetailsPage />} />
            </Routes>
        </Fragment>
    )
  }
}

export default AppRouter