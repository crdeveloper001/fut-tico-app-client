import React, { useState } from 'react'
import { Button, Offcanvas, ListGroup, Nav } from 'react-bootstrap';

export const GeneralMenuAdmin = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section id='MenuForClient'>

      <Button variant="primary" onClick={handleShow}>
        Toggle static offcanvas
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup >
            <ListGroup.Item>
              <Nav.Link href="/Admin-Profile"><h5 className='text-center'>MY PROFILE</h5></Nav.Link>

            </ListGroup.Item>
            <hr />
            <ListGroup.Item><Nav.Link href="/Admin-CurrentFields"><h5 className='text-center'>MY FIELDS</h5></Nav.Link></ListGroup.Item>
            <hr />
            <ListGroup.Item><Nav.Link href="/Admin-CurrentReservations"><h5 className='text-center'>RESERVATIONS</h5></Nav.Link></ListGroup.Item>
            <hr />
            <ListGroup.Item><Nav.Link href="/Admin-CurrentTournaments"><h5 className='text-center'>TOURNAMENTS</h5></Nav.Link></ListGroup.Item>
            <hr />
            <ListGroup.Item><Nav.Link href="/"><h5 className='text-center'>LOG OUT</h5></Nav.Link></ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </section>
  )
}
