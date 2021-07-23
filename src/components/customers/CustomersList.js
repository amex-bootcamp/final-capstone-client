import React, { Component } from "react";
import CustomerDataService from "../../services/customer.data.service";
import { Link } from "react-router-dom";
import CustomerListCSS from "./CustomersList.module.css";
import { Card, Container, Row, Col } from "react-bootstrap";

class CustomersList extends Component {
  state = {
    customers: [],
  };
  componentDidMount() {
    CustomerDataService.list()
      .then(({ data: customers }) => this.setState({ customers }))
      .catch(console.error);
  }

  render() {
    const { customers } = this.state;
    const customerListItems = customers.map((customer, index) => (
      <ul key={`${customer.phone}-${index}`}>
        <Card className={CustomerListCSS.wholeCard} style={{ width: "18rem" }}>
          {/* <Card.Img variant="bottom" src="holder.js/100px180?text=Image cap" /> */}
          <Card.Body>
            <Card.Title>
              {customer.first_name} {customer.middle_name.toUpperCase()}.{" "}
              {customer.last_name}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              # {customer.id}
            </Card.Subtitle>
            <Card.Text>
              Phone: <br /> {customer.phone}
            </Card.Text>
            <Card.Text>{customer.email}</Card.Text>
            <Card.Text>
              <p>
                Notes: <br /> {customer.notes}
              </p>
            </Card.Text>
            <Card.Text>
              <p>Address ID: {customer.address_id}</p>
            </Card.Text>
          </Card.Body>
          <Link to={`customers/${customer.id}`}>View Details</Link>
        </Card>
      </ul>
    ));
    return (
      <section>
        <h2>Customers</h2>
        <ol>{customerListItems}</ol>
      </section>
    );
  }
}
export default CustomersList;
