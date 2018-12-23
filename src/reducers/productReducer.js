import { FETCH_PRODUCT_LIST, FETCH_PRODUCT } from "../actions/actionTypes";

let initialState = {
  products: [],
  product: {}
};

export default function product(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT_LIST:
      return {
        ...state,
        products: action.payload
      };
    case FETCH_PRODUCT:
      return {
        ...state,
        product: action.payload
      };
    default:
      return state;
  }
}
