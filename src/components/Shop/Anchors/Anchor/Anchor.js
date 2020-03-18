import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Anchor.module.css";

const Anchor = (props) => {
    return (
        <li className={styles.Link}>
            <NavLink to={"/" + props.name} activeClassName={styles.Active}>
                <div className={styles.LinkIcon}>
                    {props.children}
                </div>
                <div className={styles.LinkText}>
                    {props.name}
                </div>
            </NavLink>
        </li>
    )
}

export default Anchor;