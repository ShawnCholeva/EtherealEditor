import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import EditorFile from './editor-file';
import EditorTabs from './tabs/editor-tabs';

import './editor-window.less';

class EditorWindow extends Component {
    render() {
        return (
            <div className='editor-window'>
            { this.props.fileExplorerInfo.openFiles.length > 0 &&
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
