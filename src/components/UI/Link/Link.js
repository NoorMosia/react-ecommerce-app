import React from "react";

import Styles from "./Link.css";

const Link = (props) => {
    return (
        <div className={Styles.Link}>
            <a href="/">{props.children}</a>
        </div>
    )
}

export default Link;