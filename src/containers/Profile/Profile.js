import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Styles from './Profile.module.css';
import ProfileInfo from '../../components/Profile/ProfileInfo/ProfileInfo';

class Profile extends Component {

    render() {
        return (
            <div className={Styles.Profile}>
                <Route path="/user" render={() => <ProfileInfo />} />
            </div>
        )
    }
}

export default Profile;