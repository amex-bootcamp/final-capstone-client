import React, { Component } from "react";

import { Card, Button, Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import CustomerDataService from "../../services/customer.data.service";

class CustomerView extends Component {
  state = {
    customer: [{ deleted: false }],
  };
  componentDidMount() {
    // const id = this.props.value.match.params.id

    const {
      match: {
        params: { id },
      },
    } = this.props;

    CustomerDataService.view(id)
      .then(({ data: customer }) => this.setState({ customer }))
      .catch(console.error);
  }

  deleteCustomer(id) {
    CustomerDataService.delete(id).then((res) => {
      console.log(res);
      console.log(res.data);

      // const customers = this.state.customer.filter(
      //   (customer) => customer.id !== id
      // );
      this.setState({ deleted: true });
    });
  }
  render() {
    const { customer } = this.state;
    if (this.state.deleted) {
      return <Redirect to={{ pathname: "/customers" }} />;
    }
    return (
      <section>
        <h2>Customer Details</h2>
        <div>
          <Card>
            <Card.Body>
              <Card.Text>
                <p>Customer ID: {customer.id}</p>
                <p>First Name: {customer.first_name}</p>
                <p>Middle Name:{customer.middle_name}</p>
                <p>Last Name:{customer.last_name}</p>
                <p>Address: {customer.address_id}</p>
                <p>Phone: {customer.phone}</p>
                <p>Email: {customer.email}</p>
                <p>Notes: {customer.notes}</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Button>Edit Customer</Button>
          {/* <Redirect to=/> */}
          <Button onClick={() => this.deleteCustomer(customer.id)}>
            Delete
          </Button>
          <Card>
            <Card.Text>
              <h2>Order History</h2>
            </Card.Text>
          </Card>
        </div>
      </section>
    );
  }
}

export default CustomerView;
