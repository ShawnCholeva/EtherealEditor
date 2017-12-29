import React, { Component } from 'react';

import { IFileExplorer } from '../models/interfaces/file-explorer';
import { FileDirectoryNode } from '../models/file-directory';
import { FileItem } from './file-item';

import './folder-item.less';

interface IFolderItem {
    isRoot: boolean;
    folder: FileDirectoryNode;
}

interface IFolderState {
    isOpen: boolean;
}

export class FolderItem extends Component<IFolderItem, IFolderState> {

    sortedChildren: any[] = [];
    constructor(props: any) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    componentDidMount() {
        if (this.props.folder.children !== null) {
            this.sortedChildren = this.props.folder.children.sort((currentChildItem, nextChildItem): any => {
                let child1 = currentChildItem.fileType.toUpperCase();
                let child2 = nextChildItem.fileType.toUpperCase();

                let child1Name = currentChildItem.fileName.toUpperCase();
                let child2Name = nextChildItem.fileName.toUpperCase();

                return (child1 < child2) ? -1 : (child1 > child2) ? 1 : 0 || (child1Name < child2Name) ? -1 : (child1Name > child2Name) ? 1 : 0;
            });
        }
    }

    openFolder() {
        this.setState({
            isOpen: !this.state.isOpen
        });

        console.log(this.sortedChildren);
    }

    render(): any {
        return (
            <div className='explorer-item'>
                <span className={this.props.isRoot ? 'root-folder' : ''} onClick={() => this.openFolder()}>{this.props.folder.fileName}</span>
                {this.state.isOpen && this.props.folder.children !== null &&
                    this.sortedChildren.map((item, index) => {
                        if (item.fileType === 'directory') {
                            return <FolderItem key={index} folder={item} isRoot={false} />;
                        } else {
                            return <FileItem key={index} file={item} />;
                        }
                    })
                }
            </div>
        );
    }
}
