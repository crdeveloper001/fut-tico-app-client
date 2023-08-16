import React, { useEffect, useState } from "react";
import { Container, Form, Card, Stack, Button } from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {icon} from '@fortawesome/free-regular-svg-icons';
export const AdminProfile = (payload) => {
  const [profileInfo, SetProfileInfo] = useState({});
  const [enableFields, SetEnableFields] = useState(false);

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

  const payloadMock = [
    {
      userName: "test",
      userLastName: "test",
      userPhone: 12341234,
      userEmail: "test@gmail.com",
      userAccount: "test",
      userAccountPassword: "testpassword",
      userRol: "Admin",
      userActive: true,
    },
  ];
  useEffect(() => {
    SetProfileInfo(payloadMock);
  }, []);

  return (
    <section>
      <Container>
        <hr />

        <Card>
          <Card.Header>PROFILE </Card.Header>
          <Card.Body>
            <Card.Text>
              <Stack direction="horizontal" gap={3}>
                <div className="bg-light border">
                  <Button
                    variant="warning"
                    onClick={() => {
                      EditProfileTrue();
                    }}
                  >
                    Edit General Information
                  </Button>
                </div>
                <div className="bg-light border ms-auto">
                  <Button variant="success">Reset Password</Button>
                </div>
                <div className="vr" />
                <div className="bg-light border">
                  <Button variant="danger">Delete My Account</Button>
                </div>
              </Stack>
              <hr />

              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>NAME</Form.Label>
                  <Form.Control type="text" disabled={enableFields} />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>LAST NAME</Form.Label>
                  <Form.Control type="text" disabled={enableFields} />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>PHONE</Form.Label>
                  <Form.Control type="tel" disabled={enableFields} />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>EMAIL ADDRESS</Form.Label>
                  <Form.Control type="email" disabled={enableFields} />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>ACCOUNT</Form.Label>
                  <Form.Control type="text" disabled={enableFields} />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>ROL</Form.Label>
                  <Form.Control type="text" disabled={enableFields} />
                </Form.Group>
                <FontAwesomeIcon icon="fa-solid fa-x" />
                <Button type="submit" variant="success">
                  Save
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
