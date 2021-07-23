import React, { useEffect, useState } from "react";
import { Pagination } from "@material-ui/lab";
import CustomerDataService from "../../services/customer.data.service";

function CustomersList() {
  const [customers, setCustomer] = useState([]);
  const [customerLoad, setCustomerLoad] = useState(10);
  const [totalCustomerCount, setTotalCustomerCount] = useState(1);

  useEffect(() => {
    CustomerDataService.listByCount(customerLoad)
      .then(({ data: { rows: customers, count: totalCustomerCount } }) => {
        setCustomer(customers);
        setTotalCustomerCount(totalCustomerCount);
      })
      .catch(console.error);
  }, []);

  // something in here needs to be changed in order to save the data dynamically
  const customerListItems = customers.map((customer, index) => (
    <li key={`${customer.phone}-${index}`}>
      <p>First Name: {customer.first_name}</p>
      <p>Middle Name: {customer.middle_name}</p>
      <p>Last Name: {customer.last_name}</p>
      <p>Phone: {customer.phone}</p>
      <p>Email: {customer.email}</p>
      <p>Notes: {customer.notes}</p>
      <button>Delete</button>
    </li>
  ));
  const handleClick = (event) => {
    event.preventDefault();
    CustomerDataService.listByCount(customerLoad)
      .then(({ data: { rows: customers, count: totalCustomerCount } }) => {
        setCustomer(customers);
        setTotalCustomerCount(totalCustomerCount);
      })
      .catch(console.error);
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
        count={Math.ceil(totalCustomerCount / customerLoad)}
        variant="outlined"
        color="primary"
      />
    </section>
  );
}

export default CustomersList;
