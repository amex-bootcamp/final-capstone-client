import React, { Component } from "react";
import ProductDataService from "../../services/product.data.service";
import {
  Card,
  ListGroup,
  ListGroupItem,
  CardColumns,
  Button,
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
    const { products } = this.state;
    const productsListItems = products.map((products, index) => (
      // <div className="d-flex flex-nowrap">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Product</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem key={`${products.sku}-${index}`}></ListGroupItem>
          <ListGroupItem>Name: {products.name}</ListGroupItem>
          <Card.Text>Description: {products.description}</Card.Text>
          <ListGroupItem>Price: ${products.price}</ListGroupItem>
          <ListGroupItem>SKU: {products.sku}</ListGroupItem>
          <ListGroupItem>Quantity: {products.quantity}</ListGroupItem>
        </ListGroup>
        <Button style={btnbk}>
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
        </Button>
        <Button style={btnbk}>
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
        </Button>
      </Card>
      // </div>
    ));
    return (
      <div>
        {/* <ul className="d-flex">{productsListItems}</ul> */}
        <CardColumns className="d-flex flex-wrap ">
          {productsListItems}
        </CardColumns>
        {/* <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{this.state.products.name}</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card> */}
      </div>
    );
  }
}

export default ProductsList;
