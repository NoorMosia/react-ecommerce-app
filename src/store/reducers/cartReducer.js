import * as actionTypes from '../actions/actionTypes';

const initialState = {
    products: [],
    total: 0
}

const addToCart = (state, action) => {
    const found = state.products.findIndex(el => el.title === action.item.title);

    const newItem = {
        ...action.item,
        quantity: 1
    }

    if(found < 0) {  
        state.total += newItem.price;  
        return {
            ...state,
            products: state.products.concat(newItem),
        };
    } else {
        return {
            ...state
        };
    }
}

const removeFromCart = (state, action) => {
    const newArray = state.products.filter(el => el.title !== action.item.title);
    state.total -= action.item.price * action.item.quantity;  
    return {
        ...state,
        products: newArray
    };
}

const incrementCartItem = (state, action) => {
    const foundIndex = state.products.findIndex(el => el.title === action.item.title);
    let newProducts = [...state.products];

    if(foundIndex >= 0) {
        newProducts[foundIndex].quantity++;
        state.total += action.item.price; 
    }

    return {
        ...state,
        products: newProducts
    }
}

const decrementCartItem = (state, action) => {
    const foundIndex = state.products.findIndex(el => el.title === action.item.title);
    let newProducts = [...state.products];

    if(foundIndex >= 0 && newProducts[foundIndex].quantity > 1) {
        newProducts[foundIndex].quantity--; 
        state.total -= action.item.price; 
    }

    return {
        ...state,
        products: newProducts
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADDTO_CART: return addToCart(state, action); 
        case actionTypes.REMOVE_FROM_CART: return removeFromCart(state, action); 
        case actionTypes.INCREMENT_CART_ITEM: return incrementCartItem(state, action); 
        case actionTypes.DECREMENT_CART_ITEM: return decrementCartItem(state, action); 
        default: return state;
    }
}

export default reducer;