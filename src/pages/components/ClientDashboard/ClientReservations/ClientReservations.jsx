import React from 'react'
import { ClientNavigation } from '../ClientNavigation/ClientNavigation'
import { Col, Row, Table, Container,Card } from 'react-bootstrap'

export const ClientReservations = () => {
  return (
    <div className='ClientBackground '>
      <ClientNavigation />
      <Container className='mt-4' fluid >
        <Row>
          <Col md={2}>
            <Card>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Text>
                  Some quick example text to build the card out and make up the bulk of
                  the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col >

            <Table striped bordered responsive hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table></Col>
        </Row>
      </Container>
    </div>
  )
}
