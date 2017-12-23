import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers/index';
import SideMenu from './components/side-menu';

const mainWindowContainerStyle = {
    display: 'inline-block'
};

const menuContainerStyle = {
    display: 'inline-block',
    width: '15%'
};

const bootstrapperElement: HTMLElement = document.getElementById('app') as HTMLElement;

const store = createStore(
    allReducers
);

ReactDOM.render(
    <Provider store={store}>
        <SideMenu />
    </Provider>,
    bootstrapperElement);
