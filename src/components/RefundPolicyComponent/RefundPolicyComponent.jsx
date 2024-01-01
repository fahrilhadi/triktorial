import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class RefundPolicyComponent extends Component {
  render() {
    return (
        <Fragment>
            <Container fluid={true} className="refundPolicyContainer">
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <h1 className="serviceName">Data Protection Principles</h1>
                            <hr />
                            <p className="serviceDescription">
                                <ul>
                                    <li>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe laboriosam eaque nulla dicta iure. Nemo doloremque odio, consequuntur numquam corrupti cumque iusto, iste obcaecati, pariatur tenetur saepe qui sapiente ipsam.
                                    </li>
                                    <li>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe laboriosam eaque nulla dicta iure. Nemo doloremque odio, consequuntur numquam corrupti cumque iusto, iste obcaecati, pariatur tenetur saepe qui sapiente ipsam.
                                    </li>
                                    <li>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe laboriosam eaque nulla dicta iure. Nemo doloremque odio, consequuntur numquam corrupti cumque iusto, iste obcaecati, pariatur tenetur saepe qui sapiente ipsam.
                                    </li>
                                    <li>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe laboriosam eaque nulla dicta iure. Nemo doloremque odio, consequuntur numquam corrupti cumque iusto, iste obcaecati, pariatur tenetur saepe qui sapiente ipsam.
                                    </li>
                                    <li>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe laboriosam eaque nulla dicta iure. Nemo doloremque odio, consequuntur numquam corrupti cumque iusto, iste obcaecati, pariatur tenetur saepe qui sapiente ipsam.
                                    </li>
                                </ul>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </Fragment>
    )
  }
}

export default RefundPolicyComponent