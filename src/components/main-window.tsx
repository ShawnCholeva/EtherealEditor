import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import EditorFile from './editor/editor-file';
import EditorTabs from './editor/tabs/editor-tabs';

import './main-window.less';
import { IMainWindow } from '../models/interfaces/main-window';

// TODO: Rename this class to MainWindow
class MainWindow extends Component<IMainWindow> {
    render() {
        return (
            <div className='main-window'>
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

const mapStateToProps = (state: any) => {
    return {
        fileExplorerInfo: state.fileExplorer
    };
};

export default connect<any, {}, null, any>(mapStateToProps)(MainWindow);
