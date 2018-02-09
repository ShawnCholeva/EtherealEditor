import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import MonacoEditor from 'react-monaco-editor';

import { IEditorFile, IEditorFilePassedProps, IEditorFileReduxProps } from './editor-file-interfaces';
import { IReduxState } from '../../shared/interfaces/redux-state';

import './editor-file.less';

class EditorFile extends Component<IEditorFile, any> {
    editor = null;

    constructor(props: IEditorFile) {
        super(props);

        this.state = {
            code: this.props.file.content
        };
    }

    componentWillReceiveProps(nextProps: any) {
        if (typeof nextProps.file !== undefined) {
            this.setState({ code: nextProps.file.content });
        }
    }

    editorDidMount(editor: any) {
        // console.log('editorDidMount', editor, editor.getValue(), editor.getModel());
        this.editor = editor;
    }

    onChange(newValue: any, e: any) {
        // console.log('onChange', newValue, e); // eslint-disable-line no-console
    }

    render() {
        const code = this.state.code;
        const options = {
            selectOnLineNumbers: true,
            roundedSelection: false,
            readOnly: false,
            cursorStyle: 'line',
            automaticLayout: false
        };

        return (
            <div>
                <div className='file-content-container'>
                    <MonacoEditor
                        language='typescript'
                        value={code}
                        theme='vs-dark'
                        options={options}
                        onChange={(newValue, error) => this.onChange(newValue, error)}
                        editorDidMount={(editor) => this.editorDidMount(editor)}
                    />
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
