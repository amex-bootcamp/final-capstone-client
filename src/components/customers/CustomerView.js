import React, { Component } from "react";

import { Card, Button, Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import CustomerDataService from "../../services/customer.data.service";

class CustomerView extends Component {
  state = {
    customer: { data: [{}], deleted: false },
  };
  componentDidMount() {
    // const id = this.props.value.match.params.id

    const {
      match: {
        params: { id },
      },
    } = this.props;

    console.log("id", id);
    CustomerDataService.view(id)
      .then(({ data: customer }) =>
        this.setState({ customer: { id, ...customer } })
      )
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
                <span>First Name:</span> {customer.data[0].first_name} <br />
                <span>Middle Name:</span> {customer.data[0].middle_name} <br />
                <span>Last Name:</span> {customer.data[0].last_name} <br />
                <span>Address:</span> {customer.data[0].address_id} <br />
                <span>Phone: </span>
                {customer.data[0].phone} <br />
                <span>Email: </span>
                {customer.data[0].email} <br />
                <span> Notes: </span> {customer.data[0].notes}
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
