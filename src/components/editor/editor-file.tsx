import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class EditorFile extends Component {
    render() {
        return (
            <div>
                <span>File</span>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        fileExplorerInfo: state.fileExplorer
    };
};

export default connect<any, {}, {}, any>(mapStateToProps)(EditorFile);
