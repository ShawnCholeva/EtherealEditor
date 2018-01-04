import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import EditorTab from './editor-tab';

import './editor-tabs.less';

export default class EditorTabs extends Component {
    render() {
        return (
            <div className='editor-tabs-container'>
                {this.props.files.length > 0 &&
                    this.props.files.map((item, index) => {
                        return <EditorTab key={index} file={item} />;
                    })
                }
            </div>
        );
    }
}
