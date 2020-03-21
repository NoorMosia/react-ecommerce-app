import React, {
    Component
} from 'react';
import {
    BrowserRouter
} from 'react-router-dom';
import {
    Route,
    Switch,
    Redirect
} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Main from "./containers/Main/Main";
import Profile from "./containers/Profile/Profile";
import Cart from './containers/Cart/Cart';

class App extends Component {
    render() {
        return (
            <BrowserRouter >
                <Layout >
                    <Switch >
                        <Route path="/cart" exact component={Cart} /> <Route path="/user" component={Profile}
                        />
                        <Redirect from="/" exact to="/products" />
                        <Route path="/" component={Main} />
                    </Switch>
                </Layout>
            </BrowserRouter >
        );
    }
}

export default App;