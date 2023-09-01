/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import serviceAPI from "../../../services/Authentication.service";
import { Container, Card, Form, Button, FloatingLabel, Dropdown } from "react-bootstrap";
import { PublicNavigation } from "../PublicNavigation/PublicNavigation";

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
  /**THIS METHOD AUTENTICATE THE USER CREDENTIALS AND RETURN A RESPONSE AND STORED INSIDE THE STATE AND LS */
  const AuthenticateUserCredentials = async () => {
    try {
    
      const response = await serviceAPI.AuthorizeProfile(userCredentials);
      localStorage.setItem("payload", JSON.stringify(response.data));
      switch (response.data.userRol) {
        case "Client":
          alert("Client");
          navigationApp('/Client-Dashboard');
          break;
        case "Administrator":
          alert("Administrator");
          navigationApp('/Admin-Dashboard');
          break;
        
        default:
          alert("Unknown role");
       
      }    
      return response;
    } catch (error) {
     
      console.error("Error authenticating user:", error);
     
    }
  };


  return (
    <section id="SectionLoginUser">
      <PublicNavigation />
      <Container id="ContainerLogin">

        <Card className="LoginCardSection mt-5">
          <Card.Header className="text-center">
            INICIAR SESION
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Form >
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

                <Button
                  className="mt-3"
                  disabled={buttonOnOff}
                  variant="secondary"
                  type="button"
                  onClick={() => {
                    AuthenticateUserCredentials()
                  }}
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
