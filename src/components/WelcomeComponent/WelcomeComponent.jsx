import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import pageOne from '../../assets/images/WelcomeImage/pageOne.png'
import pageTwo from '../../assets/images/WelcomeImage/pageTwo.png'
import pageThree from '../../assets/images/WelcomeImage/pageThree.png'
import imgOne from '../../assets/images/WelcomeImage/ImgOne.png'
import imgTwo from '../../assets/images/WelcomeImage/imgTwo.png'
import imgThree from '../../assets/images/WelcomeImage/imgThree.png'

export class WelcomeComponent extends Component {
  render() {
    return (
        <Fragment>
            <div className="intro-area-top">
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className="section-title text-center">
                                <div className="intro-area-inner">
                                    <h6 className="sub-title double-line">WELCOME</h6>
                                    <h2 className="maintitle">
                                        An exemplary <br />
                                        learning community
                                    </h2>
                                    <Container className="text-center mt-5">
                                        <Row>
                                            <Col lg={4} md={6} sm={12}>
                                                <img src={pageOne} />
                                                <h1 className="serviceName">Easy As it Gets</h1>
                                                <p className="serviceDescription">Lorem ipsum dolor sit.</p>
                                            </Col>
                                            <Col lg={4} md={6} sm={12}>
                                                <img src={pageTwo} />
                                                <h1 className="serviceName">Teach The way you want</h1>
                                                <p className="serviceDescription">Lorem ipsum dolor sit.</p>
                                            </Col>
                                            <Col lg={4} md={6} sm={12}>
                                                <img src={pageThree} />
                                                <h1 className="serviceName">The small matter</h1>
                                                <p className="serviceDescription">Lorem ipsum dolor sit.</p>
                                            </Col>
                                        </Row>
                                        <Row className="intro-footer bg-base text-center mt-5">
                                            <Col lg={4} md={6} sm={12}>
                                                <Row>
                                                    <Col lg={6} md={6} sm={12}>
                                                        <img className="sideImg" src={imgOne} />
                                                    </Col>
                                                    <Col lg={6} md={6} sm={12}>
                                                        <h5 className="homeIntro">Development</h5>
                                                        <p className="homeDescription">Lorem ipsum dolor</p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col lg={4} md={6} sm={12}>
                                                <Row>
                                                    <Col lg={6} md={6} sm={12}>
                                                        <img className="sideImg" src={imgTwo} />
                                                    </Col>
                                                    <Col lg={6} md={6} sm={12}>
                                                        <h5 className="homeIntro">Web Design</h5>
                                                        <p className="homeDescription">Lorem ipsum dolor</p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col lg={4} md={6} sm={12}>
                                                <Row>
                                                    <Col lg={6} md={6} sm={12}>
                                                        <img className="sideImg" src={imgThree} />
                                                    </Col>
                                                    <Col lg={6} md={6} sm={12}>
                                                        <h5 className="homeIntro">E-commerce</h5>
                                                        <p className="homeDescription">Lorem ipsum dolor</p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fragment>
    )
  }
}

export default WelcomeComponent