import React from 'react';

import Aux from '../../../hoc/Aux-cover/Aux-cover';
import Styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
    return (
        <Aux>
            <Backdrop clicked={props.close} />
            <div
                className={Styles.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </Aux>
    )
}

export default Modal;