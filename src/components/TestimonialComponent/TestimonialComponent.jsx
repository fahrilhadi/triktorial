import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'

class TestimonialComponent extends Component {
  render() {

    var settings = {
        autoplaySpeed:3000,
        autoplay:true,
        arrows:false,
        dots: true,
        infinite: true,
        speed: 3000,
        vertical:true,
        verticalSwiping:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    return (
        <Fragment>
            <Container fluid={true} className="testimonialContainer text-center">
                <h1 className="testimonialMainTitle">Testimonial</h1>
                <div className="testimonialBottom"></div>
                    <Slider {...settings}>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImage" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.825472607.1700482803&semt=ais" />
                                    <h2 className="testimonialName">Fahril Hadi</h2>
                                    <p className="testimonialDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, unde temporibus. Ratione distinctio inventore quod?</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImage" src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.825472607.1700482803&semt=ais" />
                                    <h2 className="testimonialName">John Doe</h2>
                                    <p className="testimonialDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, unde temporibus. Ratione distinctio inventore quod?</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImage" src="https://img.freepik.com/free-photo/bearded-young-man-wearing-shirt_273609-5938.jpg?size=626&ext=jpg&ga=GA1.1.825472607.1700482803&semt=ais" />
                                    <h2 className="testimonialName">Triktorial</h2>
                                    <p className="testimonialDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, unde temporibus. Ratione distinctio inventore quod?</p>
                                </Col>
                            </Row>
                        </div>
                    </Slider>
            </Container>
        </Fragment>
    )
  }
}

export default TestimonialComponent