import React from 'react';

import Styles from './Backdrop.css';

const Backdrop = props => {

    return (
        <div className={Styles.Backdrop} onClick={props.clicked}></div>
    )
}

export default Backdrop;