import React, { Component } from 'react';

import { IFileExplorer } from '../../models/interfaces/file-explorer/file-explorer';
import { IFileExplorerItem } from '../../models/interfaces/file-explorer/file-explorer-item';
import { FileDirectoryNode } from '../../models/file-directory';
import { FileItem } from './file-item';

import './file-explorer.less';
import FolderItem from './folder-item';

export default class FileExplorerItem extends Component<IFileExplorerItem> {
    render(): any {
        let explorerItem = null;

        if (this.props.item.isDirectory) {
            explorerItem = <FolderItem folder={this.props.item} isRoot={this.props.isRoot}/>;
        } else {
            explorerItem = <FileItem file={this.props.item} />;
        }

        return (<div className='file-explorer-item-container'>
                    <div className='file-explorer-item'>
                        {explorerItem}
                    </div>
                </div>
        );
    }
}
