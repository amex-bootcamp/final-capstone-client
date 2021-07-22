import React, { Component } from "react";
import CustomerDataService from "../../services/customer.data.service";
import { Link } from "react-router-dom";

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
        <p>Customer ID: {customer.id}</p>
        <p>First Name: {customer.first_name}</p>
        <p>Middle Name: {customer.middle_name}</p>
        <p>Last Name: {customer.last_name}</p>
        <p>Phone: {customer.phone}</p>
        <p>Email: {customer.email}</p>
        <p>Notes: {customer.notes}</p>
        <Link to={`customers/${customer.id}`}>View Details</Link>
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
