import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import profileImage from '../../assets/images/AboutImage/profile.png'
import { init } from 'ityped'

class AboutComponent extends Component {

    componentDidMount(){
        const myElement = document.querySelector('#myElement')
        init(myElement, { showCursor: false, strings: ['Front-End Developer' ] })
    }

  render() {
    return (
        <Fragment>
            <Container fluid={true} className="aboutContainer">
                <Container className="text-center">
                    <h1 className="serviceMainTitle">About Me</h1>
                    <div className="bottom"></div>
                        <Row>
                            <Col lg={6} md={12} sm={12}>
                                <div className="aboutMeImage">
                                    <img className="aboutImage" src={profileImage} />
                                </div>
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <div className="aboutMeBody">
                                    <h2 className="aboutMeDetails">Hi There, I'm</h2>
                                    <h2 className="aboutMeTitle">Fahril Hadi</h2>
                                    <h3 className="aboutMeDetails">Work as <span id="myElement"></span></h3>
                                </div>
                            </Col>
                        </Row>
                </Container>
            </Container>
        </Fragment>
    )
  }
}

export default AboutComponent