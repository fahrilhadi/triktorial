import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

class ContactComponent extends Component {
  render() {
    return (
        <Fragment>
            <Container fluid={true} className="contactContainer">
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName">Quick Connect</h1>
                            <Form>
                            <Form.Group className="mt-3">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mt-2">
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Your Email" />
                            </Form.Group>
                            <Form.Group className="mt-2">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button className="mt-3" variant="warning" type="submit">
                                Submit
                            </Button>
                            </Form>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName">Discuss Now</h1>
                            <p className="serviceDescription">
                                <div className="pb-2">
                                    28671 Sungai Selodang, Siak
                                </div>
                                <div className="pb-2">
                                    <FontAwesomeIcon icon={faEnvelope} /> Email : support@torial.com
                                </div>
                                <FontAwesomeIcon icon={faPhone} /> Phone : 786254162
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </Fragment>
    )
  }
}

export default ContactComponent