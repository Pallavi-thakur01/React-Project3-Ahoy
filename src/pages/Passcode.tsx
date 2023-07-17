import React from 'react'
import {Modal,Form, Button} from 'react-bootstrap';
import { useState ,useEffect} from 'react';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import  { ChangeEvent } from "react";
import axios from "axios";
import { message } from 'antd';




function Passcode() {

let b=localStorage.getItem('message');
console.log(message);
useEffect(()=>{
  toast.success(b , {
      position: toast.POSITION.BOTTOM_RIGHT,
     });
     localStorage.clear();
},[])
 
  

  const [Show, setShow] = useState(false);
  const [Shoow, setShoow] = useState(false);
  const handleClose = () => setShow(false);
  const handleClose1 = () => setShoow(false);
  const handleShow = () => setShow(true);
  
  
  const [data, setData] = useState({
    passcode: "",
    
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });

    
  };

  function handlePasscode(){

    const userData = {
      businessId: "4",
      passcode: data.passcode,
     
    };
  axios
      .post(
        "https://rehntitapistaging.azurewebsites.net/api/Auth/Passcode ",
        userData
      )
      .then((response) => {
        console.log(response);
       
        setShow(false);

        
         toast.success(response.data.responseMessage , {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        
        
        
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.responseMessage, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          
          
          console.log(error.response);
          console.log("server responded");
         
        } else if (error.request) {
          console.log("network error");
          toast.error(error.response.data.responseMessage, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
         
        } else {
          console.log(error);
          
        }
      });
    console.log(userData, "dataaaa")}

    

    


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
    <div  className='col border border-secondary  p-3 Box2  btn btn-white  rounded-circle circle circle-md'   onChange={handleChange}  onClick={handlePasscode} >1</div>
    <div className='col border border-secondary   p-3 Box2 btn  btn-white   mx-5  rounded-circle'   >2</div>
    <div className='col border border-secondary   p-3 Box2 btn  btn-white   rounded-circle' >3</div>
       
       
  </div>

</div>
<div className='row '>
<div className='py-2'>
    <div className='col border border-secondary  p-3 Box2 btn  btn-white   rounded-circle '  onChange={handleChange}  onClick={handlePasscode}>4</div>
    <div className='col border border-secondary   p-3 Box2 btn  btn-white   mx-5  rounded-circle'   >5</div>
    <div className='col border border-secondary   p-3 Box2 btn  btn-white   rounded-circle'   >6</div>
       
       
  </div>

</div>
<div className='row '>
<div className='py-2'>
    <div className='col border border-secondary  p-3 Box2 btn   btn-white  rounded-circle'  onClick={handlePasscode}>7</div>
    <div className='col border border-secondary   p-3 Box2 btn  btn-white   mx-5  rounded-circle'  onClick={handlePasscode}>8</div>
    <div className='col border border-secondary   p-3 Box2 btn  btn-white  rounded-circle'  onClick={handlePasscode}>9</div>
       
       
  </div>

</div>
<div className='row '>
<div className='py-2'>
    <div className='col   p-3 Box2 btn  text-danger '>Clear</div>
    <div className='col border border-secondary   p-3 Box2 btn btn-white  mx-5  rounded-circle'>0</div>
    <div className='col  p-2 Box2 btn  text-danger '>Delete</div>
       
       
  </div>

</div>
<div className='row '>
<div className='py-2'>
   <Link to = "/login"> <div className='col backButton  px-4  btn   mx-4  fw-bold rounded-pill'>Back</div></Link>
   <Link to = "/location"><div className='col  px-4 btn btn-danger mx-4 fw-bold  rounded-pill'>Confirm</div></Link>
       
       
  </div>

</div>
<div className='row'>
  <div className='col'>
    <h6 className='text-danger ' onClick={() => setShow(true)}>Forget Passcode?</h6>
  </div>
</div>
<div className='row '>
<div className='col-6 p-3'><i className="bi bi-envelope"></i> Email Login</div>
<div className='col-6 p-3 '><a href="#!" className='exitClass'  onClick={() => setShoow(true)}>Exit Main App</a></div>
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
            className="forgetdiv rounded-pill px-3 m-3 "
          >
            Send
          </Button>
        </Modal.Body>
      </Modal>

      
      <Modal
        show={Shoow}
        onHide={() => setShoow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        className="modalHeight "
      >
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body className='text-danger'>
        Are you sure you want to log out of the main application? You will need the master account to re-login.
          
        <div className='row '>
<div className='py-2'>
    <div className='col backButton  px-4  btn   mx-4  fw-bold rounded-pill' onClick={handleClose1}>Back</div>
   <Link to = "/Login"><div className='col  px-4 btn btn-danger mx-4 fw-bold  rounded-pill'>Confirm</div></Link>
       
       
  </div>

</div>

        </Modal.Body>
      </Modal>
      <ToastContainer/>
  </>










    
  )
}

export default Passcode;