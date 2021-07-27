import React, { Component } from "react";
import { Card, Container, CardGroup, Button } from "react-bootstrap";
import AddressViewCSS from "./AddressView.module.css";
import AddressDataService from "../../services/address.data.service";
import { Redirect } from "react-router-dom";

class AddressView extends Component {
  state = {
    address: [
      {
        deleted: false,
        id: "",
        address_line_1: "",
        address_line_2: "",
        city: "",
        state: "",
        zipo: "",
      },
    ],
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    AddressDataService.view(id)
      .then(({ data: address }) => 
      this.setState({ address:address[0] }))
      .catch(console.error);
  }

  deleteAddress(id) {
    AddressDataService.delete(id)
      .then((res) => {
      console.log(res);
      console.log(res.data);
      this.setState({ deleted: true });
    });
  }

  render() {
    const { address } = this.state;
    if (this.state.deleted) {
      return <Redirect to={{ pathname: "/addresses" }} />;
    }

    return (
        <div>
          
          <Container className={AddressView.container}>
                <CardGroup>
                  <Card className={AddressView.card}>
                    <Card.Text>
                    <h2 className={AddressView.h2}>Address</h2>
                   
                      <span className={AddressView.s}>Address Line 1:</span> {address.address_line_1} <br/>
                      <span className={AddressView.s}>Address Line 2:</span> {address.address_line_2} <br/>
                      <span className={AddressView.s}>City:</span> {address.city} <br/>
                      <span className={AddressView.s}>State:</span> {address.state} <br/>
                     <span className={AddressView.s}>Zip: </span>{address.zip} <br/>
                    </Card.Text>
                  </Card>
            </CardGroup>
          </Container>
        </div>
    );
  }
}

export default AddressView; 