import React, { Component } from "react";
import { Card, Button, Container, Row, Col, CardGroup } from "react-bootstrap";
import CustomerDataService from "../../services/customer.data.service";
import CustomerViewCSS from "./CustomerView.Module.css";

class CustomerView extends Component {
  state = {
    customer: {},
  };
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    CustomerDataService.view(id)
      .then(({ data: customer }) => this.setState({ customer }))
      .catch(console.error);
  }
  render() {
    const { customer } = this.state;

    return (
      
        
        <div>
          <h2>Customer Details</h2>
          <Container>
            {/* <Row justify-content-center>
                <Col> */}
                <CardGroup>
                  <Card className="mb-3">
                    <Card.Text>
                      <p>First Name: {customer.first_name}</p>
                      <p>Middle Name:{customer.middle_name}</p>
                      <p>Last Name:{customer.last_name}</p>
                      <p>Address: {customer.address_id}</p>
                      <p>Phone: {customer.phone}</p>
                      <p>Email: {customer.email}</p>
                      <p>Notes: {customer.notes}</p>
                      <button className={CustomerViewCSS.btn}>
                        Edit Customer
                      </button>
                      <button className={CustomerViewCSS.deletebtn}>
                        Delete Customer
                      </button>
                    </Card.Text>
                  </Card>
                {/* </Col>
                <Col> */}
                  <Card>
                    <Card.Text>
                      <h2>Order History</h2>
                    </Card.Text>
                  </Card>
                {/* </Col>
            </Row> */}
            </CardGroup>
          </Container>
        </div>

    );
  }
}

export default CustomerView;
