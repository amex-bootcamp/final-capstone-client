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
    OrderDataService.view(id)
      .then(({ data: order }) => setOrder(order))
      .catch(console.error);
  }, [order, id]);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(!show);
  };

  const handleConfirm = () => {
    if (order.order_status === 0) {
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
          <Card.Body>
            <h2 className={OrderViewCSS.heading}>Order Details Page</h2>
            <div className={OrderViewCSS.para}>
              <b> Order ID:</b> {order.id}
            </div>
            <div className={OrderViewCSS.para}>
              <b>Customer ID: </b>
              {order.customer_id}
            </div>
            <div className={OrderViewCSS.para}>
              <b>Customer First Name:</b> {order.Customer.first_name}
            </div>
            <div className={OrderViewCSS.para}>
              <b>Customer Last Name:</b> {order.Customer.last_name}
            </div>
            <div className={OrderViewCSS.para}>
              <b>Email: </b>
              {order.Customer.email}
            </div>
            <div className={OrderViewCSS.para}>
              <b>Phone: </b>
              {order.Customer.phone}
            </div>
            <div className={OrderViewCSS.para}>
              <b>Order Status: </b>
              {Status[order.order_status]}
            </div>
            <div className={OrderViewCSS.para}>
              <b>Order Date/Time: </b>
              {order.datetime_order_placed}
            </div>
            <div className={OrderViewCSS.para}>
              <b>Order Total: </b>${order.total_order_price}
            </div>
            <div className={OrderViewCSS.para}>
              <b>Order Created: </b>
              {order.createdAt}
            </div>
            <div className={OrderViewCSS.para}>
              <b>Order Updated: </b>
              {order.updatedAt}
            </div>
            <div className={OrderViewCSS.para}>
              <b>Order Notes: </b>
              {order.order_notes}
            </div>
          </Card.Body>
          <div flex className={OrderViewCSS.btndiv}>
            <Button className={OrderViewCSS.editbtn}>Edit</Button>
            {order.order_status === 0 && (
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
