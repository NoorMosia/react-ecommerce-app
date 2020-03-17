import React from "react";
import { IoIosReturnRight } from "react-icons/io"

import Styles from './CheckoutBtn.css'

const CheckoutBtn = (props) => {
    return (
        <div className={Styles.Btn}>
            <span className={Styles.Icon}> 
                <IoIosReturnRight />
            </span>
            
            <span className={Styles.Text}>
                checkout
            </span>
        </div>
    )
}

export default CheckoutBtn;