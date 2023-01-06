import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './NavigationBar.css'
class NavigationBar extends React.Component {
    render() {
        return (
          <div id="navigationbar">
          <Navbar bg="dark" variant="dark" style={{zIndex:1}}>
              <Container>
                  <Navbar.Brand href="#home">NM</Navbar.Brand>
                  <Nav className="me-auto">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#AboutMe">About Me</Nav.Link>
                      <Nav.Link href="#pricing">Projects</Nav.Link>
                      <Nav.Link href="#Contact">Contact Me</Nav.Link>
                  </Nav>
              </Container>
          </Navbar>
         
      </div>
        )
    }
}
export default NavigationBar