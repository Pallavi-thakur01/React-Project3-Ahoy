
import React from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';




function Resetpasscode() {
  return (
    <>
     <Container>
      <Row>
        <Col>
    <Form>
    <Form.Group className="mb-3" controlId="formGroupPassword">
      <Form.Label>Passcode</Form.Label>
      <Form.Control type="number" placeholder="Passcode" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupPassword">
      <Form.Label>Reset Passcode</Form.Label>
      <Form.Control type="number" placeholder=" Reset Passcode" />
    </Form.Group>
    <Button variant="primary" type="submit">
        Submit
      </Button>
  </Form>
  </Col>
      </Row>
    </Container>
  </>
  )
}

export default Resetpasscode