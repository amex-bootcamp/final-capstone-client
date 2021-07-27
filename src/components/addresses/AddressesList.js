import React, { Component } from "react";
import AddressDataService from "../../services/address.data.service";
import { Card, Button, Container, Row, Col, CardGroup } from "react-bootstrap";
import AddressesListCSS from "./AddressesList.module.css";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

export default class AddressesList extends Component {
  state = {
    addresses: [],
    show: false,
    selectedAddress: "",
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
    this.handleClose();
    AddressDataService.delete(this.state.selectedAddress)
      .then(() =>
        console.log(
          `You have deleted address ID: ${this.state.selectedAddress}`
        )
      )
      .catch(console.error);
  };
  componentDidMount() {
    AddressDataService.list()
      .then(({ data: addresses }) => this.setState({ addresses }))
      .catch(console.error);
  }

  // //C&P
  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   const {
  //     match: {
  //       params: { id },
  //     },
  //   } = this.props;

  //   //C&P
  //   AddressDataService.view(id)
  //     .then(({ data: address }) =>
  //       this.setState({
  //         id: id,
  //         address_line_1: address.data[0].address_line_1,
  //         address_line_2: address.data[0].address_line_2,
  //         city: address.data[0].city,
  //         state: address.data[0].state,
  //         zip: address.data[0].zip,
  //       })
  //     )
  //     .catch(console.error);
  //   //C&P

  //   const params = {
  //     address_line_1: this.state.address_line_1,
  //     address_line_2: this.state.address_line_2,
  //     city: this.state.city,
  //     state: this.state.state,
  //     zip: this.state.zip,
  //   };
  //   AddressDataService.put(id, params)
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  //

  render() {
    const cardStyles = {
      color: "#f1faee",
      fontFamily: "Lato, sans-serif",
      border: "4px solid #457b9d",
      backgroundColor: "#1d3557",
      textAlign: "center",
      fontWeight: "bold",
      width: "20rem",
    };
    const editBtn = {
      marginBottom: "auto",
      color: "#1d3557",
      backgroundColor: "#a8dadc",
      width: "120px",
      position: "relative",
      right: "10px",
    };
    const deleteBtn = {
      marginBottom: "auto",
      backgroundColor: "#e63946",
      width: "120px",
      position: "relative",
      left: "10px",
    };
    const divBtn = {
      paddingBottom: "20px",
    };
    const titleStyles = {
      fontSize: "20pt",
      fontWeight: "bold",
      paddingTop: "15px",
    };

    const { addresses } = this.state;
    const addressListItems = addresses.map((address, index) => (
      <ul key={`${address.zip}-${index}`}>
        <Card style={cardStyles}>
          <Card.Title style={titleStyles}>
            <p>Address ID: {address.id}</p>
          </Card.Title>
          <p>Address Line 1: {address.address_line_1}</p>
          <p>Address Line 2: {address.address_line_2}</p>
          <p>City: {address.city}</p>
          <p>State: {address.state}</p>
          <p>Zip: {address.zip}</p>
          <>
            <div style={divBtn}>
              <Button style={editBtn}>
                <Link to={`/addresses/${address.id}/edit`}>Edit Address</Link>
              </Button>{" "}
              <Button
                style={deleteBtn}
                onClick={() => this.handleShow(address.id)}
              >
                Delete
              </Button>{" "}
            </div>
          </>
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
          <Modal.Body>Your address has been deleted</Modal.Body>
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
