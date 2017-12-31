import React, { Component } from 'react';

import { IFileExplorer } from '../models/interfaces/file-explorer';
import { FileDirectoryNode } from '../models/file-directory';
import FileExplorerItem from './file-explorer-item';

import './file-explorer.less';

interface IFolderItem {
    folder: FileDirectoryNode;
}

interface IFolderState {
    isOpen: boolean;
}

export class FolderItem extends Component<IFolderItem, IFolderState> {

    sortedChildren: FileDirectoryNode[] = new Array();
    explorerItemTextStyle = {
        'padding': `2px 0px 2px ${this.props.folder.directoryLevel * 10}px`
    };
    constructor(props: any) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    componentDidMount() {
        if (this.props.folder.children !== null) {
            this.sortedChildren = this.props.folder.children.sort((currentChildItem, nextChildItem): any => {
                let child1 = currentChildItem.isDirectory;
                let child2 = nextChildItem.isDirectory;

                let child1Name = currentChildItem.fileName.toUpperCase();
                let child2Name = nextChildItem.fileName.toUpperCase();

                return (child1 > child2) ? -1 : (child1 < child2) ? 1 : 0 || (child1Name < child2Name) ? -1 : (child1Name > child2Name) ? 1 : 0;
            });
        }
    }

    openFolder() {
        console.log(this.props.folder.directoryLevel);
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(): any {
        return (
            <div>
                <div className='explorer-item' onClick={() => this.openFolder()}>
                    <span style={this.explorerItemTextStyle}>{this.props.folder.fileName}</span>
                </div>
                {this.state.isOpen && this.props.folder.children !== null &&
                    this.sortedChildren.map((item, index) => {
                        return <FileExplorerItem key={index} item={item} />;
                    })
                }
            </div>
        );
    }
}
