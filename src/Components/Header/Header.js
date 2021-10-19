import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import image from "../../images/banner.webp";
const Header = () => {
  const navStyle = {
    color: "#4b83fc",
    font: "montserrat",
    fontSize: "17px",
    fontWeight: "bold",
  };
  const { user, logout } = useAuth();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="nav-bg"
      variant="dark"
      sticky="top"
    >
      <Container>
        <Navbar.Brand to="/home">
          <img src={image} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link style={navStyle} as={Link} to="/home">
            Home
          </Nav.Link>
          <Nav.Link style={navStyle} as={Link} to="/services">
            Services
          </Nav.Link>
          <Nav.Link style={navStyle} as={Link} to="/about">
            About Us
          </Nav.Link>
          <Nav.Link style={navStyle} as={Link} to="/contact">
            Contact Us
          </Nav.Link>
          {user.email ? (
            <Button className="fw-bolder" onClick={logout} variant="danger">
              LogOut
            </Button>
          ) : (
            <Nav.Link style={navStyle} as={Link} to="/login">
              Login/Registration
            </Nav.Link>
          )}
          <Navbar.Text className="text-muted ps-3">
            Signed in as: <strong>{user.displayName}</strong>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
