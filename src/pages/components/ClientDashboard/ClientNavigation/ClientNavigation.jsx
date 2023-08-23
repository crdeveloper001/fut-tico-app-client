// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export const ClientNavigation = () => {

  const changePayloadRol = () =>{
    localStorage.clear();
    const Payload = localStorage.getItem('payload');
    const currentPayload = JSON.parse(Payload);
    currentPayload.userRol = null;

    this.forceUpdate();
}

  return (
    <section>
            <Navbar expand="lg" className="bg-body-tertiary ">
                <Container>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link href="/">Menu Cliente</Nav.Link>
                            <Nav.Link href="/home" onClick={() =>{changePayloadRol()}}>Log Out</Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>
  )
}
