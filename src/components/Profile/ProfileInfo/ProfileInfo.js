import React from 'react';
import { Route } from 'react-router-dom'

import Styles from './ProfileInfo.css';
import InfoHead from './InfoHead/InfoHead';
import ProfileNav from '../ProfileNav/ProfileNav';
import Orders from '../Orders/Orders';
import Settings from '../Settings/Settings';

const ProfileInfo = () => {

    return (
        <div className={Styles.ProfileInfo}>
            <InfoHead />
            <ProfileNav />
            <Route path="/user/orders" component={Orders} />
            <Route path="/user/settings" component={Settings} />
        </div>
    )
}

export default ProfileInfo;