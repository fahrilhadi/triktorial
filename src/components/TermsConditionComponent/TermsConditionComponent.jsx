import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class TermsConditionComponent extends Component {
  render() {
    return (
        <Fragment>
            <Container fluid={true} className="termsConditionContainer">
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <h1 className="serviceName">Terms And Condition</h1>
                            <hr />
                            <p className="serviceDescription">
                                <b>Tes</b>
                                <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni alias consectetur sapiente, enim dolorum repudiandae beatae illo minus voluptates, unde repellendus et delectus, ratione tempore nisi deleniti mollitia incidunt totam.
                                <br />
                                <b>Tes 2</b>
                                <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni alias consectetur sapiente, enim dolorum repudiandae beatae illo minus voluptates, unde repellendus et delectus, ratione tempore nisi deleniti mollitia incidunt totam.
                                <br />
                                <b>Tes 3</b>
                                <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni alias consectetur sapiente, enim dolorum repudiandae beatae illo minus voluptates, unde repellendus et delectus, ratione tempore nisi deleniti mollitia incidunt totam.
                                <br />
                                <b>Tes 4</b>
                                <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni alias consectetur sapiente, enim dolorum repudiandae beatae illo minus voluptates, unde repellendus et delectus, ratione tempore nisi deleniti mollitia incidunt totam.
                                <br />
                                <b>Tes 5</b>
                                <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni alias consectetur sapiente, enim dolorum repudiandae beatae illo minus voluptates, unde repellendus et delectus, ratione tempore nisi deleniti mollitia incidunt totam.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </Fragment>
    )
  }
}

export default TermsConditionComponent