import React from "react";
import { Link } from "react-router-dom";

import Styles from "./Products-set.module.css";
import ProductCard from "../../../containers/ProductCard/ProductsCard";

const ProductSet = (props) => {

    let products = [...props.products]
    products = products.splice(0, 6).map(product => {
        return <ProductCard product={product} key={product.title} />
    })

    return (
        <div className={Styles.ProductSet}>
            <div className={Styles.Name}>
                {props.category}
            </div>

            <div className={Styles.CardsContainer}>
                {products}
            </div>

            <div className={Styles.More}>
                <Link to={"/categories/" + props.category}>More &#8594;</Link>
            </div>
        </div>
    )
}

export default ProductSet;