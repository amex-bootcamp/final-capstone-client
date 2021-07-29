import React, { Component } from "react";
import AddressDataService from "../../services/address.data.service";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import AddressesListCSS from "./AddressesList.module.css";
import Modal from "react-bootstrap/Modal";

class AddressesList extends Component {
  state = {
    addresses: [],
    show: false,
    selectedAddress: "",
    deleted: false,
  };
  setShow = () => {
    this.setState((currentState) => {
      return {
        show: !currentState.show,
      };
    });
  };

  handleClose = () => this.setShow();
  handleShow = () => this.setShow();

  handleShow = (id) => {
    this.setShow();
    this.setState({ selectedAddress: id });
  };
  handleConfirm = () => {
    const { selectedAddress } = this.state;
    this.handleClose();
    AddressDataService.delete(selectedAddress)
      .then(() => {
        this.setState({ deleted: true });
      })
      .catch(console.error);
  };
  componentDidMount() {
    AddressDataService.list()
      .then(({ data: addresses }) => this.setState({ addresses }))
      .catch(console.error);
  }
  render() {
    const cardStyle = {
      color: "#f1faee",
      fontFamily: "Lato, sans-serif",
      border: "4px solid #457b9d",
      backgroundColor: "#1d3557",
      textAlign: "center",
      fontWeight: "bold",
      width: "20rem",
      height: "22rem",
    };

    const titleStyles = {
      fontSize: "20pt",
      fontWeight: "bold",
      paddingTop: "15px",
    };
    const linkStyle = {
      textDecoration: "none",
      border: "#457b9d 2px solid",
      width: "10rem",
      padding: "5px",
      backgroundColor: "#a8dadc",
      color: "#1d3557",
      textAlign: "center",
      margin: "auto",
      fontWeight: "bold",
      borderRadius: "5px",
    };

    const { addresses, deleted } = this.state;
    if (deleted) {
      window.location.reload();
    }
    const addressListItems = addresses.map((address, index) => (
      <ul key={`${address.zip}-${index}`}>
        <Card style={cardStyle}>
          <Card.Title style={titleStyles}>
            <div>Address ID: {address.id}</div>
          </Card.Title>
          <div>Address Line 1: {address.address_line_1}</div>
          <div>Address Line 2: {address.address_line_2}</div>
          <div>City: {address.city}</div>
          <div>State: {address.state}</div>
          <div>Zip: {address.zip}</div>
          <Button href={`/addresses/${address.id}`} style={linkStyle}>
            View Details
          </Button>
        </Card>
      </ul>
    ));

    return (
      <section>
        <h1 className={AddressesListCSS.header}>All Addresses</h1>
        <Container fluid>
          <Row>
            <Col>
              <div className={AddressesListCSS.mainContainer}>
                {addressListItems}
              </div>
            </Col>
          </Row>
        </Container>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              Are you sure you want to delete your address?
            </Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button type="radio" variant="danger" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button type="radio" variant="primary" onClick={this.handleConfirm}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    );
  }
}
export default AddressesList;
