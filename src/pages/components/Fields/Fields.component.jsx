// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, } from "react";
import { Col, Card, Container, Row, Form, Button } from "react-bootstrap";
import serviceAPI from "../../../services/Fields.service";
import './Fields.css'
import { PublicNavigation } from "../PublicNavigation/PublicNavigation";
export const Fields = () => {

  const [fields, setFields] = useState({});

  const LoadFieldInfo = async () => {
    serviceAPI.GetAllFields().then(apiResponse => {
      setFields(apiResponse)
    })
  }
  const FilterByLocation = async (event) => {
    const response = await serviceAPI.SearchByLocation(event.target.value).then(apiResponse => {
      setFields(apiResponse)
      console.log(fields);
    });

    console.log("componente", response);

  }
  const FilterByGameType = async (event) => {
    const response = await serviceAPI.SearchByGameType(event.target.value).then(apiResponse => {
      setFields(apiResponse)
      console.log(fields);
    });
    console.log("componente", response);
  }

  useEffect(() =>{
    LoadFieldInfo();
  },[])
  return (
   
    <section >
      <div id="FieldsSearchSection" >
       
        <PublicNavigation />
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
                  <Form.Select onClick={(e) => {


                    FilterByGameType(e);
                  }}>
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
                  <Form.Select onClick={(e) => {
                    FilterByLocation(e);
                  }}>
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
            <hr />
            {fields.length > 0 ? (
              fields.map((item) => (
                <Col key={item.id} xs={12} sm={6} md={4} lg={4} className="mb-5">
                  <Card>

                    <Card.Img variant="top" src={item.fieldPhotoURL} />

                    <Card.Body>
                      <Card.Title>{item.fieldName}</Card.Title>
                      <Row>
                        <Col>

                          <Card.Text>{item.fieldDescription}</Card.Text>

                          <Button target="blank" href="https://goo.gl/maps/dAC36bQBks6nsW1f6" variant="link" size="sm" onClick={() => console.log("Link")}>
                            Localizacion
                          </Button>
                        </Col>

                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <Col xs={12} className="text-center">
                No fields to display.
              </Col>
            )}

          </Row>
        </Container>
      </div>

    </section>

  );
};
