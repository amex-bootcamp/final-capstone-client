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
      this.setState({ address }))
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
            {/* <Row justify-content-center>
                <Col> */}
                <CardGroup>
                  <Card className={AddressView.card}>
                    <Card.Text>
                    <h2 className={AddressView.h2}>Address</h2>
                      <span className={AddressView.s}>Address Line 1:</span> {address.data[0].aadress_line_1} <br/>
                      <span className={AddressView.s}>Address Line 2:</span> {address.data[0].aadress_line_2} <br/>
                      <span className={AddressView.s}>City:</span> {address.data[0].city} <br/>
                      <span className={AddressView.s}>State:</span> {address.data[0].state} <br/>
                     <span className={AddressView.s}>Zip: </span>{address.data[0].zip} <br/>
                    </Card.Text>
                    <div flex className={AddressView.btndiv}>
                      <button className={AddressView.btn}>
                        Edit Customer
                      </button>
                      <button onClick={() => this.deleteAddress(address.id)} className={AddressView.deletebtn}>
                        Delete Customer
                      </button>
                      </div>
                  </Card>
                  <Card className={AddressView.card}>
                    <Card.Text>
                      <h2 className={AddressView.h2}>Order History</h2>
                    </Card.Text>
                  </Card>
                {/* </Col>
            </Row> */}
            </CardGroup>
          </Container>
        </div>
    );
  }
}

export default AddressView; 