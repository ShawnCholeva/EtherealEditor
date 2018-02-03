import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { IEditorFile, IEditorFilePassedProps, IEditorFileReduxProps } from './editor-file-interfaces';
import { IReduxState } from '../../shared/interfaces/redux-state';

class EditorFile extends Component<IEditorFile> {
    render() {
        return (
            <div>
                <span>File</span>
            </div>
        );
    }
}

const mapStateToProps = (state: IReduxState): IEditorFileReduxProps => {
    return {
        fileExplorerInfo: state.fileExplorer
    };
};

export default connect<IEditorFileReduxProps, null, IEditorFilePassedProps, IReduxState>(mapStateToProps)(EditorFile);
