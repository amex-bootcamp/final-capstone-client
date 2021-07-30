import React, { Component } from "react";
import ProductDataService from "../../services/product.data.service";
import { Card, Container, Button, Row, Form } from "react-bootstrap";
import ProductViewCSS from "./ProductView.module.css";
import { Link } from "react-router-dom";

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
      height: "75%",
      padding: "50px",
      width: "85%",
      "@media (maxWidth:991px)": {
        textAlign: "center",
      },
      fontFamily: "Lato, sans-serif",
    };
    const { product } = this.state;

    const backBtn = {
      backgroundColor: "#1d3557",
      color: "#f1faee",
      margin: "15px",
      padding: "10px 20px",
      border: "none",
    };
    const h2 = {
      textAlign: "center",
      padding: "15px",
      fontWeight: "900",
      fontSize: "40px",
    };

    const miniHeadings = {
      fontSize: "30px",
      fontWeight: "500",
    };
    const para = {
      fontSize: "20px",
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

        <Container className={ProductViewCSS.mainContainer}>
          <Row>
            <Card style={card} className="text-center">
              <Card.Body>
                <Card.Title>
                  {" "}
                  <h1 style={h2}>Product Details</h1>
                </Card.Title>
                <Card.Text className="p-2">
                  <h4 style={miniHeadings}>
                    <strong>Product Name</strong>{" "}
                  </h4>

                  <p style={para}> {product.name} </p>
                </Card.Text>

                <Card.Text className="p-2">
                  <h4 style={miniHeadings}>Description</h4>

                  <p style={para}>{product.description}</p>
                </Card.Text>

                <Card.Text className="p-2">
                  <h4 style={miniHeadings}>Price</h4>
                  <p style={para}>
                    <em>$</em> <strong>{product.price}</strong>
                  </p>
                </Card.Text>

                <Card.Text className="p-2">
                  <h4 style={miniHeadings}>SKU</h4>

                  <p style={para}>
                    <em>{product.sku}</em>
                  </p>
                </Card.Text>

                <Card.Text className="p-2">
                  <h4 style={miniHeadings}>Quanity </h4>
                  <p style={para}>{product.quantity}</p>
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
