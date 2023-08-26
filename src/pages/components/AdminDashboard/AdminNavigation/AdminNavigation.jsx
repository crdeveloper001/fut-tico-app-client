import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router';


export const AdminNavigation = () => {

    const changePayloadRol = () =>{
        localStorage.clear()
        const Payload = localStorage.getItem('payload')
        const currentPayload = JSON.parse(Payload);
        currentPayload.userRol = null

        this.forceUpdate()
    }
    
    return (
        <section>
            <Navbar expand="lg" className="bg-body-tertiary ">
                <Container>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link href="/">Menu Administrador</Nav.Link>
                            <Nav.Link href="/home" onClick={() =>{changePayloadRol()}}>Log Out</Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>
    )
}
