import React, { Component } from 'react';

import { IoIosTrash, IoIosInformationCircleOutline, IoIosAddCircle, IoIosRemoveCircleOutline } from "react-icons/io";

import Aux from '../../../hoc/Aux-cover/Aux-cover';
import Styles from './CartItem.module.css';
import Modal from '../../UI/Modal/Modal';
import ProductInfo from '../../Shop/ProductInfo/ProductInfo';

class CartItem extends Component {
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
        let modal = null;

        if (this.state.showModal) {
            modal = <Modal show={this.state.showModal} close={this.onCloseInfo}>
                <ProductInfo imageUrl={this.props.product.imageUrl} />
            </Modal>
        }

        return (
            <Aux>
                {modal}
                <div className={Styles.CartItem} >
                    <div className={Styles.ImageContainer}>
                        <img src={this.props.product.imageUrl} alt={this.props.product.title} />
                    </div>
                    <div className={Styles.Text}>
                        <div className={Styles.Name}>
                            {this.props.product.title}
                        </div>
                        <div className={Styles.Price}>
                            R {this.props.product.price}
                        </div>
                        <div className={Styles.Qty}>
                            Quantity: {this.props.product.quantity}
                            <div className={Styles.QtyIcons}>
                                <span className={Styles.Subtract} >
                                    <IoIosRemoveCircleOutline onClick={this.props.dec} />
                                </span>
                                <span className={Styles.Add} onClick={this.props.inc}>
                                    <IoIosAddCircle />
                                </span>
                            </div>
                        </div>

                    </div>

                    <div className={Styles.Icons}>
                        <span className={Styles.More} onClick={this.onViewInfo}>
                            <IoIosInformationCircleOutline />
                        </span>

                        <span className={Styles.Remove} onClick={this.props.clicked}>
                            <IoIosTrash />
                        </span>
                    </div>
                </div>
            </Aux>
        )
    }
}

export default CartItem;