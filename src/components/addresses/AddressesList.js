import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AddressDataService from "../../services/address.data.service";
import "./AddressesList.css";
import { Container, Row, Col } from "react-bootstrap";

class AddressesList extends Component {
  state = {
    addresses: [],
  };

  componentDidMount() {
    AddressDataService.list()
      .then(({ data: addresses }) => this.setState({ addresses }))
      .catch(console.error);
  }
  render() {
        
    const { addresses } = this.state;
    const addressListItems = addresses.map((address, index) => (
      <li key={`${address.zip}-${index}`}>
        
                     <Card className="mainCard" style={{ width: '18rem' }}>
         <Card.Title>
        <p>Address ID: {address.id}</p></Card.Title>
        <p>Address Line 1: {address.address_line_1}</p>
        <p>Address Line 2: {address.address_line_2}</p>
        <p>City: {address.city}</p>
        <p>State: {address.state}</p>
        <p>Zip: {address.zip}</p>
        <>
        <Button className="inline">Edit</Button>{' '} 
        <Button className="inline delBtn">Delete</Button>{' '}
        </>
        </Card>
        
        
      </li>
      ));

    return (
      <section>
        <h1 className="header">All Addresses</h1>
        
          <ol>
            <div className="mainContainer">
              {addressListItems}
            </div>
          </ol>
             
      </section>
    );
  }
}

export default AddressesList;