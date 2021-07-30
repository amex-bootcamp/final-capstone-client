import React, { Component } from "react";
import { Card, Button, Container, Row, Col, Form } from "react-bootstrap";
import AddressDataService from "../../services/address.data.service";
import { Redirect } from "react-router-dom";

class AddressEdit extends Component {
  state = {
    address_line_1: "",
    address_line_2: "",
    city: "",
    state: "",
    zip: "",
    edited: false,
    id: "",
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    AddressDataService.view(id)
      .then(({ data: address }) =>
        this.setState({
          address_line_1: address[0].address_line_1,
          address_line_2: address[0].address_line_2,
          city: address[0].city,
          state: address[0].state,
          zip: address[0].zip,
        })
      )
      .catch(console.error);
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      match: {
        params: { id },
      },
    } = this.props;

    const params = {
      id: id,
      address_line_1: this.state.address_line_1,
      address_line_2: this.state.address_line_2,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
    };
    AddressDataService.put(id, params)
      .then((res) => {
        this.setState({
          edited: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const formStyle = {
      backgroundColor: "#1d3557",
      padding: "10px",
      fontFamily: "Lato, sans-serif",
      color: "#f1faee",
      width: "20rem",
      marginTop: "50px",
      border: "4px solid #457b9d",
      borderRadius: "25px",
      fontWeight: "bold",
    };

    const titleStyle = {
      fontWeight: "bold",
      textAlign: "center",
    };
    const btnGroup = {
      margin: "auto",
    };
    const clearButton = {
      backgroundColor: "#457b9d",
      color: "#f1faee",
      margin: "5px",
      border: "none",
    };
    const submitButton = {
      backgroundColor: "#a8dadc",
      color: "#1d3557",
      margin: "5px",
      border: "none",
    };

    if (this.state.edited) {
      return <Redirect to={{ pathname: `/addresses/${this.state.id}` }} />;
    }
    return (
      <Container className="d-flex justify-content-center">
        <Row>
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <Card style={formStyle}>
                <Card.Body>
                  <Card.Title style={titleStyle}>Address Details</Card.Title>
                  <Card.Text>
                    <div>Address Line 1:</div>
                    <input
                      
                      type="text"
                      name="address_line_1"
                      value={this.state.address_line_1}
                      onChange={this.handleInputChange}
                    ></input>

                    <div>Address Line 2:</div>
                    <input
                      type="text"
                      name="address_line_2"
                      value={this.state.address_line_2}
                      onChange={this.handleInputChange}
                    ></input>

                    <div>City:</div>
                    <input
                      type="text"
                      name="city"
                      value={this.state.city}
                      onChange={this.handleInputChange}
                    ></input>

                    <div>State:</div>
                    <input
                      type="text"
                      name="state"
                      value={this.state.state}
                      onChange={this.handleInputChange}
                    ></input>

                    <div>Zip:</div>
                    <input
                      type="text"
                      name="zip"
                      value={this.state.zip}
                      onChange={this.handleInputChange}
                    ></input>
                  </Card.Text>
                </Card.Body>
                <div style={btnGroup}>
                  <Button style={submitButton} type="submit" value="submit">
                    Submit
                  </Button>
                  <Button style={clearButton}>Clear</Button>
                </div>
              </Card>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AddressEdit;
