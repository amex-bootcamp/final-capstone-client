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
                  <div>Address Line 1:</div>
                  <input
                    type="text"
                    value={this.state.address_line_1}
                    onChange={this.handleAddressLine1}
                  ></input>

                  <div>Address Line 2:</div>
                  <input
                    type="text"
                    value={this.state.address_line_2}
                    onChange={this.handleAddressLine2}
                  ></input>

                  <div>City:</div>
                  <input
                    type="text"
                    value={this.state.city}
                    onChange={this.handleCity}
                  ></input>

                  <div>State:</div>
                  <input
                    type="text"
                    value={this.state.state}
                    onChange={this.handleState}
                  ></input>

                  <div>Zip:</div>
                  <input
                    type="text"
                    value={this.state.zip}
                    onChange={this.handleZip}
                  ></input>
                </Card.Text>
              </Card.Body>
            </Card>
            <Button>Submit</Button>
            <Button>Clear</Button>
          </form>
        </div>
      </section>
    );
  }
}

export default AddressEdit;
