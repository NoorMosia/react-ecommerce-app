import React from 'react';
import { withRouter } from 'react-router-dom';

import Aux from '../../hoc/Aux-cover/Aux-cover';
import Styles from './Category-view.module.css';
import Card from "../../containers/ProductCard/ProductsCard";

const CatView = (props) => {
    const prods = [];

    props.products.forEach(product => {
        if (product.category === props.match.params.id) {
            prods.push(product)
        }
    })

    const nprods = prods.map(prod => {
        return <Card key={prod.title} product={prod} />
    })

    return (
        <Aux>
            <h1 className={Styles.Header}>{props.match.params.id}</h1>
            <div className={Styles.categoryView}>
                {nprods}
            </div>
        </Aux>
    )
}

export default withRouter(CatView);