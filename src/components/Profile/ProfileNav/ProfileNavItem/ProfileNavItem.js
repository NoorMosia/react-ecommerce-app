import React from 'react';
import { NavLink } from "react-router-dom";

import Styles from './ProfileNavItem.module.css';

const Item = (props) => {

    return (
        <div className={Styles.Item}>
            <NavLink to={props.link} exact={props.exact} activeClassName={Styles.Active}>
                {props.children}
            </NavLink>
        </div>
    )
}

export default Item;