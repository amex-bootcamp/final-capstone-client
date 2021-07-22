import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import AddressDataService from "../../services/address.data.service";

class AddressEdit extends Component {
  state = {
    address: {},
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    AddressDataService.view(id)
      .then(({ data: address }) => this.setState({ address }))
      .catch(console.error);
  }
  // to access different address IDs
  // view(id) {
  //   return http.get(`/addresses/${id}`);
  // }

  render() {
    const { address } = this.state;

    return (
      <section>
        <h2>Address Details</h2>
        <div>
          <Card>
            <Card.Body>
              <Card.Text>
                <p>Address Line 1: {address.address_line_1}</p>
                <p>Address Line 2:{address.address_line_2}</p>
                <p>City:{address.city}</p>
                <p>State: {address.state}</p>
                <p>Zip: {address.zip}</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Button>Edit Address</Button>
          <Button>Delete Address</Button>
          <Card>
            <Card.Text>
              <h2>Order History</h2>
            </Card.Text>
          </Card>
        </div>
      </section>
    );
  }
}

export default AddressEdit;

// to access this page
// http://localhost:3000/addresses/1/edit
