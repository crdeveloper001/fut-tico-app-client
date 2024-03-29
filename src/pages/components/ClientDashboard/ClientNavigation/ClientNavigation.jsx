// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Button, Container, Nav, Navbar, Offcanvas, Stack } from 'react-bootstrap'

export const ClientNavigation = () => {
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
                <Container fluid>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link >
                                <Button variant="primary" onClick={handleShow}>Menu</Button>
                            </Nav.Link>

                        </Nav>

                        <Nav className="d-flex justify-content-end" activeKey="/link">
                            <Nav.Link href="/home" >
                                <Button variant="success" onClick={() => { changePayloadRol() }}>
                                    Salir
                                </Button>
                            </Nav.Link>
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
                            <Nav.Link href="/Client-Profile">
                                <h5 className="text-center">MI PERFIL</h5>
                            </Nav.Link>
                        </div>
                        <div className="p-2">
                            <Nav.Link href="/SearchField">
                                <h5 className="text-center">RESERVAR AHORA!</h5>
                            </Nav.Link>
                        </div>
                        <div className="p-2">
                            <Nav.Link href="/Client-Reservation">
                                <h5 className="text-center">VER RESERVACIONES</h5>
                            </Nav.Link>
                        </div>
                        <div className="p-2">
                            <Nav.Link href="/Client-Tournaments">
                                <h5 className="text-center">VER SUSCRIPCIONES A TORNEOS</h5>
                            </Nav.Link>
                        </div>
                        <div className="p-2">
                            <Nav.Link href="/">
                                <h5 className="text-center"><Button variant="danger" onClick={() => { changePayloadRol() }}>
                                    SALIR DE LA SESION
                                </Button></h5>
                            </Nav.Link>
                        </div>
                    </Stack>

                </Offcanvas.Body>
            </Offcanvas>
        </section>
    )
}
