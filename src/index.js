import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import productsReducer from './store/reducers/productsReducer';
import cartReducer from './store/reducers/cartReducer';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
    prod: productsReducer,
    crt: cartReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
