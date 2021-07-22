import React, { Component } from "react";
import CustomerDataService from "../../services/customer.data.service";

class CustomerEdit extends Component {
  state = {
    customer: {},
  }
  // componentDidMount() { 
  //   // const {
  //   //   match: {
  //   //     params: { id },
  //   //   },
  //   // } = this.props;

  //   CustomerDataService.view(id)
  //   .then(({ data: customer }) => this.setState({ customer }))
  //   .catch(console.error);
  // }
  // handleNameChange = (event) => {
  //   this.setState({
  //     name: event.target.value,
  //   });
  // };

  render() {
    return (
      <section>
         <h2>Edit Customer</h2>
    <div>
      <form>
        <label>First Name:</label>
        <input type="text" onChange={this.handleNameChange}></input>
        <br></br>
        <label>Middle Name:</label>
        <input type="text"></input>
        <br></br>
        <label>Last Name:</label>
        <input type="text"></input>
        <br></br>
        <label>Address:</label>
        <input type="text"></input>
        <br></br>
        <label>Phone:</label>
        <input type="text"></input>
        <br></br>
        <label>Email:</label>
        <input type="text"></input>
        <br></br>
        <label>Notes:</label>
        <input type="text"></input>
        <br></br>        
      </form>
      <button type="submit">Save Changes</button>
    </div> 
      </section>
    );
  }
}

export default CustomerEdit;

