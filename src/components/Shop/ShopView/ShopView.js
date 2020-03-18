import React from 'react';
import { Link } from 'react-router-dom';

import Styles from "./ShopView.module.css";

import Banner from "../Banner/Banner";
import ProductSet from "../Products-set/Products-set";

const ShopView = (props) => {
    const fruits = [];
    const vegetables = [];
    const toiletry = [];

    props.products.forEach(prod => {
        if (prod.category === "fruits") {
            fruits.push(prod);
        } else if (prod.category === "vegetables") {
            vegetables.push(prod);
        } else if (prod.category === "toiletry") {
            toiletry.push(prod)
        }
    })


    return (
        <div className={Styles.Shop}>
            <Banner />
            <ProductSet products={vegetables} category="vegetables" />
            <ProductSet products={fruits} category="fruits" />
            <ProductSet products={toiletry} category="toiletry" />

            <Link to="/categories">
                <div className={Styles.Others}>
                    all categories
                </div>
            </Link>

        </div>
    )
}

export default ShopView;