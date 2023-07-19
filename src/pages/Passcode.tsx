import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { ChangeEvent } from "react";
import axios from "axios";
import { message } from "antd";
import styled from "@emotion/styled";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form as FormikForm } from "formik";
import * as yup from "yup";

interface passcodeValue {
  businessId: number;
  passcode: string;
}
const Buttons = styled.div`
  width: 74px;
  border-radius: 12px;
  border: none;
  padding: 4px;
  display: flex;
  text-align: left;
  justify-content: center;
`;
const schema = yup.object().shape({
  emailId: yup.string().email("Please enter a valid e-mail").required(),
});

const Passcode: React.FC = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  let passcodeVal: string = "";
  const [passCode, setPassCode] = useState("");
  const [Show, setShow] = useState(false);
  const [Shoow, setShoow] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [spinner1, setSpinner1] = useState(false);
  const [dataa, setDataa] = useState({
    emailId: "",
  });

  const handleClose1 = () => setShoow(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange1 = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDataa({
      ...dataa,
      [e.target.name]: value,
    });
    console.log(dataa);
  };

  let b = localStorage.getItem("message");
  console.log(message);
  useEffect(() => {
    toast.success(b, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    localStorage.clear();
  }, []);

  const handleClick = (val: string) => {
    if (passCode.length > 5) return;
    passcodeVal = passCode + val;
    setPassCode(passcodeVal);
  };
  const handleSubmit1 = (values: any) => {
    setSpinner1(true);

    const userDataa = {
      businessId: "4",
      emailId: values.emailId,
    };

    axios
      .post(
        "https://rehntitapistaging.azurewebsites.net/api/Auth/ForgotPasscode ",
        userDataa
      )
      .then((response) => {
        console.log(response);

        setSpinner1(false);
        setShow(false);

        toast.success(response.data.responseMessage, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        localStorage.setItem("token", response.data.token);
        console.log("mmmmmmmmToken", response.data.token);
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
    console.log(userDataa, "dataaaa");
  };

  const handleSubmit = () => {
    const userPasscode: passcodeValue = {
      businessId: 4,
      passcode: passCode,
    };
    // console.log(userPasscode)

    axios
      .post(
        "https://rehntitapistaging.azurewebsites.net/api/Auth/Passcode",
        userPasscode
      )
      .then((response) => {
        console.log(response);

        navigate("/location");
        toast.success(response.data.responseMessage, {
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
  };

  const passcodeTemplate = [];
  for (let i = 1; i <= 6; i++) {
    const length = passCode.length;
    console.log(passCode, length);
    let addClass = "";
    if (i === length || i < length) {
      addClass = "active";
    } else {
      addClass = "";
    }
    passcodeTemplate.push(<small className={`circle ${addClass}`}></small>);
  }

  const reset = () => {
    setPassCode("");
  };

  return (
    <>
      <div className=" mainBox container rounded shadow">
        <form>
          {/* <!-- Email input --> */}
          <div className="container ">
            <div className="col h-2 p-4 rounded-circle">
              <img src={require("../images/img1.png")} alt="hello:" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <p> Enter Passcode</p>
              <div className="row">
                <div className="col d-flex justify-content-center ms-4 gap-2">
                  {passcodeTemplate}
                </div>
              </div>
            </div>
          </div>

          <div className="row m-2">
            <div className="py-2">
              <button
                className="col border border-secondary  p-3 Box2  btn btn-white  rounded-circle "
                type="button"
                name="1"
                onClick={() => handleClick("1")}
              >
                1{" "}
              </button>

              <button
                className="col border border-secondary   p-3 Box2 btn  btn-white   mx-5  rounded-circle"
                type="button"
                name="2"
                onClick={() => handleClick("2")}
              >
                2
              </button>
              <button
                className="col border border-secondary   p-3 Box2 btn  btn-white   rounded-circle"
                type="button"
                name="3"
                onClick={() => handleClick("3")}
              >
                3{" "}
              </button>
            </div>
          </div>
          <div className="row ">
            <div className="py-2">
              <button
                className="col border border-secondary  p-3 Box2 btn  btn-white   rounded-circle "
                type="button"
                name="4"
                onClick={() => handleClick("4")}
              >
                4
              </button>
              <button
                className="col border border-secondary   p-3 Box2 btn  btn-white   mx-5  rounded-circle"
                type="button"
                name="5"
                onClick={() => handleClick("5")}
              >
                5
              </button>
              <button
                className="col border border-secondary   p-3 Box2 btn  btn-white   rounded-circle"
                type="button"
                name="6"
                onClick={() => handleClick("6")}
              >
                6
              </button>
            </div>
          </div>
          <div className="row ">
            <div className="py-2">
              <button
                className="col border border-secondary  p-3 Box2 btn   btn-white  rounded-circle"
                type="button"
                name="7"
                onClick={() => handleClick("7")}
              >
                7
              </button>
              <button
                className="col border border-secondary   p-3 Box2 btn  btn-white   mx-5  rounded-circle"
                type="button"
                name="8"
                onClick={() => handleClick("8")}
              >
                8
              </button>
              <button
                className="col border border-secondary   p-3 Box2 btn  btn-white  rounded-circle"
                type="button"
                name="9"
                onClick={() => handleClick("9")}
              >
                9
              </button>
            </div>
          </div>
          <div className="row ">
            <div className="py-2">
              <button
                className="col   p-3 Box2 btn  text-danger "
                onClick={reset}
              >
                Clear
              </button>
              <button
                className="col border border-secondary   p-3 Box2 btn btn-white  mx-5  rounded-circle"
                type="button"
                name="0"
                onClick={() => handleClick("0")}
              >
                0
              </button>
              <div className="col  p-2 Box2 btn  text-danger ">Delete</div>
            </div>
          </div>
          <div className="row ">
            <div className="py-2">
              <Link to="/login">
                {" "}
                <div className="col backButton  px-4  btn   mx-4  fw-bold rounded-pill">
                  Back
                </div>
              </Link>
              <div
                className="col  px-4 btn btn-danger mx-4 fw-bold  rounded-pill"
                onClick={() => handleSubmit()}
              >
                Confirm
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h6 className="text-danger " onClick={() => setShow(true)}>
                Forget Passcode?
              </h6>
            </div>
          </div>
          <div className="row ">
            <div className="col-6 p-3">
              <i className="bi bi-envelope"></i> Email Login
            </div>
            <div className="col-6 p-3 ">
              <a href="#!" className="exitClass" onClick={() => setShoow(true)}>
                Exit Main App
              </a>
            </div>
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
          <Modal.Title
            id="example-modal-sizes-title-sm"
            className="px-3 fw-semiBold fs-5"
          >
            Reset Passcode
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            validationSchema={schema}
            onSubmit={handleSubmit1}
            initialValues={{
              emailId: "",
            }}
          >
            {({ errors, values, handleChange }) => (
              <FormikForm className="px-3">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Enter email to reset passcode</Form.Label>
                  <Form.Control
                    placeholder="E-mail address"
                    value={values.emailId}
                    onChange={handleChange}
                    name="emailId"
                  />
                  <div className="text-danger  textShadow ">{errors.emailId}</div>
                </Form.Group>

                
                <Button
                  type="submit"
                  variant="danger"
                  // onClick={handleClose}
                  className="forgetdiv loginButton rounded-pill px-3 m-3 "
                >
                  {!spinner1 ? (
                    <span>Send</span>
                  ) : (
                    <span className="spinner-border  " role="status"></span>
                  )}
                </Button>
                {/* </Link> */}
              </FormikForm>
            )}
          </Formik>
        </Modal.Body>
      </Modal>

      <Modal
        show={Shoow}
        onHide={() => setShoow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        className="modalHeight "
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="text-danger">
          Are you sure you want to log out of the main application? You will
          need the master account to re-login.
          <div className="row ">
            <div className="py-2">
              <div
                className="col backButton  px-4  btn   mx-4  fw-bold rounded-pill"
                onClick={handleClose1}
              >
                Back
              </div>
              <Link to="/Login">
                <div className="col  px-4 btn btn-danger mx-4 fw-bold  rounded-pill">
                  Confirm
                </div>
              </Link>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default Passcode;
