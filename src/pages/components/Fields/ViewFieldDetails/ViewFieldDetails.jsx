import React from 'react'
import { Card, ListGroup,ListGroupItem } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { PublicNavigation } from '../../PublicNavigation/PublicNavigation';

export const ViewFieldDetails = (details) => {
   


  return (
    <div>
  <PublicNavigation />
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://placeimg.com/300/120/any" />
            <Card.Header>Header</Card.Header>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle>Card Subtitle</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
            <ListGroup flush>
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>


    </div>
  )
}
