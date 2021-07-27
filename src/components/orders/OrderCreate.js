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
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [productPrice, setProductPrice] = useState(0);
  const [datetime] = useState(new Date());

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
    <option value={product.price} key={`${product.id}-${id}`}>
      {" " + product.name + " $" + product.price}
    </option>
  ));

  return (
    <section>
      <h2>Create a New Order</h2>
      <form>
        <label>Order ID:</label>
        <input
          id="orderId"
          name="orderId"
          type="text"
          value={Math.max(...order.map((order) => order.id)) + 1}
          readOnly
        ></input>
        <br />
        <label>Customer ID: </label>
        <select
          type="text"
          name="customerId"
          value={customerId}
          onChange={(event) => setCustomerId(event.target.value)}
        >
          {customerIdOption}
        </select>
        <br />
        <label>Order Status: </label>
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
        <br />
        <label>Date/Time: </label>
        <input
          id="date"
          name="date"
          type="text"
          value={datetime}
          readOnly
        ></input>
        <br />
        <label>Order Notes: </label>
        <textarea id="orderNotes" name="orderNotes" type="text"></textarea>
        <br />
        <label for="productList">Products: </label>
        <select
          multiple
          id="productList"
          type="text"
          name="productList"
          // value={productId}
          onChange={(event) => setProductPrice(event.target.value)}
        >
          {productOption}
        </select>
      </form>
      <p>{productPrice}</p>
    </section>
  );
}

export default OrderCreate;
