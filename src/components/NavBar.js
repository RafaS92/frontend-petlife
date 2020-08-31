import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default class NavBar extends React.Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Navbar.Brand href="/home">Pet Life</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/booking">Booking</Nav.Link>
            <Nav.Link href="/comunity">Comunity</Nav.Link>
            <Nav.Link href="/locations">Location</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/" onClick={() => localStorage.clear()}>
              Log out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
