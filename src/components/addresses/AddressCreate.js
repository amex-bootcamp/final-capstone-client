import React, { Component } from "react";

class AddressCreate extends Component {
  render() {
    return (
      <div>
        Create New Address
        <form>
          <label>
            <p>Address line 1</p>
            <input address="address1" />
          </label>
          <label>
            <p>Address line 2</p>
            <input address="address2" />
          </label>
          <label>
            <p>City</p>
            <input city="city" />
          </label>
          <label>
            <p>State</p>
            <input city="state" />
          </label>
          <label>
            <p>Zip</p>
            <input zip="zip" />
          </label>
        </form>
        <button>Submit</button>
      </div>
    );
  }
}

export default AddressCreate;
