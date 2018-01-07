import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Icon } from 'react-fa';

import { selectFile } from '../../../actions/file-explorer';
import { closeFile } from '../../../actions/tabs';
import { FileStatus } from '../../../models/enums/file-status';

import './editor-tab.less';

class EditorTab extends Component {
    constructor(props: IFolderItem) {
        super(props);

        this.state = {
            isFocused: false
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

    render() {
        return (
            <div onMouseEnter={() => this.toggleCloseIcon()}
                 onMouseLeave={() => this.toggleCloseIcon()}
                 className={'editor-tab-item ' + (this.props.fileExplorerInfo.selectedFile !== null && this.props.file.path === this.props.fileExplorerInfo.selectedFile.path ? 'selected-tab' : '')}
                 onClick={() => this.selectFile()}>
                <div className='editor-tab-item-content'>
                    <span className='editor-tab-file-icon'>
                        <Icon name='file' />
                    </span>
                    <span>{this.props.file.fileName}</span>
                    {(this.props.file.path === this.props.fileExplorerInfo.selectedFile.path || this.state.isFocused) &&
                        <span className='explorer-item-close-icon' onClick={() => this.closeFile()}>
                            <Icon name='close' />
                        </span>
                    }
                    {(this.props.file.path !== this.props.fileExplorerInfo.selectedFile.path && !this.state.isFocused) &&
                        <span className='explorer-item-close-icon'>
                        </span>
                    }
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