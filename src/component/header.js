import React from "react";
import "../css/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../image/us.png";
import logo1 from "../image/logo1.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function header() {
  return (
    <>
      <div className="w-100 heading-one-main-1">
        <div className="container header-one-main">
          <div className="heading-first-desc">
            Afterpay, Laybuy & Genoapay | Free Delivery New Zealand + Australia*
          </div>
          <div className="d-flex ">
            <div className="heading-two-desc">Sign-in / Register</div>
            <div className="heading-country-logo">
              <img src={logo} />
            </div>
          </div>
        </div>
      </div>

      <Navbar variant="light">
        <Container>
          <div className="for-desktop">
            <div>
              <Navbar.Brand href="#home">
                <img src={logo1} height="60px"></img>
              </Navbar.Brand>
            </div>
            <div>
              <Nav className="me-auto">
                <Nav.Link href="#home">
                  <span className="active">Home</span>
                </Nav.Link>
                <Nav.Link href="#features">shop </Nav.Link>
                <Nav.Link href="#pricing">faq's</Nav.Link>
                <Nav.Link href="#home">stocks</Nav.Link>
                <Nav.Link href="#features">wholesale</Nav.Link>
                <Nav.Link href="#pricing">contact</Nav.Link>
              </Nav>
            </div>
            <div>
              Hi, <span className="user-name">Aman</span>
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default header;
