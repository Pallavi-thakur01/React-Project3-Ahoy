import React from 'react'
import {Modal,Button,Form} from 'react-bootstrap';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { ChangeEvent } from 'react';


function Passcode() {


  const [active, setActive] = useState("");
 
  const handleClick1 = (e: ChangeEvent<HTMLInputElement>) => {
    setActive(e.target.id);
  }


  const [Show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>

    <div className=' mainBox container rounded shadow'>
    <form>
  {/* <!-- Email input --> */}
  <div className='container '>
  <div className='col h-2 p-4 rounded-circle'>
    <img src={require("../images/img1.png")} alt="hello:" />
    </div>
  </div>

  <div className='row'>
    <div className='col'>
    <p>  Enter  Passcode</p>
    <small className="bi bi-circle mx-1"> </small>
    <small className="bi bi-circle"> </small>
    <small className="bi bi-circle mx-1 "> </small>
    <small className="bi bi-circle "> </small>
    <small className="bi bi-circle mx-1 "> </small>
    <small className="bi bi-circle "> </small>
    </div>
</div>
    
<div className='row m-2'>
<div className='py-2'>
    <button  key={1} id={"1"} className='col border border-secondary  p-3 Box2  btn btn-white  rounded-circle circle circle-md'   >1</button>
    <button className='col border border-secondary   p-3 Box2 btn  btn-white   mx-5  rounded-circle'>2</button>
    <button className='col border border-secondary   p-3 Box2 btn  btn-white   rounded-circle'>3</button>
       
       
  </div>

</div>
<div className='row '>
<div className='py-2'>
    <button className='col border border-secondary  p-3 Box2 btn  btn-white   rounded-circle'>4</button>
    <button className='col border border-secondary   p-3 Box2 btn  btn-white   mx-5  rounded-circle'>5</button>
    <button className='col border border-secondary   p-3 Box2 btn  btn-white   rounded-circle'>6</button>
       
       
  </div>

</div>
<div className='row '>
<div className='py-2'>
    <button className='col border border-secondary  p-3 Box2 btn   btn-white  rounded-circle'>7</button>
    <button className='col border border-secondary   p-3 Box2 btn  btn-white   mx-5  rounded-circle'>8</button>
    <button className='col border border-secondary   p-3 Box2 btn  btn-white  rounded-circle'>9</button>
       
       
  </div>

</div>
<div className='row '>
<div className='py-2'>
    <button className='col   p-3 Box2 btn  text-danger '>Clear</button>
    <button className='col border border-secondary   p-3 Box2 btn btn-white  mx-5  rounded-circle'>0</button>
    <button className='col  p-2 Box2 btn  text-danger '>Delete</button>
       
       
  </div>

</div>
<div className='row '>
<div className='py-2'>
   <Link to = "/login"> <button className='col backButton  px-4  btn   mx-4  fw-bold rounded-pill'>Back</button></Link>
   <Link to = "/location"><button className='col  px-4 btn btn-danger mx-4 fw-bold  rounded-pill'>Confirm</button></Link>
       
       
  </div>

</div>
<div className='row'>
  <div className='col'>
    <h6 className='text-danger ' onClick={() => setShow(true)}>Forget Passcode?</h6>
  </div>
</div>
<div className='row '>
<div className='col-6 p-3'><i className="bi bi-envelope"></i> Email Login</div>
<div className='col-6 p-3 '><a href="#!" className='exitClass'>Exit Main App</a></div>
</div>
  
  </form>
  </div>
  <Modal
        show={Show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        className="modalHeight"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm" className="px-3 fw-semiBold fs-5">
            Reset Passcode
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="px-3">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter email to reset passcode</Form.Label>
              <Form.Control type="email" placeholder="E-mail address" />
            </Form.Group>
          </Form>
          <Button
            variant="danger"
            onClick={handleClose}
            className="forgetButton rounded-pill px-3 m-3 "
          >
            Send
          </Button>
        </Modal.Body>
      </Modal>
  </>










    
  )
}

export default Passcode