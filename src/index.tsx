import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import allReducers from './reducers/index';
import App from './app';
import StoreProvider from './providers/store-provider';

const bootstrapperElement: HTMLElement = document.getElementById('app') as HTMLElement;

const store = StoreProvider.getInstance().store;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    bootstrapperElement);
