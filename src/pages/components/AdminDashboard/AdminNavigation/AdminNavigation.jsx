// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Container, Nav, Navbar, Offcanvas, Stack } from 'react-bootstrap';

export const AdminNavigation = () => {
    // eslint-disable-next-line no-undef
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const changePayloadRol = () => {
        localStorage.clear()
        const Payload = localStorage.getItem('payload')
        const currentPayload = JSON.parse(Payload);
        currentPayload.userRol = null

        
    }

    return (
        <section>
            <Navbar expand="lg" className="bg-body-tertiary ">
                <Container>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link onClick={handleShow}>Menu Administrador</Nav.Link>
                            <Nav.Link href="/home" onClick={() => { changePayloadRol() }}>Log Out</Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Offcanvas show={show} onHide={handleClose} backdrop="static">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>FUT TICO APP</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Stack gap={3}>
                        <div className="p-2">
                            <Nav.Link href="/Admin-Profile">
                                <h5 className="text-center">MY PROFILE</h5>
                            </Nav.Link>
                        </div>
                        <div className="p-2">
                            <Nav.Link href="/Admin-CurrentFields">
                                <h5 className="text-center">FIELDS</h5>
                            </Nav.Link>
                        </div>
                        <div className="p-2">
                            <Nav.Link href="/Admin-CurrentReservations">
                                <h5 className="text-center">RESERVATIONS</h5>
                            </Nav.Link>
                        </div>
                        <div className="p-2">
                            <Nav.Link href="/Admin-CurrentTournaments">
                                <h5 className="text-center">TOURNAMENTS</h5>
                            </Nav.Link>
                        </div>
                        <div className="p-2">
                            <Nav.Link href="/">
                                <h5 className="text-center">LOG OUT</h5>
                            </Nav.Link>
                        </div>
                    </Stack>

                </Offcanvas.Body>
            </Offcanvas>
        </section>
    )
}
