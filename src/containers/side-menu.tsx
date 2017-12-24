import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import FileExplorer from '../components/file-explorer';

// TODO: Find out how to avoice 'any' usage

class SideMenu extends Component<any> {
    render() {
        return (
            <div>
                <FileExplorer fileExplorerInfo={this.props.fileExplorer}/>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        fileExplorer: state.fileExplorer,
        testState: state
    };
};

// TODO: Find out how to map these props so we don't use any here
export default connect<any>(mapStateToProps, {})(SideMenu);
