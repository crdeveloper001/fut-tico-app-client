import React from 'react'
import './GeneralFooter.css'
import { Container, Row, Col } from 'react-bootstrap';

export const GeneralFooter = () => {
  return (
    <div>
         <footer className="bg-dark text-white py-5 ">
            <Container>
                <Row>
                    <Col>
                        <p>&copy; 2023 CR DEVELOPER FREELANCE</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    </div>
  )
}
