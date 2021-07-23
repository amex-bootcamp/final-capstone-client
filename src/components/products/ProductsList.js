import React, { Component } from "react";
import ProductDataService from "../../services/product.data.service";

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
    const { products } = this.state;
    const productsListItens = products.map((products, index) => (
      <li key={`${products.sku}-${index}`}>
        <p>{products.name}</p>
        <p>${products.price}</p>
        <p>SKU: {products.sku}</p>
        <p>Quantity: {products.quantity}</p>
      </li>
    ));
    return (
      <section>
        <h2>Products</h2>
        <ol>{productsListItens} </ol>
      </section>
    );
  }
}

export default ProductsList;
