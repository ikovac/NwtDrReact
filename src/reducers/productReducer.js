import { FETCH_PRODUCT_LIST, SEARCH_PRODUCT } from "../actions/actionTypes";

let initialState = {
  products: [],
  searched_products: []
};

export default function product(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT_LIST:
      return {
        ...state,
        products: action.payload,
        searched_products: action.payload
      };
    case SEARCH_PRODUCT:
      if (action.all) {
        return state;
      } else {
        return {
          ...state,
          searched_products: state.products.filter(
            item =>
              item.naziv.toUpperCase().includes(action.value) ||
              item.opis.toUpperCase().includes(action.value)
          )
        };
      }
    default:
      return state;
  }
}
