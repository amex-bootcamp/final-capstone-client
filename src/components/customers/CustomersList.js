import React, { useEffect, useState } from "react";
import { Pagination } from "@material-ui/lab";
import CustomerDataService from "../../services/customer.data.service";
import CustomerListCSS from "./CustomersList.module.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { auto } from "@popperjs/core";

function CustomersList() {
  const [customers, setCustomer] = useState([]);
  const [customerLoad, setCustomerLoad] = useState(10);
  const [totalCustomerCount, setTotalCustomerCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  // let countPerPage = customerLoad;

  useEffect(() => {
    CustomerDataService.listByCount(customerLoad, currentPage)
      .then(({ data: { rows: customers, count: totalCustomerCount } }) => {
        setCustomer(customers);
        setTotalCustomerCount(totalCustomerCount);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    CustomerDataService.listByCount(customerLoad, currentPage)
      .then(({ data: { rows: customers } }) => {
        setCustomer(customers);
      })
      .catch(console.error);
  }, [currentPage, customerLoad]);

  const cardStyle = {
    fontFamily: "Lato, sans-serif",
    backgroundColor: "#1d3557",
    color: "#f1faee",
    width: "25rem",
    border: "5px solid #457b9d",
    margin: "25px",
    padding: "10px",
    borderRadius: "15px",
    transition: "box-shadow .3s",
  };

  const cardTitle = {
    fontSize: "1.5em",
    fontWeight: "bold",
    textAlign: "center",
  };

  const cardSubtitle = {
    color: "#a8dadc",
    fontSize: "1.25em",
    textAlign: "center",
    fontStyle: "italic",
  };
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

  const textStyle = {
    textOverflow: "ellipsis",
    maxWidth: "200px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    display: "inline-block",
  };

  // something in here needs to be changed in order to save the data dynamically
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
          <Card.Text style={textStyle}>
            <b>Email:</b> <br /> {customer.email}
          </Card.Text>
          <br />
          <Card.Text style={textStyle}>
            <b>Notes:</b> <br /> {customer.notes}
          </Card.Text>
          <Card.Text>
            <p>
              <b>Address ID:</b> {customer.address_id}
            </p>
          </Card.Text>
        </Card.Body>
        <Button href={`customers/${customer.id}`} style={linkStyle}>
          View Details
        </Button>
      </Card>
    </ul>
  ));
  const handleClick = (event) => {
    setCustomerLoad(event.target.value);
    CustomerDataService.listByCount(customerLoad, currentPage)
      .then(({ data: { rows: customers } }) => {
        setCustomer(customers);
      })
      .catch(console.error);
  };
  const handlePaginationClick = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <section>
      <h2>Customers</h2>
      <form onClick={handleClick}>
        <h3>
          Display:{" "}
          <select
            type="number"
            name="totalCustomer"
            value={customerLoad}
            onChange={(event) => setCustomerLoad(event.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>{" "}
          Customers on the Page
        </h3>
      </form>
      <Container fluid="lg">
        <Row>
          <Col>
            <ol>
              <div className={CustomerListCSS.mainContainer}>
                {customerListItems}
              </div>
            </ol>
          </Col>
        </Row>
      </Container>
      <Pagination
        page={currentPage}
        count={Math.ceil(totalCustomerCount / customerLoad)}
        variant="outlined"
        color="primary"
        onChange={handlePaginationClick}
      />
    </section>
  );
}
export default CustomersList;
