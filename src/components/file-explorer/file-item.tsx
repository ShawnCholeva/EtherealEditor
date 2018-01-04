import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Icon } from 'react-fa';

import { FileDirectoryNode } from '../../models/file-directory';
import IFileItem from '../../models/interfaces/file-explorer/file-item';
import { selectFile, openFile } from '../../actions/file-explorer';

import './file-explorer.less';

class FileItem extends Component<IFileItem> {
    explorerItemTextStyle = {
        'padding': `2px 0px 2px ${this.props.file.directoryLevel * 10}px`
    };

    openFile() {
        this.props.selectFile(this.props.file);
        this.props.openFile(this.props.file);
    }

    render() {
        return (
            <div onClick={() => this.openFile()} className={'explorer-item ' + (this.props.file.path === this.props.fileExplorerInfo.selectedFile.path ? 'selected-file' : '')}>
                <span style={this.explorerItemTextStyle}><span className='explorer-item-icon'><Icon name='file' /></span>{this.props.file.fileName}</span>
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
    return bindActionCreators({ selectFile: selectFile, openFile: openFile }, dispatch);
};

export default connect<any, {}, {}, any>(mapStateToProps, mapDispatchToProps)(FileItem);
