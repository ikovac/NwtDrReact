import React, { Component } from "react";
import { connect } from "react-redux";
import { fetch_products } from '../../actions/productAction';

class ProductList extends Component {

  componentDidMount() {
    this.props.fetch_products();
  }

  render() {
    const { products } = this.props;
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

const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(mapStateToProps, {fetch_products})(ProductList);
