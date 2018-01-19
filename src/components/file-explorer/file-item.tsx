import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Icon } from 'react-fa';

import { FileDirectoryNode } from '../../models/file-directory';
import { IFileItemProps, IFileItemDispatchProps, IFilePassedProps, IFileItemReduxProps, IFileItemReduxState } from '../../models/interfaces/file-explorer/file-item';
import { selectFile, openFile } from '../../actions/file-explorer';
import { FileStatus } from '../../models/enums/file-status';

import './file-explorer.less';

class FileItem extends Component<IFileItemProps & IFileItemDispatchProps> {
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

const mapStateToProps = (state: IFileItemReduxState): IFileItemReduxProps => {
    return {
        fileExplorerInfo: state.fileExplorer
    };
};

const mapDispatchToProps = (dispatch: Dispatch): IFileItemDispatchProps => {
    return bindActionCreators({ selectFile: selectFile, openFile: openFile }, dispatch);
};

export default connect<IFileItemReduxProps, IFileItemDispatchProps, IFilePassedProps, IFileItemReduxState>(mapStateToProps, mapDispatchToProps)(FileItem);
