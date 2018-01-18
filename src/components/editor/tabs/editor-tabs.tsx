import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import EditorTab from './editor-tab';

import './editor-tabs.less';
import { IEditorTabs } from '../../../models/interfaces/tabs/editor-tabs';
import { FileDirectoryNode } from '../../../models/file-directory';

export default class EditorTabs extends Component<IEditorTabs> {
    render() {
        return (
            <div className='editor-tabs-container'>
                {this.props.files.length > 0 &&
                    this.props.files.map((item: FileDirectoryNode, index: number) => {
                        return <EditorTab key={index} file={item} />;
                    })
                }
            </div>
        );
    }
}
