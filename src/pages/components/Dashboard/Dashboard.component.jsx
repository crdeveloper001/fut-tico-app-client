import React, { useState } from "react";
import "./Dashboard.css";
import { Row, Col, Button } from "react-bootstrap";
import { Fields } from "../Fields/Fields.component";

export const Dashboard = () => {
  const [showField, setShowField] = useState(false);

  const ShowFieldsComponent = () => {
    if (!showField) {
      setShowField(true);
    } else if (showField) {
      setShowField(false);
    }
  };
  return (
    <div>
      <section id="SectionMainDescription">
        <Row md={2}>
          <Col>
            <p className="WebDescription">
              ORGANIZA TUS MEJENGAS CON TUS AMIGOS DE MANERA RAPIDA Y COMPARTE
              AL INSTANTE, LOS PARTIDOS DEL MOMENTO, EN ESTE SITIO PODRAS
              CONSULTAR TODA LA INFORMACION NECESARIA DE LAS CANCHAS DE FUTBOL
              EN EL PAIS Y PONERTE EN CONTACTO PARA HACER RESERVACIONES AQUI
              MISMO EN 1 CLICK 
            </p>
          </Col>
        </Row>
        <Button
          variant="success"
          className="ButtonBusquedaaScroll mx-auto d-block"
          onClick={() => {
            ShowFieldsComponent();
          }}
        >
          <h5>Busquemos Una Cancha</h5>
        </Button>
      </section>
      {showField ? <Fields /> : ""}
    </div>
  );
};
