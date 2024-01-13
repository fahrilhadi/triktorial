import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import designIcon from '../../assets/images/ServicesImage/design.png'
import ecommerceIcon from '../../assets/images/ServicesImage/ecommerce.png'
import webIcon from '../../assets/images/ServicesImage/web.png'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

class ServicesComponent extends Component {

    constructor(){
        super();
        this.state={
            myData:[]
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.Services).then(result=>{
            this.setState({myData:result});
        })
    }

  render() {

    const myList = this.state.myData;
    const myView = myList.map(myList=>{
        return <Col lg={4} md={6} sm={12}>
                    <div className="serviceCard text-center">
                        <img className="designIcon" src={myList.service_logo} />
                        <h2 className="serviceName">{myList.service_name}</h2>
                        <p className="serviceDescription">{myList.service_description}</p>
                    </div>
                </Col>
    })

    return (
        <Fragment>
            <Container fluid={true} className="serviceContainer">
                <Container className="text-center">
                    <h1 className="serviceMainTitle">My Services</h1>
                    <div className="bottom"></div>
                        <Row>
                            {myView}
                        </Row>
                </Container>
            </Container>
        </Fragment>
    )
  }
}

export default ServicesComponent