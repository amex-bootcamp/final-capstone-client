import React, { Component } from "react";
import CustomerEditCSS from "../customers/CustomerEdit.module.css";
import { Card, Container, CardGroup, Button, Dropdown } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import OrderDataService from "../../services/order.data.service";

class OrderEdit extends Component {
  state = {
    edited: false,
    id: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    phone: "",
    email: "",
    notes: "",
    order_status:"",
    total_order_price:"",
    order_notes:"",
  };

  render() {
    if (this.state.edited) {
      return <Redirect to={{ pathname: `/customers/${this.state.id}` }} />;
    }
    return (
      <section>
        <div>
          <Container className={CustomerEditCSS.container}>
            <CardGroup>
              <Card>
                <Card.Body>
                  <Card.Text>
                    <h2 className={CustomerEditCSS.h2}>Edit Orders</h2>
                    <form
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
                      </Dropdown>

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
                      <p>
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
                    </form>
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
}

export default OrderEdit;
