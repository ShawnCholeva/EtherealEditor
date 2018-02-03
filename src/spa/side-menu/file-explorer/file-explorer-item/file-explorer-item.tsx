import React, { Component } from 'react';

import { FileDirectoryNode } from '../../../shared/file-directory/file-directory-structure';
import IFileExplorerItem from './file-explorer-item-models';
import FileItem from './file-item/file-item';
import FolderItem from './folder-item/folder-item';

import '../file-explorer.less';

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
