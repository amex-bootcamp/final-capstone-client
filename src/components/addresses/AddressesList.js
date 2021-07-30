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
      fontFamily: "Lato, sans-serif",
      backgroundColor: "#1d3557",
      color: "#f1faee",
      minWidth: "100%",
      border: "5px solid #457b9d",
      margin: "25px",
      padding: "15px",
      borderRadius: "15px",
      transition: "box-shadow .3s",
    };

    const titleStyle = {
      textAlign: "center",
      fontSize: "20pt",
      fontWeight: "bold",
    };

    const btnStyle = {
      border: "#457b9d 2px solid",
      width: "10rem",
      padding: "5px",
      backgroundColor: "#a8dadc",
      color: "#1d3557",
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
        <Card className={AddressesListCSS.cardStyle} style={cardStyle}>
          <Card.Body>
            <Card.Title style={titleStyle}>Address ID: {address.id}</Card.Title>
            <Card.Text>
              <b>Address Line 1: </b>
              <br />
              {address.address_line_1}
            </Card.Text>
            <Card.Text>
              <b>Address Line 2: </b>
              <br />
              {address.address_line_2}
            </Card.Text>
            <Card.Text>
              <b>City: </b>
              <br />
              {address.city}
            </Card.Text>
            <Card.Text>
              <b>State:</b>
              <br />
              {address.state}
            </Card.Text>
            <Card.Text>
              <b>Zip:</b>
              <br />
              {address.zip}
            </Card.Text>
          </Card.Body>
          <Button href={`/addresses/${address.id}`} style={btnStyle}>
            View Details
          </Button>
        </Card>
      </ul>
    ));

    return (
      <section>
        <Container fluid>
          <h1 className={AddressesListCSS.header}>All Addresses</h1>
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
