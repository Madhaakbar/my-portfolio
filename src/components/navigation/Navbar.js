import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

const NavBar = () => (
  <div>
    <>
      <Navbar variant="dark" expand="lg" className="NavBar">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Blog</Nav.Link>
              <NavDropdown title="Project" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">Martnet</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Hotel</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  </div>
);

export default NavBar;
