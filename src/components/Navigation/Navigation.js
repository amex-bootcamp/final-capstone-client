import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/addresses">Addresses</Link>
          </li>
          <li>
            <Link to="/addresses/new">Create Address</Link>
          </li>
          <li>
            <Link to="/customers">Customers</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
