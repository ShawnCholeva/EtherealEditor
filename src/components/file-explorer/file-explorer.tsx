import React, { Component } from 'react';

import IFileExplorer from '../../models/interfaces/file-explorer/file-explorer';
import FileExplorerItem from './file-explorer-item';

import './file-explorer.less';

export default class FileExplorer extends Component<IFileExplorer> {
    render() {
        return (
            <div className='explorer-container'>
                <h3 className='explorer-header'>FILE EXPLORER</h3>
                <div className='content'>
                {this.props.fileExplorerDirectory !== null &&
                    <FileExplorerItem item={this.props.fileExplorerDirectory.nodes[0]} isRoot={true} />
                }
                </div>
            </div>
        );
    }
}
