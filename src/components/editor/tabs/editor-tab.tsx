import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Icon } from 'react-fa';

import { selectFile } from '../../../actions/file-explorer';
import { closeFile } from '../../../actions/tabs';
import { FileStatus } from '../../../models/enums/file-status';

import './editor-tab.less';
import { IEditorTabProps, IEditorTabState, IEditorTabPassedProps, IEditorTabDispatchProps, IEditorTabReduxProps } from '../../../models/interfaces/tabs/editor-tab';
import IFolderItem from '../../../models/interfaces/file-explorer/folder-item';
import { IReduxState } from '../../../models/interfaces/redux-state';

class EditorTab extends Component<IEditorTabProps, IEditorTabState> {
    constructor(props: IEditorTabProps) {
        super(props);

        this.state = {
            isFocused: false,
            fileStatus: this.props.file.status
        };
    }

    selectFile() {
        if (this.props.file.status !== FileStatus.Closed) {
            this.props.selectFile(this.props.file);
        }
    }

    closeFile() {
        this.props.file.status = FileStatus.Closed;
        this.props.closeFile(this.props.file);
    }

    toggleCloseIcon() {
        this.setState({
            isFocused: !this.state.isFocused
        });
    }

    setOpenFileStatus() {
        this.props.file.status = FileStatus.Open;
        this.setState({
            fileStatus: FileStatus.Open
        });
    }

    render() {
        return (
            <div onMouseEnter={() => this.toggleCloseIcon()}
                 onMouseLeave={() => this.toggleCloseIcon()}
                 className={'editor-tab-item ' + (this.props.fileExplorerInfo.selectedFile !== null && this.props.file.path === this.props.fileExplorerInfo.selectedFile.path ? 'selected-tab' : '')}
                 onClick={() => this.selectFile()}
                 onDoubleClick={() => this.setOpenFileStatus()}>
                <div className='editor-tab-item-content'>
                    <span className='editor-tab-file-icon'>
                        <Icon name='file' />
                    </span>
                    <span className={this.props.file.status === FileStatus.Selected ? 'preview-tab' : ''}>{this.props.file.fileName}</span>
                    {(this.props.file.path === this.props.fileExplorerInfo.selectedFile.path || this.state.isFocused) &&
                        <span className='explorer-item-close-icon' onClick={() => this.closeFile()}>
                            <Icon name='close' />
                        </span>
                    }
                    {(this.props.file.path !== this.props.fileExplorerInfo.selectedFile.path && !this.state.isFocused) &&
                        <span className='explorer-item-close-icon'>
                            <span className='icon-place-holder'><Icon name='close' /></span>
                        </span>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: IReduxState): IEditorTabReduxProps => {
    return {
        fileExplorerInfo: state.fileExplorer
    };
};

const mapDispatchToProps = (dispatch: Dispatch): IEditorTabDispatchProps => {
    return bindActionCreators({ selectFile: selectFile, closeFile: closeFile }, dispatch);
};

export default connect<IEditorTabReduxProps, IEditorTabDispatchProps, IEditorTabPassedProps, IReduxState>(mapStateToProps, mapDispatchToProps)(EditorTab);
