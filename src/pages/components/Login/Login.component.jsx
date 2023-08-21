/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import serviceAPI from "../../../services/Authentication.service";
import { Container, Card, Form, Button, FloatingLabel } from "react-bootstrap";

export const Login = () => {
  const [payloadUser, SetUserPayload] = useState([]);
  const [buttonOnOff, SetButtonOnOff] = useState(true);
  const [errorValidator, SetErrorValidator] = useState({
    errorAccountName: "",
    errorAccountPassword: "",
  });
  const [userCredentials, SetUserCredentials] = useState({
    userAccount: "",
    userAccountPassword: "",
  });

  const navigationApp = useNavigate();

  const validateAccountName = (e) => {
    let value = e.target.value;

    const credentialUpdate = { ...userCredentials };
    const errorUpdate = { ...errorValidator };

    if (value !== "") {
      credentialUpdate.userAccount = value;
      SetUserCredentials(credentialUpdate);
      errorUpdate.errorAccountName = "";
      SetErrorValidator(errorUpdate);
    } else if (value === "") {
      errorUpdate.errorAccountName = "CAMPO CUENTA NO DEBE ESTAR VACIO";
      SetErrorValidator(errorUpdate);
    } else {
      return null;
    }
  };
  const validateAccountPassword = (e) => {
    let value = e.target.value;

    const credentialUpdate = { ...userCredentials };
    const errorUpdate = { ...errorValidator };

    if (value !== "") {
      credentialUpdate.userAccountPassword = value;
      SetUserCredentials(credentialUpdate);
      errorUpdate.errorAccountPassword = "";
      SetErrorValidator(errorUpdate);
      SetButtonOnOff(false);
    } else if (value === "") {
      errorUpdate.errorAccountPassword = "CAMPO CONTRASEÑA NO DEBE ESTAR VACIO";
      SetErrorValidator(errorUpdate);
      SetButtonOnOff(true);
    } else {
      return null;
    }
  };

  const AuthenticateUserCredentials = async () => {
    serviceAPI.AuthorizeProfile(userCredentials).then(response => {
      SetUserPayload(response);

      alert(payloadUser);
    });
  };

  return (
    <section id="SectionLoginUser">
      <Container>
        <br />
        <br />
        <br />
        <Card className="LoginCardSection">
          <Card.Header className="text-center">
            <h1>INICIAR SESION</h1>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Form onSubmit={() => {AuthenticateUserCredentials()}}>
                <Form.Group controlId="form-group-id">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="User Account"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="name@example.com"
                      onInput={(e) => {
                        validateAccountName(e);
                      }}
                    />
                  </FloatingLabel>
                  <span className="text-danger">
                    {errorValidator.errorAccountName}
                  </span>
                  <FloatingLabel
                    controlId="floatingPassword"
                    label="Account Password"
                  >
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      onInput={(e) => {
                        validateAccountPassword(e);
                      }}
                    />
                  </FloatingLabel>
                  <span className="text-danger">
                    {errorValidator.errorAccountPassword}
                  </span>
                </Form.Group>
                <hr />
                <Button
                  disabled={buttonOnOff}
                  variant="secondary"
                  type="submit"
                
                >
                  Iniciar Sesion
                </Button>
              </Form>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};
