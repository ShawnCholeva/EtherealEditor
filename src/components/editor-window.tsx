import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class EditorWindow extends Component {
    render() {
        return (
            <div className='editor-window'>
                <h2>Hi</h2>
                {/* <FileExplorer fileExplorerDirectory={this.props.fileExplorerInfo.fileExplorerDirectory}/> */}
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        fileExplorerInfo: state.fileExplorer
    };
};

export default connect<any, {}, {}, any>(mapStateToProps)(EditorWindow);
