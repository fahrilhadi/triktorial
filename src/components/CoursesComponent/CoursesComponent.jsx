import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class CoursesComponent extends Component {
  render() {
    return (
        <Fragment>
            <Container fluid={true} className="coursesContainer">
                <Container className="text-center">
                    <h1 className="serviceMainTitle">My Courses</h1>
                    <div className="bottom"></div>
                        <Row>
                            <Col lg={6} md={12} sm={12}>
                                <Row>
                                    <Col lg={6} md={6} sm={12} className="mb-4">
                                        <img className="coursesImage" src="https://img.freepik.com/free-photo/discussing-video-course_1098-13061.jpg?w=1480&t=st=1703934040~exp=1703934640~hmac=cb2a423f5b2f6ceab68034280b41e640c1e3b72f97fd44a6ecde62fc0fe9c70c" />
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <h5 className="coursesName">HTML</h5>
                                        <p className="coursesDescription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, incidunt.</p>
                                        <a className="coursesViewDetails" href="#">View Details</a>
                                    </Col>
                                    <Col lg={6} md={6} sm={12} className="mb-4">
                                        <img className="coursesImage" src="https://img.freepik.com/free-photo/close-up-woman-online-class_23-2148888816.jpg?size=626&ext=jpg&ga=GA1.2.825472607.1700482803&semt=sph" />
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <h5 className="coursesName">CSS</h5>
                                        <p className="coursesDescription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, blanditiis.</p>
                                        <a className="coursesViewDetails" href="#">View Details</a>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <Row>
                                    <Col lg={6} md={6} sm={12} className="mb-4">
                                        <img className="coursesImage" src="https://img.freepik.com/free-photo/close-up-woman-class_23-2148888812.jpg?size=626&ext=jpg&ga=GA1.2.825472607.1700482803&semt=sph" />
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <h5 className="coursesName">Javascript</h5>
                                        <p className="coursesDescription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, incidunt.</p>
                                        <a className="coursesViewDetails" href="#">View Details</a>
                                    </Col>
                                    <Col lg={6} md={6} sm={12} className="mb-4">
                                        <img className="coursesImage" src="https://img.freepik.com/free-photo/young-businessman-working-with-computer-remotely_1328-3388.jpg?size=626&ext=jpg&ga=GA1.1.825472607.1700482803&semt=sph" />
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <h5 className="coursesName">PHP</h5>
                                        <p className="coursesDescription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, blanditiis.</p>
                                        <a className="coursesViewDetails" href="#">View Details</a>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                </Container>
            </Container>
        </Fragment>
    )
  }
}

export default CoursesComponent