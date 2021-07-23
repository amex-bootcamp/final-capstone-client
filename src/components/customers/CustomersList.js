import React, { Component } from "react";
import CustomerDataService from "../../services/customer.data.service";
import { Link } from "react-router-dom";
import CustomerListCSS from "./CustomersList.module.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

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
    const cardStyle = {
      fontFamily: "Lato, sans-serif",
      backgroundColor: "#f1faee",
      color: "#1d3557",
      width: "25rem",
      border: "5px solid #1d3557",
      margin: "25px",
      padding: "10px",
      borderRadius: "15px",
      transition: "box-shadow .3s",
      // filter: "drop-shadow(-5px 10px 4px #457b9d)",
    };
    //   const cardStyle: hover{
    //     boxShadow: 0 0 11px rgba(33,33,33,.2)
    // }
    const cardTitle = {
      fontSize: "1.5em",
      fontWeight: "bold",
      textAlign: "center",
    };

    const cardSubtitle = {
      color: "#457b9d",
      fontSize: "1.25em",
      textAlign: "center",
      fontStyle: "italic",
    };
    // const buttonStyle = {
    //   color: "#f1faee",
    //   backgroundColor: "#a8dadc",
    //   width: "8rem",
    // };
    const linkStyle = {
      textDecoration: "none",
      border: "#457b9d 2px solid",
      width: "10rem",
      padding: "5px",
      backgroundColor: "#a8dadc",
      color: "#1d3557",
      textAlign: "center",
      margin: "auto",
      fontWeight: "bold",
      borderRadius: "5px",
    };

    const { customers } = this.state;
    const customerListItems = customers.map((customer, index) => (
      <ul key={`${customer.phone}-${index}`}>
        <Card className={CustomerListCSS.cardStyle} style={cardStyle}>
          {/* <Card.Img variant="bottom" src="holder.js/100px180?text=Image cap" /> */}
          <Card.Body>
            <Card.Title style={cardTitle}>
              {customer.first_name} {customer.middle_name.toUpperCase()}.{" "}
              {customer.last_name}
            </Card.Title>
            <Card.Subtitle style={cardSubtitle}>
              Customer ID #{customer.id}
            </Card.Subtitle>{" "}
            <br />
            <Card.Text>
              <b>Phone:</b> <br /> {customer.phone}
            </Card.Text>
            <Card.Text>
              <b>Email:</b> <br /> {customer.email}
            </Card.Text>
            <Card.Text>
              <p>
                <b>Notes:</b> <br /> {customer.notes}
              </p>
            </Card.Text>
            <Card.Text>
              <p>
                <b>Address ID:</b> {customer.address_id}
              </p>
            </Card.Text>
          </Card.Body>
          {/* <Button style={buttonStyle}> */}
          <Link to={`customers/${customer.id}`} style={linkStyle}>
            View Details
          </Link>
          {/* </Button> */}
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
