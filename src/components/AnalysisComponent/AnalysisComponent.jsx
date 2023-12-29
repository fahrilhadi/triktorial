import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

class AnalysisComponent extends Component {

    constructor(){
        super();
        this.state={
            data:[
                {Technology:'HTML',Projects:90},
                {Technology:'CSS',Projects:85},
                {Technology:'Javascript',Projects:80},
                {Technology:'React',Projects:85},
                {Technology:'PHP',Projects:80},
                {Technology:'Laravel',Projects:85},
            ]
        }
    }

  render() {
    var black = "#2d2e32"
    return (
        <Fragment>
            <Container fluid={true} className="analysisContainer">
                <Container className="text-center">
                    <h1 className="serviceMainTitle">Technology Used</h1>
                    <div className="bottom"></div>
                        <Row>
                            <Col lg={6} md={12} sm={12} style={{ width:'50%',height:'300px' }}>
                                <ResponsiveContainer>
                                    <BarChart width={50} height={300} data={this.state.data}>

                                        <XAxis dataKey="Technology" />
                                        <Tooltip />
                                        <Bar dataKey="Projects" fill={black}>

                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <p className="analysisDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, molestias dicta rem provident reiciendis neque maxime voluptatibus quia itaque. Rerum culpa explicabo commodi velit non soluta nisi consequuntur. Minus, vel! <br /> <br />
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut distinctio veritatis sapiente iure totam voluptatibus. Corrupti, aperiam praesentium, cupiditate commodi voluptate mollitia suscipit vel illum fugit repellat aspernatur tempore atque? <br /> <br />
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti quo, reiciendis debitis nulla consequuntur molestiae.</p>
                            </Col>
                        </Row>
                </Container>
            </Container>
        </Fragment>
    )
  }
}

export default AnalysisComponent