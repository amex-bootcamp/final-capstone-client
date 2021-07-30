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
    AddressDataService.delete(selectedAddress)
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
      padding: "20px",
      borderRadius: "15px",
      transition: "box-shadow .3s",
    };
    const cardTitle = {
      textAlign: "center",
      fontWeight: "bold",
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
      fontWeight: "bold",
      margin: "2px",
      padding: "10px 20px",
      border: "none",
    };
    const editButton = {
      backgroundColor: "#a8dadc",
      color: "#1d3557",
      fontWeight: "bold",
      margin: "2px",
      padding: "10px 20px",
      border: "none",
    };
    const btnGroup = {
      margin: "auto",
    };

    return (
      <>
        <Container>
          <Button href={`/addresses`} style={backBtn}>
            Back to Address List
          </Button>
        </Container>
        <Container>
          <CardGroup style={cardGroup}>
            <Row>
              <Col>
                <Card style={cardStyle}>
                  <Card.Title style={cardTitle}>
                    Address # {address.id}
                  </Card.Title>
                  <Card.Text>
                    <b>Address Line 1: </b>
                    <br />
                    {address.address_line_1}
                    <br />
                  </Card.Text>
                  <Card.Text>
                    <b>Address Line 2: </b>
                    <br />
                    {address.address_line_2}
                    <br />
                  </Card.Text>
                  <Card.Text>
                    <b>City:</b>
                    <br />
                    {address.city}
                  </Card.Text>
                  <Card.Text>
                    <b>State: </b>
                    <br />
                    {address.state}
                  </Card.Text>
                  <Card.Text>
                    <b>Zip: </b>
                    <br />
                    {address.zip}
                  </Card.Text>
                  <div style={btnGroup}>
                    <Button
                      href={`/addresses/${address.id}/edit`}
                      style={editButton} 
                      >
                      Edit Address
                    </Button>
                    <Button
                      style={deleteButton}
                      onClick={() => this.handleShow(address.id)}
                    >
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
