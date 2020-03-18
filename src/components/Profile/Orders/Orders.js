import React from 'react';

import Styles from './Orders.module.css';
import Order from './Order/Order';

const Orders = () => {

    return (
        <div className={Styles.Orders}>
            <Order />
            <Order />
            <Order />
            <Order />
            <Order />
        </div>
    )
}

export default Orders;