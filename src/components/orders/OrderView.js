import React, { useEffect, useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import OrderViewCSS from "../orders/OrderView.module.css";
import OrderDataService from "../../services/order.data.service";

function OrderView() {
  const [order, setOrder] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getOrderData();
  }, []);
  function getOrderData() {
    OrderDataService.view(id)
      .then(({ data: order }) => setOrder(order[0]))
      .catch(console.error);
  }

  // state = {
  //   firstName: "John",
  //   lastName: "Smith",
  //   email: "hellow@gmail.com",
  //   phone: "212-123-4567",
  //   orderStatus: "Pending",
  //   orderDateTime: "Thu May 07, 2021 01:25:14GMT",
  //   orderTotal: 45.27,
  //   products: "none",
  //   orderNotes: "needs overnight shipping",
  // };
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
          <p className={OrderViewCSS.para}>Customer ID: {order.id}</p>
          <p className={OrderViewCSS.para}>Customer ID: {order.customer_id}</p>
          <p className={OrderViewCSS.para}>
            Order Status: {order.order_status}
          </p>
          <p className={OrderViewCSS.para}>
            Order Date/Time: {order.datetime_order_placed}
          </p>
          <p className={OrderViewCSS.para}>
            Order Total: ${order.total_order_price}
          </p>
          <p className={OrderViewCSS.para}>Order Notes: {order.order_notes}</p>
          <p className={OrderViewCSS.para}>Order Created: {order.createdAt}</p>
          <p className={OrderViewCSS.para}>Order Updated: {order.updatedAt}</p>
          <p className={OrderViewCSS.para}>Email: {order.customer}</p>
          {/* <p className={OrderViewCSS.para}>Phone: {order.customer.phone}</p> */}
        </Card>
      </Container>
    </div>
  );
}

export default OrderView;
