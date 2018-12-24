import { WISHLIST_ADD, WISHLIST_REMOVE } from './actionTypes';

export function wishlistAdd(product) {
    return function(dispatch) {
        dispatch({type: WISHLIST_ADD, item: product});
    }
}

export function wishlistRemove(id) {
    return function(dispatch) {
        dispatch({type: WISHLIST_REMOVE, id});
    }
}