import React, { Component } from "react";
import ProductDataService from "../../services/product.data.service";
import { Redirect } from "react-router-dom";
import {
  Card,
  ListGroup,
  ListGroupItem,
  CardColumns,
  Button,
  Container,
  Row,
  Col,
  Form,
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
    const btnbk = {
      backgroundColor: "inherit",
      color: "black",
      border: "none",
    };

    const inputSize = {
      width: "20px",
      height: "20px",
    };
    const { products } = this.state;
    const productsListItems = products.map((products, index) => (
      // <div className="d-flex flex-nowrap">
      <div style={{ padding: "3%" }}>
        <Card
          style={{
            width: "18rem",
            height: "20rem",
            padding: "1%",
            backgroundColor: "#1d3557",
            color: "#f1faee",
          }}
          key={`${products.sku}-${index}`}
          className="text-center"
        >
          <Card.Body>
            <Card.Title className="text-center">{products.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            {/* <ListGroupItem key={`${products.sku}-${index}`}></ListGroupItem> */}
            {/* <ListGroupItem>Name: {products.name}</ListGroupItem> */}
            <Card.Text className="text-center">
              {products.description}
            </Card.Text>
            <Card.Text>
              <em>$</em>
              <strong>{products.price}</strong>
            </Card.Text>

            <Card.Text style={{ paddingBottom: "5%" }}>
              <Button
                href={`products/${products.id}`}
                style={{ backgroundColor: "#a8dadc", color: "#1d3557" }}
              >
                View Product
              </Button>

              {/* SKU: {products.sku} */}
            </Card.Text>
            {/* <ListGroupItem>Quantity: {products.quantity}</ListGroupItem> */}
          </ListGroup>
          <Container className="text-center">
            {/* <Row><Col>Quantity </Col></Row> */}

            {/* <Row><Col>
         <Form.Control plaintext readOnly defaultValue={products.quantity}/>
          {products.quantity}
          </Col></Row> */}

            <Row>
              <Col>
                {/* <Form.Text className="text-muted"> */}
                <em>
                  <small style={{ color: "#EEDFCE" }}>
                    SKU: {products.sku}
                  </small>
                </em>
                {/* </Form.Text> */}
                {/* <Button style={btnbk}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-plus-square"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </Button> */}
                {/* <Form.Control style={inputSize} plaintext readOnly defaultValue={products.quantity}/> */}
                {/* {products.quantity} */}
                {/* <Button style={btnbk}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-dash-square"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
          </svg>
        </Button> */}
              </Col>
            </Row>
          </Container>
        </Card>
      </div>
    ));
    return (
      <div>
        <Container justify-content-center>
          <CardColumns className="d-flex flex-wrap">
            {productsListItems}
          </CardColumns>
        </Container>
      </div>
    );
  }
}

export default ProductsList;
