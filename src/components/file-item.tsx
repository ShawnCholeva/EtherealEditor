import React, { Component } from 'react';

import { FileDirectoryNode } from '../models/file-directory';

import './file-explorer.less';

interface IFileItem {
    file: FileDirectoryNode;
}

export class FileItem extends Component<IFileItem> {
    explorerItemTextStyle = {
        'padding': `2px 0px 2px ${this.props.file.directoryLevel * 10}px`
    };

    openFile() {
        console.log(`Opening ${this.props.file.fileName}`);
    }

    render(): any {
        return (
            <div onClick={() => this.openFile()} className='explorer-item'>
                <span style={this.explorerItemTextStyle}>{this.props.file.fileName}</span>
            </div>
        );
    }
}
