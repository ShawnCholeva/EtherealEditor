import React, { Component } from 'react';

import { FileDirectoryNode } from '../../../shared/file-directory/file-directory-models';
import { IFileExplorerItem } from './file-explorer-item-interfaces';
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

        return (<div>
                    {explorerItem}
                </div>
        );
    }
}
