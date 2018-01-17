import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import FileExplorer from '../components/file-explorer/file-explorer';
import { ISideMenu, ISideMenuReduxState } from '../models/interfaces/side-menu';
import FileExplorerReducerState from '../models/reducers/file-explorer/file-explorer-state';
import { FileDirectoryTree } from '../models/file-directory';

class SideMenu extends Component<ISideMenu, {}> {
    render() {
        return (
            <div>
                {this.props.fileExplorerInfo !== null &&
                    <FileExplorer fileExplorerDirectory={this.props.fileExplorerInfo.fileExplorerDirectory}/>
                }
            </div>
        );
    }
}

const mapStateToProps = (state: ISideMenuReduxState) => {
    return {
        fileExplorerInfo: state.fileExplorer
    };
};

export default connect<{}, {}, ISideMenu, ISideMenuReduxState>(mapStateToProps, {})(SideMenu);
