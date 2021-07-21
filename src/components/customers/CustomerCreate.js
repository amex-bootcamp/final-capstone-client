import React, { Component } from "react";
import CustomerDataService from "../../services/customer.data.service";

class CustomerCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      first_name: "",
      middle_name: "",
      last_name: "",
      phone: "",
      email: "",
      notes: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      submitted: true,
      CustomerDataService.post()
    });
  };

  // For address data, load address data
  // componentDidMount() {
  //   CustomerDataService.post('/customers', {})
  //     .then(({ data: addresses }) => this.setState({ addresses }))
  //     .catch(console.error);
  // }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="first_name">First Name: </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={this.state.first_name}
            onChange={this.handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="middle_name">Middle Name: </label>
          <input
            type="text"
            id="middleName"
            name="middleName"
            value={this.state.middle_name}
            onChange={this.handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="last_name">Last Name: </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={this.state.last_name}
            onChange={this.handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="phone">Phone: </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="notes">Notes: </label>
          <input
            type="text"
            id="notes"
            name="notes"
            value={this.state.notes}
            onChange={this.handleChange}
          ></input>
        </div>
      </form>
    );
  }
}

export default CustomerCreate;
