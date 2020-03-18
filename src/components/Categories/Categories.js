import React from 'react';

import Styles from "./Categories.module.css"
import Category from "./Category/Category";

const Categories = (props) => {
    let categoriesMapped = [...props.categories];

    categoriesMapped = categoriesMapped.map(cat => {
        return <Category key={cat.name} category={cat} />
    })

    return (
        <div className={Styles.Categories}>
            {categoriesMapped}
        </div>
    )
}

export default Categories;