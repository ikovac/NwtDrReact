import React, { Component } from "react";
import { host } from "../../env";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetch(host + "/proizvodi.json")
      .then(res => res.json())
      .then(data => this.setState({ products: data }));
  }

  render() {
    const { products } = this.state;
    let Products = products.map(product => (
      <li key={product.id}>{product.naziv}</li>
    ));
    return (
      <React.Fragment>
        <h1>Product List</h1>
        <ul>{Products}</ul>
      </React.Fragment>
    );
  }
}

export default ProductList;
