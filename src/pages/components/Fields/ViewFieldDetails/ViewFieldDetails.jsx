/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars

import React, { useEffect, useState } from 'react'
import { Card, ListGroup, ListGroupItem, Button, Container } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { PublicNavigation } from '../../PublicNavigation/PublicNavigation';
import './ViewFieldsDetails.css';
import { GeneralFooter } from '../../GeneralFooter/GeneralFooter';
export const ViewFieldDetails = () => {
    const { state } = useLocation();
    const [fieldDetails, setFieldDetails] = useState({});
    const navApp = useNavigate();

    const ReserveNow = () => {


        if (localStorage.getItem('payload') == undefined || null) {
            alert("DEBES INICIAR SESION PARA RESERVAR ESTA CANCHA");
            navApp('/Login');
        } else if (localStorage.getItem('payload') !== undefined || null) {
            alert("Reservado para ti");
        }

    }

    useEffect(() => {
        setFieldDetails(state)

    })

    return (
        <div className='ViewFieldContainer'>
            <PublicNavigation />

            <Container >
                <Card className='mt-5'>

                    <Card.Img className='imgField img-fluid' variant="top" src={fieldDetails.details?.fieldPhotoURL} />


                    <Card.Body>
                        <Card.Title>  {fieldDetails.details?.fieldName}</Card.Title>
                        <p>Descripcion: {fieldDetails.details?.fieldDescription}</p>
                        <ListGroup flush>
                            <ListGroupItem>Telefono: {fieldDetails.details?.fieldPhone}</ListGroupItem>
                            <ListGroupItem>Disponibilidad: {fieldDetails.details?.fieldAvailable ? "Si" : "No"}</ListGroupItem>
                            <ListGroupItem>Tipo de Juego: {fieldDetails.details?.fieldGameType}</ListGroupItem>
                            <ListGroupItem>Localizacion: {fieldDetails.details?.fieldLocation}</ListGroupItem>
                        </ListGroup>

                        <Button className='mt-3' variant="success" onClick={() => ReserveNow()}>
                            Reservar Ahora
                        </Button>
                    </Card.Body>


                </Card>
            </Container>
            <GeneralFooter />



        </div>
    )
}
