import { WISHLIST_ADD, WISHLIST_REMOVE } from "../actions/actionTypes";

let initialState = {
  items: []
};

export default function wishlist(state = initialState, action) {
  switch (action.type) {
    case WISHLIST_ADD:
      return {
        ...state,
        items: [...state.items, action.item]
      };
    case WISHLIST_REMOVE:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id)
      };
    default:
      return state;
  }
}