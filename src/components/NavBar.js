import React from "react";
import "./NavBar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NavBar(props) {
  const navigate = useNavigate();
  return (
    <Navbar className="nav-container" bg="ligth" data-bs-theme="ligth">
      <div>
        <Navbar.Brand
          className={`btn ${props.darkMode}`}
          onClick={() => navigate("/")}
        >
          뚜룬뚠신발을팔꺼야
        </Navbar.Brand>
      </div>
      <div>
        <Nav>
          <Nav.Link className={`${props.darkMode}`} href="/">
            Home
          </Nav.Link>
          <Nav.Link
            className={`${props.darkMode}`}
            onClick={() => navigate("./cart")}
          >
            Cart
          </Nav.Link>
          <Nav.Link
            className={`${props.darkMode}`}
            onClick={() => {
              navigate("/User");
            }}
          >
            User
          </Nav.Link>
          <Nav.Link className={`${props.darkMode}`} href="/event">
            Event
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              props.darkModeBtn();
            }}
            className={`${props.darkMode}`}
          >
            Dark
          </Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
}
