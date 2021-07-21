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

  deleteCustomer(id, e) {
    CustomerDataService.delete(id).then((res) => {
      console.log(res);
      console.log(res.data);
      const customers = this.state.customers.filter(
        (customer) => customer.id !== id
      );
      this.setState({ customers });
    });
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
        <button onClick={(e) => this.deleteCustomer(customer.id, e)}>
          Delete
        </button>
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
