import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import "../css/common.css";
import Banner from "../image/bann-11.webp";
function gift() {
  return (
    <>
      <>
        <div className="banner-main">
          <img className="banner-img" src={Banner} alt="cards img"></img>
          <div className="banner-contant-box">
            <h3>Gift Cards</h3>
            <h1>
              Your own private cabin in the wilderness, less than 2 hours away.
            </h1>
            <Button className="warning" variant="warning">
              Book Now
            </Button>{" "}
          </div>
          <Container>
            <h1 className="gift-desc">
              Have a friend or loved one who always has “ I’m tired and too busy
              to hangout” excuse? Be a good friend and gift them a getaway in a
              tiny house and let them get back to basics.{" "}
            </h1>
          </Container>
          <div className="it-works">
            <Container>
              <div className="content">
                <h1 className="how-it-works-head">How it works</h1>
                <div className="d-flex py-5">
                  <div className="col-12 col-md-4 text-center px-3">
                    <h3>Choose.</h3>
                    <p className="p-gift-desc">
                      Choose the duration of the stay according to requirement.
                      Totally depends on how badly you want your friend or loved
                      one want to get out into nature.{" "}
                    </p>
                  </div>
                  <div className="col-12 col-md-4 text-center px-3">
                    <h3>Choose.</h3>
                    <p className="p-gift-desc">
                      Choose the duration of the stay according to requirement.
                      Totally depends on how badly you want your friend or loved
                      one want to get out into nature.{" "}
                    </p>
                  </div>
                  <div className="col-12 col-md-4 text-center px-3">
                    <h2>Choose.</h2>
                    <p className="p-gift-desc">
                      Choose the duration of the stay according to requirement.
                      Totally depends on how badly you want your friend or loved
                      one want to get out into nature.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </>
    </>
  );
}

export default gift;
