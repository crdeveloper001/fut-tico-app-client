/* eslint-disable no-unused-vars */
import React from 'react'
import {useNavigate} from 'react-router-dom';
import './Login.css';
import { Container, Card, Form, Button, FloatingLabel } from 'react-bootstrap'

export const Login = () => {

  const navigationApp = useNavigate();

  const NavigateToAdminDashboard = () =>{

    return navigationApp("/Admin-Dashboard")
  }



  return (
    <section id="SectionLoginUser">

      <Container >
        <br />
        <br />
        <br />
        <Card className='LoginCardSection'>
          <Card.Header className='text-center'><h1>INICIAR SESION</h1></Card.Header>
          <Card.Body>
            <Card.Text>
              <Form>
                <Form.Group controlId="form-group-id">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                  >
                    <Form.Control type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password" />
                  </FloatingLabel>
                </Form.Group>
                <hr />
                <Button variant="secondary" type='submit' onClick={() => { NavigateToAdminDashboard() }}>
                  Iniciar Sesion
                </Button>
              </Form>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </section >
  )
}
