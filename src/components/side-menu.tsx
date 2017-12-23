import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import FileExplorer from '../containers/file-explorer';

const container = {
    border: '1px solid white',
    height: '98vh'
};

class SideMenu extends Component {
    render() {
        return (
            <div style={container}>
                <FileExplorer />
            </div>
        );
    }
}

export default SideMenu;
