// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { ClientNavigation } from "../ClientNavigation/ClientNavigation";
import  UpdateUserAccount from "../../../../services/Users.service";

import "./ClientProfile.css";
export const ClientProfile = () => {
  // eslint-disable-next-line no-unused-vars
  const [profileInfo, SetProfileInfo] = useState({
    id: "",
    userName: "",
    userLastName: "",
    userPhone: 0,
    userEmail: "",
    userAccount: "",
    userAccountPassword: null,
    userRol: "",
    userJwt: "",
    userActive: true,
  });
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

  const handleSubmit = async () => {
    const confirmation = confirm(
      "ESTAS SEGURO DE GUARDAR?",
      "PRESIONA CANCEL PARA VOLVER A EDITAR"
    );
    
    if (confirmation) {
      let formDataUpdate = {
        id: profileInfo.id,
        userName: profileInfo.userName,
        userLastName: profileInfo.userLastName,
        userPhone: document.getElementById("InputPhone").value,
        userEmail: document.getElementById("InputEmail").value,
        userAccount: document.getElementById("InputAccount").value,
        userAccountPassword: null,
        userRol: profileInfo.userRol,
        userJwt: null,
        userActive: profileInfo.userActive,
      };

      console.info(formDataUpdate);

      const request = await UpdateUserAccount(formDataUpdate);

      console.log(request);
     
    }
  };
  useEffect(() => {
    const sessionPayload = JSON.parse(localStorage.getItem("payload"));
    SetProfileInfo(sessionPayload);
  }, []);

  return (
    <section className="ClientBackground">
      <ClientNavigation />
      <Container>
    
        <Card className="mt-4">
          <Card.Header className="textWelcome">
            Welcome back! {profileInfo.userName}
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Button
                className="mb-3 "
                variant="warning"
                onClick={() => {
                  EditProfileTrue();
                }}
              >
                EDITAR INFORMACION GENERAL
              </Button>
              <Button
                className="mb-3 d-flex justify-content-end"
                variant="success"
              >
                CAMBIAR CONTRASEÑA
              </Button>
              <Button
                className="mb-3 position-absolute bottom-0 end-0 m-3"
                variant="danger"
              >
                ELIMINAR MI CUENTA
              </Button>

              <hr />
              <hr />

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="UserId">
                  <Form.Label>ID Usuario</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder=""
                    readOnly
                    disabled
                    value={`${profileInfo.id}`}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>NOMBRE</Form.Label>
                  <Form.Control
                    type="text"
                    disabled
                    value={profileInfo.userName}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>APELLIDOS</Form.Label>
                  <Form.Control
                    type="text"
                    disabled
                    value={profileInfo.userLastName}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>TELEFONO</Form.Label>
                  <Form.Control
                    id="InputPhone"
                    type="tel"
                    disabled={!enableFields}
                    value={!enableFields ? profileInfo.userPhone : undefined}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>CORREO ELECTRONICO</Form.Label>
                  <Form.Control
                    type="email"
                    id="InputEmail"
                    disabled={!enableFields}
                    value={!enableFields ? profileInfo.userEmail : undefined}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>CUENTA</Form.Label>
                  <Form.Control
                    type="text"
                    id="InputAccount"
                    disabled={!enableFields}
                    value={!enableFields ? profileInfo.userAccount : undefined}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>TIPO</Form.Label>
                  <Form.Control
                    type="text"
                    disabled
                    value={profileInfo.userRol}
                  />
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
