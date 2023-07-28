import React from "react";
import "./NavBar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NavBar(props) {
  const navigate = useNavigate();
  return (
    <Navbar
      className={`nav-container ${props.darkMode} musinsa-medium-font`}
      bg="ligth"
      data-bs-theme="ligth"
    >
      <div>
        <Navbar.Brand
          className={`nav-title ${props.darkMode}`}
          onClick={() => navigate("/")}
        >
          나 신발엔 관심 없지만..
        </Navbar.Brand>
      </div>
      <div>
        <Nav className={`musinsa-medium-font ${props.darkMode}`}>
          <Nav.Link
            className={`nav-item ${props.darkMode}`}
            onClick={() => navigate("/")}
          >
            Home
          </Nav.Link>
          <Nav.Link
            className={`nav-item ${props.darkMode}`}
            onClick={() => navigate("./cart")}
          >
            Cart
          </Nav.Link>
          <Nav.Link
            className={`nav-item ${props.darkMode}`}
            onClick={() => {
              navigate("/User");
            }}
          >
            User
          </Nav.Link>
          <Nav.Link className={`nav-item ${props.darkMode}`} href="/event">
            Event
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              props.darkModeBtn();
            }}
            className={`nav-item ${props.darkMode}`}
          >
            Dark
          </Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
}
