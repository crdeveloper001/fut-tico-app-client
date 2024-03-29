// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import "./Dashboard.css";
import { Row, Col, Button } from "react-bootstrap";
import { PublicNavigation } from "../PublicNavigation/PublicNavigation";
import { GeneralFooter } from "../GeneralFooter/GeneralFooter";

export const Dashboard = () => {

  
  return (
   
    <div>
      <section id="SectionMainDescription">
        <PublicNavigation/>
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
          href="SearchField"
          size="sm"
          variant="success"
          className="justify-content-center"
        >
          BUSCA TU CANCHA AQUI

        </Button>
      </section>
      <GeneralFooter/>
    </div>
  );
};
