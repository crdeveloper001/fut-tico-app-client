// eslint-disable-next-line no-unused-vars
import React from 'react'
import logoIcon from '../../../assets/images/LogoCR.png';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap'

export const PublicNavigation = () => {
    return (
        <div>


            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
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


                        </Nav>
                        <Nav className='d-flex justify-content-end'>
                            <Nav.Link href="Login">
                                <Button variant="primary">Iniciar Sesion</Button>
                            </Nav.Link>
                            <Nav.Link href="Register">
                                <Button variant="success">Registro</Button>
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>

            </Navbar></div>
    )
}
