import React, { Component } from 'react';
import { Icon } from 'react-fa';

import { FileDirectoryNode } from '../../../../shared/file-directory/file-directory-models';
import FileExplorerItem from '../file-explorer-item';
import { IFolderItem, IFolderState } from './folder-item-interfaces';
import { FileStatus } from '../../../../shared/enums/file-status';

import './folder-item.less';

export default class FolderItem extends Component<IFolderItem, IFolderState> {
    sortedChildren: FileDirectoryNode[] = new Array();
    folderItemTextStyle = {
        'padding': `2px 0px 2px ${this.props.folder.directoryLevel * 10}px`
    };

    constructor(props: IFolderItem) {
        super(props);

        this.state = {
            isOpen: this.props.folder.status === FileStatus.Open ? true : false
        };
    }

    sortChildren() {
        if (this.props.folder.children !== null) {
            this.sortedChildren = this.props.folder.children.sort((currentChildItem: FileDirectoryNode, nextChildItem: FileDirectoryNode): number => {
                let child1 = currentChildItem.isDirectory;
                let child2 = nextChildItem.isDirectory;

                let child1Name = currentChildItem.fileName.toUpperCase();
                let child2Name = nextChildItem.fileName.toUpperCase();

                return (child1 > child2) ? -1 : (child1 < child2) ? 1 : 0 || (child1Name < child2Name) ? -1 : (child1Name > child2Name) ? 1 : 0;
            });
        }
    }

    openFolder() {
        if (this.props.folder.status === FileStatus.Open) {
            this.props.folder.status = FileStatus.Closed;
            this.setState({
                isOpen: false
            });
        } else {
            this.props.folder.status = FileStatus.Open;
            this.setState({
                isOpen: true
            });
        }
    }

    // TODO: Why do we need any here but not on the other components?
    render(): any {
        this.sortChildren();

        let folderIcon = null;

        if (this.state.isOpen) {
            folderIcon = <Icon name='chevron-down' />;
        } else {
            folderIcon = <Icon name='chevron-right' />;
        }

        return (
            <div>
                <div className={'explorer-item ' + (this.props.isRoot ? 'root-folder' : '')} onClick={() => this.openFolder()}>
                    <span style={this.folderItemTextStyle}><span className='explorer-item-icon'>{folderIcon}</span>{this.props.folder.fileName}</span>
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
