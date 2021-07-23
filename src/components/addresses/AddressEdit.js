import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import AddressDataService from "../../services/address.data.service";

class AddressEdit extends Component {
  state = {
    address_line_1: "",
    address_line_2: "",
    city: "",
    state: "",
    zip: "",
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    AddressDataService.view(id)
      .then(({ data: address }) =>
        this.setState({
          address_line_1: address.address_line_1,
          address_line_2: address.address_line_2,
          city: address.city,
          state: address.state,
          zip: address.zip,
        })
      )
      .catch(console.error);
  }
  // to access different address IDs
  // view(id) {
  //   return http.get(`/addresses/${id}`);
  // }

  handleAddressLine1 = (event) => {
    this.setState({
      address_line_1: event.target.value,
    });
  };

  handleAddressLine2 = (event) => {
    this.setState({
      address_line_2: event.target.value,
    });
  };

  handleCity = (event) => {
    this.setState({
      city: event.target.value,
    });
  };
  handleState = (event) => {
    this.setState({
      state: event.target.value,
    });
  };
  handleZip = (event) => {
    this.setState({
      zip: event.target.value,
    });
  };

  render() {
    return (
      <section>
        <h2>Address Details</h2>
        <div>
          <form>
            <Card>
              <Card.Body>
                <Card.Text>
                  <p>Address Line 1: {this.state.address_line_1}</p>
                  <input
                    type="text"
                    value={this.state.address_line_1}
                    onChange={this.handleAddressLine1}
                  ></input>

                  <p>Address Line 2:{this.state.address_line_2}</p>
                  <input
                    type="text"
                    value={this.state.address_line_2}
                    onChange={this.handleAddressLine2}
                  ></input>

                  <p>City:{this.state.city}</p>
                  <input
                    type="text"
                    value={this.state.city}
                    onChange={this.handleCity}
                  ></input>

                  <p>State:{this.state.state}</p>
                  <input
                    type="text"
                    value={this.state.state}
                    onChange={this.handleState}
                  ></input>

                  <p>Zip:{this.state.zip}</p>
                  <input
                    type="text"
                    value={this.state.zip}
                    onChange={this.handleZip}
                  ></input>
                  {/* <p>City:{address.city}</p>
                  <p>State: {address.state}</p>
                  <p>Zip: {address.zip}</p> */}
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
          </form>
        </div>
      </section>
    );
  }
}

export default AddressEdit;

// to access this page
// http://localhost:3000/addresses/1/edit
