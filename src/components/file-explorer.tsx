import React, { Component } from 'react';

import { IFileExplorer } from '../models/interfaces/file-explorer';

class FileExplorer extends Component<IFileExplorer> {
    render() {
        return (
            <div>
                <h3 onClick={() => console.log(this.props.fileExplorerTree)}>FILE EXPLORER</h3>
                <div id='contents'>
                <h4>Contents</h4>
                {this.props.fileExplorerTree !== null &&
                    this.props.fileExplorerTree.nodes.map((file: any) => {
                        return file.fileName;
                    })
                }
                </div>
            </div>
        );
    }
}

export default FileExplorer;
