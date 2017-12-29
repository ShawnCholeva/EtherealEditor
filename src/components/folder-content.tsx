import React, { Component } from 'react';

import { IFileExplorer } from '../models/interfaces/file-explorer';

import { FolderItem } from './folder-item';
import { FileItem } from './file-item';

import { FileDirectoryNode } from '../models/file-directory';

interface IFolderContent {
    files: FileDirectoryNode[];
}

interface IFolderContentState {
    isOpen: boolean;
}

class FolderContent extends Component<IFolderContent, IFolderContentState> {

    constructor(props: any) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    openRootFolder() {
        this.setState({
            isOpen: true
        });
    }

    render() {
        return (
            <div>
                <div>
                    <span className='root-folder' onClick={() => this.openRootFolder()}>{this.props.files[0].fileName}</span>
                </div>
                {this.state.isOpen && this.props.files[0].children !== null &&
                    this.props.files[0].children.map((item, index) => {
                        if (item.fileType === 'directory') {
                            return <FolderItem key={index} folder={item} />;
                        } else {
                            return <FileItem key={index} file={item} />;
                        }
                    })
                }
            </div>
        );
    }
}

export default FolderContent;
