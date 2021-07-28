import React, { Component } from "react";
import CustomerEditCSS from "../customers/CustomerEdit.module.css";
import {
  Card,
  Container,
  CardGroup,
  Button,
  Dropdown,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import { Redirect } from "react-router-dom";
// import OrderDataService from "../../services/order.data.service";

class OrderEdit extends Component {
  state = {
    count: 0,
    edited: false,
    id: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    phone: "",
    email: "",
    notes: "",
    order_status: "",
    total_order_price: "",
    order_notes: "",
  };

  // componentDidMount() {
  //   const {
  //     match: {
  //       params: { id },
  //     },
  //   } = this.props;

  //   OrderDataService.view(id)
  //     .then(({ data: customer }) => {
  //       this.setState({
  //         id: id,
  //         first_name: customer.data[0].first_name,
  //         middle_name: customer.data[0].middle_name,
  //         last_name: customer.data[0].last_name,
  //         phone: customer.data[0].phone,
  //         email: customer.data[0].email,
  //         notes: customer.data[0].notes,
  //       });
  //     })
  //     .catch(console.error);
  // }

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    if (this.state.edited) {
      return <Redirect to={{ pathname: `/customers/${this.state.id}` }} />;
    }
    return (
      <section>
        <div>
          <span className="button button-primary m-2">{this.formatCount()}</span>
          <Button onClick={this.handleIncrement}>Increment</Button>
          <Container className={CustomerEditCSS.container}>
            <CardGroup>
              <Card>
                <Card.Body>
                  <Card.Text>
                    {/* <h2 className={CustomerEditCSS.h2}>Edit Orders</h2> */}
                    <Form onSubmit={this.handleSubmit}>
                      <Row>
                        <Col>
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            value={this.state.first_name}
                            name="first_name"
                            id="first_name"
                            onChange={this.handleFirstNameChange}
                            placeholder="Name"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Label>Middle Name</Form.Label>
                          <Form.Control
                            type="text"
                            value={this.state.middle_name}
                            id="middle_name"
                            onChange={this.handleMiddleNameChange}
                            placeholder="Middle Name"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control
                            type="text"
                            value={this.handleLastNameChange}
                            id="last_name"
                            onChange={this.handleLastNameChange}
                            placeholder="Last Name"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Label>Phone</Form.Label>
                          <Form.Control
                            type="text"
                            value={this.state.phone}
                            id="phone"
                            onChange={this.handlePhoneChange}
                            placeholder="Phone"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="text"
                            value={this.state.email}
                            id="email"
                            onChange={this.handleEmailChange}
                            placeholder="Email"
                          />
                        </Col>
                      </Row>
                      <Form.Group as={Col} controlId="orderStatus">
                        <Form.Label>Order Status</Form.Label>
                        <Form.Select defaultValue="Choose...">
                          <option>Open</option>
                          <option>Finalized</option>
                          <option>Ready To Ship</option>
                          <option>Shipped</option>
                          <option>Complete</option>
                        </Form.Select>
                      </Form.Group>
                      <br></br>
                      <Button
                        // className={CustomerEditCSS.savebtn}
                        variant="primary"
                        type="submit"
                        value="submit"
                      >
                        Update Order
                      </Button>
                    </Form>
                    {/* <form
                      className={CustomerEditCSS.formcenter}
                      onSubmit={this.handleSubmit}
                    >
                      <p>
                        <label>First Name:</label>
                        <input
                          type="text"
                          value={this.state.first_name}
                          name="first_name"
                          id="first_name"
                          onChange={this.handleFirstNameChange}
                        ></input>
                      </p>
                      <p>
                        <label>Middle Name:</label>
                        <input
                          type="text"
                          value={this.state.middle_name}
                          onChange={this.handleMiddleNameChange}
                        ></input>
                      </p>
                      <p>
                        <label>Last Name:</label>
                        <input
                          type="text"
                          value={this.state.last_name}
                          onChange={this.handleLastNameChange}
                        ></input>
                      </p>
                      <p>
                        <label>Phone:</label>
                        <input
                          type="text"
                          value={this.state.phone}
                          onChange={this.handlePhoneChange}
                        ></input>
                      </p>
                      <p>
                        <label>Email:</label>
                        <input
                          type="text"
                          value={this.state.email}
                          onChange={this.handleEmailChange}
                        ></input>
                      </p>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          Order Status
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Open</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Finalized
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Ready to Ship
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-4">
                            Shipped
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-5">
                            Order Completed
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown> */}

                    {/* <label>Order Status:</label> <br></br>
                        <select
                          name="title"
                          
                        >
                          <option value=""></option>
                          <option value="Mr">Mr</option>
                          <option value="Mrs">Mrs</option>
                          <option value="Miss">Miss</option>
                          <option value="Ms">Ms</option>
                        </select> */}
                    {/* <p>
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic"
                          >
                            Products
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Product 1
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Product 2
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Product 3
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-4">
                              Product 4
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-5">
                              Product 5
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <label>Notes:</label>
                        <input
                          type="text"
                          value={this.state.notes}
                          onChange={this.handleNotesChange}
                        ></input>
                      </p>
                      <p className={CustomerEditCSS.savebtncenter}>
                        <Button
                          className={CustomerEditCSS.savebtn}
                          type="submit"
                          value="submit"
                        >
                          Update Order
                        </Button>
                      </p>
                    </form> */}
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className={CustomerEditCSS.card}>
                <Card.Text>
                  <h2 className={CustomerEditCSS.h2order}>Order History</h2>
                </Card.Text>
              </Card>
            </CardGroup>
          </Container>
        </div>
      </section>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default OrderEdit;
