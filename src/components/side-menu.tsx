import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import FileExplorer from '../components/file-explorer/file-explorer';
import { ISideMenuReduxState, ISideMenu } from '../models/interfaces/side-menu';
import { FileExplorerReducerState } from '../models/reducers/file-explorer-reducer-model';
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

const mapStateToProps = (state: any) => {
    return {
        fileExplorerInfo: state.fileExplorer
    };
};

export default connect<ISideMenu, null, null, any>(mapStateToProps)(SideMenu);
