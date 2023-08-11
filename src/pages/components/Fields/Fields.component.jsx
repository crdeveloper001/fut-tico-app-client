// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, } from "react";
import { Col, Card, Container, Row, Form, Button } from "react-bootstrap";
import serviceAPI from "../../../services/Fields.service";
import './Fields.css'
export const Fields = () => {

  const [fields, setFields] = useState([]);

  const LoadFieldInfo = async () => {
    serviceAPI.GetAllFields().then(response => {
      setFields(response)
      console.log("fields:",fields);
    })
  }

  useEffect(() => {
    LoadFieldInfo()
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
                  <br />
                  <Button variant="success" title="Buscar" onClick={() => { LoadFieldInfo() }}>Buscar</Button>
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
            {fields.map((item) => (
              <Col key={item.id} xs={12} sm={6} md={4} lg={4} className="mb-5">
                <Card>

                 
                  <Card.Body>
                    <Card.Title>{item.fieldName}</Card.Title>
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
