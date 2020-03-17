import React from 'react';

import Styles from './Order.css';

const Order = () => {

    return (
        <div className={Styles.Order}>
           Total: R1200.00 <br/>
           Items: 5 <br/>
           Date: 16 February 2017
        </div>
    )
}

export default Order;