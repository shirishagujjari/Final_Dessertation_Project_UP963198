import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import data from "../Data/data";

import { LinkContainer } from "react-router-bootstrap";
import { NavHashLink } from "react-router-hash-link";
import { LoginContext } from "../Context";
const handleLogout = () => {
  window.localStorage.clear();
  window.location.reload(true);
  window.location.replace('/');
};
const Header = () => {
  const { Auth } = useContext(LoginContext);
  const title = data.personalInfo.fullName;
  console.log("Auth", Auth);
  return (
    <Navbar
      className="navbar__"
      expand="lg"
      fixed="top"
      collapseOnSelect={true}
      variant="dark"
    >
      <Container>
        <LinkContainer to="/">        
          <Navbar.Brand className="navbar__brnad">{title}</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/projects">
              <Nav.Link className="mx-2">Projects</Nav.Link>
            </LinkContainer>
            <NavHashLink to="/#about">
              <a className="mx-2 nav-link">About</a>
            </NavHashLink>
            <NavHashLink to="/#skills">
              <a className="mx-2 nav-link">Skills</a>
            </NavHashLink>
            <NavHashLink to="/#contact">
              <a className="mx-2 nav-link">Contact</a>
            </NavHashLink>
            <NavHashLink to="/blog">
              <a className="mx-2 nav-link">Blogs</a>
            </NavHashLink>
            {!Auth ? (
              <NavHashLink to="/login">
                <a className="mx-2 nav-link">Login</a>
              </NavHashLink>
            ) : (
                <NavHashLink to="/" onClick={() => handleLogout()}>
                <a className="mx-2 nav-link">Logout</a>
              </NavHashLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
