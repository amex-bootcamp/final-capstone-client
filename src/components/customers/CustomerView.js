import React, { Component } from "react";
import { Card, Button, Container } from "react-bootstrap";


class CustomerView extends Component {
  state = {
    firstName: JSON.parse(sessionStorage.getItem('firstName')),
    middleName: JSON.parse(sessionStorage.getItem('middleName')),
    lastName: JSON.parse(sessionStorage.getItem('lastName')),
    address: JSON.parse(sessionStorage.getItem('address')),
    phone: JSON.parse(sessionStorage.getItem('phone')),
    email: JSON.parse(sessionStorage.getItem('email')),
    notes: JSON.parse(sessionStorage.getItem('notes')),

    
    
  };
  componentDidMount(){ 
    let userToken = JSON.parse(sessionStorage.getItem('token'))
    fetch(`${this.state.}`)

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
