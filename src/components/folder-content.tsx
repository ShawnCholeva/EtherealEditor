import React, { Component } from 'react';
import { IFileExplorer } from '../models/interfaces/file-explorer';
import FileExplorerItem from './file-explorer-item';
import { FileDirectoryNode } from '../models/file-directory';
import { Icon } from 'react-fa';
import './file-explorer.less';

interface IFolderContent {
    files: FileDirectoryNode[];
}

interface IFolderContentState {
    isOpen: boolean;
}

class FolderContent extends Component<IFolderContent, IFolderContentState> {
    sortedChildren: FileDirectoryNode[] = new Array();

    constructor(props: any) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    componentDidMount() {
        if (this.props.files[0].children !== null) {
            this.sortedChildren = this.props.files[0].children.sort((currentChildItem, nextChildItem): any => {
                let child1 = currentChildItem.isDirectory;
                let child2 = nextChildItem.isDirectory;

                let child1Name = currentChildItem.fileName.toUpperCase();
                let child2Name = nextChildItem.fileName.toUpperCase();

                return (child1 > child2) ? -1 : (child1 < child2) ? 1 : 0 || (child1Name < child2Name) ? -1 : (child1Name > child2Name) ? 1 : 0;
            });
        }
    }

    openRootFolder() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        let folderIcon = null;

        if (this.state.isOpen) {
            folderIcon = <Icon name='chevron-down'/>;
        } else {
            folderIcon = <Icon name='chevron-right' />;
        }

        return (
            <div>
                <div className='root-folder' onClick={() => this.openRootFolder()}>
                    <span className='explorer-item-icon'>{folderIcon}</span>
                    <span>{this.props.files[0].fileName}</span>
                </div>
                {this.state.isOpen && this.props.files[0].children !== null &&
                    this.sortedChildren.map((item, index) => {
                        return <div key={index} className='nested-file-item'><FileExplorerItem item={item} /></div>;
                    })
                }
            </div>
        );
    }
}

export default FolderContent;
