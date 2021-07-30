import React, { Component } from "react";
import {
  Card,
  Container,
  CardGroup,
  Button,
  Row,
  Col,
  Modal,
} from "react-bootstrap";
import CustomerDataService from "../../services/customer.data.service";
import AddressDataService from "../../services/address.data.service";
import CustomerViewCSS from "./CustomerView.module.css";
import { Redirect, Link } from "react-router-dom";
import Status from "../../utils/orderstatus";

class CustomerView extends Component {
  state = {
    customer: { data: [{}], deleted: false, Orders: [] },
    show: false,
    address: {},
  };

  setShow = () => {
    this.setState((currentState) => {
      return {
        show: !currentState.show,
      };
    });
  };

  handleClose = () => this.setShow();

  handleShow = (id) => {
    this.setShow();
  };

  handleConfirm = (id) => {
    this.deleteCustomer(id);
    this.handleClose();
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    CustomerDataService.view(id)
      .then(({ data: customer }) => {
        this.setState({ customer: { id, ...customer[0] } });
      })
      .then(() => {
        this.getAddressInfo(this.state.customer.address_id);
      })
      .catch(console.error);
  }

  deleteCustomer(id) {
    CustomerDataService.delete(id).then((res) => {
      this.setState({ deleted: true });
    });
  }

  getAddressInfo = (id) => {
    AddressDataService.view(id).then(({ data }) => {
      this.setState({ address: data[0] });
    });
  };

  render() {
    const editButton = {
      backgroundColor: "#a8dadc",
      color: "#1d3557",
      fontWeight: "bold",
      margin: "5px",
      padding: "10px 20px",
      border: "none",
    };

    const deleteButton = {
      backgroundColor: "#e63946",
      color: "#f1faee",
      fontWeight: "bold",
      margin: "5px",
      padding: "10px 20px",
      border: "none",
    };

    const backBtn = {
      backgroundColor: "#1d3557",
      margin: "20px",
    };

    const custCard = {
      backgroundColor: "#1d3557",
      color: "#f1faee",
      margin: "50px",
      borderRadius: "15px",
      padding: "40px",
      alignItems: "center",
      width: "95%",
      height: "85%",
      "@media (max-width:991px)": {
        textAlign: "center",
      },
    };

    const text = {
      fontWeight: "bold",
      color: "#f1faee",
      fontSize: "2em",
    };

    const cardGroup = {
      justifyContent: "center",
    };

    const { customer, address } = this.state;
    if (this.state.deleted) {
      return <Redirect to={{ pathname: "/customers" }} />;
    }

    let orderHistory = customer.Orders.map((orders, index) => (
      <li key={`${orders.index}-${index}`}>
        <hr />
        <div><b>ID: {orders.id}</b></div>
        <div>Date Order Placed: {orders.datetime_order_placed}</div>
        <div>Order Status: {Status[orders.order_status]}</div>
      </li>
    ));

    return (
      <>
        <Container>
          <Link to={`/customers`}>
            <Button style={backBtn}>Back to Customer List</Button>
          </Link>
        </Container>
        <Container className={CustomerViewCSS.container}>
          <CardGroup style={cardGroup}>
            <Row>
              <Col>
                <Card style={custCard} variant={custCard}>
                    <Card.Title style={text} className={CustomerViewCSS.h2}>
                      Customer Details
                    </Card.Title>
                  <Card.Text>
                    <div><b>First Name: </b>{customer.first_name}</div>
                    <div><b>Middle Name: </b>{customer.middle_name}.</div>
                    <div><b>Last Name:</b> {customer.last_name}</div>
                    <div><b>Phone: </b>{customer.phone}</div>
                    <div><b>Email:</b> {customer.email}</div>
                    <div><b>Notes: </b>{customer.notes}</div>
                    <hr></hr>
                    <div><b>Address: </b>{customer.address_id}</div>
                    <div><b>Address Line 1: </b>{address.address_line_1}</div>
                    <div><b>Address Line 2: </b>{address.address_line_2}</div>
                    <div><b>City: </b>{address.city}</div>
                    <div><b>State: </b>{address.state}</div>
                    <div><b>Zip: </b>{address.zip}</div>
                  </Card.Text>
                  <br />
                  <div flex className={CustomerViewCSS.btndiv}>
                    <Link to={`/customers/${customer.id}/edit`}>
                      <Button
                        style={editButton}
                        variant={editButton}
                        className={CustomerViewCSS.btn}
                      >
                        Edit Customer
                      </Button>
                    </Link>
                    <Button
                      style={deleteButton}
                      variant={deleteButton}
                      onClick={() => this.handleShow(customer.id)}
                    >
                      Delete Customer
                    </Button>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card style={custCard} variant={custCard}>
                  <Card.Text>
                    <Card.Title style={text} className={CustomerViewCSS.h2}>
                      Order History
                    </Card.Title>
                    <ul>{orderHistory}</ul>
                  </Card.Text>
                </Card>
              </Col>
            </Row>
          </CardGroup>
        </Container>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              Are you sure you want to delete your customer?
            </Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button className={CustomerViewCSS.cnclbtn} type="radio" variant="danger" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button className={CustomerViewCSS.confdlbtn}
              type="radio"
              variant="primary"
              onClick={() => this.handleConfirm(customer.id)}
            >
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default CustomerView;