import React, { Component } from 'react';
import { Icon } from 'react-fa';

import { FileDirectoryNode } from '../../models/file-directory';
import FileExplorerItem from './file-explorer-item';
import IFolderItem from '../../models/interfaces/file-explorer/folder-item';
import IFolderState from '../../models/interfaces/file-explorer/folder-state';

import './file-explorer.less';

export default class FolderItem extends Component<IFolderItem, IFolderState> {
    sortedChildren: FileDirectoryNode[] = new Array();
    explorerItemTextStyle = {
        'padding': `2px 0px 2px ${this.props.folder.directoryLevel * 10}px`
    };

    constructor(props: IFolderItem) {
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
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(): any {
        let folderIcon = null;

        if (this.state.isOpen) {
            folderIcon = <Icon name='chevron-down' />;
        } else {
            folderIcon = <Icon name='chevron-right' />;
        }

        return (
            <div>
                <div className={'explorer-item ' + (this.props.isRoot ? 'root-folder' : '')} onClick={() => this.openFolder()}>
                    <span style={this.explorerItemTextStyle}><span className='explorer-item-icon'>{folderIcon}</span>{this.props.folder.fileName}</span>
                </div>
                {this.state.isOpen && this.props.folder.children !== null &&
                    this.sortedChildren.map((item, index) => {
                        return <FileExplorerItem key={index} item={item} isRoot={false}/>;
                    })
                }
            </div>
        );
    }
}
