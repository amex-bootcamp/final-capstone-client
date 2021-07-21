import React, { Component } from "react";
import "./AddressCreate.css";

class AddressCreate extends Component {
  render() {
    return (
      <div>
        Create New Address
        <form>
          <p>
            Address line 1:{" "}
            <label>
              <input type="address_line_1" />
            </label>{" "}
          </p>
          <p>
            Address line 2:
            <label>
              <input type="address_line_2" />
            </label>
          </p>
          <p>
            City:
            <label>
              <input type="city" />
            </label>
          </p>
          <p>
            State:
            <label>
              <input type="state" />
            </label>
          </p>
          <p>
            Zip:
            <label>
              <input type="zip" />
            </label>
          </p>
        </form>
        <button>Submit</button>
      </div>
    );
  }
}

export default AddressCreate;
