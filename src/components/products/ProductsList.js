import React, { Component } from "react";
import ProductDataService from "../../services/product.data.service";
import ProductsListCSS from "./ProductsList.module.css";
import {
  Card,
  ListGroup,
  CardColumns,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";

class ProductsList extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    ProductDataService.list()
      .then(({ data: products }) => this.setState({ products }))
      .catch(console.error);
  }
  render() {
    const title = {
      fontFamily: "Lato, sans-serif",
      color: "#1d3557",
      textAlign: "center",
      marginBottom: "50px",
      marginTop: "50px",
      fontSize: "50pt",
    };
    const cardStyle = {
      width: "20rem",
      height: "20rem",
      padding: "1%",
      backgroundColor: "#1d3557",
      color: "#f1faee",
      filter: "drop-shadow(.30rem .30rem 0.30rem #457b9d)",
      borderColor: "#E63946",
      fontFamily: "Lato, sans-serif",
    };
    const listStyle = {
      marginTop: "5%",
      height: "5rem",
      marginBottom: "7%",
    };
    const btnStyle = {
      backgroundColor: "#a8dadc",
      color: "#1d3557",
    };
    const { products } = this.state;
    const productsListItems = products.map((products, index) => (
      <div style={{ padding: "3%" }}>
        <Card
          style={cardStyle}
          key={`${products.sku}-${index}`}
          className={ProductsListCSS.cardStyle}
        >
          <Card.Body style={{ height: "50px" }}>
            <Card.Title className="text-center">{products.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush" style={{ height: "100rem" }}>
            <Card.Text className="text-center" style={listStyle}>
              {products.description}
            </Card.Text>
            <Card.Text>
              <em>$</em>
              <strong>{products.price}</strong>
            </Card.Text>
            <Card.Text style={{ paddingBottom: "5%" }}>
              <Button href={`products/${products.id}`} style={btnStyle}>
                View Product
              </Button>
            </Card.Text>
          </ListGroup>
          <Container className="text-center">
            <Row>
              <Col>
                <em>
                  <large style={{ color: "#a8dadc" }}>
                    SKU: {products.sku}
                  </large>
                </em>
              </Col>
            </Row>
          </Container>
        </Card>
      </div>
    ));
    return (
      <>
        <div>
          <h1 style={title}>All Products</h1>
        </div>
        <Container className="d-flex">
          <CardColumns className="d-flex flex-wrap justify-content-center">
            {productsListItems}
          </CardColumns>
        </Container>
      </>
    );
  }
}

export default ProductsList;
