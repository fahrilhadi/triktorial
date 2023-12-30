import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideoCamera } from '@fortawesome/free-solid-svg-icons'
import "video-react/dist/video-react.css";
import { BigPlayButton, Player } from 'video-react';

class VideoComponent extends Component {

    constructor(){
        super();
        this.state={
            show:false
        }
    }

    modalClose=()=>this.setState({show:false})
    modalOpen=()=>this.setState({show:true})

  render() {
    return (
        <Fragment>
            <Container fluid={true} className="videoContainer">
                <Container className="text-center">
                    <h1 className="serviceMainTitle">Our Video</h1>
                    <div className="bottom"></div>
                        <Row>
                            <Col lg={6} md={6} sm={12} className="videoText">
                                <p className="videoDescription">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ex est accusantium molestiae nesciunt maiores labore laboriosam tempore consequatur obcaecati. <br /><br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, omnis amet. Excepturi fugit inventore non maiores aperiam vitae id natus? <br /><br />
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi ipsa voluptatum repudiandae ut perferendis iure harum debitis cupiditate rerum porro.
                                </p>
                            </Col>
                            <Col lg={6} md={6} sm={12} className="videoCard">
                                <FontAwesomeIcon onClick={this.modalOpen} className="iconProject" icon={faVideoCamera} />
                            </Col>
                        </Row>
                </Container>
                <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                    <Modal.Body>
                        <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                        <BigPlayButton position="center" />
                        </Player>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.modalClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </Fragment>
    )
  }
}

export default VideoComponent