import React from 'react';

import Styles from './Settings.module.css';
import Setting from './Setting/Setting';

const Settings = (props) => {

    return (
        <div className={Styles.Settings}>
            <Setting />
        </div>
    )
}

export default Settings;