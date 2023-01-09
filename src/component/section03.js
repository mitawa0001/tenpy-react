import React from "react";
import "../css/section01.css";
import "bootstrap/dist/css/bootstrap.min.css";
import review from "../image/review.png";
import bed from "../image/bed.png";

import "../css/section03.css";
function section02() {
  return (
    <>
    {/* first card */}
      <div className="container my-5">
        <div className="row">
          <div className="col-sm-4 justify-content-center">
            <div className="w-100 text-center mb-3">
              <img src={review} height="80px" alt="airplane logo"></img>
            </div>
            <h3 className="section3-card-heading text-center w-100">
              WORLDWIDE SHIPPING
            </h3>
            <p className="section3-card-desc text-center px-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            </p>
          </div>
          <div className="col-sm-4 justify-content-center">
            <div className="w-100 text-center mb-3">
              <img src={bed} height="80px" alt="airplane logo"></img>
            </div>
            <h3 className="section3-card-heading text-center w-100">
              WORLDWIDE SHIPPING
            </h3>
            <p className="section3-card-desc text-center px-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            </p>
          </div>
          <div className="col-sm-4 justify-content-center">
            <div className="w-100 text-center mb-3">
              <img src={review} height="80px" alt="airplane logo"></img>
            </div>
            <h3 className="section3-card-heading text-center w-100">
              WORLDWIDE SHIPPING
            </h3>
            <p className="section3-card-desc text-center px-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            </p>
          </div>
        </div>
      </div>
      {/* second card */}
    </>
  );
}

export default section02;
