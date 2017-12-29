import React, { Component } from 'react';

import { IFileExplorer } from '../models/interfaces/file-explorer';
import { FileDirectoryNode } from '../models/file-directory';
import { FileItem } from './file-item';

import './folder-item.less';

interface IFolderItem {
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
    }

    render(): any {
        return (
            <div>
                <div className='explorer-item-title'>
                <span onClick={() => this.openFolder()}>{this.props.folder.fileName}</span>
                </div>
                {this.state.isOpen && this.props.folder.children !== null &&
                    this.sortedChildren.map((item, index) => {
                        if (item.fileType === 'directory') {
                            return <div key={index} className='explorer-item'><FolderItem folder={item} /></div>;
                        } else {
                            return <div key={index} className='explorer-item'><FileItem file={item} /></div>;
                        }
                    })
                }
            </div>
        );
    }
}
