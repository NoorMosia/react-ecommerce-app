import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/cart';

import Styles from './Cart.css';
import CartItem from '../../components/Cart/CartItem/CartItem';
import CheckoutBtn from '../../components/Cart/CheckoutBtn/CheckoutBtn';
import EmptyCart from '../../components/Cart/EmptyCart/EmptyCart';

class Cart extends Component {

    render () {
        const products = this.props.cart.map(item => (
            <CartItem product={item} key={item.price} 
                clicked={() => this.props.onRemoveFromCart(item)} 
                inc={() => this.props.onIncrementItemInCart(item)}
                dec={() => this.props.onDecrementItemInCart(item)}/>
        ))

        let cartContent = (
            <div className={Styles.Cart}>
                <div className={Styles.Total}>
                    Total: R {this.props.total}
                </div> 
                {products}
                <CheckoutBtn />
            </div>
        )

        if(!this.props.cart[0]) {
            cartContent = (
                <EmptyCart />
            )
        }

        return (
            <div>
                {cartContent}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.crt.products,
        total: state.crt.total
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveFromCart: item => dispatch(actions.removeFromCart(item)),
        onIncrementItemInCart: item => dispatch(actions.incrementCartItem(item)),
        onDecrementItemInCart: item => dispatch(actions.decrementCartItem(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);