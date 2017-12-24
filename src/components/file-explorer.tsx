import React, { Component } from 'react';
interface MyInterface {
    fileExplorerInfo: any;
}

class FileExplorer extends Component<MyInterface> {
    render() {
        return (
            <div>
                <h3 style={{ color: 'grey' }} onClick={() => console.log(this.props.fileExplorerInfo)}>FILE EXPLORER</h3>
                <div id='contents'>
                <h4>Contents</h4>
                {this.props.fileExplorerInfo !== null &&
                    this.props.fileExplorerInfo.nodes.map((file: any) => {
                        return file.fileName;
                    })
                }
                </div>
            </div>
        );
    }
}

export default FileExplorer;
