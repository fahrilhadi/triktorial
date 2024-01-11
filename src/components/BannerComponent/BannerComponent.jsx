import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import axios from 'axios';

class BannerComponent extends Component {
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/homepage/title')
        .then(function (response) {
            // handle success
            console.log(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }
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