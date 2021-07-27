import React, { Component } from "react";
import ProductDataService from "../../services/product.data.service";
import { Card, Container, Button, Row, Col } from "react-bootstrap";
import ProductViewCSS from "./ProductView.module.css";
import { Redirect, Link } from "react-router-dom";

class ProductView extends Component {
  state = {
    product: []
  }
  componentDidMount() {
    
    const {
      match: {
        params: { id },
      },
    } = this.props;

    ProductDataService.view(id)
      .then(({ data}) =>
        this.setState({ product: data })
      )
      .catch(console.error);
  }
  
  render() {
    const card = {
      backgroundColor: "#1d3557",
    }
   const {product} = this.state;
     
    return (
      

      <div>
          <div>
      <Container>
        <Link to={`/products`}><Button>Back to Products List</Button></Link>
      </Container>
      </div>
        <Container>
          <h2>ProductView</h2>
        </Container>
        <Container className={ProductViewCSS.container}>
          <Col>
          <Card style={card}>
            <Card.Text>
              <span className={ProductViewCSS.span}>Product Name: </span>{" "}{product.name} <br />
              <span>Description: </span>{" "}{product.description} <br />
              <span>Price:</span>{" "}{product.price} <br />
              <span>SKU: </span>{" "}{product.sku} <br />
              <span>Quanity:
                <Button>+</Button>
                <Button>-</Button>
              </span>{" "}{product.quantity} <br />
            </Card.Text>
          </Card>
          </Col>
        </Container>
      </div>
    );
  }
}

export default ProductView;
