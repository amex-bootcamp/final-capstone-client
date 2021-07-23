import React, { Component } from "react";
import "./AddressCreate.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";

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
        address: this.state.address,
        address2: this.state.address2,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
      })
      .then((data) => {
        console.log(data);
        this.setState({
          address: this.state.address,
          address2: this.state.address2,
          city: this.state.city,
          state: this.state.state,
          zip: this.state.zip,
        });
      });
  };

  render() {
    const formFont = {
      fontFamily: "Lato, sans-serif",
    };

    return (
      <div style={formFont}>
        <Container>
          <Row>
            <Col className={"pl-5 pr-5 p"}>
              <div className={"text-center"}>
                <h2>Create New Address</h2>
              </div>
              <Form onSubmit={this.createAddress}>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    placeholder="1234 Main St"
                    type="text"
                    onChange={this.handleAddressChange}
                    name={this.state.address}
                    value={this.state.address}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control
                    placeholder="Apartment, studio, or floor"
                    type="text"
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
                      onChange={this.handleCityChange}
                      name={this.state.city}
                      value={this.state.city}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      placeholder="New York"
                      type="text"
                      onChange={this.handleStateChange}
                      name={this.state.state}
                      value={this.state.state}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control
                      placeholder="12345"
                      type="text"
                      onChange={this.handleZipChange}
                      name={this.state.zip}
                      value={this.state.zip}
                    />
                  </Form.Group>
                </Row>

                <div className={"text-center"}>
                  <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    value="submit"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
        {/*TATYANA FORM: USE FOR LATER*/}
        {/*Create New Address*/}
        {/*<form>*/}
        {/*  <p>*/}
        {/*    Address line 1:{" "}*/}
        {/*    <label>*/}
        {/*      <input type="address_line_1" />*/}
        {/*    </label>{" "}*/}
        {/*  </p>*/}
        {/*  <p>*/}
        {/*    Address line 2:*/}
        {/*    <label>*/}
        {/*      <input type="address_line_2" />*/}
        {/*    </label>*/}
        {/*  </p>*/}
        {/*  <p>*/}
        {/*    City:*/}
        {/*    <label>*/}
        {/*      <input type="city" />*/}
        {/*    </label>*/}
        {/*  </p>*/}
        {/*  <p>*/}
        {/*    State:*/}
        {/*    <label>*/}
        {/*      <input type="state" />*/}
        {/*    </label>*/}
        {/*  </p>*/}
        {/*  <p>*/}
        {/*    Zip:*/}
        {/*    <label>*/}
        {/*      <input type="zip" />*/}
        {/*    </label>*/}
        {/*  </p>*/}
        {/*</form>*/}
        {/*<button>Submit</button>*/}
        {/*TATYANA FORM: USE FOR LATER*/}
      </div>
    );
  }
}

export default AddressCreate;
