import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import React, { Component } from "react";

class MyNavbar extends Component {
  render() {
    return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Actividad React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    )
  }
}
export default MyNavbar;