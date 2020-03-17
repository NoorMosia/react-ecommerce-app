import React from 'react';

import Styles from './InfoHead.css';

const InfoHead = () => {

    return (
        <div className={Styles.InfoHead}>
            <div className={Styles.ImageContainer}>
                <img src="https://images.unsplash.com/photo-1455274111113-575d080ce8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" alt="logged in user" />
            </div>
            <div className={Styles.TextContainer}>
                <div className={Styles.Name}>
                    trevor manuel
                </div>
                <div className={Styles.Age}>
                    Age: 26
                </div>
            </div>
        </div>
    )
}

export default InfoHead;