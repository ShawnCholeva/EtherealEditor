import React, { Component } from 'react';

import { IFileExplorer } from '../models/interfaces/file-explorer';
import { FolderItem } from './folder-item';
import { FileDirectoryNode } from '../models/file-directory';

interface IFolderContent {
    files: FileDirectoryNode[];
}

class FolderContent extends Component<IFolderContent> {

    render() {
        return (
            <div>
                <FolderItem folder={this.props.files[0]} isRoot={true} />
            </div>
        );
    }
}

export default FolderContent;
