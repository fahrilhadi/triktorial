import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

class FooterComponent extends Component {
  render() {
    let currentYear = new Date().getFullYear()
    return (
        <Fragment>
            <Container fluid={true} className="footerContainer">
                <Row>
                    <Col lg={3} md={6} sm={12} className="text-center p-5">
                        <h2 className="footerName text-center">Follow Us</h2>
                        <div className="social-container">
                            <a className="facebook social" href="#"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                            <a className="youtube social" href="#"><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
                            <a className="twitter social" href="#"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="p-5">
                        <h2 className="footerName">Address</h2>
                        <p className="footerDescription">
                            <div className="pb-2">
                                28671 Sungai Selodang, Siak
                            </div>
                            <div className="pb-2">
                                <FontAwesomeIcon icon={faEnvelope} /> Email : support@torial.com
                            </div>
                            <FontAwesomeIcon icon={faPhone} /> Phone : 786254162
                        </p>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="p-5">
                        <h2 className="footerName">Information</h2>
                        <div className="pb-2">
                            <NavLink className="footerLink" to="/about">About Me</NavLink>
                        </div>
                        <div className="pb-2">
                            <NavLink className="footerLink" to="/about">Company Profile</NavLink>
                        </div>
                        <NavLink className="footerLink" style={({isActive})=>{return {color: isActive? '#ffc107':''}}} to="/contact" end>Contact Us</NavLink>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="p-5">
                        <h2 className="footerName">Policy</h2>
                        <div className="pb-2">
                            <NavLink className="footerLink" style={({isActive})=>{return {color: isActive? '#ffc107':''}}} to="/refund" end>Refund Policy</NavLink>
                        </div>
                        <div className="pb-2">
                            <NavLink className="footerLink" style={({isActive})=>{return {color: isActive? '#ffc107':''}}} to="/terms" end>Terms and Condition</NavLink>
                        </div>
                        <NavLink className="footerLink" style={({isActive})=>{return {color: isActive? '#ffc107':''}}} to="/privacy" end>Privacy and Policy</NavLink>
                    </Col>
                </Row>
            </Container>
            <Container fluid={true} className="copyrightSection text-center">
            <a className="copyrightLink" href="#">Copyright &copy; 2023-{currentYear} <span className="copyrightName">Triktorial</span> All Rights Reserved.</a>
            </Container>
        </Fragment>
    )
  }
}

export default FooterComponent