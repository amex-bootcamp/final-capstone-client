import React, { Component } from "react";
import AddressDataService from "../../services/address.data.service";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class AddressesList extends Component {
  state = {
    addresses: [],
    show: false,
  };
  setShow = () => {
    this.setState((currentState)=>{
      return {
        show: !currentState.show
      }
    }) 
  }
  handleClose = () => this.setShow();
  handleShow = () => this.setShow();




  componentDidMount() {
    AddressDataService.list()
      .then(({ data: addresses }) => this.setState({ addresses }))
      .catch(console.error);
  }
  render() {

    const { addresses } = this.state;
    const addressListItems = addresses.map((address, index) => (
      <li key={`${address.zip}-${index}`}>
        <p>Address ID: {address.id}</p>
        <p>Address Line 1: {address.address_line_1}</p>
        <p>Address Line 2: {address.address_line_2}</p>
        <p>City: {address.city}</p>
        <p>State {address.state}</p>
        <p>Zip: {address.zip}</p>
        <Button type="radio" variant="primary" onClick={this.handleShow}>
          Delete
        </Button>
       
      </li>
    ));

    return (
      <section>
        <h2>Addresses</h2>
        <ol>
          {addressListItems}
        </ol>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              Are you sure you want to delete your address?
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>Your address has been deleted</Modal.Body>
          <Modal.Footer>
            <Button type="radio" variant="secondary" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button type="radio" variant="primary" onClick={this.handleClose}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    );
  }
}

export default AddressesList;
