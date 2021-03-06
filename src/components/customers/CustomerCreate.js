import React, { Component } from "react";
import CustomerDataService from "../../services/customer.data.service";
import AddressDataService from "../../services/address.data.service";
import { Redirect } from "react-router-dom";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import CustomerCreateCSS from "../customers/CustomerCreate.module.css";

class CustomerCreate extends Component {
  state = {
    submitted: false,
    first_name: "",
    middle_name: "",
    last_name: "",
    phone: "",
    email: "",
    notes: "",
    address_id: null,
    addresses: [],
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const params = {
      first_name: this.state.first_name,
      middle_name: this.state.middle_name,
      last_name: this.state.last_name,
      phone: this.state.phone,
      email: this.state.email,
      notes: this.state.notes,
      address_id: this.state.address_id,
    };
    CustomerDataService.post(params)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({
      submitted: true,
    });
  };

  // For address data, load address data
  componentDidMount() {
    AddressDataService.list()
      .then(({ data: addresses }) => this.setState({ addresses }))
      .catch(console.error);
  }

  render() {
    const formFont = {
      fontFamily: "Lato, sans-serif",
    };

    const container = {
      maxWidth: "800px",
      border: "#457b9d solid 5px",
      margin: "50px auto 50px",
      height: "90%",
      padding: "25px",
      background: "#1d3557",
      fontSize: "1.2rem",
      borderRadius: "5%",
    };

    const groupHeaderStyle = {
      fontWeight: "bold",
      margin: "5px 0 10px 0",
      color: "#f1faee",
    };

    const groupTextStyle = {
      color: "#1d3557",
      border: "#1d3557 1px solid",
    };

    const submitButton = {
      background: "#457b9d",
      color: "#f1faee",
      border: "#457b9d 3px solid",
      fontWeight: "bold",
      marginTop: "50px",
    };

    let addressOptions = this.state.addresses.map((address, id) => (
      <option value={address.id}>{address.address_line_1}</option>
    ));

    let submitNew = this.state.submitted;
    if (submitNew) {
      return <Redirect to="/customers" />;
    }
    return (
      <section style={formFont}>
        <Container>
          <Row>
            <Col className={"pl-5 pr-5 p"}>
              <Form style={container} onSubmit={this.handleSubmit}>
                <h2>Create New Customer</h2>
                <Form.Group
                  style={groupHeaderStyle}
                  className="mb-3"
                  controlId="formFirstName"
                >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    style={groupTextStyle}
                    placeholder="Enter first name"
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={this.state.first_name}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group
                  style={groupHeaderStyle}
                  className="mb-3"
                  controlId="formMiddleName"
                >
                  <Form.Label>Middle Name</Form.Label>
                  <Form.Control
                    style={groupTextStyle}
                    placeholder="Enter middle name"
                    type="text"
                    id="middle_name"
                    name="middle_name"
                    value={this.state.middle_name}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group
                  style={groupHeaderStyle}
                  className="mb-3"
                  controlId="formlastName"
                >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    style={groupTextStyle}
                    placeholder="Enter last name"
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={this.state.last_name}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group
                  style={groupHeaderStyle}
                  className="mb-3"
                  controlId="formPhone"
                >
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    style={groupTextStyle}
                    placeholder="Please provide a phone number"
                    type="text"
                    id="phone"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group
                  style={groupHeaderStyle}
                  className="mb-3"
                  controlId="formEmail"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    style={groupTextStyle}
                    placeholder="Please enter email"
                    type="text"
                    id="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group
                  style={groupHeaderStyle}
                  className="mb-3"
                  controlId="formNotes"
                >
                  <Form.Label>Notes</Form.Label>
                  <Form.Control
                    style={groupTextStyle}
                    placeholder="Type in a note"
                    type="text"
                    id="notes"
                    name="notes"
                    value={this.state.notes}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group
                  style={groupHeaderStyle}
                  className="mb-3"
                  controlId="formAddress"
                >
                  <Form.Label>Address</Form.Label>
                  <InputGroup className="mb-2">
                    <select
                      className="form-control"
                      value={this.state.address_id}
                      name="address_id"
                      onChange={this.handleChange}
                      options={addressOptions}
                    >
                      <option value="address_id">Select an address</option>
                      {addressOptions}
                    </select>
                    <span className="input-group-text" id="basic-addon2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                        />
                      </svg>
                    </span>
                  </InputGroup>
                </Form.Group>

                <div className={"text-center"}>
                  <Button
                    style={submitButton}
                    className={CustomerCreateCSS.submitButton}
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
      </section>
    );
  }
}

export default CustomerCreate;
