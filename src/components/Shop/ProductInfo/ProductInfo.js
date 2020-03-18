import React from 'react';

import Styles from './ProductInfo.module.css';

const ProductInfo = props => {

    return (
        <div className={Styles.ProductInfo}>
            <div className={Styles.ImageContainer}>
                <img src={props.imageUrl} alt='hello' />
            </div>
            <div className={Styles.Text}>
                Tomato <br />
                Price: R10.00
            </div>
        </div>
    )
}

export default ProductInfo;