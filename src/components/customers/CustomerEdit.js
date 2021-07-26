import React, { Component } from "react";
import { Card, Container, CardGroup, Button } from "react-bootstrap";
import CustomerDataService from "../../services/customer.data.service";
import { Redirect } from "react-router-dom";
import CustomerEditCSS from "../customers/CustomerEdit.module.css";

class CustomerEdit extends Component {
  state = {
    first_name: "",
    middle_name: "",
    last_name: "",
    phone: "",
    email: "",
    notes: "",
  };
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    CustomerDataService.view(id)
      .then(({ data: customer }) =>
        this.setState({
          first_name: customer.first_name,
          middle_name: customer.middle_name,
          last_name: customer.last_name,
          phone: customer.phone,
          email: customer.email,
          notes: customer.notes,
        })
      )
      .catch(console.error);
  }
  handleFirstNameChange = (event) => {
    this.setState({
      first_name: event.target.value,
    });
  };
  handleMiddleNameChange = (event) => {
    this.setState({
      middle_name: event.target.value,
    });
  };
  handleLastNameChange = (event) => {
    this.setState({
      last_name: event.target.value,
    });
  };
  handlePhoneChange = (event) => {
    this.setState({
      phone: event.target.value,
    });
  };
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handleNotesChange = (event) => {
    this.setState({
      notes: event.target.value,
    });
  };

  // handleSubmitChanges() {

  // };

  render() {
    return (
      <section>
        <div>
          <Container className={CustomerEditCSS.container}>
            <CardGroup>
              <Card>
                <Card.Body>
                  <Card.Text>
                    <h2 className={CustomerEditCSS.h2}>Edit Customer</h2>
                    <form className={CustomerEditCSS.formcenter}>
                      <p>
                        <label>First Name:</label>
                        <input
                          type="text"
                          value={this.state.first_name}
                          onChange={this.handleFirstNameChange}
                        ></input>
                      </p>

                      <p>
                        <label>Middle Name:</label>
                        <input
                          type="text"
                          value={this.state.middle_name}
                          onChange={this.handleMiddleNameChange}
                        ></input>
                      </p>

                      <p>
                        <label>Last Name:</label>
                        <input
                          type="text"
                          value={this.state.last_name}
                          onChange={this.handleLastNameChange}
                        ></input>
                      </p>

                      <p>
                        <label>Address:</label>
                        <input type="text"></input>
                      </p>

                      <p>
                        <label>Phone:</label>
                        <input
                          type="text"
                          value={this.state.phone}
                          onChange={this.handlePhoneChange}
                        ></input>
                      </p>

                      <p>
                        <label>Email:</label>
                        <input
                          type="text"
                          value={this.state.email}
                          onChange={this.handleEmailChange}
                        ></input>
                      </p>

                      <p>
                        <label>Notes:</label>
                        <input
                          type="text"
                          value={this.state.notes}
                          onChange={this.handleNotesChange}
                        ></input>
                      </p>
                    </form>
                    <p className={CustomerEditCSS.savebtncenter}>
                     <Button className={CustomerEditCSS.savebtn} type="submit">
                      Save Changes
                    </Button> 
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className={CustomerEditCSS.card}>
                <Card.Text>
                  <h2 className={CustomerEditCSS.h2order}>Order History</h2>
                </Card.Text>
              </Card>
            </CardGroup>
          </Container>
        </div>
      </section>
    );
  }
}
export default CustomerEdit;
