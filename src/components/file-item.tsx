import React, { Component } from 'react';

import { FileDirectoryNode } from '../models/file-directory';

import './folder-item.less';

interface IFileItem {
    file: FileDirectoryNode;
}

export class FileItem extends Component<IFileItem> {
    openFile() {
        console.log(`Opening ${this.props.file.fileName}`);
    }

    render(): any {
        return (
            <div className='explorer-item' onClick={() => this.openFile()}>
                <span>{this.props.file.fileName}</span>
            </div>
        );
    }
}
