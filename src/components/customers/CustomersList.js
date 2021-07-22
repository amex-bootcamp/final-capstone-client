import React, { Component } from "react";
import CustomerDataService from "../../services/customer.data.service";
class CustomersList extends Component {
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
    const customerListItems = customers.map((customer, index) => (
      <li key={`${customer.phone}-${index}`}>
        <p>First Name: {customer.first_name}</p>
        <p>Middle Name: {customer.middle_name}</p>
        <p>Last Name: {customer.last_name}</p>
        <p>Phone: {customer.phone}</p>
        <p>Email: {customer.email}</p>
        <p>Notes: {customer.notes}</p>
        <button>Delete</button>
      </li>
    ));
    return (
      <section>
        <h2>Customers</h2>
        <ol>{customerListItems}</ol>
      </section>
    );
  }
}
export default CustomersList;