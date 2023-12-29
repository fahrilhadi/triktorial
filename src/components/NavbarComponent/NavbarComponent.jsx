import React, { Component, Fragment } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import '../../assets/css/custom.css'
import '../../assets/css/bootstrap.min.css'

class NavbarComponent extends Component {

    constructor(){
        super();
        this.state={
            navBarTitle:"navTitle",
            navVariant:"dark",
            navBarBackground:"navBackground",
            navBarItem:"navItem"
        }
    }

    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navBarTitle:'navTitleScroll',navBarBackground:'navBackgroundScroll',navBarItem:'navItemScroll',navVariant:'light'})
        }else if(window.scrollY<100){
            this.setState({navBarTitle:'navTitle',navBarBackground:'navBackground',navBarItem:'navItem',navVariant:'dark'})
        }
    }

    componentDidMount(){
        window.addEventListener('scroll',this.onScroll)
    }

  render() {
    return (
        <Fragment>
            <Navbar className={this.state.navBarBackground} collapseOnSelect fixed="top" expand="lg" variant={this.state.navVariant}>
                <Container className="text-center">
                    <Navbar.Brand className={this.state.navBarTitle} href="#">Triktorial</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        
                    </Nav>
                    <Nav>
                        <Nav.Link className={this.state.navBarItem} href="#">Home</Nav.Link>
                        <Nav.Link className={this.state.navBarItem} href="#">About</Nav.Link>
                        <Nav.Link className={this.state.navBarItem} href="#">Services</Nav.Link>
                        <Nav.Link className={this.state.navBarItem} href="#">Courses</Nav.Link>
                        <Nav.Link className={this.state.navBarItem} href="#">Portfolio</Nav.Link>
                        <Nav.Link className={this.state.navBarItem} href="#">Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    )
  }
}

export default NavbarComponent