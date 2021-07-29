import React, { useState, useEffect } from "react";
import OrderDataService from "../../services/order.data.service";
import CustomerDataService from "../../services/customer.data.service";
import ProductDataService from "../../services/product.data.service";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import OrderCreateCSS from "../orders/OrderCreateCSS.module.css";

function OrderCreate() {
  const [orderStatus, setOrderStatus] = useState("");
  const [order, setOrder] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [customerId, setCustomerId] = useState(0);
  const [products, setProducts] = useState([]);
  const [productPrices, setProductPrices] = useState([0]);
  const [datetime] = useState(new Date());
  const [productId, setProductId] = useState([]);
  const [orderNotes, setOrderNotes] = useState("");
  const [sumbitted, setSubmitted] = useState(false);
  let orderId = Math.max(...order.map((order) => order.id)) + 1;

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

  const handleSubmit = (event) => {
    const params = {
      id: orderId,
      customer_id: customerId,
      order_status: orderStatus,
      datetime_order_placed: datetime,
      total_order_price: totalPrice,
      order_notes: orderNotes,
      ProductId: productId,
    };
    OrderDataService.post(params)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));

    setSubmitted(true);
  };

  if (sumbitted === true) {
    return <Redirect to="/orders" />;
  }

  const container = {
    maxWidth: "800px",
    border: "#457b9d solid 5px",
    margin: "50px auto 50px",
    height: "100%",
    padding: "25px",
    background: "#1d3557",
    fontSize: "1.2rem",
    borderRadius: "5%",
  };

  const groupHeaderStyle = {
    fontWeight: "bold",
    margin: "5px 0 10px 0",
    color: "#f1faee",
  };

  const groupTextStyle = {
    color: "#1d3557",
    border: "#1d3557 1px solid",
  };

  const submitButton = {
    background: "#457b9d",
    color: "#f1faee",
    border: "#457b9d 3px solid",
    fontWeight: "bold",
  };

  return (
    <section>
      <Form style={container} onSubmit={handleSubmit}>
        <h2>Create a New Order</h2>
        <Form.Group style={groupHeaderStyle} controlId="orderId">
          <Form.Label>Order ID:</Form.Label>
          <Form.Control
            id="orderId"
            name="orderId"
            type="text"
            value={orderId}
            readOnly
          />
        </Form.Group>
        <Form.Group style={groupHeaderStyle} controlId="customerId">
          <Form.Label>Customer ID:</Form.Label>
          <Form.Select
            style={groupTextStyle}
            type="text"
            name="customerId"
            value={customerId}
            onChange={(event) => setCustomerId(event.target.value)}
            required
          >
            <option value="">--- SELECT A CUSTOMER ---</option>
            {customerIdOption}
          </Form.Select>
        </Form.Group>
        <Form.Group style={groupHeaderStyle} controlId="orderStatus">
          <Form.Label>Order Status:</Form.Label>
          <Form.Select
            style={groupTextStyle}
            type="type"
            name="orderStatus"
            value={orderStatus}
            onChange={(event) => setOrderStatus(event.target.value)}
            required
          >
            <option value="">--- SELECT AN ORDER STATUS ---</option>
            <option value="0">Draft</option>
            <option value="1">Open</option>
            <option value="2">Finalized</option>
            <option value="3">Preparing to Ship</option>
            <option value="4">Ready for Shipping</option>
            <option value="5">Shipped</option>
            <option value="6">Delivered</option>
            <option value="7">Closed</option>
          </Form.Select>
        </Form.Group>
        <Form.Group style={groupHeaderStyle} controlId="datetime">
          <Form.Label>Date/Time:</Form.Label>
          <Form.Control
            style={groupTextStyle}
            id="date"
            name="date"
            type="text"
            value={datetime}
            readOnly
          ></Form.Control>
        </Form.Group>
        <Form.Group style={groupHeaderStyle} controlId="orderNotes">
          <Form.Label>Order Notes:</Form.Label>
          <Form.Control
            style={groupTextStyle}
            id="orderNotes"
            name="orderNotes"
            as="textarea"
            onChange={(event) => {
              setOrderNotes(event.target.value);
            }}
            placeholder="Leave a comment here"
          />
        </Form.Group>
        <Form.Group style={groupHeaderStyle} controlId="productList">
          <Form.Label>
            Products: (to select more options use ctrl + click)
          </Form.Label>
          <Form.Select
            style={groupTextStyle}
            as="select"
            multiple
            as="select"
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
        <Form.Group style={groupHeaderStyle} controlId="totalPrice">
          <Form.Label>Total Price: ${totalPrice}</Form.Label>
        </Form.Group>
        <div className={"text-center"}>
          <Button
            style={submitButton}
            className={OrderCreateCSS.submitButton}
            size="lg"
            type="submit"
          >
            Place Order
          </Button>
        </div>
      </Form>
    </section>
  );
}

export default OrderCreate;
