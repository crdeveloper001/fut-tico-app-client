// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Container, Form, Card, Stack, Button } from "react-bootstrap";
import { AdminNavigation } from '../AdminNavigation/AdminNavigation';

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
      <AdminNavigation />
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
                  <Form.Control type="text" disabled={enableFields} value={profileInfo.userName} />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>LAST NAME</Form.Label>
                  <Form.Control type="text" disabled={enableFields} value={profileInfo.userLastName} />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>PHONE</Form.Label>
                  <Form.Control type="tel" disabled={enableFields} value={profileInfo.userPhone} />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>EMAIL ADDRESS</Form.Label>
                  <Form.Control type="email" disabled={enableFields} value={profileInfo.userEmail} />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>ACCOUNT</Form.Label>
                  <Form.Control type="text" disabled={enableFields} value={profileInfo.userAccount} />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>ROL</Form.Label>
                  <Form.Control type="text" disabled={enableFields} value={profileInfo.userRol} />
                </Form.Group>

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
