import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Image } from "react-bootstrap";

class Navigation extends Component {
  render() {
    const navStyle = {
      backgroundColor: "#a8dadc",
      fontWeight: "bolder",
      fontSize: 18    
  }
    return (
 
      <Navbar style = {navStyle}  expand="lg">
        <Container fluid style={{color: "#e63946"}} > 
          {/* <Navbar.Brand href="/">
            {" "}
            <Image
              src={process.env.PUBLIC_URL + "/images/logo.png"}
              alt="logo"
            />
          </Navbar.Brand> */}
          <Container fluid>
            <Navbar.Brand href="/">
              <img
                src={process.env.PUBLIC_URL + "/images/logo.png"}
                // width="400"
                height="80"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Container >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
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
                <NavDropdown.Item href="/products/new">
                  Create New Product
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
