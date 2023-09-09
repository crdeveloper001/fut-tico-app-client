/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, } from "react";
import { Col, Card, Container, Row, Form, Button, Alert } from "react-bootstrap";
import serviceAPI from "../../../services/Fields.service";
import './Fields.css'
import { PublicNavigation } from "../PublicNavigation/PublicNavigation";
import { useNavigate } from "react-router-dom";

export const Fields = () => {

  const navigationApp = useNavigate();
  const [fields, setFields] = useState([]);
  const [nameField, setNameField] = useState('');
  const [errorNotFound, setErrorNotFound] = useState(false);
  const [fieldDetails, setFieldDetails] = useState({})

  const LoadFieldInfo = async () => {
    serviceAPI.GetAllFields().then(apiResponse => {
      setFields(apiResponse)
    })
  }

  const LoadFieldDetails = async (details) => {


    navigationApp('/ViewFieldDetails', { state: { details } })
  }
  const FilterByLocation = async (event) => {

    if (event.target.value === "Todas") {
      LoadFieldInfo();

    } else {
      const response = await serviceAPI.SearchByLocation(event.target.value).then(apiResponse => {
        setFields(apiResponse.data)
      });
      setErrorNotFound(false);
    }

  }
  const FilterByGameType = async (event) => {

    if (event.target.value === "Todas") {
      LoadFieldInfo();
      setErrorNotFound(false);
    } else {
      const response = await serviceAPI.SearchByGameType(event.target.value).then(apiResponse => {
        setFields(apiResponse.data)
      });

      setErrorNotFound(false);
    }

  }

  const FilterByName = async () => {
    try {
      const response = await serviceAPI.SearchByGameName(nameField).then(apiResponse => {
        if (apiResponse.data == undefined) {
          setErrorNotFound(true)
        } else {
          setErrorNotFound(false)
          setFields(apiResponse.data)
        }
      });

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    LoadFieldInfo();

  }, [])
  return (

    <section >

      <div id="FieldsSearchSection" >

        <PublicNavigation />


        <Container>
          <Row>
            <Col md={3}>
              <Form>
                <Form.Group>
                  <Form.Label className="text-white">Nombre de la cancha</Form.Label>
                  <Form.Control type="search" placeholder="nombre" id="SearchFieldBox" onInput={(e) => {
                    if (e.target.value === "") {
                      LoadFieldInfo();
                    } else {
                      setNameField(e.target.value)
                    }

                  }} />
                  <br />
                  <Button variant="success" title="Buscar" onClick={() => { FilterByName() }}>Buscar</Button>

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
                    <option>Todas</option>
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

          {errorNotFound ? <Alert className="mt-3" variant="danger" title="No results found in the search">NO SE ENCONTRO LA CANCHA! INTENTA DE NUEVO</Alert> : ""}

          <br />

          <Row>
            <hr />


            {fields.map((item) => (
              <Col key={item.id} xs={12} sm={6} md={4} lg={4} className="mb-5">
                <Card>

                  <Card.Img className="img-fluid" variant="top" src={item.fieldPhotoURL} />

                  <Card.Body>
                    <Card.Title>{item.fieldName}</Card.Title>
                    <Row>
                      <Col>



                        <Button variant="danger" size="sm" onClick={() => {
                          setFieldDetails(item);
                          console.log("state button:", fieldDetails);
                          LoadFieldDetails(item)

                        }}>
                          Ver Detalles
                        </Button>

                        <Button target="blank" href="https://goo.gl/maps/dAC36bQBks6nsW1f6" variant="link" size="sm" onClick={() => console.log("Link")}>
                          Localizacion
                        </Button>
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
