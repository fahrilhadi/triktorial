import React, { Component, Fragment } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import '../../assets/css/custom.css'
import '../../assets/css/bootstrap.min.css'

class NavbarComponent extends Component {

    constructor(props){
        super();
        this.state={
            navBarTitle:"navTitle",
            navVariant:"dark",
            navBarBackground:"navBackground",
            navBarItem:"navItem",
            pageTitle:props.title
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
            <title>{this.state.pageTitle}</title>
            <Navbar className={this.state.navBarBackground} collapseOnSelect fixed="top" expand="lg" variant={this.state.navVariant}>
                <Container className="text-center">
                    <Navbar.Brand className={this.state.navBarTitle} href="#">Triktorial</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        
                    </Nav>
                    <Nav>
                        <Nav.Link><NavLink className={this.state.navBarItem} style={({isActive})=>{return {color: isActive? '#ffc107':''}}} to="/" end>Home</NavLink></Nav.Link>
                        <Nav.Link><NavLink className={this.state.navBarItem} style={({isActive})=>{return {color: isActive? '#ffc107':''}}} to="/about" end>About</NavLink></Nav.Link>
                        <Nav.Link><NavLink className={this.state.navBarItem} style={({isActive})=>{return {color: isActive? '#ffc107':''}}} to="/services" end>Services</NavLink></Nav.Link>
                        <Nav.Link><NavLink className={this.state.navBarItem} style={({isActive})=>{return {color: isActive? '#ffc107':''}}} to="/courses" end>Courses</NavLink></Nav.Link>
                        <Nav.Link><NavLink className={this.state.navBarItem} style={({isActive})=>{return {color: isActive? '#ffc107':''}}} to="/portfolio" end>Portfolio</NavLink></Nav.Link>
                        <Nav.Link><NavLink className={this.state.navBarItem} style={({isActive})=>{return {color: isActive? '#ffc107':''}}} to="/contact" end>Contact</NavLink></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    )
  }
}

export default NavbarComponent