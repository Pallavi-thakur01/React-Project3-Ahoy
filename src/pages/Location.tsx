import React from "react";
import { Link } from "react-router-dom";

function Location() {
  return (
    <>
      <h2 className=" my-3">Welcome Andrew Adrian</h2>

      <div className=" container-fluid">
        <div className="row">
          <div className="col-12  rounded-circle">
            <img
              src={require("../images/img2.jpg")}
              alt="hello:"
              className="imageClass"
            />
            <p className="my-2">Chosse Location</p>
          </div>
        </div>
        <div className="my-2">
          <Link to="/dashboard">
        <div className="row ">
          <div className="col-6 border py-5 locationBox shadow ms-auto mb-5 mx-5">
            <a className=" text-dark locationBox "> St. Pete Beach</a>
          </div>
          <div className="col-5 border locationBox py-5 shadow mx-5 mb-5 me-auto">
            <a className=" text-dark locationBox ">Carlsbad Shop</a>
          </div>
        </div>
       </Link>
        <div className="row">
          <div className="col-6 border py-5 locationBox shadow ms-auto mb-5 mx-5">
            <a className=" text-dark locationBox "> Encinitas Shop</a>
          </div>
          <div className="col-5 border locationBox py-5 shadow mx-5 mb-5 me-auto">
            <a className=" text-dark locationBox ">
             Test Location
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-6 border py-5 locationBox shadow ms-auto mb-5 mx-5">
            <a className=" text-dark locationBox "> Test Location2</a>
          </div>
          <div className="col-5 border locationBox py-5 shadow mx-5 mb-5 me-auto">
            <a className=" text-dark locationBox ">New Location</a>
          </div>
        </div>
        <div className="row">
          <div className="col-6 border py-5 locationBox shadow ms-auto mb-5 mx-5">
            <a className=" text-dark locationBox "> Stripe</a>
          </div>
          <div className="col-5 border locationBox py-5 shadow mx-5 mb-5 me-auto">
          <a className=" text-dark locationBox "> Stripe2</a>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Location;
