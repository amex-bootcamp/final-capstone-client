import React, { Component } from "react";
<<<<<<< HEAD
import customerDataService from "../../services/customer.data.service";
=======
import CustomerDataService from "../../services/customer.data.service";
>>>>>>> 0794894856ca2a6ba520d97ebcb0c351875ce248

class CustomersList extends Component {
  state = {
    customers: [],
  };

<<<<<<< HEAD
  render() {
    return <div></div>;
=======
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
>>>>>>> 0794894856ca2a6ba520d97ebcb0c351875ce248
  }
}

export default CustomersList;
