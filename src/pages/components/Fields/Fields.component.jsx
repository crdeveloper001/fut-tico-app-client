import React, { useEffect, useState } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";

export const Fields = () => {
  const [fieldsNumber, setFieldsNumber] = useState([]);

  const CreateExampleFields = () => {
    let objectsFields = [
      {
        id: 0,
        name: "cancha 1",
        location: "Heredia",
        numberPhone: 99998888,
        available: true,
      },
      {
        id: 1,
        name: "cancha 2",
        location: "San Jose",
        numberPhone: 99998888,
        available: true,
      },
      {
        id: 2,
        name: "cancha 3",
        location: "Limon",
        numberPhone: 99998888,
        available: true,
      },
      {
        id: 3,
        name: "cancha 4",
        location: "Puntarenas",
        numberPhone: 99998888,
        available: true,
      },
    ];

    setFieldsNumber([...objectsFields]);

    console.log(fieldsNumber);
  };

  useEffect(() => {
    CreateExampleFields();
  }, []);

  return (
    <div>
      {fieldsNumber.map((item) => {
        console.log(item);
        return (
          <Row xs={1} md={2} className="g-4">
            <Col key={item.id}>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        );
      })}
    </div>
  );
};
