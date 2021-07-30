import React, { Component } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import NavigationCSS from "./Navigation.module.css";

class Navigation extends Component {
  render() {
    const navStyle = {
      backgroundColor: "#a8dadc",
      fontWeight: "bolder",
      fontSize: 18,
    };
    return (
      <Navbar style={navStyle} expand="lg">
        <Container style={{ color: "#e63946" }}>
          <Container>
            <Navbar.Brand href="/">
              <img
                src={process.env.PUBLIC_URL + "/images/logo.png"}
                height="70"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end">
              <NavDropdown title="Addresses" id="basic-nav-dropdown">
                <NavDropdown.Item href="/addresses">
                  View All Addresses
                </NavDropdown.Item>
                <NavDropdown.Item href="/addresses/new">
                  Create New Address
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Customers" id="basic-nav-dropdown">
                <NavDropdown.Item href="/customers">
                  View All Customers
                </NavDropdown.Item>
                <NavDropdown.Item href="/customers/new">
                  Create New Customer
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Orders" id="basic-nav-dropdown">
                <NavDropdown.Item href="/orders">
                  View All Orders
                </NavDropdown.Item>
                <NavDropdown.Item href="/orders/new">
                  Create New Order
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item href="/products">
                  View All Products
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
