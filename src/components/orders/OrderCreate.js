import React, { useState, useEffect } from "react";
import OrderDataService from "../../services/order.data.service";
import CustomerDataService from "../../services/customer.data.service";
import ProductDataService from "../../services/product.data.service";
import { Form } from "react-bootstrap";

function OrderCreate() {
  const [orderStatus, setOrderStatus] = useState("");
  const [order, setOrder] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [customerId, setCustomerId] = useState(0);
  const [products, setProducts] = useState([]);
  const [productPrices, setProductPrices] = useState([0]);
  const [datetime] = useState(new Date());
  const [productId, setProductId] = useState([]);

  useEffect(() => {
    OrderDataService.list()
      .then((data) => {
        setOrder(data.data);
      })
      .catch(console.error);
    CustomerDataService.list()
      .then((data) => {
        setCustomer(data.data);
      })
      .catch(console.error);
    ProductDataService.list()
      .then((data) => {
        setProducts(data.data);
      })
      .catch(console.error);
  }, []);

  const customerIdOption = customer.map((customer, id) => (
    <option value={customer.id} key={`${customer.id}-${id}`}>
      {"ID: " +
        customer.id +
        " " +
        customer.first_name +
        " " +
        customer.last_name}
    </option>
  ));

  const productOption = products.map((product, id) => (
    <option value={product.price} id={product.id} key={`${product.id}-${id}`}>
      {" " + product.name + " $" + product.price}
    </option>
  ));

  const totalPrice = productPrices.reduce((x, y) => Number(x) + Number(y));

  return (
    <section>
      <h2>Create a New Order</h2>
      <Form>
        <Form.Group controlId="orderId">
          <Form.Label>Order ID:</Form.Label>
          <Form.Control
            id="orderId"
            name="orderId"
            type="text"
            value={Math.max(...order.map((order) => order.id)) + 1}
            readOnly
          />
        </Form.Group>
        <Form.Group controlId="customerId">
          <Form.Label>Customer ID:</Form.Label>
          <Form.Select
            type="text"
            name="customerId"
            value={customerId}
            onChange={(event) => setCustomerId(event.target.value)}
          >
            {customerIdOption}
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="orderStatus">
          <Form.Label>Order Status:</Form.Label>
          <Form.Select
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
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="datetime">
          <Form.Label>Date/Time:</Form.Label>
          <Form.Control
            id="date"
            name="date"
            type="text"
            value={datetime}
            readOnly
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="orderNotes">
          <Form.Label>Order Notes:</Form.Label>
          <Form.Control
            id="orderNotes"
            name="orderNotes"
            as="textarea"
            placeholder="Leave a comment here"
          />
        </Form.Group>
        <Form.Group controlId="productList">
          <Form.Label>Products:</Form.Label>
          <Form.Select
            as="select"
            multiple
            id="productList"
            type="text"
            name="productList"
            onChange={(event) => {
              setProductPrices(
                Array.from(
                  event.target.selectedOptions,
                  (option) => option.value
                )
              );
              setProductId(
                Array.from(event.target.selectedOptions, (option) => option.id)
              );
            }}
          >
            {productOption}
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="totalPrice">
          <Form.Label>Total Price: {totalPrice}</Form.Label>
        </Form.Group>
        <button type="submit">Submit</button>
      </Form>
    </section>
  );
}

export default OrderCreate;
