import React, { Component } from "react";
import CustomerEditCSS from "../customers/CustomerEdit.module.css";
import { Card, Container, CardGroup, Button, Dropdown,Form,Row,Col, } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import OrderDataService from "../../services/order.data.service";

class OrderEdit extends Component {
  state = {
    count: 0,
    order_status: "",
    total_order_price: 0,
    order_notes: "",
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    OrderDataService.view(id)
      .then(({ data: order }) =>
        this.setState({
          order_status: order.order_status,
          total_order_price: order.total_order_price,
          order_notes: order.order_notes
        })
      )
      .catch(console.error);
  }

  render() {
    if (this.state.edited) {
      return <Redirect to={{ pathname: `/orders/${this.state.id}` }} />;
    }
    return (
      <section>
        <div>
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
               
                      <p className={CustomerEditCSS.savebtncenter}>
                        <Button
                          className={CustomerEditCSS.savebtn}
                          type="submit"
                          value="submit"
                        >
                          Update Order
                        </Button>
                      </p>
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
