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

  const Status = {
    Draft: 0,
    Open: 1,
    Finalized: 2,
    Preparing_to_ship: 3,
    Ready_for_shipping: 4,
    Shipped: 5,
    Delivered: 6,
    Closed: 7,
  };

  Object.freeze(Status);

  const orderListItems = orders.map((order, index) => (
    <li key={`${order}-${index}`}>
      <p>ID: {order.id}</p>
      <p>Customer ID: {order.customer_id}</p>
      <p>Order Status: {order.order_status}</p>
      <p>Date Order Placed: {order.datetime_order_placed}</p>
      <p>Total Price: {order.total_order_price}</p>
      <p>Notes: {order.order_notes}</p>
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
