import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import common from "../image/DSC_0118.jfif";
import "../css/section04.css";
import Form from 'react-bootstrap/Form';


function section02() {
  return (
    <>
      {/* first card */}
      <div className="container-fluid mt-5 main-box-section03">
        <div className="container d-flex for-main-box-we-are">
          <div className="col-12 mr-2 col-sm-6">
            <img
              className="mb-2 py-5 we-got-box"
              src={common}
              alt="banner img"
              
            ></img>
          </div>

          <div className="col-12 col-sm-6  py-5 ">
            <h2 className="w-75 section03-heading">We got your back.</h2>
            <p className="section-desc-alpha pe-5">
              Are the dates already full on the dates you want to book? Do not
              worry! We will try to fit you in whenever there is availability.
              Till then check out our blog, The Acorn, and do not forget to
              subscribe to our newsletter to keep up to date with any new tiny
              homes that come out on the scene!
            </p>

            <h2 className="my-2 mb-4">₹4704* (2pax )</h2>
            <p>
              (*Including 12% GST) ₹1400/kid (5-10 yrs old), ₹840 for 0-6 yr
              old* ₹2016/extra adult*
            </p>
            <div>
              <form className="d-flex">
                <Form.Control type="email" placeholder="Enter email" />
                <button className="btn browser">SIGN NOW</button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default section02;
