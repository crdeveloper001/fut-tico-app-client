// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import logoIcon from '../../../assets/images/LogoCR.png';
import { Container, Nav, Navbar, Button } from 'react-bootstrap'

export const PublicNavigation = () => {

    const [currentUserName, SetCurrentUserName] = useState('');
    const [buttonOnOff, SetButtonOnOff] = useState({});
    const [confirmCloseSession, setCloseSession] = useState(false)

    const changePayloadRol = () => {

        const confimation = confirm("ESTAS SEGURO QUE QUIERE SALIR?", "CERRAR SESION");
        if (confimation) {

            setCloseSession(true)
            localStorage.clear()
            const Payload = localStorage.getItem('payload')
            const currentPayload = JSON.parse(Payload);
            currentPayload.userRol = null
        }


    }

    useEffect(() => {
        // Check if the payload exists in localStorage
        const sessionPayload = JSON.parse(localStorage.getItem('payload'))
        if (sessionPayload) {
            SetButtonOnOff({
                ButtonLogin: true,
                ButtonRegister: true
            })
            SetCurrentUserName('Hi -'+sessionPayload.userAccount);
        } else {
            SetButtonOnOff({
                ButtonLogin: false,
                ButtonRegister: false
            })
            SetCurrentUserName('');
        }


    }, [])
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="home">
                        <img
                            src={logoIcon}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Costa Rica Socces Team Logo"
                        />
                             <h3>{currentUserName}</h3>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav className='d-flex justify-content-end'>
                            <Nav.Link href={!buttonOnOff.ButtonLogin ? 'Login':'/'}>

                                {!buttonOnOff.ButtonLogin ? <Button variant="primary">Iniciar Sesion</Button> : <Button variant="danger" size="sm" onClick={() => changePayloadRol()}>
                                    SALIR DE LA SESION
                                </Button>}


                            </Nav.Link>

                            {!buttonOnOff.ButtonRegister ? <Nav.Link>
                                <Button variant="primary">Registro</Button>
                            </Nav.Link>

                                : ''}

                        </Nav>

                    </Navbar.Collapse>
                </Container>

            </Navbar></div>
    )
}
