import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SideMenu from './containers/side-menu';

const mainWindowContainerStyle = {
    border: '1px solid white',
    height: '98vh'
};

const sideMenuContainerStyle = {
    display: 'inline-block',
    width: '15%',
    border: '1px solid red',
    height: '100%'
};

class App extends Component {
    render() {
        return (
            <div style={mainWindowContainerStyle}>
                <div style={sideMenuContainerStyle}>
                    <SideMenu />
                </div>
            </div>
        );
    }
}

export default App;
