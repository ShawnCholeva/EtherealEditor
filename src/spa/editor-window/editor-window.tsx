import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import EditorFile from './editor-file/editor-file';
import EditorTabs from './editor-tabs/editor-tabs';

import './editor-window.less';
import { IReduxState } from '../shared/interfaces/redux-state';
import { IMainWindow } from './editor-window-interfaces';

class MainWindow extends Component<IMainWindow> {
    render() {
        return (
            <div className='editor-window'>
            { this.props.fileExplorerInfo !== null && this.props.fileExplorerInfo.openFiles.length > 0 &&
                <div>
                    <EditorTabs files={this.props.fileExplorerInfo.openFiles} />
                    <EditorFile file={this.props.fileExplorerInfo.selectedFile}/>
                </div>
            }
            </div>
        );
    }
}

const mapStateToProps = (state: IReduxState) => {
    return {
        fileExplorerInfo: state.fileExplorer
    };
};

export default connect<IMainWindow, null, null, IReduxState>(mapStateToProps)(MainWindow);
