import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from 'react-redux';

import Styles from "./Main.css";

import Links from "../../components/Shop/Anchors/Anchors";
import Shop from "../../components/Shop/ShopView/ShopView";
import Categories from "../../components/Categories/Categories";
import CategoryView from "../../components/Category-view/Category-view";
import Suppliers from '../../components/Suppliers/Supplers';

class Main extends Component {
    state = {
        modalShow: true
    }

    render() {
        return (
            <div className={Styles.Main}>
                <div className={Styles.Links}>
                    <Links />
                </div>
                <div className={Styles.Products}>
                    <Route path="/products" render={() => <Shop products={this.props.products} />} />
                    <Route path="/categories" exact render={() => <Categories categories={this.props.categories} />} />
                    <Route path="/categories/:id" render={() => <CategoryView products={this.props.products} />} />
                    <Route path="/suppliers" render={() => <Suppliers suppliers={this.props.supplierData} />} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.prod.products,
        categories: state.prod.categories,
        supplierData: state.prod.suppliers
    }
}

export default connect(mapStateToProps)(Main);