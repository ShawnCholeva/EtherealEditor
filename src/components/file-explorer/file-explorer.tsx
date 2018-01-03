import React, { Component } from 'react';

import { IFileExplorer } from '../../models/interfaces/file-explorer/file-explorer';
import FileExplorerItem from './file-explorer-item';

import './file-explorer.less';

export default class FileExplorer extends Component<IFileExplorer> {
    render() {
        return (
            <div className='explorer-container'>
                <h3 className='explorer-header' onClick={() => console.log(this.props.fileExplorerTree)}>FILE EXPLORER</h3>
                <div className='content'>
                {this.props.fileExplorerTree !== null &&
                    <FileExplorerItem item={this.props.fileExplorerTree.nodes[0]} isRoot={true} />
                }
                </div>
            </div>
        );
    }
}
