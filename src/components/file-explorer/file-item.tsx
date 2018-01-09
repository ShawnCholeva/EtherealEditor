import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Icon } from 'react-fa';

import { FileDirectoryNode } from '../../models/file-directory';
import IFileItem from '../../models/interfaces/file-explorer/file-item';
import { selectFile, openFile } from '../../actions/file-explorer';
import { FileStatus } from '../../models/enums/file-status';

import './file-explorer.less';

class FileItem extends Component<IFileItem> {
    explorerItemTextStyle = {
        'padding': `2px 0px 2px ${this.props.file.directoryLevel * 10}px`
    };

    openFile() {
        this.props.file.status = FileStatus.Open;
        this.props.selectFile(this.props.file);
        this.props.openFile(this.props.file);
    }

    selectFile() {
        if (this.props.file.status !== FileStatus.Open) {
            this.props.file.status = FileStatus.Selected;
        }

        this.props.selectFile(this.props.file);
        this.props.openFile(this.props.file);
    }

    render() {
        return (
            <div onDoubleClick={() => this.openFile()}
                 onClick={() => this.selectFile()}
                 className={'explorer-item ' + (this.props.fileExplorerInfo.selectedFile !== null && this.props.file.path === this.props.fileExplorerInfo.selectedFile.path ? 'selected-file' : '')}>
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
