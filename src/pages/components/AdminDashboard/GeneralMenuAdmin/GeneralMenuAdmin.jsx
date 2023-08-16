import React, { useState } from "react";
import { Button, Offcanvas, ListGroup, Nav, Stack } from "react-bootstrap";

export const GeneralMenuAdmin = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section id="MenuForClient">
      <Button variant="primary" onClick={handleShow}>
        Toggle static offcanvas
      </Button>

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
                <h5 className="text-center">MY FIELDS</h5>
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
  );
};
