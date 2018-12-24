import React, { Component } from "react";
import { connect } from "react-redux";
import { fetch_products } from "../../actions/productAction";
// import Rate from "../Rate/Rate";
import { host } from "../../env";
import { Link } from "react-router-dom";
import "./ProductList.css";
import FavouriteAdd from "../FavouriteAdd/FavouriteAdd";
import Rate from "../Rate/Rate";
import Search from "../Search/Search";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }
  componentDidMount() {
    this.props.fetch_products();
    this.setState({ loaded: true });
  }

  render() {
    const { products } = this.props;
    let Products = products.map(product => {
      return (
        <div className="product" key={product.id}>
          <div className="content-header">
            <h2>
              <Link to={"/proizvod/" + product.id}>{product.naziv}</Link>
              <FavouriteAdd prod={product} />
            </h2>
            <h3>{product.cijena} €</h3>
          </div>
          <div className="content-main">
            <div className="image-wrapper">
              <img
                src={host + "/images/" + product.image_name}
                alt={product.naziv}
              />
            </div>
            <p className="opis">{product.opis}</p>
          </div>
          <Rate recenzije={product.recenzije} />
        </div>
      );
    });
    return (
      <React.Fragment>
        {this.state.loaded && (
          <React.Fragment>
            <Search />
            <div className="products-wrapper">{Products}</div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.searched_products
});

export default connect(
  mapStateToProps,
  { fetch_products }
)(ProductList);
