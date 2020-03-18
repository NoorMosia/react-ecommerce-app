import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../../store/actions/cart';

import { MdAddShoppingCart } from "react-icons/md";
import { IoIosInformationCircleOutline, IoMdDoneAll } from "react-icons/io";
import Aux from '../../hoc/Aux-cover/Aux-cover';

import Modal from '../../components/UI/Modal/Modal';
import styles from "./ProductsCard.module.css";
import ProductInfo from "../../components/Shop/ProductInfo/ProductInfo";

class ProductCard extends Component {
    state = {
        showModal: false
    }

    onViewInfo = () => {
        this.setState({
            ...this.state,
            showModal: true
        })
    }

    onCloseInfo = () => {
        this.setState({
            ...this.state,
            showModal: false
        })
    }

    render() {
        let mod = null;

        if (this.state.showModal) {
            mod = <Modal show={this.state.showModal} close={this.onCloseInfo}>
                <ProductInfo imageUrl={this.props.product.imageUrl} />
            </Modal>
        }

        let cartIcon = <MdAddShoppingCart />;

        this.props.cartProducts.forEach(prod => {
            if (this.props.product.title === prod.title) {
                cartIcon = <IoMdDoneAll />
            }
        });

        return (
            <Aux>
                {mod}

                <div className={styles.ProductCard}>
                    <div className={styles.ImageContainer}>
                        <img src={this.props.product.imageUrl} alt={this.props.product.title} />
                    </div>
                    <div className={styles.TextContainer}>
                        <div className={styles.Title}>
                            {this.props.product.title}
                        </div>
                        <div className={styles.Price}>
                            R {this.props.product.price.toFixed(2)}
                        </div>
                    </div>
                    <div className={styles.Icons}>
                        <div className={styles.Cart} onClick={() => this.props.onAddToCart(this.props.product)}>
                            {cartIcon}
                        </div>
                        <div className={styles.Info} onClick={() => this.onViewInfo()}>
                            <IoIosInformationCircleOutline />
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        cartProducts: state.crt.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddToCart: (item) => dispatch(actions.addToCart(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);