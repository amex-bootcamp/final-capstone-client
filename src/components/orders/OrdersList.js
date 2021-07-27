import React, { Component, useEffect, useState } from "react";
import OrderDataService from "../../services/order.data.service";
import { Redirect, Link } from "react-router-dom";

function OrdersList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    OrderDataService.list()
      .then(({ data: orders }) => setOrders(orders))
      .catch(console.error);
  }, []);

  const orderListItems = orders.map((order, index) => (
    <li key={`${order}-${index}`}>
      <p>ID: {order.id}</p>
      <p>Order Status: {order.order_status}</p>
      <p>Date Order Placed: {order.datetime_order_placed}</p>
      <p>First Name: {order.Customer.first_name}</p>
      <p>Last Name: {order.Customer.last_name}</p>
      <p>Email: {order.Customer.email}</p>
      <Link to={`orders/${order.id}`}>View Details</Link>
    </li>
  ));

  return (
    <div>
      <ol>{orderListItems}</ol>
    </div>
  );
}

export default OrdersList;
