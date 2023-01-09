import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import common from "../image/DSC_0118.jfif";
import "../css/section02.css";

function section02() {
  return (
    <>
      {/* first card */}
      <div className="container-fluid my-5 main-box-section03">
        <div className="container d-flex main-rusty-box">
          <div className="col-12 py-5 col-sm-6">
            <h2 className="w-75 section03-heading">Rusty</h2>
            <p className="section-desc-alpha pe-5">
              Chiguru Farms, Bilikal Forest, Karnataka
            </p>
            <p className="sub-line">
              Trek it out. Unplug and disconnect from the hustle-bustle of
              B’lore. Sleep in like never before.
            </p>
            <h2 className="my-2 mb-4">₹4704* (2pax )</h2>
            <p>
              (*Including 12% GST) ₹1400/kid (5-10 yrs old), ₹840 for 0-6 yr
              old* ₹2016/extra adult*
            </p>
            <p>Made in New Zealand from local and imported ingredients.</p>
            <button className="btn browser">BOOK NOW</button>
          </div>
          <div className="col-3 mr-2">
            <img
              className="mb-2"
              src={common}
              alt="banner img"
              width="300px"
              height="250px"
            ></img>
            <img
              className="mt-2"
              src={common}
              alt="banner img"
              height="250px"
              width="300px"
            ></img>
          </div>
          <div className="col-3">
            <img
              src={common}
              alt="banner img"
              height="515px"
              width="300px"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default section02;
