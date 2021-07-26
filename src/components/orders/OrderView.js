import React, { Component } from "react";
import { Card, Container, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import OrderViewCSS from "../orders/OrderView.module.css";

class OrderView extends Component {
  state = {
    firstName: "John",
    lastName: "Smith",
    email: "hellow@gmail.com",
    phone: "212-123-4567",
    orderStatus: "Pending",
    orderDateTime: "Thu May 07, 2021 01:25:14GMT",
    orderTotal: 45.27,
    products: "none",
    orderNotes: "needs overnight shipping",
  };
  render() {
    return (
      <div>
          <Button className={OrderViewCSS.backbtn}>
            <Link className={OrderViewCSS.backbtnlink} to={`/`}>
              Back to Orders Page
            </Link>
          </Button>
        <Container>
          <Card>
            <h2 className={OrderViewCSS.heading}>Order Details Page</h2>
            <p className={OrderViewCSS.para}>Customer's First Name: {this.state.firstName}</p>
            <p className={OrderViewCSS.para}>Customer's Last Name: {this.state.lastName}</p>
            <p className={OrderViewCSS.para}>Email: {this.state.email}</p>
            <p className={OrderViewCSS.para}>Phone: {this.state.phone}</p>
            <p className={OrderViewCSS.para}>Order Status: {this.state.orderStatus}</p>
            <p className={OrderViewCSS.para}>Order Date/Time: {this.state.orderDateTime}</p>
            <p className={OrderViewCSS.para}>Order Total: ${this.state.orderTotal}</p>
            <p className={OrderViewCSS.para}>Products: {this.state.products}</p>
            <p className={OrderViewCSS.para}>Order Notes: {this.state.orderNotes}</p>
          </Card>
        </Container>
      </div>
    );
  }
}

export default OrderView;
