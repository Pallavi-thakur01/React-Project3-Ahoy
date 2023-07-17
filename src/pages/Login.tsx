import React, { ChangeEvent } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { ToastContainer, toast } from "react-toastify";

type FormValues = {
  emailId: string;
  password: string;
};

function Login() {
  const [Show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [spinner, setSpinner] = useState(false);
  const [spinner1, setSpinner1] = useState(false);
  const [dataa, setDataa] = useState({
    emailId: "",
   
  });


  
  const navigate = useNavigate();
  
  
  const showToastMessAge1 = () => {
    toast.success(" Valid Credentials!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };
  const [error, setError] = useState<FormValues>({
    emailId: "",
    password: "",
  });

  const [data, setData] = useState({
    emailId: "",
    password: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });

    setError({ emailId: "", password: "" });
  };
  
  const handleChange1= (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDataa({
      ...dataa,
      [e.target.name]: value,
     
    });
    console.log(dataa);
   
  };

  const handleSubmit1 = (e: any) => {
    e.preventDefault();
    setSpinner1(true);
   
    const userDataa = {
      businessId: "4",
      emailId: dataa.emailId,
     
    }; 
    
    axios
      .post(
        "https://rehntitapistaging.azurewebsites.net/api/Auth/ForgotPassword ",
        userDataa
      )
      .then((response) => {
        console.log(response);
        setSpinner1(false);
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
          setSpinner1(false);
          setShow(false);
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
    console.log(userDataa, "dataaaa")}
         
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSpinner(true);
    
   
     
    const userData = {
      businessId: "4",
      emailId: data.emailId,
      applicationId: "58",
      password: data.password,
    };

    axios
      .post(
        "https://rehntitapistaging.azurewebsites.net/api/Auth/Login",
        userData
      )
      .then((response) => {
        console.log(response);
        setSpinner(false);
         navigate("/passcode");
         console.log(response.data.responseMessage);
        
        localStorage.setItem('message',response.data.responseMessage);
        
        
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.responseMessage, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          setSpinner(false)
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
    console.log(userData, "dataaaa");






      // navigate("/passcode");
  };

  

  return (
    <>
      <div className="  mainBox container rounded shadow align-item-center">
        <form onSubmit={handleSubmit}>
          {/* <!-- Email input --> */}
          <div className=" mainBox  container py-2">
            <div className="col-8 h-2 p-4 rounded-circle">
              <img src={require("../images/img1.png")} alt="hello:" />
            </div>
          </div>
          <div className="px-3">
            <div className="row">
              <div className="form-outline mb-4 col form-group">
                <label
                  htmlFor="validationDefault03"
                  className="form-label ms-auto control-label "
                >
                  Email{" "}
                </label>
                <input
                   type="email"
                  id="validationDefault03"
                  name="emailId"
                  className="form-control  rounded-pill"
                  placeholder="Email Address"
                  onChange={handleChange}
                  value={data.emailId}
                  required
                />
              </div>
            </div>

            {/* <!-- Password input --> */}
            <div className="row">
              <div className="form-outline mb-4 form-group ">
                <label
                  htmlFor="validationServer04"
                  className="form-label control-label "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="validationServer04"
                  className="form-control rounded-pill"
                  placeholder="Password "
                  onChange={handleChange}
                  value={data.password}
                  required
                />
                
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-5  d-flex">
                {/* <!-- Checkbox --> */}
                <div className="form-check">
                  <input
                    className="form-check-input "
                    type="checkbox"
                    value=""
                    id="form2Example31"
                   
                  />
                  <label className="form-check-label "> Remember me </label>
                </div>
              </div>

              <div className="col-5 ms-auto ">
                {/* <!-- Simple link --> */}
                <a className="text-danger" onClick={() => setShow(true)}>
                  Forgot password?
                </a>
              </div>
            </div>

            {/* <!-- Submit button --> */}
            <div className="row">
              <div className="col  ">
               
                 


                
               
               <button
                  type="submit"
                  className="btn btn-danger loginButton  mb-3 buttonClass m-4 px-3 fw-semibold  rounded-pill"
                  // onClick={ showToastMessAge()}
                  
                >
                  
                  {!spinner? <span>Login</span>:<span className="spinner-border  " role="status">
 
</span> }
                  <ToastContainer />
                </button>
                

               
              </div>
            </div>

            {/* <!-- Register buttons --> */}
          </div>
        </form>
      </div>
      
      <Modal
        show={Show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        className="modalHeight"
      >
        <Modal.Header>
          <Modal.Title
            id="example-modal-sizes-title-sm"
            className="px-3 fw-semiBold fs-5"
          >
            Reset Password
          </Modal.Title>
          <button
            type="button"
            className="btn-close bg-white"
            aria-label="Close"
            onClick={handleClose}
          ></button>
        </Modal.Header>
        <Modal.Body>
          <Form className="px-3" onSubmit={handleSubmit1}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter email to reset password</Form.Label>
              <Form.Control type="email" placeholder="E-mail address" name='emailId' value={dataa.emailId} onChange={handleChange1}
                  required />
            </Form.Group>
          
          <Button
          type="submit"
            variant="danger"
            // onClick={handleSubmit1}
            className="forgetButton loginButton rounded-pill px-3 m-3 "
          >
           {!spinner1? <span>Send</span>:<span className="spinner-border  " role="status">
 
 </span> }
          </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
