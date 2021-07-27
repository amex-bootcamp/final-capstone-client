import React, { Component } from "react";
import ProductDataService from "../../services/product.data.service";
import { Card, Container, Button, Row, Col } from "react-bootstrap";
import ProductViewCSS from "./ProductView.module.css";
import { Redirect, Link } from "react-router-dom";

class ProductView extends Component {
  state = {
    product: [],
  };
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    ProductDataService.view(id)
      .then(({ data }) => this.setState({ product: data }))
      .catch(console.error);
  }

  render() {
    const card = {
      backgroundColor: "#1d3557",
      color: "#f1faee",
      margin: "50px",
      borderRadius: "7px",
      height: "300px",
      padding: "65px 65px 65px 65px",
      alignItems: "center",
      justifyContent: "center",
      width: "50rem",
    };
    const { product } = this.state;

    const backBtn = {
      backgroundColor: "#1d3557",
      color: "#f1faee",
      margin: "15px",
      padding: "10px 20px",
      border: "none",
    };
    const incrementBtn = {
      backgroundColor: "#a8dadc",
      color: "#1d3557",
      border: "none",
      margin: "15px",
      marginBottom: "30px",
  
    };
    const decrementBtn = {
      backgroundColor: "#e63946",
      color: "#f1faee",
      border: "none",
      margin: "15px",
      marginBottom: "30px"
    };
    const h2 = {
      textAlign: "center",
      padding: "15px",
    };
     const cardContainer = {
      justifyContent: "center",
      alignItems: "center",
      display: "flex"
    };

    return (
      <div>
        <div>
          <Container>
            <Link to={`/products`}>
              <Button style={backBtn}>Back to Products List</Button>
            </Link>
          </Container>
        </div>
        <Container className={ProductViewCSS.mainContainer} style={cardContainer}>
          <Row>
            <Card style={card} className={ProductViewCSS.cardStyle}>
              <Card.Body>
                <Card.Title>
                  {" "}
                  <h2 style={h2}>Product Details</h2>
                </Card.Title>
                <Card.Text>
                  <span className={ProductViewCSS.span}>
                    <b>Product Name: </b>
                  </span>{" "}
                  {product.name} <br />
                  <span>
                    <b>Description:</b>
                  </span>{" "}
                  {product.description} <br />
                  <span>
                    <b>Price:</b>
                  </span>{" "}
                  {product.price} <br />
                  <span>
                    <b>SKU:</b>
                  </span>{" "}
                  {product.sku} <br />
                  <span>
                    <b>Quanity: </b> </span>{" "}
                  {product.quantity}
                    <br /> 
                    <Button style={decrementBtn}>-</Button>
                    <Button style={incrementBtn}>+</Button> &nbsp;
                   <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ProductView;
