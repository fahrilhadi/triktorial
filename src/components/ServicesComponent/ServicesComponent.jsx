import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import designIcon from '../../assets/images/ServicesImage/design.png'
import ecommerceIcon from '../../assets/images/ServicesImage/ecommerce.png'
import webIcon from '../../assets/images/ServicesImage/web.png'

class ServicesComponent extends Component {
  render() {
    return (
        <Fragment>
            <Container fluid={true} className="serviceContainer">
                <Container className="text-center">
                    <h1 className="serviceMainTitle">My Services</h1>
                    <div className="bottom"></div>
                        <Row>
                            <Col lg={4} md={6} sm={12}>
                                <div className="serviceCard text-center">
                                    <img className="designIcon" src={designIcon} />
                                    <h2 className="serviceName">Web Design</h2>
                                    <p className="serviceDescription">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <div className="serviceCard text-center">
                                    <img className="ecommerceIcon" src={ecommerceIcon} />
                                    <h2 className="serviceName">E-Commerce</h2>
                                    <p className="serviceDescription">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <div className="serviceCard text-center">
                                    <img className="webIcon" src={webIcon} />
                                    <h2 className="serviceName">Web Development</h2>
                                    <p className="serviceDescription">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                </div>
                            </Col>
                        </Row>
                </Container>
            </Container>
        </Fragment>
    )
  }
}

export default ServicesComponent