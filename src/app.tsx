import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SideMenu from './containers/side-menu';
import EditorWindow from './components/editor-window';

import './app.less';

class App extends Component {
    render() {
        return (
            <div className='main-window-container'>
                <div className='side-menu-container'>
                    <SideMenu />
                </div>
                <div className='editor-window-container'>
                    <EditorWindow />
                </div>
            </div>
        );
    }
}

export default App;
