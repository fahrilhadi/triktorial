import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

class BannerComponent extends Component {
  render() {
    return (
        <Fragment>
            <Container fluid={true} className="bannerContainer p-0">
                <div className="bannerOverlay">
                    <Container className="bannerContent">
                        <Row>
                            <Col className="text-center">
                                <h1 className="bannerTitle">Triktorial</h1>
                                <h4 className="bannerSubTitle pb-3">Lorem ipsum dolor sit amet <span className="text-warning">consectetur.</span></h4>
                                <Button variant="outline-warning rounded-5" size="lg">Learn More</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </Fragment>
    )
  }
}

export default BannerComponent