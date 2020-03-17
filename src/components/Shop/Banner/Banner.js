import React from "react";

import Styles from "./Banner.css";

const Banner = () => {
    return (
        <div className={Styles.Banner}>
            <div className={Styles.MainHeading}>
                welcome to Dunno    
            </div>
            <div className={Styles.SubHeading}>
                we let you do your grocery shopping with comfort
            </div>
        </div>
    )
}

export default Banner;