
// import React from 'react'
// import Form from 'react-bootstrap/Form';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';




// function Resetpasscode() {
//   return (
//     <>
//      <Container>
//       <Row>
//         <Col>
//     <Form>
//     <Form.Group className="mb-3" controlId="formGroupPassword">
//       <Form.Label>Passcode</Form.Label>
//       <Form.Control type="number" placeholder="Passcode" />
//     </Form.Group>
//     <Form.Group className="mb-3" controlId="formGroupPassword">
//       <Form.Label>Reset Passcode</Form.Label>
//       <Form.Control type="number" placeholder=" Reset Passcode" />
//     </Form.Group>
//     <Button variant="primary" type="submit">
//         Submit
//       </Button>
//   </Form>
//   </Col>
//       </Row>
//     </Container>
//   </>
//   )
// }

// export default Resetpasscode












import Row from 'react-bootstrap/Row';


import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import * as formik from 'formik';
import * as yup from 'yup';
import { Container } from 'react-bootstrap';

function FormExample() {
  const { Formik } = formik;

  const schema = yup.object().shape({
   
    email: yup.string().required(),
    
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
       
        email: '',
       
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (

<Container className='shadow'>
<Row>
        <Form noValidate onSubmit={handleSubmit}>
         
           
          
            <Form.Group as={Col} md="8" controlId="validationFormik04" className='my-5 mx-3'>
              <Form.Label >Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
                className='mx-5 '
                
              />
              <Form.Control.Feedback type="invalid"  >
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            
          <Button className='m-2 btn btn-danger' type="submit">Login</Button>
          </Form>
          </Row>
           
        </Container>
        
      )}
    </Formik>
  );
}

export default FormExample;