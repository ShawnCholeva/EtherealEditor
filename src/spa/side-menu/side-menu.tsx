import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import FileExplorer from '../side-menu/file-explorer/file-explorer';
import { ISideMenuReduxState, ISideMenu } from './side-menu-interfaces';
import { FileExplorerReducerState } from '../shared/file-directory/file-directory-reducer-models';
import { FileDirectoryTree } from '../shared/file-directory/file-directory-structure';

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

const mapStateToProps = (state: any) => {
    return {
        fileExplorerInfo: state.fileExplorer
    };
};

export default connect<ISideMenu, null, null, any>(mapStateToProps)(SideMenu);
