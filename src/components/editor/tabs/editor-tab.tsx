import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Icon } from 'react-fa';

import { selectFile } from '../../../actions/file-explorer';
import { closeFile } from '../../../actions/tabs';

import './editor-tab.less';

class EditorTab extends Component {
    selectFile() {
        this.props.selectFile(this.props.file);
    }

    closeFile() {
        this.props.closeFile(this.props.file);
    }

    render() {
        return (
            <div className={'editor-tab-item ' + (this.props.file.path === this.props.fileExplorerInfo.selectedFile.path ? 'selected-tab' : '')}
                 onClick={() => { this.selectFile(); }}>
                <div className='editor-tab-item-content'>
                    <span className='editor-tab-file-icon'><Icon name='file' /></span><span>{this.props.file.fileName}</span><span className='explorer-item-close-icon' onClick={() => this.closeFile()}><Icon name='close' /></span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        fileExplorerInfo: state.fileExplorer
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({ selectFile: selectFile, closeFile: closeFile }, dispatch);
};

export default connect<any, {}, {}, any>(mapStateToProps, mapDispatchToProps)(EditorTab);
