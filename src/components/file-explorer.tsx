import React, { Component } from 'react';

import { IFileExplorer } from '../models/interfaces/file-explorer';
import FolderContent from './folder-content';

import './file-explorer.less';

class FileExplorer extends Component<IFileExplorer> {
    render() {
        return (
            <div className='explorer-container'>
                <h3 className='explorer-header' onClick={() => console.log(this.props.fileExplorerTree)}>FILE EXPLORER</h3>
                <div id='contents'>
                {this.props.fileExplorerTree !== null &&
                    <FolderContent files={this.props.fileExplorerTree.nodes}/>
                }
                </div>
            </div>
        );
    }
}

export default FileExplorer;
