import React from 'react';
import { Link } from 'react-router-dom';

import Styles from './EmptyCart.css';

const EmptyCart = props => {

    return (
        <div className={Styles.EmptyCart}>
           <div className={Styles.Text}>
               your cart is empty
            </div>

            <div className={Styles.Link}>
                <Link to='/'>start shopping</Link>
            </div>
        </div>
    )
}

export default EmptyCart;