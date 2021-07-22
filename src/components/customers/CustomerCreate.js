import React, { Component } from "react";
import CustomerDataService from "../../services/customer.data.service";
import AddressDataService from "../../services/address.data.service";

class CustomerCreate extends Component {
  state = {
    submitted: false,
    first_name: "",
    middle_name: "",
    last_name: "",
    phone: "",
    email: "",
    notes: "",
    address_id: null,
    addresses: [],
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const params = {
      first_name: this.state.first_name,
      middle_name: this.state.middle_name,
      last_name: this.state.last_name,
      phone: this.state.phone,
      email: this.state.email,
      notes: this.state.notes,
      address_id: this.state.address_id,
    };
    CustomerDataService.post(params)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({
      submitted: true,
    });
  };

  // For address data, load address data
  componentDidMount() {
    AddressDataService.list()
      .then(({ data: addresses }) => this.setState({ addresses }))
      .catch(console.error);
  }

  render() {
    let addressOptions = this.state.addresses.map((address, id) => (
      <option value={address.id}>{address.address_line_1}</option>
    ));

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <div>
              <label htmlFor="first_name">First Name: </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={this.state.first_name}
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <label htmlFor="middle_name">Middle Name: </label>
              <input
                type="text"
                id="middle_name"
                name="middle_name"
                value={this.state.middle_name}
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <label htmlFor="last_name">Last Name: </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
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
            <div>
              <label htmlFor="addresses">Addresses: </label>
              <select
                value={this.state.address_id}
                name="address_id"
                onChange={this.handleChange}
              >
                <option value="address_id">Select an address</option>
                {addressOptions}
              </select>
            </div>
            <button className="abutton">SUBMIT</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CustomerCreate;
