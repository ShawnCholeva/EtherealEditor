import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { IEditorFile, IEditorFilePassedProps, IEditorFileReduxProps } from './editor-file-interfaces';
import { IReduxState } from '../../shared/interfaces/redux-state';

import './editor-file.less';

class EditorFile extends Component<IEditorFile, any> {
    constructor(props: IEditorFile) {
        super(props);

        this.state = {
            fileContent: this.props.file.content
        };
    }

    componentWillReceiveProps(nextProps: any) {
        if (typeof nextProps.file !== undefined) {
            this.setState({ fileContent: nextProps.file.content });
        }
    }

    render() {
        return (
            <div>
                <div className='file-content-container'>
                    <form id='file-content-form'>
                        <textarea value={ this.state.fileContent } onChange={e => this.setState({ fileContent : e.target.value })}/>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: IReduxState): IEditorFileReduxProps => {
    return {
        fileExplorerInfo: state.fileExplorer
    };
};

export default connect<IEditorFileReduxProps, null, IEditorFilePassedProps, IReduxState>(mapStateToProps)(EditorFile);
