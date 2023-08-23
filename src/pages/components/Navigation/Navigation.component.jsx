// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logoIcon from '../../../assets/images/LogoCR.png';
import { AdminNavigation } from "../AdminDashboard/AdminNavigation/AdminNavigation";
import { ClientNavigation } from "../ClientDashboard/ClientNavigation/ClientNavigation";

export const Navigation = () => {
  const [adminNavigation, SetAdminDash] = useState(false);
  const [clientNavigation, SetClientDash] = useState(false);
  const [generalNavigation, SetGeneralNavigation] = useState(true);


  const ShowOrHideCurrentNavigation = () => {
    const currentPayload = localStorage.getItem('payload');
    const parsedPayload = JSON.parse(currentPayload);

    if (parsedPayload == undefined) {
      SetGeneralNavigation(true);
      SetClientDash(false);
      SetAdminDash(false)
    } else {
      switch (parsedPayload.userRol) {
        case "Client":
          SetClientDash(true);
          SetGeneralNavigation(false)
          break;
        case "Administrator":
          SetAdminDash(true)
          SetGeneralNavigation(false)
          break;
        case null:
          SetGeneralNavigation(false)
          break;
      }
    }


  }

  useEffect(() => {
    ShowOrHideCurrentNavigation()
  }, [])

  return (

    <section>

      {adminNavigation ? <AdminNavigation /> : ""}
      {clientNavigation ? <ClientNavigation /> : ""}
      {generalNavigation ? <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="home">
            <img
              src={logoIcon}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Costa Rica Socces Team Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <Nav.Link href="/">Inicio</Nav.Link>
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
      </Navbar> : ""}

    </section>

  );
};
