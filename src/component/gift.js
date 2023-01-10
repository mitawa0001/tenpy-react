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
            <div
        className="ultimate"
        style={{ textAlign: "center", margin: "20px 350px" }}
      >
        <h3>Unlimited chill space</h3>
        <h4>
          Move past the ordinary hotel with thousands of rooms and choose
          uniquely crafted tiny living spaces that help you focus on yourself.
          Get away from the concrete jungle to find yourself in the wild.{" "}
        </h4>
      </div>
      <div
        className="ultimate"
        style={{ textAlign: "center", margin: "20px 350px" }}
      >
        <h3>Dine with us</h3>
        <h4>
          All your meals are covered by us so all you have to do is relax and
          enjoy. Locally prepared food, a barbecue around a campfire sounds
          perfect doesn’t it? In case you want something “extra”, you can also
          put your masterchef skills to the test by doing your own barbeque!
        </h4>
      </div>
      <div
        className="ultimate"
        style={{ textAlign: "center", margin: "20px 350px" }}
      >
        <h3>Hike with us</h3>
        <h4>
          Let nature cast its magic as you walk around beautiful trees and
          birds! They say that even the rustling of leaves have a healing effect
          on our bodies. Why not give it a try?{" "}
        </h4>
      </div>
      <div
        className="ultimate"
        style={{ textAlign: "center", margin: "20px 350px" }}
      >
        <h3>Focus on Yourself</h3>
        <h4>
          Leave that phone behind, forget your work emails and focus on doing
          nothing. This trip is for you to take a step back, detox and relax.{" "}
        </h4>
      </div>
      <div
        className="ultimate"
        style={{ textAlign: "center", margin: "20px 350px" }}
      >
        <h3>Read your heart out</h3>
        <h4>
          We know that sometimes it can be hard to find the time to get your
          reading on because of how busy our lives get. Bring a book to indulge
          in for a couple of days or find some on our shelves. We’re sure you’ll
          appreciate them!
        </h4>
      </div>
      <div
        className="ultimate"
        style={{ textAlign: "center", margin: "20px 350px" }}
      >
        <h3>Bring a (Best)Friend</h3>
        <h4>
          We are proud to be a dog-friendly property and would be happy to
          accommodate your pet for a small additional fee. Please inquire when
          you book your stay for more information.
        </h4>
      </div>
          </div>
        </div>
      </>
    </>
  );
}

export default gift;
