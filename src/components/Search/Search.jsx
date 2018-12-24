import React, { Component } from "react";
import "./Search.css";
import { connect } from "react-redux";
import { search_products } from "../../actions/productAction";

class Search extends Component {
  onChange = e => {
    this.props.search_products(e.target.value);
  };
  render() {
    return (
      <div id="search-div">
        <input
          type="text"
          placeholder="Upišite pojam"
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { search_products }
)(Search);
