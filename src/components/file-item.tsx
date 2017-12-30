import React, { Component } from 'react';

import { FileDirectoryNode } from '../models/file-directory';

import './folder-content.less';

interface IFileItem {
    file: FileDirectoryNode;
}

export class FileItem extends Component<IFileItem> {
    openFile() {
        console.log(`Opening ${this.props.file.fileName}`);
    }

    render(): any {
        return (
            <div onClick={() => this.openFile()} className='explorer-item'>
                <span className='explorer-item-text'>{this.props.file.fileName}</span>
            </div>
        );
    }
}
