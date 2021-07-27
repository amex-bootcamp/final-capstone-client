import React, { Component } from "react";
// import AddressCreateCSS from "./AddressCreate.module.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { withRouter } from "react-router";
// import { View } from "react-native";

class AddressCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
    };
  }

  handleAddressChange = (event) => {
    this.setState({
      address: event.target.value,
    });
  };

  handleAddress2Change = (event) => {
    this.setState({
      address2: event.target.value,
    });
  };

  handleCityChange = (event) => {
    this.setState({
      city: event.target.value,
    });
  };

  handleStateChange = (event) => {
    this.setState({
      state: event.target.value,
    });
  };

  handleZipChange = (event) => {
    this.setState({
      zip: event.target.value,
    });
  };

  createAddress = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/addresses", {
        address_line_1: this.state.address,
        address_line_2: this.state.address2,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
      })
      .then((data) => {
        console.log(data);
        this.setState({
          address: "",
          address2: "",
          city: "",
          state: "",
          zip: "",
        });

        //change to all address page
        this.props.history.push("/addresses");
      });
  };

  render() {
    const formStyle = {
      backgroundColor: "#1d3557",
      padding: "10px",
      fontFamily: "Lato, sans-serif",
      color: "#f1faee",
      marginTop: "150px",
      // filter: "drop-shadow(0 0 0.85rem #457b9d)",
      border: "4px solid #457b9d",
      borderRadius: "25px",
      fontWeight: "bold",
    };
    const button = {
      backgroundColor: "#a8dadc",
      borderColor: "#457b9d",
      color: "#457b9d",
      fontWeight: "bold",
    };
    // const backgroundImage = {
    //   backgroundPosition: "center",
    //   backgroundRepeat: "repeat",
    //   backgroundSize: "cover",
    //   backgroundImage: "url(/images/shallowFocusDrone.jpg)",
    //   width: "100vw",
    //   height: "100vh",
    // };
    return (
      <div>
        <Container className="d-flex justify-content-center">
          <Row>
            <Col style={formStyle}>
              <div className={"text-center"}>
                <h2>Create New Address</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-house-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                  />
                </svg>
              </div>
              <Form onSubmit={this.createAddress}>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    placeholder="1234 Main St"
                    type="text"
                    minLength="5"
                    maxLength="46"
                    onChange={this.handleAddressChange}
                    name={this.state.address}
                    value={this.state.address}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control
                    placeholder="Apartment, studio, or floor"
                    type="text"
                    maxLength="46"
                    onChange={this.handleAddress2Change}
                    name={this.state.address2}
                    value={this.state.address2}
                  />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      placeholder="New York City"
                      type="text"
                      minLength="2"
                      maxLength="50"
                      onChange={this.handleCityChange}
                      name={this.state.city}
                      value={this.state.city}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      placeholder="New York"
                      type="text"
                      minLength="2"
                      maxLength="50"
                      onChange={this.handleStateChange}
                      name={this.state.state}
                      value={this.state.state}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control
                      placeholder="12345"
                      type="text"
                      minLength="3"
                      maxLength="40"
                      onChange={this.handleZipChange}
                      name={this.state.zip}
                      value={this.state.zip}
                      required
                    />
                  </Form.Group>
                </Row>

                <div className={"text-center"}>
                  <Button size="lg" type="submit" value="submit" style={button}>
                    <strong>Submit</strong>
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default withRouter(AddressCreate);
