import React, { Component } from "react";
import AddressDataService from "../../services/address.data.service";

class AddressesList extends Component {
  state = {
    addresses: [],
  };

  componentDidMount() {
    AddressDataService.list()
      .then(({ data: addresses }) => this.setState({ addresses }))
      .catch(console.error);
  }
  render() {
    const { addresses } = this.state;
    const addressListItems = addresses.map((address, index) => (
      <li key={`${address.zip}-${index}`}>
        <p>Address ID: {address.id}</p>
        <p>Address Line 1: {address.address_line_1}</p>
        <p>Address Line 2: {address.address_line_2}</p>
        <p>City: {address.city}</p>
        <p>State {address.state}</p>
        <p>Zip: {address.zip}</p>
      </li>
    ));
    return (
      <section>
        <h2>Addresses</h2>
        <ol>{addressListItems}</ol>
      </section>
    );
  }
}

export default AddressesList;
