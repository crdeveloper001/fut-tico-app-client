import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export const Navigation = () => {
  return (
    <div>
      <section id="NavigationPage">
        <Navbar expand="lg" className="bg-body-tertiary ">
          <Container>
            <Navbar.Brand href="home">
              <img
                src="src/assets/LogoCR.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Costa Rica Socces Team Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
               
                <Nav.Link href="Home">Inicio</Nav.Link>
                <Nav.Link href="Login">Login</Nav.Link>
                <Nav.Link href="Register">Registro</Nav.Link>
                <NavDropdown
                  title="Informacion General"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">
                    <Nav.Link to="/Home">test 1</Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <Nav.Link to="/Home">test 2</Nav.Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
    </div>
  );
};
