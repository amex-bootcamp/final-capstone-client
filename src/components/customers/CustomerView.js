import React, { Component } from "react";
import { Card, Button, Container } from "react-bootstrap";


class CustomerView extends Component {
  state = {
    // firstName: "",
    // middleName: "",
    // lastName: "",
    // address: "",
    // phone: "",
    // email: "",
    // notes: "",


    
  };
  componentDidMount(){

  }
  render() {
   
    return (
      <section>
         <h2>CustomerView</h2>
    <div>
      <Card>
        <Card.Body>
          <Card.Text>
      <p>First Name: </p>
      <p>Middle Name:</p>
      <p>Last Name:</p>
      <p>Address:</p>
      <p>Phone:</p>
      <p>Email:</p>
      <p>Notes:</p>
      </Card.Text>
      </Card.Body>
      </Card>
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
