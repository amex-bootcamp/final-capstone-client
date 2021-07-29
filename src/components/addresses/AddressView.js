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
import AddressViewCSS from "./AddressView.module.css";
import AddressDataService from "../../services/address.data.service";
import { Redirect, Link } from "react-router-dom";

class AddressView extends Component {
  state = {
    selectedAddress: "",
    address: {
      id: "",
      address_line_1: "",
      address_line_2: "",
      city: "",
      state: "",
      zip: "",
      deleted: false,
      show: false,
    },
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
    AddressDataService.delete(this.state.selectedAddress)
      .then(() => {
        this.setState({ deleted: true });
      })
      .catch(console.error);
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    AddressDataService.view(id)
      .then(({ data: address }) => this.setState({ address: address[0] }))
      .catch(console.error);
  }

  render() {
    const { address } = this.state;
    if (this.state.deleted) {
      return <Redirect to={{ pathname: "/addresses" }} />;
    }
    const cardStyle = {
      fontFamily: "Lato, sans-serif",
      backgroundColor: "#1d3557",
      color: "#f1faee",
      width: "25rem",
      border: "5px solid #457b9d",
      margin: "25px",
      padding: "10px",
      borderRadius: "15px",
      transition: "box-shadow .3s",
    };
    const cardGroup = {
      justifyContent: "center",
    };
    const backBtn = {
      backgroundColor: "#1d3557",
      margin: "20px",
    };
    const deleteButton = {
      backgroundColor: "#e63946",
      color: "#f1faee",
      margin: "2px",
      padding: "10px 20px",
      border: "none",
    };
    const editButton = {
      backgroundColor: "#a8dadc",
      color: "#1d3557",
      margin: "2px",
      padding: "10px 20px",
      border: "none",
    };

    return (
      <>
        <Container>
          <Link to={`/addresses`}>
            <Button style={backBtn}>Back to Address List</Button>
          </Link>
        </Container>
        <Container>
          <CardGroup style={cardGroup}>
            <Row>
              <Col>
                <Card style={cardStyle}>
                  <Card.Text>
                    <h2>Address # {address.id}</h2>
                    <span>Address Line 1:</span>
                    {address.address_line_1} <br />
                    <span>Address Line 2:</span>
                    {address.address_line_2} <br />
                    <span>City:</span> {address.city}
                    <br />
                    <span>State:</span>
                    {address.state} <br />
                    <span>Zip: </span>
                    {address.zip} <br />
                  </Card.Text>
                  <div>
                    <Button style={editButton} variant={editButton}>
                      <Link to={`/addresses/${address.id}/edit`}>
                        Edit Address
                      </Link>
                    </Button>
                    <Button
                      style={deleteButton}
                      variant={deleteButton}
                      onClick={() => this.handleShow(address.id)}>
                      Delete Address
                    </Button>
                  </div>
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
            <Button type="radio" variant="danger" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button type="radio" variant="primary" onClick={this.handleConfirm}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default AddressView;
