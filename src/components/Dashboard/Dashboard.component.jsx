import React from "react";
import './Dashboard.css';
import { Row, Col } from "react-bootstrap";

export const Dashboard = () => {
  return (
    <div>
      <section id="description">
        <Row md={2}>
          <Col md={6}>
            <p className="WebDescription">
              ORGANIZA TUS MEJENGAS CON TUS AMIGOS DE MANERA RAPIDA Y COMPARTE
              AL INSTANTE, LOS PARTIDOS DEL MOMENTO, EN ESTE SITIO PODRAS
              CONSULTAR TODA LA INFORMACION NECESARIA DE LAS CANCHAS DE FUTBOL
              EN EL PAIS Y PONERTE EN CONTACTO PARA HACER RESERVACIONES AQUI
              MISMO EN 1 CLICK
            </p>
          </Col>
          <Col md={6}>Column</Col>
        </Row>
      </section>
    </div>
  );
};
