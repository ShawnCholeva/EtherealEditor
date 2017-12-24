import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import FileExplorer from '../components/file-explorer';
import { ISideMenu, ISideMenuState } from '../models/interfaces/side-menu';

class SideMenu extends Component<ISideMenu> {
    render() {
        return (
            <div>
                <FileExplorer fileExplorerTree={this.props.fileExplorerTree}/>
            </div>
        );
    }
}

const mapStateToProps = (state: ISideMenuState) => {
    return {
        fileExplorerTree: state.fileExplorer
    };
};

export default connect<ISideMenu, {}, {}, ISideMenuState>(mapStateToProps)(SideMenu);
