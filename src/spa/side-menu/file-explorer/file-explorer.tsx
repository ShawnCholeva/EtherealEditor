import React, { Component } from 'react';

import FileExplorerItem from './file-explorer-item/file-explorer-item';

import './file-explorer.less';
import IFileExplorer from './file-explorer-interfaces';

export default class FileExplorer extends Component<IFileExplorer> {
    private header: string = 'FILE EXPLORER';

    render() {
        return (
            <div>
                <h3 className='explorer-header'>{this.header}</h3>
                {this.props.fileExplorerDirectory !== null &&
                    <FileExplorerItem item={this.props.fileExplorerDirectory.nodes[0]} isRoot={true} />
                }
            </div>
        );
    }
}
