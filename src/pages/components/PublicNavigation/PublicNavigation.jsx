// eslint-disable-next-line no-unused-vars
import React from 'react'
import logoIcon from '../../../assets/images/LogoCR.png';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

export const PublicNavigation = () => {
    return (
        <div><Navbar expand="lg" className="bg-body-tertiary">
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
                                <Nav.Link to="/Home">Soporte Tecnico</Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                <Nav.Link to="/Home">Preguntas Frecuentes</Nav.Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar></div>
    )
}
