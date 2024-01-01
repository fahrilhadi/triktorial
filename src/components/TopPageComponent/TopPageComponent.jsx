import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class TopPageComponent extends Component {
  render() {
    return (
        <Fragment>
            <Container fluid={true} className="topPageContainer p-0">
                <div className="topPageOverlay">
                    <Container className="topPageContent">
                        <Row>
                            <Col className="text-center">
                                <h1 className="topPageTitle">{this.props.pagetitle}</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </Fragment>
    )
  }
}

export default TopPageComponent