import React, { Component } from "react";
import { Card, Button, } from "react-bootstrap";
import CustomerDataService from "../../services/customer.data.service";


class CustomerView extends Component {
  state = {
    customer: {},
 
  };
  componentDidMount() { 
    const {
      match: {
        params: { id },
      },
    } = this.props;

    CustomerDataService.view(id)
    .then(({ data: customer }) => this.setState({ customer }))
    .catch(console.error);

  }
  render() {
   const { customer } = this.state;

    return (
      
      <section>
         <h2>Customer Details</h2>
    <div>
      <Card>
        <Card.Body>
          <Card.Text>
      <p>First Name: {customer.first_name}</p>
      <p>Middle Name:{customer.middle_name}</p>
      <p>Last Name:{customer.last_name}</p>
      <p>Address: {customer.address_id}</p>
      <p>Phone: {customer.phone}</p>
      <p>Email: {customer.email}</p>
      <p>Notes: {customer.notes}</p>

      </Card.Text>
      </Card.Body>
      </Card>
      <Button>Edit Customer</Button>
      <Button>Delete Customer</Button>
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

export default CustomerView;
