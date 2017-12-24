import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SideMenu from './containers/side-menu';
require('./app.less');

class App extends Component {
    render() {
        return (
            <div className='main-window-container'>
                <div className='side-menu-container'>
                    <SideMenu />
                </div>
            </div>
        );
    }
}

export default App;
