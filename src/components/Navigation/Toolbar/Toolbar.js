import React from "react";
import { NavLink } from "react-router-dom";

import Styles from "./Toolbar.css"
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = () => {
    return (
        <div className={Styles.Toolbar}>
            <NavLink to="/">
                <div>LOGO</div>
            </NavLink>

            <nav className={Styles.Nav}>
                <NavigationItems />
            </nav>
        </div>    
    )
}

export default toolbar;