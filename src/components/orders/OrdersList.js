import React, { useEffect, useState } from "react";
import OrderDataService from "../../services/order.data.service";
import { Link } from "react-router-dom";
import OrdersListCSS from "./OrdersList.module.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

function OrdersList() {
  const [orders, setOrders] = useState([]);
  const [orderStatusFilter, setOrderStatusFilter] = useState("''");

  useEffect(() => {
    OrderDataService.list()
      .then(({ data: orders }) => setOrders(orders))
      .catch(console.error);
  }, []);

  useEffect(() => {
    OrderDataService.listByStatus(orderStatusFilter)
      .then(({ data: orders }) => {
        setOrders(orders);
      })
      .catch(console.error);
  }, [orderStatusFilter]);

  const cardStyle = {
    fontFamily: "Lato, sans-serif",
    backgroundColor: "#1d3557",
    color: "#f1faee",
    width: "25rem",
    border: "5px solid #457b9d",
    margin: "25px",
    padding: "10px",
    borderRadius: "15px",
    transition: "box-shadow .3s",
  };

  const cardTitle = {
    fontSize: "1.5em",
    fontWeight: "bold",
    textAlign: "center",
  };

  const linkStyle = {
    textDecoration: "none",
    border: "#457b9d 2px solid",
    width: "10rem",
    padding: "5px",
    backgroundColor: "#a8dadc",
    color: "#1d3557",
    textAlign: "center",
    margin: "auto",
    fontWeight: "bold",
    borderRadius: "5px",
  };

  const orderListItems = orders.map((order, index) => (
    <ul key={`${order}-${index}`}>
      <Card className={OrdersListCSS.cardStyle} style={cardStyle}>
        <Card.Body>
          <Card.Title style={cardTitle}>
            <p>ID: {order.id}</p>
          </Card.Title>
          <Card.Text>
            <p>Order Status: {order.status_text}</p>
          </Card.Text>
          <Card.Text>
            <p>Date Order Placed: {order.datetime_order_placed}</p>
          </Card.Text>
          <Card.Text>
            <p>First Name: {order.Customer.first_name}</p>
          </Card.Text>
          <Card.Text>
            <p>Last Name: {order.Customer.last_name}</p>
          </Card.Text>
          <Card.Text>
            <p>Email: {order.Customer.email}</p>
          </Card.Text>

          <Button href={`orders/${order.id}`} style={linkStyle}>
            View Details
          </Button>
        </Card.Body>
      </Card>
    </ul>
  ));

  return (
    <div>
      <form>
        <select
          type="text"
          name="orderStatusFilter"
          value={orderStatusFilter}
          onChange={(event) => setOrderStatusFilter(event.target.value)}
        >
          <option value="''">Filter by order status...</option>
          <option value="0">Drafted</option>
          <option value="1">Open</option>
          <option value="2">Finalized</option>
          <option value="3">Preparing to ship</option>
          <option value="4">Ready for shipping</option>
          <option value="5">Shipped</option>
          <option value="6">Delivered</option>
          <option value="7">Closed</option>
        </select>
      </form>
      <Container fluid="lg">
        <Row>
          <Col>
            <div className={OrdersListCSS.mainContainer}>{orderListItems}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OrdersList;
