// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Container, Form, Button, Alert, ListGroup } from "react-bootstrap";
import serviceAPI from "../../../services/Users.service";
import { PublicNavigation } from "../PublicNavigation/PublicNavigation";

export const Register = () => {
  const [button_on_off, SetButtonOnOff] = useState(true);
  const [alertRegister, setAlertRegister] = useState(false);
  const [userProfile, SetUserProfile] = useState({
    id: "",
    userName: "",
    userLastName: "",
    userPhone: 0,
    userEmail: "",
    userAccount: "",
    userAccountPassword: "",
    userRol: "Client",
    userActive: true,
  });
  const [errorUserProfile, SetErrorUserProfile] = useState({
    errorName: "",
    errorLastName: "",
    errorPhone: "",
    errorEmail: "",
    errorAccountPassword: "",
  });

  const ClearFieldAfterRegister = () => {
    let field1 = document.getElementById("InputUserName");
    let field2 = document.getElementById("InputUserLastName");
    let field3 = document.getElementById("InputUserPhone");
    let field4 = document.getElementById("InputUserEmail");
    let field5 = document.getElementById("InputUserFirstPassword");
    let field6 = document.getElementById("InputViewUserAccount");
    field1.value = "";
    field2.value = "";
    field3.value = "";
    field4.value = "";
    field5.value = "";
    field6.value = "";
  }

  const SendDataToAPI = async () => {

    const response = await serviceAPI.RegisterNewUser(userProfile);

    switch (response.data) {
      case "REGISTERED":
        setAlertRegister(true)
        setTimeout(() => {
          ClearFieldAfterRegister();
          setAlertRegister(false)
        }, 10000);


        break;

      default:
        setAlertRegister(false)
        break;
    }

  };



  const validateName = (e) => {
    let value = e.target.value;
    const update = { ...userProfile };
    const error = { ...errorUserProfile };
    if (value !== "") {
      update.userName = value;
      SetUserProfile(update);
      error.errorName = "";
      SetErrorUserProfile(error);
    } else if (value === "") {
      error.errorName = "Llenar campo nombre";
      SetErrorUserProfile(error);
    } else {
      return null;
    }
  };
  const validateLastName = (e) => {
    let value = e.target.value;
    const update = { ...userProfile };
    const error = { ...errorUserProfile };

    if (value !== "") {
      update.userLastName = value;
      SetUserProfile(update);
      error.errorLastName = "";
      SetErrorUserProfile(error);
    } else if (value === "") {
      error.errorLastName = "Llenar campo apellido";
      SetErrorUserProfile(error);
    } else {
      return null;
    }
  };
  const validatePhone = (e) => {
    let value = e.target.value;
    const update = { ...userProfile };
    const error = { ...errorUserProfile };
    if (value != 0) {
      update.userPhone = parseInt(value);
      SetUserProfile(update);
      error.errorPhone = "";
      SetErrorUserProfile(error);
    } else if (value == 0) {
      error.errorPhone = "Llenar campo telefono";
      SetErrorUserProfile(error);
    } else {
      return null;
    }
  };
  const validateEmail = (e) => {
    let value = e.target.value;
    const update = { ...userProfile };
    const error = { ...errorUserProfile };
    if (value != "") {
      update.userEmail = value;
      update.userAccount = value.split("@")[0];
      SetUserProfile(update);
      error.errorEmail = "";
      SetErrorUserProfile(error);
    } else if (value === "") {
      update.userAccount = value;
      SetUserProfile(update);
      error.errorEmail = "Llenar campo Email con @";
      SetErrorUserProfile(error);
    } else {
      return null;
    }
  };
  const validatePassword = (e) => {
    let value = e.target.value;
    const update = { ...userProfile };
    const error = { ...errorUserProfile };

    if (value != "") {
      update.userAccountPassword = value;
      SetUserProfile(update);
      SetButtonOnOff(false);
      error.errorAccountPassword = "";
      SetErrorUserProfile(error);
    } else if (value === "") {
      error.errorAccountPassword = "Llenar campo password";
      SetErrorUserProfile(error);
      SetButtonOnOff(true);
    } else {
      return null;
    }
  };

  return (
    <section id="SectionLoginUser">

      <PublicNavigation />
      <Container className="w-75">
        <Form

        >
          <Form.Group>
            <Form.Label className="text-white">Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="tu nombre"
              required={true}
              id="InputUserName"
              onInput={(e) => {
                validateName(e);
              }}
            />
            <span className="text-danger mb-3">
              {errorUserProfile.errorName}
            </span>
            <br />
            <Form.Label className="text-white">Apellidos</Form.Label>
            <Form.Control
              type="text"
              placeholder="tu apellidos"
              required={true}
              id="InputUserLastName"
              onInput={(e) => {
                validateLastName(e);
              }}
            />
            <span className="text-danger mb-3">
              {errorUserProfile.errorLastName}
            </span>
            <br />
            <Form.Label className="text-white">Telefono</Form.Label>
            <Form.Control
              type="number"
              placeholder="########"
              required={true}
              id="InputUserPhone"
              onInput={(e) => {
                validatePhone(e);
              }}
            />
            <span className="text-danger mb-3">
              {errorUserProfile.errorPhone}
            </span>
            <br />
            <Form.Label className="text-white">Correo Electronico</Form.Label>
            <Form.Control
              type="email"
              placeholder="username@domain.com"
              required={true}
              id="InputUserEmail"
              onInput={(e) => {
                validateEmail(e);
              }}
            />
            <span className="text-danger mb-3">
              {errorUserProfile.errorEmail}
            </span>
            <br />
            <Form.Label className="text-white">
              Cuenta de Usuario(automatica con el correo)
            </Form.Label>
            <Form.Control
              type="text"
              value={userProfile.userAccount}
              readOnly={true}
              id="InputViewUserAccount"
            />

            <br />
            <Form.Label className="text-white">Contraseña</Form.Label>
            <Form.Control
              type="password"

              required={true}
              id="InputUserFirstPassword"
              onInput={(e) => {
                validatePassword(e);
              }}
            />
            <span className="text-danger mb-3">
              {errorUserProfile.errorAccountPassword}
            </span>
            <hr />
            <Button variant="success" type="button" disabled={button_on_off} onClick={() => {
              SendDataToAPI();
             
            }}>
              Crear Cuenta
            </Button>
          </Form.Group>
        </Form>

        {alertRegister ? <Alert variant="info" className="mt-3">
          <Alert.Heading>REGISTRO COMPLETO</Alert.Heading>
          <ListGroup>
            <ListGroup.Item>TU CUENTA HA SIDO CREADA, INGRESA CON EL USUARIO: {userProfile.userAccount}</ListGroup.Item>
          </ListGroup>
        </Alert> : ""}
      </Container>
    </section>
  );
};
