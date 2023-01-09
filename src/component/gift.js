import React from 'react'
import Button from "react-bootstrap/Button";
import Banner from "../image/banner.png";
import "../css/common.css"
function gift() {
  return (
    <>
        <>
      <div className="banner-main">
        <img className="banner-img" src={Banner} alt="cards img"></img>
        <div className="banner-contant-box">
          <h3>Good4Me</h3>
          <h1>Apple Cider Vinegar</h1>
          <p className="w-75 banner-desc">
            Good4Me Apple Cider Vinegar gummies are the newest addition to your
            morning health and well-being regime.{" "}
          </p>
          <Button variant="warning">Shop Now</Button>{" "}
        </div>
        
      </div>
    </>
    </>
  )
}

export default gift