import React from 'react';
import { IoIosSettings, IoIosNotifications } from "react-icons/io";
import { IoIosList } from "react-icons/io";

import Styles from './ProfileNav.css';
import ProfileNavItem from './ProfileNavItem/ProfileNavItem';

const ProfileNav = (props) => {

    return (
        <div className={Styles.ProfileNav}>
            <ProfileNavItem link="/user/orders">
                <span className={Styles.Icon}>
                    <IoIosList />
                </span>
                <span className={Styles.Text}>
                    orders
                </span>
            </ProfileNavItem>
            <ProfileNavItem link="/user/settings">
                <span className={Styles.Icon}>
                    <IoIosSettings /> 
                </span>
                <span className={Styles.Text}>
                    Settings
                </span>
            </ProfileNavItem>
            <ProfileNavItem link="/user/messages">
                <span className={Styles.Icon}>
                    <IoIosNotifications /> 
                </span>
                <span className={Styles.Text}>
                    Notifications
                </span>
            </ProfileNavItem>
        </div>
    )
}

export default ProfileNav;