import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SideMenu from './spa/side-menu/side-menu';
import MainWindow from './spa/editor-window/editor-window';

import './app.less';

class App extends Component {
    render() {
        return (
            <div className='app-window-container'>
                <div className='side-menu-container'>
                    <SideMenu />
                </div>
                <div className='editor-window-container'>
                    <MainWindow />
                </div>
            </div>
        );
    }
}

export default App;
