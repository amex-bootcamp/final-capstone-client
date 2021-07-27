import React, { useState, useEffect } from "react";
import OrderDataService from "../../services/order.data.service";
import CustomerDataService from "../../services/customer.data.service";
import { Form } from "react-bootstrap";

function OrderCreate() {
  const [orderStatus, setOrderStatus] = useState("");
  const [order, setOrder] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [customerId, setCustomerId] = useState(0);

  useEffect(() => {
    OrderDataService.list()
      .then((data) => {
        setOrder(data.data);
      })
      .catch(console.error);
  }, []);
  useEffect(() => {
    CustomerDataService.list()
      .then((data) => {
        setCustomer(data.data);
      })
      .catch(console.error);
  }, []);

  return (
    <section>
      <h2>Create a New Ordder</h2>
      <form>
        <label>
          Order ID:
          <input
            id="orderId"
            name="orderId"
            type="text"
            value={Math.max(...order.map((order) => order.id)) + 1}
            readOnly
          ></input>
        </label>
        <select
          type="text"
          name="customerId"
          value={customerId}
          onChange={(event) => setCustomerId(event.target.value)}
        >
          <option></option>
        </select>
        <select
          type="type"
          name="orderStatus"
          value={orderStatus}
          onChange={(event) => setOrderStatus(event.target.value)}
        >
          <option value="draft">Draft</option>
          <option value="open">Open</option>
          <option value="finalized">Finalized</option>
          <option value="prep">Preparing to Ship</option>
          <option value="ready">Ready for Shipping</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
          <option value="closed">Closed</option>
        </select>
      </form>
    </section>
  );
}

export default OrderCreate;
