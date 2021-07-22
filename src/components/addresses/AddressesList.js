import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AddressDataService from "../../services/address.data.service";
import AddressesListCSS from "./AddressesList.module.css";
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
      <ul key={`${address.zip}-${index}`}>
        <Card className={AddressesListCSS.addressesCards} style={{ width: '20rem' }}>
          <Card.Title>
            <p>Address ID: {address.id}</p>
          </Card.Title>
          <p>Address Line 1: {address.address_line_1}</p>
          <p>Address Line 2: {address.address_line_2}</p>
          <p>City: {address.city}</p>
          <p>State: {address.state}</p>
          <p>Zip: {address.zip}</p>
          <>
            <div className={AddressesListCSS.Btn}>
              <Button >Edit</Button>{' '}
              <Button >Delete</Button>{' '}
            </div>
          </>
        </Card>


      </ul>
    ));

    return (
      <section>
        <h1 className={AddressesListCSS.header}>All Addresses</h1>
        <container fluid="md">
          <row>
            <ul>
              <div className={AddressesListCSS.mainContainer}>
                {addressListItems}
              </div>
            </ul>
          </row>
        </container>
      </section>
    );
  }
}

export default AddressesList;