import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Image } from "react-bootstrap";

class Navigation extends Component {
  render() {
    return (
<<<<<<< HEAD
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/addresses">Addresses</Link>
          </li>
          <li>
            <Link to="/customers">Customers</Link>
          </li>
          <li>
            <Link to="/customers/new">Create Customer</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
=======
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
          {/* <Navbar.Brand href="/">
            {" "}
            <Image
              src={process.env.PUBLIC_URL + "/images/logo.png"}
              alt="logo"
            />
          </Navbar.Brand> */}
          <Container>
            <Navbar.Brand href="/">
              <img
                src={process.env.PUBLIC_URL + "/images/logo.png"}
                width="500"
                height="100"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Container>
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
>>>>>>> 547fc2d1c7b2de41d65da5af607b139fe4a88f1e
    );
  }
}

export default Navigation;
