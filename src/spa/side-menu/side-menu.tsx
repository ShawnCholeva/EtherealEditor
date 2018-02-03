import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import FileExplorer from '../side-menu/file-explorer/file-explorer';
import { ISideMenu, ISideMenuReduxProps } from './side-menu-interfaces';
import { FileDirectoryTree } from '../shared/file-directory/file-directory-models';
import { IReduxState } from '../shared/interfaces/redux-state';

import './side-menu.less';

class SideMenu extends Component<ISideMenu> {
    render() {
        return (
            <div className='side-menu-wrapper'>
                {this.props.fileExplorerInfo !== null &&
                    <FileExplorer fileExplorerDirectory={this.props.fileExplorerInfo.fileExplorerDirectory}/>
                }
            </div>
        );
    }
}

const mapStateToProps = (state: IReduxState): ISideMenuReduxProps => {
    return {
        fileExplorerInfo: state.fileExplorer
    };
};

export default connect<ISideMenuReduxProps, null, null, IReduxState>(mapStateToProps)(SideMenu);
