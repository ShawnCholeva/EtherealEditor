import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import EditorFile from './editor/editor-file';
import EditorTabs from './editor/tabs/editor-tabs';

import './editor-window.less';
import { IEditorWindow } from '../models/interfaces/editor-window';

// TODO: Rename this class to MainWindow
class EditorWindow extends Component<IEditorWindow> {
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

const mapStateToProps = (state: any) => {
    return {
        fileExplorerInfo: state.fileExplorer
    };
};

export default connect<any, {}, {}, any>(mapStateToProps)(EditorWindow);
