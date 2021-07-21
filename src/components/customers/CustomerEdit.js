import React, { Component } from "react";
import CustomerDataService from "../../services/customer.data.service";

class CustomerEdit extends Component {
  state = {
    customers: [],
  };

  componentDidMount() {
    CustomerDataService.list()
      .then(({ data: customers }) => this.setState({ customers }))
      .catch(console.error);
  }

  render() {
    const { customers } = this.state;
    const CustomerListItems = customers.map((customers, index) => (
      <li key={`${customers.id}-${index}`}>
        <p>First Name: {customers.first_name}</p>
        <p>Middle Name: {customers.middle_name}</p>
        <p>Last Name: {customers.last_name}</p>
        <p>Phone: {customers.phone}</p>
        <p>Email: {customers.email}</p>
        <p>Notes: {customers.notes}</p>
      </li>
    ));
    return (
      <section>
        <h2>Edit Customer Page</h2>
        <ol>{customerListItems}</ol>
      </section>
    );
  }
}

export default CustomerEdit;
