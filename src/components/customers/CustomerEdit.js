import React, { Component } from "react";
import CustomerEditCSS from "../customers/CustomerEdit.module.css";
import { Card, Container, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import CustomerDataService from "../../services/customer.data.service";

class CustomerEdit extends Component {
  state = {
    edited: false,
    id: "",
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
      .then(({ data: customer }) => {
        this.setState({
          id: id,
          first_name: customer[0].first_name,
          middle_name: customer[0].middle_name,
          last_name: customer[0].last_name,
          phone: customer[0].phone,
          email: customer[0].email,
          notes: customer[0].notes,
        });
      })
      .catch(console.error);
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  // REFACTORED INTO ONE FUNCTION (on top: handleInputChange)

  // handleFirstNameChange = (event) => {
  //   this.setState({
  //     first_name: event.target.value,
  //   });
  // };

  // handleMiddleNameChange = (event) => {
  //   this.setState({
  //     middle_name: event.target.value,
  //   });
  // };

  // handleLastNameChange = (event) => {
  //   this.setState({
  //     last_name: event.target.value,
  //   });
  // };

  // handlePhoneChange = (event) => {
  //   this.setState({
  //     phone: event.target.value,
  //   });
  // };

  // handleEmailChange = (event) => {
  //   this.setState({
  //     email: event.target.value,
  //   });
  // };

  // handleNotesChange = (event) => {
  //   this.setState({
  //     notes: event.target.value,
  //   });
  // };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      match: {
        params: { id },
      },
    } = this.props;

    const params = {
      first_name: this.state.first_name,
      middle_name: this.state.middle_name,
      last_name: this.state.last_name,
      phone: this.state.phone,
      email: this.state.email,
      notes: this.state.notes,
    };
    CustomerDataService.put(id, params)
      .then((res) => {
        this.setState({
          edited: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (this.state.edited) {
      return <Redirect to={{ pathname: `/customers/${this.state.id}` }} />;
    }
    return (
      <section>
        <div>
          <Container className={CustomerEditCSS.container}>
            <Card>
              <Card.Body>
                <Card.Text>
                  <h2 className={CustomerEditCSS.h2}>Edit Customer</h2>
                  <form
                    className={CustomerEditCSS.formcenter}
                    onSubmit={this.handleSubmit}
                  >
                    <p>
                      <label>First Name:</label>
                      <input
                        type="text"
                        value={this.state.first_name}
                        name="first_name"
                        id="first_name"
                        onChange={this.handleInputChange}
                      ></input>
                    </p>
                    <p>
                      <label>Middle Name:</label>
                      <input
                        type="text"
                        name="middle_name"
                        value={this.state.middle_name}
                        onChange={this.handleInputChange}
                      ></input>
                    </p>
                    <p>
                      <label>Last Name:</label>
                      <input
                        type="text"
                        name="last_name"
                        value={this.state.last_name}
                        onChange={this.handleInputChange}
                      ></input>
                    </p>
                    <p>
                      <label>Phone:</label>
                      <input
                        type="text"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleInputChange}
                      ></input>
                    </p>
                    <p>
                      <label>Email:</label>
                      <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                      ></input>
                    </p>
                    <p>
                      <label>Notes:</label>
                      <input
                        type="text"
                        name="notes"
                        value={this.state.notes}
                        onChange={this.handleInputChange}
                      ></input>
                    </p>
                    <p className={CustomerEditCSS.savebtncenter}>
                      <Button
                        className={CustomerEditCSS.savebtn}
                        type="submit"
                        value="submit"
                      >
                        Save Changes
                      </Button>
                    </p>
                  </form>
                </Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </div>
      </section>
    );
  }
}
export default CustomerEdit;
