import { FETCH_PRODUCT_LIST, SEARCH_PRODUCT } from "./actionTypes";
import { host } from "../env";

export function fetch_products() {
  return function(dispatch) {
    fetch(host + "/proizvodi.json")
      .then(res => res.json())
      .then(data => dispatch({ type: FETCH_PRODUCT_LIST, payload: data }));
  };
}

export function search_products(input) {
  return function(dispatch) {
    const searched_value = input.toUpperCase();
    if (searched_value === "") {
      dispatch({type: SEARCH_PRODUCT, all: true});
    } else {
      dispatch({type: SEARCH_PRODUCT, all: false, value: searched_value});
    }
  };
}
