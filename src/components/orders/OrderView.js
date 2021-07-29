import React, { useEffect, useState } from "react";
import { Card, Container, Button, Modal } from "react-bootstrap";
import { useParams, Redirect } from "react-router-dom";
import OrderViewCSS from "../orders/OrderView.module.css";
import OrderDataService from "../../services/order.data.service";
import Status from "../../utils/orderstatus";

function OrderView() {
  const [order, setOrder] = useState({ Customer: {} });
  const [deleted, setDeleted] = useState(false);
  const [show, setShow] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    getOrderData();
  }, [deleted]);
  function getOrderData() {
    OrderDataService.view(id)
      .then(({ data: order }) => setOrder(order))
      .catch(console.error);
  }
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(!show);
  };

  const handleConfirm = () => {
    if (order.order_status == 0) {
      OrderDataService.delete(id)
        .then((res) => {
          console.log("Complete");
          setDeleted(true);
        })
        .catch(console.error);
    }
    handleClose();
  };
  if (deleted) {
    return <Redirect to={{ pathname: "/orders" }} />;
  }

  return (
    <div>
      <Button href={`/orders`} className={OrderViewCSS.backbtn}>
        Back to Orders Page
      </Button>
      <Container className={OrderViewCSS.containerstyle}>
        <Card className={OrderViewCSS.cardstyle}>
          <h2 className={OrderViewCSS.heading}>Order Details Page</h2>
          <p className={OrderViewCSS.para}>Order ID: {order.id}</p>
          <p className={OrderViewCSS.para}>Customer ID: {order.customer_id}</p>
          <p className={OrderViewCSS.para}>
            Customer First Name: {order.Customer.first_name}
          </p>
          <p className={OrderViewCSS.para}>
            Customer Last Name: {order.Customer.last_name}
          </p>
          <p className={OrderViewCSS.para}>Email: {order.Customer.email}</p>
          <p className={OrderViewCSS.para}>Phone: {order.Customer.phone}</p>
          <p className={OrderViewCSS.para}>
            Order Status: {order.order_status}
          </p>
          <p className={OrderViewCSS.para}>
            Order Date/Time: {order.datetime_order_placed}
          </p>
          <p className={OrderViewCSS.para}>
            Order Total: ${order.total_order_price}
          </p>
          <p className={OrderViewCSS.para}>Order Created: {order.createdAt}</p>
          <p className={OrderViewCSS.para}>Order Updated: {order.updatedAt}</p>
          <p className={OrderViewCSS.para}>Order Notes: {order.order_notes}</p>
          <div flex className={OrderViewCSS.btndiv}>
            <Button className={OrderViewCSS.editbtn}>Edit</Button>
            {order.order_status == 0 && (
              <Button onClick={handleShow} className={OrderViewCSS.deletebtn}>
                Delete
              </Button>
            )}
          </div>
        </Card>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to delete this order?</Modal.Title>
        </Modal.Header>

        <Modal.Footer flex>
          <Button
            type="radio"
            variant="danger"
            onClick={handleClose}
            className={OrderViewCSS.cnclbtn}
          >
            Cancel
          </Button>
          <Button
            type="radio"
            variant="primary"
            onClick={() => handleConfirm(id)}
            className={OrderViewCSS.confdlbtn}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default OrderView;
