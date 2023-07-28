import React, { useEffect, useState, } from "react";
import { Col, Card, Container, Row, Form, Button } from "react-bootstrap";
import './Fields.css'
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
        image: "https://www.canchas-deportivas.com/uploaded/mod_galeria/CentriGol.JPG"
      },
      {
        id: 1,
        name: "cancha 2",
        location: "San Jose",
        numberPhone: 99998888,
        available: true,
        image: "https://www.canchas-deportivas.com/uploaded/mod_galeria/CentriGol.JPG"
      },
      {
        id: 2,
        name: "cancha 3",
        location: "Limon",
        numberPhone: 99998888,
        available: true,
        image: "https://www.canchas-deportivas.com/uploaded/mod_galeria/CentriGol.JPG"
      },
      {
        id: 3,
        name: "cancha 4",
        location: "Puntarenas",
        numberPhone: 99998888,
        available: true,
        image: "https://www.canchas-deportivas.com/uploaded/mod_galeria/CentriGol.JPG"
      },
      {
        id: 4,
        name: "cancha 3",
        location: "Limon",
        numberPhone: 99998888,
        available: true,
        image: "https://www.canchas-deportivas.com/uploaded/mod_galeria/CentriGol.JPG"
      },
      {
        id: 5,
        name: "cancha 4",
        location: "Puntarenas",
        numberPhone: 99998888,
        available: true,
        image: "https://www.canchas-deportivas.com/uploaded/mod_galeria/CentriGol.JPG"
      },
      {
        id: 6,
        name: "cancha 3",
        location: "Limon",
        numberPhone: 99998888,
        available: true,
        image: "https://www.canchas-deportivas.com/uploaded/mod_galeria/CentriGol.JPG"
      },
      {
        id: 7,
        name: "cancha 4",
        location: "Puntarenas",
        numberPhone: 99998888,
        available: true,
        image: "https://www.canchas-deportivas.com/uploaded/mod_galeria/CentriGol.JPG"
      },
    ];

    setFieldsNumber([...objectsFields]);


  };

  useEffect(() => {
    CreateExampleFields();
  }, []);

  return (

    <section >
      <div id="FieldsSearchSection" >
        <Container>
          <br />
          <Row>
            <Col md={3}>
              <Form>
                <Form.Group>
                  <Form.Label className="text-white">Nombre de la cancha</Form.Label>
                  <Form.Control type="search" placeholder="nombre" />
                </Form.Group>
              </Form>

            </Col>
            <Col md={3}>
              <Form>
                <Form.Group>
                  <Form.Label className="text-white">Categoria de Juego</Form.Label>
                  <Form.Select>
                    <option value="Todas">Todas</option>
                    <option>Futbol 5</option>
                    <option>Futbol 7</option>
                    <option>Futbol 11</option>
                    <option>Cancha Abierta</option>
                  </Form.Select>
                </Form.Group>
              </Form>

            </Col>
            <Col md={3}>
              <Form>
                <Form.Group>
                  <Form.Label className="text-white">Localizacion</Form.Label>
                  <Form.Select>
                    <option>San Jose</option>
                    <option>Alajuela</option>
                    <option>Cartago</option>
                    <option>Heredia</option>
                    <option>Puntarenas</option>
                    <option>Limon</option>
                    <option>Guanacaste</option>
                  </Form.Select>
                </Form.Group>
              </Form>

            </Col>
          </Row>
          <br />
          <Row>
            <hr />
            {fieldsNumber.map((item) => (
              <Col key={item.id} xs={12} sm={6} md={4} lg={4} className="mb-5">
                <Card>

                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Row>
                      <Col >
                       <Button target="blank" href="https://goo.gl/maps/dAC36bQBks6nsW1f6" variant="link" size="sm" onClick={() => console.log("Link")}>
                        Localizacion
                       </Button>
                      </Col>
                      <Col >

                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

    </section>

  );
};
