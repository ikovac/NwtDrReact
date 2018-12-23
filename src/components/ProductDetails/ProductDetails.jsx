import React, {Component} from "react";
import { connect } from "react-redux";
import { fetch_product } from "../../actions/productAction";

class ProductDetails extends Component {

  componentDidMount() {
    const {fetch_product, match} = this.props
    fetch_product(+match.params.id);
  }
  render() {
    const { product } = this.props;
    return (
      <div>
        { 
          product && <h1>{product.naziv}</h1>
        }
      </div>
    );
  }
};

const mapStateToProps = state => ({
  product: state.products.product
});

export default connect(
  mapStateToProps,
  { fetch_product }
)(ProductDetails);
