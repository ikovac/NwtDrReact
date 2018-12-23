import { FETCH_PRODUCT_LIST, FETCH_PRODUCT } from "./actionTypes";
import { host } from "../env";

export function fetch_products() {
  return function(dispatch) {
    fetch(host + "/proizvodi.json")
      .then(res => res.json())
      .then(data => dispatch({ type: FETCH_PRODUCT_LIST, payload: data }));
  };
}

export function fetch_product(product_id) {
  return function(dispatch) {
    fetch(host + "/proizvodi.json")
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: FETCH_PRODUCT,
          payload: data.find(prod => prod.id === product_id)
        });
      });
  };
}
