import React, { Component } from "react";
import "./AddressCreate.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

class AddressCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const formFont = {
      fontFamily: "Lato, sans-serif",
    };
    return (
      <div style={formFont}>
        <Container>
          <Row>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
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
