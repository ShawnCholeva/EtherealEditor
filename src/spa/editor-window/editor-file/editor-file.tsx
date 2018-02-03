import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { IEditorFile } from './editor-file-interfaces';

class EditorFile extends Component<IEditorFile> {
    render() {
        return (
            <div>
                <span>File</span>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        fileExplorerInfo: state.fileExplorer
    };
};

export default connect<any, {}, {}, any>(mapStateToProps)(EditorFile);
