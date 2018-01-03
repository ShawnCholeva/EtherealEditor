import React, { Component } from 'react';

import { FileDirectoryNode } from '../../models/file-directory';
import IFileExplorer from '../../models/interfaces/file-explorer/file-explorer';
import IFileExplorerItem from '../../models/interfaces/file-explorer/file-explorer-item';
import FileItem from './file-item';
import FolderItem from './folder-item';

import './file-explorer.less';

export default class FileExplorerItem extends Component<IFileExplorerItem> {
    render() {
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
