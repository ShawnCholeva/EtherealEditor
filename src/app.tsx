import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SideMenu from './components/side-menu';
import MainWindow from './components/main-window';

import './app.less';

class App extends Component {
    render() {
        return (
            <div className='main-window-container'>
                <div className='side-menu-container'>
                    <SideMenu />
                </div>
                <div className='main-window-container'>
                    <MainWindow />
                </div>
            </div>
        );
    }
}

export default App;
