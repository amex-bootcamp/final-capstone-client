import React, { Component } from "react";
import { Card, Container, CardGroup, Button } from "react-bootstrap";
import CustomerDataService from "../../services/customer.data.service";
import CustomerViewCSS from "./CustomerView.Module.css";
import { Redirect } from "react-router-dom";

class CustomerView extends Component {
  state = {
    customer: [{ deleted: false }],
  };
  componentDidMount() {
    // const id = this.props.value.match.params.id

    const {
      match: {
        params: { id },
      },
    } = this.props;

    CustomerDataService.view(id)
      .then(({ data: customer }) => this.setState({ customer }))
      .catch(console.error);
  }
  deleteCustomer(id) {
    CustomerDataService.delete(id).then((res) => {
      console.log(res);
      console.log(res.data);

      // const customers = this.state.customer.filter(
      //   (customer) => customer.id !== id
      // );
      this.setState({ deleted: true });
    });
  }
  render() {
    const { customer } = this.state;
    if (this.state.deleted) {
      return <Redirect to={{ pathname: "/customers" }} />;
    }
    return (
      
        
        <div>
          
          <Container className={CustomerViewCSS.container}>
            {/* <Row justify-content-center>
                <Col> */}
                <CardGroup>
                  <Card className={CustomerViewCSS.card}>
                    <Card.Text>
                    <h2 className={CustomerViewCSS.h2}>Customer Details</h2>
                      <span className={CustomerViewCSS.s}>First Name:</span> {customer.first_name} <br/>
                      <span className={CustomerViewCSS.s}>Middle Name:</span> {customer.middle_name} <br/>
                      <span className={CustomerViewCSS.s}>Last Name:</span> {customer.last_name} <br/>
                      <span className={CustomerViewCSS.s}>Address:</span> {customer.address_id} <br/>
                     <span className={CustomerViewCSS.s}>Phone: </span>{customer.phone} <br/>
                     <span className={CustomerViewCSS.s}>Email: </span>{customer.email} <br/>
                     <span className={CustomerViewCSS.s}> Notes: </span> {customer.notes}
                    </Card.Text>
                    <div flex className={CustomerViewCSS.btndiv}>
                      <button className={CustomerViewCSS.btn}>
                        Edit Customer
                      </button>
                      <button onClick={() => this.deleteCustomer(customer.id)} className={CustomerViewCSS.deletebtn}>
                        Delete Customer
                      </button>
                      </div>
                  </Card>
                {/* </Col>
                <Col> */}
                  <Card className={CustomerViewCSS.card}>
                    <Card.Text>
                      <h2 className={CustomerViewCSS.h2}>Order History</h2>
                    </Card.Text>
                  </Card>
                {/* </Col>
            </Row> */}
            </CardGroup>
          </Container>
        </div>

    )
}
}
export default CustomerView;
