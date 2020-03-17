import * as actionTypes from './actionTypes';

export const addToCart = item => {
    return {
        type: actionTypes.ADDTO_CART,
        item: item
    };
};

export const removeFromCart = item => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        item: item
    };
};

export const incrementCartItem = item => {
    return {
        type: actionTypes.INCREMENT_CART_ITEM,
        item: item
    };
};

export const decrementCartItem = item => {
    console.log('foundIndex')
    return {
        type: actionTypes.DECREMENT_CART_ITEM,
        item: item
    };
};