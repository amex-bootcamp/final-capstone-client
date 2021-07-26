import React, { useEffect, useState } from "react";
import { Pagination } from "@material-ui/lab";
import CustomerDataService from "../../services/customer.data.service";
import { Link } from "react-router-dom";

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
  }, [currentPage]);

  // something in here needs to be changed in order to save the data dynamically
  const customerListItems = customers.map((customer, index) => (
    <li key={`${customer.phone}-${index}`}>
      <p>Customer ID: {customer.id}</p>
      <p>First Name: {customer.first_name}</p>
      <p>Middle Name: {customer.middle_name.toUpperCase()}</p>
      <p>Last Name: {customer.last_name}</p>
      <p>Phone: {customer.phone}</p>
      <p>Email: {customer.email}</p>
      <p>Notes: {customer.notes}</p>
      <p>Address ID: {customer.address_id}</p>
      <Link to={`customers/${customer.id}`}>View Details</Link>
    </li>
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
      <ol>{customerListItems}</ol>
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
