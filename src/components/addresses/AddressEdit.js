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
                  <p>Address Line 1:</p>
                  <input
                    type="text"
                    value={this.state.address_line_1}
                    onChange={this.handleAddressLine1}
                  ></input>

                  <p>Address Line 2:</p>
                  <input
                    type="text"
                    value={this.state.address_line_2}
                    onChange={this.handleAddressLine2}
                  ></input>

                  <p>City:</p>
                  <input
                    type="text"
                    value={this.state.city}
                    onChange={this.handleCity}
                  ></input>

                  <p>State:</p>
                  <input
                    type="text"
                    value={this.state.state}
                    onChange={this.handleState}
                  ></input>

                  <p>Zip:</p>
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