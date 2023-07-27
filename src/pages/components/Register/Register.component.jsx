import React from 'react'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
export const Register = () => {
  return (
    <section id="SectionLoginUser">

    <Container >
      <Row>
        <Col md={6}>
        <Form>
              <Form.Group >
                <Form.Label className='text-white'>Nombre</Form.Label>
                <Form.Control type='text' placeholder='tu nombre' required={true} />
                <Form.Label className='text-white'>Apellidos</Form.Label>
                <Form.Control type='text' placeholder='tu nombre' required={true} />
                <Form.Label className='text-white'>Telefono</Form.Label>
                <Form.Control type='tel' placeholder='tu nombre' required={true} />
                <Form.Label className='text-white'>Correo Electronico</Form.Label>
                <Form.Control type='email' placeholder='tu nombre' required={true} />
                <Form.Label className='text-white'>Contraseña</Form.Label>
                <Form.Control type='password' placeholder='tu nombre' required={true} />
                <Form.Label className='text-white'>Confirmar Contraseña</Form.Label>
                <Form.Control type='password' placeholder='tu nombre' required={true} />
                <hr />
                <Button variant="success" type='submit'>
                  Crear Cuenta
                </Button>
              </Form.Group>
            </Form>
        </Col>
        <Col md={6}>

          test 2
        </Col>
      </Row>
    </Container>
  </section>
  )
}
