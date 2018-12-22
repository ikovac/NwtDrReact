import React from "react";

const ProductDetails = ({ match }) => {
  return <h1>ProductDetails {match.params.id}</h1>;
};

export default ProductDetails;
