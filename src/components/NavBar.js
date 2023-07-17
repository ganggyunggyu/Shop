import React from "react";
import "./NavBar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="">
      <Navbar className="nav-container" bg="ligth" data-bs-theme="ligth">
        <Container>
          <Navbar.Brand className="btn" onClick={() => navigate("/")}>
            뚜룬뚠신발을팔꺼야
          </Navbar.Brand>
          <Nav className="">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Cart">Cart</Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/User");
              }}
            >
              User
            </Nav.Link>
            <Nav.Link href="/event">Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
