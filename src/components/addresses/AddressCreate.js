import React, { Component } from "react";
import "./AddressCreate.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

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
              <Form>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control placeholder="New York City" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control placeholder="New York" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control placeholder="12345" />
                  </Form.Group>
                </Row>

                <div className={"text-center"}>
                  <Button variant="primary" size="lg" type="submit">
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
