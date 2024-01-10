import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import learningManagementSystem from '../../assets/images/RecentProjectsImage/learning-management-system.jpg'
import eCommerce from '../../assets/images/RecentProjectsImage/e-commerce.jpg'
import digitalAgency from '../../assets/images/RecentProjectsImage/digital-agency.jpg'
import { Link } from 'react-router-dom'

class RecentProjectsComponent extends Component {
  render() {
    return (
        <Fragment>
            <Container fluid={true} className="recentProjectsContainer">
                <Container className="text-center">
                    <h1 className="serviceMainTitle">Recent Projects</h1>
                    <div className="bottom"></div>
                        <Row>
                            <Col lg={4} md={6} sm={12}>
                                <Card className="projectsCard">
                                    <Card.Img variant="top" src={learningManagementSystem} />
                                    <Card.Body>
                                        <Card.Title className="serviceName">Learning Management System</Card.Title>
                                        <Card.Text className="serviceDescription">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, tempore?
                                        </Card.Text>
                                        <Button variant="warning"><Link className="linkStyle" to="/projectdetails">View More</Link></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <Card className="projectsCard">
                                    <Card.Img variant="top" src={eCommerce} />
                                    <Card.Body>
                                        <Card.Title className="serviceName">E-Commerce</Card.Title>
                                        <Card.Text className="serviceDescription">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, suscipit!
                                        </Card.Text>
                                        <Button variant="warning"><Link className="linkStyle" to="/projectdetails">View More</Link></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <Card className="projectsCard">
                                    <Card.Img variant="top" src={digitalAgency} />
                                    <Card.Body>
                                        <Card.Title className="serviceName">Digital Agency</Card.Title>
                                        <Card.Text className="serviceDescription">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ullam soluta, nam laudantium aut nihil dolores?
                                        </Card.Text>
                                        <Button variant="warning"><Link className="linkStyle" to="/projectdetails">View More</Link></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                </Container>
            </Container>
        </Fragment>
    )
  }
}

export default RecentProjectsComponent