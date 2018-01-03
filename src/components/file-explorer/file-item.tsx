import React, { Component } from 'react';
import { Icon } from 'react-fa';

import { FileDirectoryNode } from '../../models/file-directory';
import IFileItem from '../../models/interfaces/file-explorer/file-item';

import './file-explorer.less';

export default class FileItem extends Component<IFileItem> {
    explorerItemTextStyle = {
        'padding': `2px 0px 2px ${this.props.file.directoryLevel * 10}px`
    };

    openFile() {
        console.log(`Opening ${this.props.file.fileName} from ${this.props.file.path}`);
    }

    render() {
        return (
            <div onClick={() => this.openFile()} className='explorer-item'>
                <span style={this.explorerItemTextStyle}><span className='explorer-item-icon'><Icon name='file' /></span>{this.props.file.fileName}</span>
            </div>
        );
    }
}
