// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Container, Form, Card, Button } from "react-bootstrap";
import { AdminNavigation } from '../AdminNavigation/AdminNavigation';
import './AdminProfile.css';
export const AdminProfile = () => {
  // eslint-disable-next-line no-unused-vars
  const [profileInfo, SetProfileInfo] = useState({});
  const [enableFields, SetEnableFields] = useState(true);

  const EditProfileTrue = () => {
    const enable = enableFields;
    switch (enable) {
      case true:
        SetEnableFields(false);
        break;

      case false:
        SetEnableFields(true);
        break;

      default:
        SetEnableFields(false);
        break;
    }
  };

  useEffect(() => {
    const sessionPayload = JSON.parse(localStorage.getItem('payload'))
    console.log("here", sessionPayload.id);
    SetProfileInfo(sessionPayload);


  }, []);

  return (
    <section>
      <AdminNavigation userName={JSON.stringify(profileInfo.userName)} />
      <Container>
        <hr />

        <Card>
          <Card.Header className="textWelcome">Welcome back {profileInfo.userName}</Card.Header>
          <Card.Body>
            <Card.Text>
              <Button className="mb-3 "
                variant="warning"
                onClick={() => {
                  EditProfileTrue();
                }}
              >
                EDITAR INFORMACION GENERAL
              </Button>
              <Button className="mb-3 d-flex justify-content-end" variant="success">CAMBIAR CONTRASEÑA</Button>
              <Button className="mb-3 position-absolute bottom-0 end-0 m-3" variant="danger">ELIMINAR MI CUENTA</Button>



              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>NOMBRE</Form.Label>
                  <Form.Control type="text" disabled={enableFields} value={profileInfo.userName} />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>APELLIDOS</Form.Label>
                  <Form.Control type="text" disabled={enableFields} value={profileInfo.userLastName} />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>TELEFONO</Form.Label>
                  <Form.Control type="tel" disabled={enableFields} value={profileInfo.userPhone} />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>CORREO ELECTRONICO</Form.Label>
                  <Form.Control type="email" disabled={enableFields} value={profileInfo.userEmail} />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>CUENTA</Form.Label>
                  <Form.Control type="text" disabled={enableFields} value={profileInfo.userAccount} />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>TIPO</Form.Label>
                  <Form.Control type="text" disabled={enableFields} value={profileInfo.userRol} />
                </Form.Group>
                <hr />
                <Button type="submit" variant="success">
                  GUARDAR
                </Button>
              </Form>
            </Card.Text>
          </Card.Body>
        </Card>
        <hr />
      </Container>
    </section>
  );
};
