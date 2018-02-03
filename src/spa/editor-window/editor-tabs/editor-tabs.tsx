import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import EditorTab from './editor-tab/editor-tab';

import './editor-tabs.less';
import { FileDirectoryNode } from '../../shared/file-directory/file-directory-models';
import { IEditorTabs } from './editor-tabs-interfaces';

export default class EditorTabs extends Component<IEditorTabs> {
    render() {
        return (
            <div className='editor-tabs-container'>
                {this.props.files.length > 0 &&
                    this.props.files.map((item: FileDirectoryNode, index: number) => {
                        return (
                                <div key={index}>
                                    <EditorTab file={item} />
                                </div>
                        );
                    })
                }
            </div>
        );
    }
}
