import React, { Component } from "react";
import { Card, Container, CardGroup, Button } from "react-bootstrap";
import CustomerDataService from "../../services/customer.data.service";
import CustomerViewCSS from "./CustomerView.Module.css";
import { Redirect } from "react-router-dom";

class CustomerView extends Component {
  state = {
    customer: {data: [{}], deleted: false},
  };
  componentDidMount() {
    // const id = this.props.value.match.params.id

    const {
      match: {
        params: { id },
      },
    } = this.props;

    CustomerDataService.view(id)
      .then(({ data: customer }) => this.setState({ customer: {id,...customer} }))
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
    const editButton = {
      backgroundColor: "#a8dadc",
      color: "#1d3557",
      
      
    }
    const deleteButton = {
      backgroundColor: "#e63946",
      color: "#f1faee",
      
    }
    const custCard = {
      backgroundColor: "#1d3557",
      color: "#f1faee",
      margin: "50px",
      borderRadius: "7px",
      
      
    }
    let text = {
      font: "bold",
      color: "#f1faee"
    }
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
                  <Card style={custCard} variant={custCard} className={CustomerViewCSS.card}>
                    <Card.Text>
                    <h2 style={text} className={CustomerViewCSS.h2}>Customer Details</h2>
                      <span style={text} className={CustomerViewCSS.s}>First Name:</span>     {customer.data[0].first_name} <br/>
                      <span className={CustomerViewCSS.s}>Middle Name:</span> {customer.data[0].middle_name} <br/>
                      <span className={CustomerViewCSS.s}>Last Name:</span> {customer.data[0].last_name} <br/>
                      <span className={CustomerViewCSS.s}>Address:</span> {customer.data[0].address_id} <br/>
                     <span className={CustomerViewCSS.s}>Phone: </span>{customer.data[0].phone} <br/>
                     <span className={CustomerViewCSS.s}>Email: </span>{customer.data[0].email} <br/>
                     <span className={CustomerViewCSS.s}> Notes: </span> {customer.data[0].notes}
                    </Card.Text>
                    <br/> <br/> 
                    <div flex className={CustomerViewCSS.btndiv}> 
                      <Button style={editButton} variant={editButton} className={CustomerViewCSS.btn}>
                        Edit Customer
                      </Button>
                      <Button style={deleteButton} variant={deleteButton} onClick={() => this.deleteCustomer(customer.id)} className={CustomerViewCSS.deletebtn}>
                        Delete Customer
                      </Button>
                      </div>
                  </Card>
                {/* </Col>
                <Col> */}
                  <Card style={custCard} variant={custCard} className={CustomerViewCSS.card}>
                    <Card.Text>
                      <h2 style={text} className={CustomerViewCSS.h2}>Order History</h2>
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
