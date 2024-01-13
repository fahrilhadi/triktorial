import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

class BannerComponent extends Component {

    constructor(){
        super();
        this.state={
            title:".....",
            subtitle:"....."
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.HomeTopTitle).then(result=>{
            this.setState({title:result[0]['home_title'],subtitle:result[0]['home_subtitle']});
        }).catch(error=>{
            this.setState({title:"?????",subtitle:"?????"})
        });
    }

  render() {
    return (
        <Fragment>
            <Container fluid={true} className="bannerContainer p-0">
                <div className="bannerOverlay">
                    <Container className="bannerContent">
                        <Row>
                            <Col className="text-center">
                                <h1 className="bannerTitle">{this.state.title}</h1>
                                <h4 className="bannerSubTitle pb-3">{this.state.subtitle} <span className="text-warning">consectetur.</span></h4>
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