import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { FileDirectoryTree } from '../models/file-directory';
import { loadFolder } from '../actions/file-explorer';

// TODO: Make Props Type model to use isntead of any
class FileExplorer extends Component<any> {
    render() {
        return (
            <div>
                <h3 style={{ color: 'grey' }} onClick={() => console.log(this.props.fileExplorer)}>FILE EXPLORER</h3>
                <div id='contents'>
                <h4>Contents</h4>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        fileExplorer: state.fileExplorer
    };
};

const matchDispatchToProps = (dispatch: any) => {
    return bindActionCreators({ loadFolder: loadFolder }, dispatch);
};

// TODO: Find out how to map these props so we don't use any here
export default connect<any>(mapStateToProps, {})(FileExplorer);
