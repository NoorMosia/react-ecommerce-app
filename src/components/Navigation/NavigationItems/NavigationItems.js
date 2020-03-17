import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Styles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

import { MdShoppingCart } from "react-icons/md";

class NavigationItems extends Component {

    render() {

        let cartItemsCount = null;

        if (this.props.numberOfItems > 0) {
            cartItemsCount = <div className={Styles.Alert}>{this.props.numberOfItems}</div>;
        }

        return (
            <div className={Styles.NavigationItems}>
                <NavigationItem item="cart">
                    <div className={Styles.NavigationItemContainer}>
                        <MdShoppingCart />
                        {cartItemsCount}
                    </div>
                </NavigationItem>
                <NavigationItem item="user">
                    <div className={Styles.ImageContainer}>
                        <img src="https://images.unsplash.com/photo-1455274111113-575d080ce8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" alt="profile"></img>
                    </div>
                    <span className={Styles.Username}>
                        Trevor Manuel
                    </span>
                </NavigationItem>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        numberOfItems: state.crt.products.length
    }
}

export default withRouter(connect(mapStateToProps)(NavigationItems));