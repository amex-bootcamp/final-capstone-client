import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

class Navigation extends Component {
  render() {
    return (
      // <nav>
      //   <ul>
      //     <li>
      //       <Link to="/">Dashboard</Link>
      //     </li>
      //     <li>
      //       <Link to="/addresses">Addresses</Link>
      //     </li>
      //     <li>
      //       <Link to="/customers">Customers</Link>
      //     </li>
      //     <li>
      //       <Link to="/orders">Orders</Link>
      //     </li>
      //     <li>
      //       <Link to="/products">Products</Link>
      //     </li>
      //   </ul>
      // </nav>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Dronology</Navbar.Brand>
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
