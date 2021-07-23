import React, { Component } from "react";
import { Card, Container, CardGroup, Button } from "react-bootstrap";
import CustomerDataService from "../../services/customer.data.service";
import CustomerViewCSS from "./CustomerView.Module.css";
import { Redirect, Link } from "react-router-dom";

class CustomerView extends Component {
  state = {
    customer: { data: [{}], deleted: false },
  };
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    CustomerDataService.view(id)
      .then(({ data: customer }) =>
        this.setState({ customer: { id, ...customer } })
      )
      .catch(console.error);
  }
  deleteCustomer(id) {
    CustomerDataService.delete(id).then((res) => {
      this.setState({ deleted: true });
    });
  }

  render() {
    const { customer } = this.state;
    if (this.state.deleted) {
      return <Redirect to={{ pathname: "/customers" }} />;
    }
    return (
      <Container className={CustomerViewCSS.container}>
        <CardGroup>
          <Card className={CustomerViewCSS.card}>
            <Card.Text>
              <h2 className={CustomerViewCSS.h2}>Customer Details</h2>
              <span className={CustomerViewCSS.s}>First Name:</span>{" "}
              {customer.data[0].first_name} <br />
              <span className={CustomerViewCSS.s}>Middle Name:</span>{" "}
              {customer.data[0].middle_name} <br />
              <span className={CustomerViewCSS.s}>Last Name:</span>{" "}
              {customer.data[0].last_name} <br />
              <span className={CustomerViewCSS.s}>Address:</span>{" "}
              {customer.data[0].address_id} <br />
              <span className={CustomerViewCSS.s}>Phone: </span>
              {customer.data[0].phone} <br />
              <span className={CustomerViewCSS.s}>Email: </span>
              {customer.data[0].email} <br />
              <span className={CustomerViewCSS.s}> Notes: </span>{" "}
              {customer.data[0].notes}
            </Card.Text>
            <div flex className={CustomerViewCSS.btndiv}>
              <button className={CustomerViewCSS.btn}>
                <Link to={`/customers/${customer.id}/edit`}>Edit Customer</Link>
              </button>
              <button
                onClick={() => this.deleteCustomer(customer.id)}
                className={CustomerViewCSS.deletebtn}
              >
                Delete Customer
              </button>
            </div>
          </Card>
          <Card className={CustomerViewCSS.card}>
            <Card.Text>
              <h2 className={CustomerViewCSS.h2}>Order History</h2>
            </Card.Text>
          </Card>
        </CardGroup>
      </Container>
    );
  }
}
export default CustomerView;
