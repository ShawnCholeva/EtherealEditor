import React, { Component } from 'react';

import { FileDirectoryNode } from '../models/file-directory';

import './folder-item.less';

interface IFileItem {
    file: FileDirectoryNode;
}

export class FileItem extends Component<IFileItem> {
    render(): any {
        return (
            <div className='explorer-item'>
                <span>{this.props.file.fileName}</span>
            </div>
        );
    }
}
