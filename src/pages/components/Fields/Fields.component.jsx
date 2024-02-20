/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import {
  Col,
  Card,
  Container,
  Row,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import serviceAPI from "../../../hooks/Fields.service";
import "./Fields.css";
import { PublicNavigation } from "../PublicNavigation/PublicNavigation";
import { useNavigate } from "react-router-dom";
import { GeneralFooter } from "../GeneralFooter/GeneralFooter";
export const Fields = () => {
  const navigationApp = useNavigate();
  const [fields, setFields] = useState([]);
  const [nameField, setNameField] = useState("");
  const [errorNotFound, setErrorNotFound] = useState({
    active: false,
    message: "",
  });
  const [fieldDetails, setFieldDetails] = useState({});

  const LoadFieldInfo = async () => {
    const apiResponse = await serviceAPI.GetAllFields().then((apiResponse) => {
      setFields(apiResponse);
      setErrorNotFound({
        active: false,
        message: "OCURRIO UN ERROR AL CARGAR LA CANCHAS, INTENTA MAS TARDE",
      });
    });
  };

  const LoadFieldDetails = async (details) => {
    navigationApp("/ViewFieldDetails", { state: { details } });
  };
  const FilterByLocation = async (event) => {
    if (event.target.value === "Todas") {
      LoadFieldInfo();
    } else {
      const response = await serviceAPI
        .SearchByLocation(event.target.value)
        .then((apiResponse) => {
          if (apiResponse.data != null) {
            setFields(apiResponse.data);
            setErrorNotFound({
              active: false,
              message: "NO HAY CANCHAS DISPONIBLES EN" + event.target.value,
            });
          } else if (apiResponse === undefined) {
            setErrorNotFound({
              active: true,
              message: "NO HAY CANCHAS DISPONIBLES EN" + event.target.value,
            });
          }
        });
    }
  };
  const FilterByGameType = async (event) => {
    if (event.target.value === "Todas") {
      LoadFieldInfo();
      setErrorNotFound({
        active: false,
        message: "NO HAY CANCHAS DE TIPO " + event.target.value,
      });
    } else {
      const response = await serviceAPI
        .SearchByGameType(event.target.value)
        .then((apiResponse) => {
          if (apiResponse.data != null) {
            setFields(apiResponse.data);
            setErrorNotFound({
              active: false,
              message: "NO HAY CANCHAS DE TIPO: " + event.target.value,
            });
          } else if (apiResponse.data === undefined) {
            setErrorNotFound({
              active: true,
              message: "NO HAY CANCHAS DE TIPO " + event.target.value,
            });
          }
        });
    }
  };

  const FilterByName = async () => {
    try {
      const response = await serviceAPI
        .SearchByGameName(nameField)
        .then((apiResponse) => {
          if (apiResponse.data == undefined) {
            setErrorNotFound({
              active: true,
              message: "SIN RESULTADOS DE BUSQUEDA",
            });
          } else {
            setErrorNotFound({
              active: false,
              message: "NO HAY CANCHAS DISPONIBLES EN" + event.target.value,
            });
            setFields(apiResponse.data);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    LoadFieldInfo();
    if (fields === undefined) {
      setFieldDetails([]);
    }
  }, []);
  return (
    <section>
      <div id="FieldsSearchSection">
        <PublicNavigation />

        <Container>
          <Row>
            <Col md={3}>
              <Form>
                <Form.Group>
                  <Form.Label className="text-white">
                    Nombre de la cancha
                  </Form.Label>
                  <Form.Control
                    type="search"
                    placeholder="nombre"
                    id="SearchFieldBox"
                    onInput={(e) => {
                      if (e.target.value === "") {
                        LoadFieldInfo();
                        setErrorNotFound({ active: false, message: "" });
                      } else {
                        setNameField(e.target.value);
                      }
                    }}
                  />
                  <br />
                  <Button
                    variant="success"
                    title="Buscar"
                    onClick={() => {
                      FilterByName();
                    }}
                  >
                    Buscar
                  </Button>
                </Form.Group>
              </Form>
            </Col>
            <Col md={3}>
              <Form>
                <Form.Group>
                  <Form.Label className="text-white">
                    Categoria de Juego
                  </Form.Label>
                  <Form.Select
                    onChange={(e) => {
                      FilterByGameType(e);
                    }}
                  >
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
                  <Form.Select
                    onChange={(e) => {
                      FilterByLocation(e);
                    }}
                  >
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

          {errorNotFound.active ? (
            <Alert
              className="mt-3"
              variant="danger"
              title="No results found in the search"
            >
              {errorNotFound.message}
            </Alert>
          ) : (
            ""
          )}
          <br />
          <Row>
            <hr />
            {fields != undefined
              ? fields.map((item) => (
                  <Col
                    key={item.id}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={4}
                    className="mb-5"
                  >
                    <Card>
                      <Card.Img
                        className="img-fluid"
                        variant="top"
                        src={item.fieldPhotoURL}
                      />
                      <Card.Body>
                        <Card.Title>{item.fieldName}</Card.Title>
                        <Row>
                          <Col>
                            <Button
                              variant="danger"
                              size="sm"
                              onClick={() => {
                                setFieldDetails(item);
                                console.log("state button:", fieldDetails);
                                LoadFieldDetails(item);
                              }}
                            >
                              Ver Detalles
                            </Button>
                            <Button
                              target="blank"
                              href="https://goo.gl/maps/dAC36bQBks6nsW1f6"
                              variant="link"
                              size="sm"
                              onClick={() => console.log("Link")}
                            >
                              Localizacion
                            </Button>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              : ""}
          </Row>
        </Container>
        <GeneralFooter />
      </div>
    </section>
  );
};
