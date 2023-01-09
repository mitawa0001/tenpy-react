import React from "react";
import "../css/section01.css";
import "bootstrap/dist/css/bootstrap.min.css";
import img11 from "../image/img33.jpg";

function section01() {
  return (
    <>
      <div className="container">
        <div className="section01-main">
          <h1 className="section-heading">Best DEAL</h1>
          <span className="bottom-line"></span>
        </div>
        <div className="section-desc">
          Best Hotel and restaurants near by you
        </div>

        <div className="main-singlle-box row d-flex">
          <div className="single-box-model col-sm-3">
            <div className="">
              <img className="singlebox-img" src={img11} alt="card img"></img>
              <div className="single-img-desc">
                MULTI-VITAMIN: EVERYDAY WELLNESS
              </div>
            </div>
          </div>
          <div className="single-box-model col-sm-3 ">
            <div className="">
              <img className="singlebox-img" src={img11} alt="card img"></img>
              <div className="single-img-desc">
                FULL RANGE VALUE PACK (SAVE 33%)
              </div>
            </div>
          </div>
          <div className="single-box-model col-sm-3 ">
            <div className="">
              <img className="singlebox-img" src={img11} alt="card img"></img>
              <div className="single-img-desc">
                VITAMIN C: IMMUNITY SUPPORT{" "}
              </div>
            </div>
          </div>
          <div className="single-box-model col-sm-3">
            <div className="">
              <img className="singlebox-img" src={img11} alt="card img"></img>
              <div className="single-img-desc">IRON: ENERGY SUPPORT</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default section01;
