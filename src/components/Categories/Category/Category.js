import React from 'react';
import { NavLink } from 'react-router-dom';

import Styles from "./Category.css";


const Category = (props) => {
    return (
        <div className={Styles.Category} style={{backgroundImage:"linear-gradient(to right, rgba(120, 0, 0, 0.86), rgba(0, 0, 100, 0.86)), url(" + props.category.imageUrl + ")"}}>
            <NavLink to={"/categories/" + props.category.name }>
                    {props.category.name}
            </NavLink>
        </div>   
    )
}

export default Category;