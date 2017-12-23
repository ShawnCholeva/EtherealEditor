import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import FileExplorer from '../containers/file-explorer';

const menuContainerStyle = {
    color: 'red'
};

class SideMenu extends Component {
    render() {
        return (
            <div style={menuContainerStyle}>
                <FileExplorer />
            </div>
        );
    }
}

export default SideMenu;
