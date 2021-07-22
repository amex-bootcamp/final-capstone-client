import React, { Component } from "react";
import CustomerDataService from "../../services/customer.data.service";

class CustomerEdit extends Component {
  state = {
    customers: [,
  }

  componentDidMount() {
    CustomerDataService.list ()
      .then(({data: customers}) => this.setState({customers}))
      .catch(console.error);
  }

  render() {
    return (
      const {customers} = this.state;
      const customerListItems = customers.map((customer, index) => (
        <li key={`${customer.id}-${index}`}>
          <p>First Name: {customers.first_name}</p>
          <p>Middle Name: {customers.middle_name}</p>
          <p>Last Name: {customers.last_name}</p>
          <p>Phone: {customers.phone}</p>
          <p>Email: {customers.email}</p>
          <p>Notes: {customers.notes}</p>
        </li>
      ))
    );
  }
}

export default CustomerEdit;
