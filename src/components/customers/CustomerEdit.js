import React, { Component } from "react";
import CustomerDataService from "../../services/customer.data.service";

class CustomerEdit extends Component {
  state = {
    first_name: "",
    middle_name: "",
    last_name: "",
    phone: "",
    email: "",
    notes: "",
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    CustomerDataService.view(id)
      .then(({ data: customer }) =>
        this.setState({
          first_name: customer.first_name,
          middle_name: customer.middle_name,
          last_name: customer.last_name,
          phone: customer.phone,
          email: customer.email,
          notes: customer.notes,
        })
      )
      .catch(console.error);
  }

  handleFirstNameChange = (event) => {
    this.setState({
      first_name: event.target.value,
    });
  };

  handleMiddleNameChange = (event) => {
    this.setState({
      middle_name: event.target.value,
    });
  };

  handleLastNameChange = (event) => {
    this.setState({
      last_name: event.target.value,
    });
  };

  handlePhoneChange = (event) => {
    this.setState({
      phone: event.target.value,
    });
  };

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleNotesChange = (event) => {
    this.setState({
      notes: event.target.value,
    });
  };

  render() {
    return (
      <section>
        <h2>Edit Customer</h2>
        <div>
          <form>
            <label>First Name:</label>
            <input
              type="text"
              value={this.state.first_name}
              onChange={this.handleFirstNameChange}
            ></input>
            <br></br>
            <label>Middle Name:</label>
            <input
              type="text"
              value={this.state.middle_name}
              onChange={this.handleMiddleNameChange}
            ></input>
            <br></br>
            <label>Last Name:</label>
            <input
              type="text"
              value={this.state.last_name}
              onChange={this.handleLastNameChange}
            ></input>
            <br></br>
            <label>Address:</label>
            <input type="text"></input>
            <br></br>
            <label>Phone:</label>
            <input
              type="text"
              value={this.state.phone}
              onChange={this.handlePhoneChange}
            ></input>
            <br></br>
            <label>Email:</label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleEmailChange}
            ></input>
            <br></br>
            <label>Notes:</label>
            <input
              type="text"
              value={this.state.notes}
              onChange={this.handleNotesChange}
            ></input>
            <br></br>
          </form>
          <button type="submit">Save Changes</button>
        </div>
      </section>
    );
  }
}
export default CustomerEdit;
